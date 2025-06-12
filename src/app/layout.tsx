import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import './globals.css'

export const metadata = {
  title: 'Flow Media',
  description: "Shopping Clothes",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between bg-white text-black">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
