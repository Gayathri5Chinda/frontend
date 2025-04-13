
const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>,
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: "🛡️", // Replace with an icon.
    title: "CerTIK",
    description:
      "We are Audited by Certik. CertiK is the leading security-focused ranking platform.",
  },
  {
    icon: "🚫", // Replace with an icon.
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets.",
  },
  {
    icon: "⚙️", // Replace with an icon.
    title: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price.",
  },
];

const FeatureCard = ({ icon, title, description }: any) => {
  return (
    <div id = "roadmap" className="bg-gray-800 flex flex-col justify-end bg-opacity-30 text-white pl-10 p-14 mr-5 rounded-3xl border border-gray-800 shadow-md">
      <div className="text-2xl mb-10 bg-gray-700 bg-opacity-30 rounded-full ">{icon}</div>
      <h3 className="text-3xl font-sans font-normal mb-4">{title}</h3>
      <p className="text-xl font-sans font-normal text-gray-400">{description}</p>
    </div>
  );
};

const Roadmap = () => {
  return (
  <div>
    <div className="bg-[#071624] pb-32">
      <h2 className="text-6xl text-center pb-20 font-bold text-white ">
        Our <span className="text-yellow-400 ">Features</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
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

