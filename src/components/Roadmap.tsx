
const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>,
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"/>
  </svg>,
  
   // Replace with an icon.
    title: "CerTIK",
    description:
      "We are Audited by Certik. CertiK is the leading security-focused ranking platform.",
  },
  {
    icon: <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
      </svg>,
    
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets. Contract selling can be risky.",
  },
  {
    icon: <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
    <path stroke="currentColor" strokeWidth="round" strokeLinejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>

</svg>,
    
    title: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price.",
  },
];

const FeatureCard = ({ icon, title, description }: any) => {
  return (
    <div id = "roadmap" className="bg-gray-800 flex flex-col justify-end bg-opacity-30 text-white p-10 rounded-3xl border border-gray-800 shadow-md">
      <div className="text-2xl mb-10 ">{icon}</div>
      <h2 className="text-2xl font-sans font-normal mb-4">{title}</h2>
      <p className="text-lg font-sans font-normal text-gray-400">{description}</p>
    </div>
  );
};

const Roadmap = () => {
  return (
  <div>
    <div className="bg-[#071624] pl-40 pr-40 mt-20">
      <h2 className="text-6xl text-center pb-20 font-bold text-white ">
        Our <span className="text-yellow-400 ">Features</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Roadmap;

