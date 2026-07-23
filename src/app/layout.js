import "./globals.css";

export const metadata = {
  title: "SANKALP 2027 | MGM University",
  description: "International Conference on Advances of Engineering & Intelligent Technologies for a Sustainable Future  (SANKALP 2027), January 22-23, 2027. Organized by MGM University, Chhatrapati Sambhajinagar, Maharashtra, India.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
