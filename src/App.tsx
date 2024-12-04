import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Aboutus } from "./components/Aboutus"

import { Footer1 } from "./components/Footer1"
import Faqs from "./components/Faqs"

function App() {

  return (
    <div className=" bg-gradient-radial h-screen">
      <Navbar/>
      <Content/>
      <Aboutus/>
      <Faqs/>
      <Footer1/>
    </div>
  )
}

export default App