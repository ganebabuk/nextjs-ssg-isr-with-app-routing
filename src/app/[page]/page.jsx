import { notFound } from 'next/navigation';
import CommonHeader from '@/components/header';
import CommonFooter from '@/components/footer';

async function fetchPageData(page) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${page.toLowerCase()}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data from API');
  }

  return response.json();
}

export async function generateStaticParams() {
  const allowedPages = ['about-us', 'our-products', 'who-we-are'];
  return allowedPages.map((page) => ({
    params: { page },
  }));
}

export async function generateMetadata({ params }) {
  const { page } = params;
  let data;

  try {
    data = await fetchPageData(page);
  } catch (error) {
    console.error('Error fetching data for metadata:', error);
    return {
      title: 'Welcome to P&G',
      description: 'P&G',
      keywords: 'P&G',
      author: 'P&G',
      icons: {
        icon: '/images/P_G_Logo_RGB.svg',
      },
    };
  }

  return {
    title: `Welcome to P&G | ${data.head}`,
    description: `Welcome to P&G | ${data.head}`,
    keywords: 'P&G',
    author: 'P&G',
    icons: {
      icon: '/images/P_G_Logo_RGB.svg',
    },
  };
}

export default async function Page({ params }) {
  const { page } = params;
  let data;

  try {
    data = await fetchPageData(page);
  } catch (error) {
    console.error('Error fetching data:', error);
    notFound();
  }

  return (
    <div className="container mx-auto">
      <CommonHeader />
      {data?.head ? (
        <>
          <h1 className="text-3xl font-bold dark:text-white">{data.head}</h1>
          <div
            className="text-base"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </>
      ) : (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Something wrong!</span> Please try after sometime
          </div>
        </div>
      )}
      <CommonFooter />
    </div>
  );
}
