import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services does Bay Solution offer?",
    answer:
      "We specialize in building professional websites for companies, offering services such as web design, front-end and back-end development, e-commerce solutions, SEO optimization, and website maintenance. Our goal is to create modern, responsive, and high-performance websites that align with your business objectives.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity and scope of the project. A simple website with a few pages can take around 2 to 3 weeks, while more complex websites with advanced features, animations, or integrations may take 6 to 8 weeks. We work closely with you to set a realistic timeline and ensure the best results.",
  },
  {
    question: "Do you offer custom website designs?",
    answer:
      "Yes! Every website we build is custom-designed to fit your brand identity and business needs. We do not use generic templates—our team works on unique designs tailored specifically for your target audience, ensuring a professional and engaging online presence.",
  },
  {
    question: "Can I update my website after it's built?",
    answer:
      "Absolutely! We provide user-friendly Content Management System (CMS) options that allow you to update text, images, and other content without needing technical knowledge. If you prefer, we also offer ongoing website maintenance and updates so you can focus on growing your business while we handle the technical aspects.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes! We optimize all websites for search engines by implementing proper meta tags, keyword research, fast loading speeds, mobile responsiveness, and other best practices. We also provide advanced SEO services, including content strategy, link building, and analytics tracking to help improve your website’s visibility on search engines.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "The cost depends on various factors such as design complexity, number of pages, features, and integrations. A basic website starts at an affordable rate, while advanced websites with custom functionalities and e-commerce capabilities are priced accordingly. Contact us for a personalized quote based on your specific needs.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes! Every website we build is fully responsive, meaning it will look great and function perfectly on desktops, tablets, and smartphones. We ensure that your website provides an optimal user experience across all screen sizes.",
  },
  {
    question: "Do you provide hosting and domain registration?",
    answer:
      "Yes! We assist with domain registration and recommend reliable hosting providers. If needed, we can also manage your hosting, ensuring your website runs smoothly with minimal downtime and fast performance.",
  },
  {
    question: "What happens if I need help after my website is launched?",
    answer:
      "We offer post-launch support to ensure everything runs smoothly. Whether you need updates, security fixes, performance optimizations, or new features, our team is here to assist you. You can choose from one-time support or an ongoing maintenance plan based on your needs.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes! If you have an outdated website or one that isn't performing well, we can redesign it with a fresh, modern look, improved user experience, and enhanced functionality. We analyze your current website, understand your goals, and provide a customized redesign strategy.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative lg:mx-5 mt-20 px-4 text-white flex justify-between">
      {/* FAQ Section Container */}
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between w-full max-w-screen-xl">
        {/* Sticky Section */}
        <div
          id="sticky-section"
          className="lg:sticky top-[80px] z-10 self-start"
        >
          <div className="flex items-center text-customTitle gap-4 uppercase text-[12px] md:text-[14px]">
            <h1 className="w-[10px] h-[10px] bg-customGreen rounded-sm"></h1>
            <h1>Frequently asked questions</h1>
          </div>
          <h1 className=" text-[25px] md:text-[45px] text-white mt-3">
            {/* Title without animation */}
            What do you
            <span className="text-customGreen mt-[-10px] block"> need to know?</span>
          </h1>
          <p className="md:w-[400px] mt-3 md:mt-0 text-customTitle text-[13px] md:text-[14px]">
            Check the FAQ for answers. If you still have questions, reach out
            and chat with us anytime.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-2xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#555454] bg-[#151c3b] px-3 md:px-10 md:py-3 rounded-2xl md:rounded-lg hover:border-customGreen duration-500"
            >
              <button
                className="w-full text-left flex justify-between items-center py-3 text-[13px] md:text-md font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-customTitle text-[13px] leading-5 md:text-[14px] py-2 pr-4">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
