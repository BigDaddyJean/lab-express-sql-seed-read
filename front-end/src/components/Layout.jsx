import Header from "./Header"
import Aside from "./Aside"
import Footer from "./Footer"
import NavSideBar from "./NavSideBar"

const Layout = (props) => {
  return (
    <div className="main-layout">
      <Header />
      <NavSideBar />
      <main className="main">
        {props.children}
      </main>
      <Aside/>
      <Footer />
    </div>
  )
}

export default Layout
