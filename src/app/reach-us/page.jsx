import QRComponent from "@/components/qr";
export const metadata = {
  title: 'Welcome to P&G | Reach Us',
  description: 'Reach Us',
  keywords: 'P&G',
  author: 'P&G',
  icons: {
      icon: '/images/P_G_Logo_RGB.svg'
  }
};


export default async function Page() {
    return (
      <QRComponent/>
    );
}
