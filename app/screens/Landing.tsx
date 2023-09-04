import About from "../components/About"
import CampaignType from "../components/CampaignType"
import Footer from "../components/Footer"
import Main from "../components/Main"
import MuxtGo from "../components/MuxtGo"
import Product from "../components/Product"
import MobileNavbar from "../components/nav/MobileNavbar"
import Navbar from "../components/nav/Navbar"

const Landing = () => {
  return (
    <div >
        <MobileNavbar/>
        <Navbar/>
        <div className='w-full lg:bg-white pt-3 md:pt-10 lg:pt-10 xl:pt-24 '>
            <div className=' bg-white'> <Main/></div>
            <div className=' -mt-16 xl:-mt-24'><Product /></div>
            <div className=' bg-white lg:mt-48'><CampaignType /></div>
            <div id='how-it-works'   className=' w-full pt-24 lg:pt-32'><About /></div>
            <div id='earn-smart' className=' w-full h-fit lg:h-[560px]  relative pt-14  lg:pt-64'><MuxtGo/></div>
            <div className=' w-full bg-primary mt-28'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Landing