import "../styles/globals.css"
import Navbar from "@components/navbar"

export const metadata = {
  title: "Tapped",
  description: 'Find and Book Artists For Your Show'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="bg-black"/>
        </div>
        <main className="app">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
