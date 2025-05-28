import "./globals.css";
import Navbar from "./Navbar";
export const metadata = {
  title: "Profile website",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
