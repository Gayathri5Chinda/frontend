import styled from "styled-components";


const Header = styled.h1`
  font-family: 'Neue';
  font-optical-sizing: auto;
  font-weight: 600;
`;

// border-collapse border
//[#071624]
export const Aboutus = () =>{
    return <Header className="h-screen bg-[#071624]">
    <div className=" text-white ">
      <h1 className="text-6xl font-bold text-center">Why <span className="text-yellow-500">MoonEX</span>?</h1>
      <div className="flex justify-center rounded-b-3xl mt-20 m-80">
        <div className=" rounded-3xl bg-gray-800 bg-opacity-50">
        <table className="table-auto m-7 border-gray-700">
          <thead>
            <tr>
              <th className=" pr-28 pl-28 pt-10 pb-10 border-gray-700 border-r-2 text-yellow-500 text-2xl">Comparison</th>
              <th className=" border-gray-700 border-r-2 text-yellow-500">
                <img className="w-[20rem] h-[5rem]" src={'/public/moonex.png'} alt="Moonex" />
              </th>
              <th className=" text-pink-500">
              <img className="w-[20rem] h-[5rem]" src={'/public/uniwrap.png'} alt="Logo" />
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-500 text-2xl">
            {[
              "Point no",
              "Point no ",
              "Point no",
              "Point no",
              "Point no",
            ].map((point, index) => (
              <tr key={index} >
                <td className=" border-t-2 border-gray-700 pr-20 pl-20 pt-8 pb-8">{index + 1}. {point}</td>
                <td className=" border border-b-0 border-gray-700 pr-20 pl-20 pt-8 pb-8 text-center text-green-500">✔</td>
                <td className=" border-t-2 border-gray-700 pr-20 pl-20 pt-8 pb-8 text-center text-red-500">✘</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    
    </Header>
};