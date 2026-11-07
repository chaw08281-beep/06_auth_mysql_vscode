import "./style.css";

export const metadata = {
  title: "Chaw's Cute Auth Demo 🎀",
  description: "Register, Login and Dashboard with MySQL (TiDB) on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}