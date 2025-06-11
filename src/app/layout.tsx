import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Flow Media',
  discription: "Shopping Clothes",
  icons: {
    icon: "/favIcon.ico",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />

        {children}

      </body>

    </html>
  );
}
