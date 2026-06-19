export default function FAQ() {
  const faqs = [
    {
      question: "Do I have to sign a long-term contract?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
    },
    {
      question: "Can I pay for a whole year?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
    },
    {
      question: "What if I need help?",
      answer:
        "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party",
    },
  ];

  return (
    
    <section className="max-w-4xl md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center sm:text-left">
      
      <h2 className="text-[#11142D] text-2xl sm:text-3xl md:text-[40px] font-medium tracking-tight mb-8 md:mb-12">
        Common Questions
      </h2>

      <div className="flex flex-col gap-8 md:gap-10 mb-10 md:mb-12">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col gap-2 md:gap-3 max-w-3xl md:max-w-7xl">
           
            <h3 className="text-[#11142D] text-base sm:text-lg font-semibold sm:font-medium tracking-wide">
              {faq.question}
            </h3>
            
            
            <p className="text-[#11142D]/50 text-sm sm:text-base md:text-[19px] leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center sm:justify-start">
        <button className="inline-block px-7 py-3 border border-[#4BAED4] text-[#1E3E85] font-bold text-sm rounded-2xl bg-white hover:bg-[#CCEEFF]/20 active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer">
          More Questions
        </button>
      </div>
    </section>
  );
}