import "./globals.css";

import { didact } from "./fonts/fonts";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
export const metadata = {
  title: "Ebru Bilgic - Ebysrelaxing",
  description: "Die Homepage von Ebru Bilgic.",
  keywords:
    "Ebysrelaxing, Ebru Bilgic, Entspannung, Meditation, Soundhealing, Progressive Muskelentspannung, Emotional Freedom Techniques,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${didact.className} bg-[var(--bg-background-color-4)] text-white`}
      >
        <div className="grid grid-rows-[180px_1fr_120px] md:grid-rows-[120px_1fr_100px] h-[100svh] grid-cols-5">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
