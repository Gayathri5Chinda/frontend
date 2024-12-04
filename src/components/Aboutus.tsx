import styled from "styled-components";
import Roadmap from "./Roadmap";


const Header = styled.h1`
  font-family: 'Neue';
  font-optical-sizing: auto;
  font-weight: 600;
`;

// border-collapse border
//[#071624]
export const Aboutus = () =>{
    return <Header className="min-h-screen bg-[#071624]">
    

    <div className="  text-white pt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Why <span className="text-yellow-500">MoonEX</span>?</h1>
      <div className="flex justify-center rounded-3xl ml-32 mr-32 bg-gray-800 bg-opacity-50">
        <table className="table-auto w-auto h-auto border-collapse border border-gray-700">
          <thead>
            <tr>
              <th className=" px-10 py-10 border-gray-700 border-r-2 text-yellow-500 text-2xl">Comparison</th>
              <th className="  px-10 py-10 border-gray-700 border-r-2 text-yellow-500">
                <img className="w-[20rem] h-[5rem]" src={'/public/moonex.png'} alt="Moonex" />
              </th>
              <th className=" px-10 py-10 text-pink-500">
              <img className="w-[20rem] h-[5rem]" src={'/public/uniwrap.png'} alt="Logo" />
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-500 text-2xl">
            {[
              "Point no one",
              "Point no two this",
              "Point no two this",
              "Point no two this",
              "Point no two this",
            ].map((point, index) => (
              <tr key={index} >
                <td className="border border-gray-700 px-10 py-10">{index + 1}. {point}</td>
                <td className="border border-gray-700 px-10 py-10 text-center text-green-500">✔</td>
                <td className="border border-gray-700 px-10 py-10 text-center text-red-500">✘</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Roadmap/>
    </Header>
};