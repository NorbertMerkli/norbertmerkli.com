import "@styles/globals.css";

export const metadata = {
  title: "norbertmerkli.com",
  description: "Dev portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
