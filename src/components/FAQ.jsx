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
    <section className="max-w-7xl mx-auto px-6 py-16 text-left">
      {/* 1. Optional Badge Integration (If you want the Global Reach style badge above the title) */}
      {/* <div className="mb-4">
        <span className="inline-block bg-[#CCEEFF] text-[#374151] text-sm font-semibold px-5 py-2 rounded-full tracking-wide">
          FAQ
        </span>
      </div> */}

      {/* 2. Main Section Title */}
      <h2 className="text-[#11142D] text-[40px] font-medium tracking-tight mb-12">
        Common Questions
      </h2>

      {/* 3. FAQ List Block */}
      <div className="flex flex-col gap-10 mb-12">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* Question */}
            <h3 className="text-[#11142D] text-lg font-medium tracking-wide">
              {faq.question}
            </h3>
            {/* Answer (Using the muted 50% opacity styling we designed earlier) */}
            <p className="text-[#11142D]/50 text-[19px] leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* 4. "More Questions" Outline Button */}
      <button className="inline-block px-7 py-3 border border-[#4BAED4] text-[#1E3E85] font-bold text-sm rounded-2xl bg-white hover:bg-[#CCEEFF]/20 active:scale-[0.98] transition-all duration-200 shadow-sm">
        More Questions
      </button>
    </section>
  );
}
