import { useState } from "react";


const faqData = [
  {
    question: "How do I get a Referral Code?",
    answer: "You can get a referral code by signing up on our platform.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer:
      "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "How do I get a Referral Code?",
    answer: "You can get a referral code by signing up on our platform.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }:any) => {
  return (
    <div id = "faqs" className=" bg-gray-800 text-white rounded-lg shadow-md my-2 overflow-hidden" onClick={onClick}>
      <div className="flex justify-between items-center p-4 cursor-pointer">
        <h3 className="text-lg font-semibold">{question}</h3>
        <button
          className={`text-2xl transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>
      {isOpen && (
        <div className="p-4 text-gray-400 border-t border-gray-700">{answer}</div>
      )}
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-[#071624] pt-52 p-60 flex flex-col items-center justify-center ">
      <h2 className="text-6xl font-bold text-white mb-8">
        <span className="text-yellow-400">FAQs</span>
      </h2>
      <div className="w-full  max-w-4xl">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
