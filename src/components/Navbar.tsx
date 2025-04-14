import { Link } from "react-scroll"

export const Navbar = () => {
    return <nav className="grid grid-cols-6 items-center justify-between flex-wrap  p-10" >
            <div className="col-span-1">
               <img className="w-[20rem]" src={'/public/logo.png'} alt="Logo" />
            </div>
            
            <div className="col-span-4 space-x-20">
                <button className="bg-transparent  hover:bg-white text-[#E4B40D] font-semibold hover:text-[#E4B40D] py-3 px-6 border border-transparent rounded-full">
                   Home
                </button>
                <Link to = "aboutus" smooth={true}  className="bg-transparent hover:bg-white text-white font-semibold hover:text-[#E4B40D] py-3 px-6 border border-transparent rounded-full">
                    About Us
                </Link>
                <Link to = "roadmap" smooth={true} className="bg-transparent  hover:bg-white text-white font-semibold hover:text-[#E4B40D] py-3 px-6 border border-transparent rounded-full">
                   Roadmap
                </Link>
                <Link to = "faqs" smooth={true} className="bg-transparent hover:bg-white text-white font-semibold hover:text-[#E4B40D] py-3 px-6 border border-transparent rounded-full">
                   FAQs
                </Link>
                <Link to = "footer" smooth={true} className="bg-transparent hover:bg-white text-white font-semibold hover:text-[#E4B40D] py-3 px-6 border border-transparent rounded-full">
                   Contact Us
                </Link>
            </div>
            <div className=" col-span-1 pl-30">
                <button className="bg-[#E4B40D]  hover:bg-white text-black font-semibold hover:text-[#E4B40D] py-3 px-6 border border-transparent rounded-full">
                   Connect Wallet
                </button>
            </div>

        </nav>
}

