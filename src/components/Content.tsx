
// import styled from 'styled-components';

// const Header = styled.h1`
//   font-family: 'Neue';
//   font-optical-sizing: auto;
//   font-weight: 900;
//   font-style: bold;
// `;

// flex justify-left flex-col

export const Content = () => {
    return <div className=' h-screen font-sans' >
        {/* <div className=" justify-center "> */}
            <div className=" pl-60 pt-28 "> 
                <div className=" text-[5rem] font-bold text-white">
                    Trusted Multi-Chain 
                </div>
                <div className="text-[5rem] font-bold text-white ">
                    DEX Platform
                </div>
                <div className=" text-slate-400 text-xl">
                    Trade, earn and own crypto on the all-in-one multi-chain DEX
                </div>
                <div className="mt-8"> 
                    <button className="bg-[#e4b40d] hover:bg-white text-white  hover:text-[#e4b40d] py-2 px-4 border border-transparent rounded-full mr-8">
                        Connect Wallet
                    </button>
                    <button className="bg-transparent hover:bg-white text-[#e4b40d] font-semibold hover:text-[#e4b40d] py-2 px-4 border border-[#e4b40d] rounded-full">
                        Trade Crypto
                    </button>
                </div>
            {/* </div> */}
        </div> 
    </div> 
}

