import { Navbar } from "./components/Navbar"
import { Content } from "./components/Content"
import { Aboutus } from "./components/Aboutus"

import { Footer1 } from "./components/Footer1"
import Faqs from "./components/Faqs"
import Roadmap from "./components/Roadmap"

function App() {

  return (
    <div className=" bg-gradient-radial">
      <Navbar/>
      <Content/>
      <Aboutus/>
      <Faqs/>
      <Roadmap/>
      <Footer1/>
    </div>
  )
}

export default App