import HomeComponent from "@/components/home";
export const metadata = {
  title: 'Welcome to P&G',
  description: 'P&G Home page',
  keywords: 'P&G',
  author: 'P&G',
  icons: {
      icon: '/images/P_G_Logo_RGB.svg'
  }
};

async function fetchProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home`, {
        next: { revalidate: 60 }
    });
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to fetch products: ${errorText}`);
    }
    return res.json();
  } catch (error) {
      console.error("Fetch error:", error);
      throw error;
  }
}
export default async function Page() {
    const data = await fetchProducts();
    return (
      <HomeComponent data={data} />
    );
}
