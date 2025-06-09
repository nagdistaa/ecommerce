import { title } from "process";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata ={
  title : 'Flow Media',
  discription : "Shopping Clothes"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favIcon"/>
      <body className="inter.className">
       <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
