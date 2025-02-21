import { motion } from "framer-motion";
import Box from "./box";

// Animated Text Component for letter-by-letter animation
const AnimatedText = ({ text, delayIndex }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Trigger the animation only once when it comes into view
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
      }}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className={char === " " ? "inline-block w-2" : ""}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            duration: 0.5, // Even faster fade-in duration
            ease: "easeOut",
            delay: (delayIndex + index) * 0.03, // Delay each letter by 0.05s
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Why_us = () => {
  return (
    <div className="bg-[#283F58] px-3 md:px-5 lg:px-10 py-10 lg:py-20 rounded-xl mt-36">
      {/* Box Header */}
      <div className="flex items-center gap-5">
        <div className="flex items-center text-customTitle gap-4 uppercase text-[12px] md:text-[14px]">
          <h1 className="w-[10px] h-[10px] bg-customGreen rounded-sm"></h1>
          <h1 className="tracking-wider"> bay solution's goal</h1>
        </div>
      </div>

      {/* Title with Fade from Bottom to Top */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} // Starts with opacity 0 and positioned 30px lower
        whileInView={{ opacity: 1, y: 0 }} // Moves to opacity 1 and original position
        viewport={{ once: true }} // Trigger the animation only once when it comes into view
        transition={{ duration: 0.5, ease: "easeOut" }} // Apply smooth animation
        className="lg:text-center mt-2 md:mt-0 text-white text-[20px] md:text-[25px] lg:text-[30px] "
      >
        <h1 className="animate-slideUp inline">
          Building Websites That Drive{" "}
        </h1>
        <h1 className="inline md:block text-customGreen animate-slideUpDelayed">
          Growth & Success
        </h1>
      </motion.div>

      <div className="flex flex-col flex-wrap lg:flex-row xl:flex-nowrap justify-between xl:space-x-10 mt-20 text-customTitle">
        <div className="w-full space-y-5">
          {/* Animated "Why Choose Bay Solution?" */}
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Trigger the animation only once when it comes into view
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="uppercase text-white text-[20px] md:text-[25px] lg:text-[30px]"
          >
            <AnimatedText text="Why Choose " delayIndex={0} />
            <span className="text-customGreen">
              <AnimatedText text="Bay Solution?" delayIndex={15} />
            </span>
          </motion.h1>

          {/* Description with Fade-Up Effect */}
          <motion.p
            initial={{ opacity: 0, y: 30 }} // Starts with opacity 0 and positioned 30px lower
            whileInView={{ opacity: 1, y: 0 }} // Moves to opacity 1 and original position
            viewport={{ once: true }} // Trigger the animation only once when it comes into view
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }} // Apply smooth animation
            className=" text-[13px] md:text-[15px] lg:text-[17px] lg:leading-8"
          >
            The mission of Bay Solution is to empower businesses by delivering
            exceptional, customized websites. Our expert team collaborates
            closely with individuals, groups, and companies to create digital
            solutions that perfectly align with their goals. We aim to elevate
            brands through thoughtful design, user-friendly functionality, and
            cutting-edge technology, ensuring every project delivers maximum
            value and long-term success.
          </motion.p>
        </div>

        {/* Boxes */}
        <Box
          title="A Hard Truth About Online Presence"
          number="46"
          text="🚨 🚨 46% of small businesses still don’t have a website, causing them to lose potential customers and credibility. In today’s digital world, not having a website means missing out on opportunities to connect with customers, showcase your products, and build trust. Without an online presence, small businesses risk falling behind competitors who have taken that essential step."
        />

        <Box
          title="Collaboration for Growth"
          text="🔗 Companies that invest in custom-built websites tailored to their brand experience a 60% faster growth rate than those using generic templates. This keeps the messaging aligned with your company’s value. Want any refinements? 🚀"
          number="60"
        />
      </div>
    </div>
  );
};

export default Why_us;
