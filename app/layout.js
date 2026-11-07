import "./style.css";

export const metadata = {
  title: "Ribbon's Cute Auth Demo 🎀",
  description: "Register, Login and Dashboard with MySQL (TiDB) on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}