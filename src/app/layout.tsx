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
      <head>
        <meta name="google-site-verification" content="d3TYP1izoOGukbIpQwHpFOSQyS0Qr2CIG_MD6ij4m_w" />
      </head>
      <body >
        <Navbar />

        {children}

      </body>

    </html>
  );
}
