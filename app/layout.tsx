import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../context/AuthContext";

export const metadata = {
  title: "Tapped",
  description: "Find and Book Artists For Your Show",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="bg-black" />
        </div>
        <main className="app">
          <AuthContextProvider>
            <Navbar />
            {children}
          </AuthContextProvider>
        </main>
      </body>
    </html>
  );
}
