import DividerImg from "../assets/divider.png";
import PlusImg from "../assets/plus.png";
import MinusImg from "../assets/minus.png";
import { useEffect, useState } from "react";
import CTAWithRating from "./ui/CTAWithRating";

interface FAQQuestion {
  faq_question_title: string;
  faq_question_content: string;
}

interface FAQSectionContent {
  faq_title: string;
  faq_question_1: FAQQuestion;
  faq_question_2: FAQQuestion;
  faq_question_3: FAQQuestion;
  faq_question_4: FAQQuestion;
  faq_question_5: FAQQuestion;
  faq_question_6: FAQQuestion;
  faq_image: string;
}

interface FAQSectionProps {
  content: FAQSectionContent;
}

const FAQSection = ({
  content: {
    faq_title,
    faq_question_1,
    faq_question_2,
    faq_question_3,
    faq_question_4,
    faq_question_5,
    faq_question_6,
    faq_image,
  },
}: FAQSectionProps) => {
  const faqItems: FAQQuestion[] = [
    faq_question_1,
    faq_question_2,
    faq_question_3,
    faq_question_4,
    faq_question_5,
    faq_question_6,
  ];

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    const newExpandedItems = [...expandedItems];
    if (newExpandedItems.includes(index)) {
      // Item is expanded, collapse it
      newExpandedItems.splice(newExpandedItems.indexOf(index), 1);
    } else {
      // Item is collapsed, expand it
      newExpandedItems.push(index);
    }
    setExpandedItems(newExpandedItems);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileFAQ = (
    <div className="flex flex-col w-10/12 items-center justify-center m-auto">
      <h2 className="text-primary text-[26px] text-center mb-[30px]">
        {faq_title}
      </h2>

      {faqItems.map((item, index) => (
        <div className="flex flex-col gap-y-3 max-w-[630px]" key={index}>
          <div
            className="flex flex-row items-center justify-between pt-[20px]"
            onClick={() => toggleItem(index)}
          >
            <h3 className="text-primary tracking-wider text-[18px]">
              {item.faq_question_title}
            </h3>
            <img
              src={expandedItems.includes(index) ? PlusImg : MinusImg}
              className="w-[28px]"
            />
          </div>
          <p
            className={`text-neutral text-[14px] mb-[10px] ${
              expandedItems.includes(index) ? "" : "hidden"
            }`}
          >
            {item.faq_question_content}
          </p>

          <img src={DividerImg} />
        </div>
      ))}

      <div className="mt-[30px]">
        <CTAWithRating
          btn_text="Customize Your Outfit"
          rating_message="Over 500+ 5 Star Reviews Online"
        />
      </div>
    </div>
  );

  const desktopFAQ = (
    <div className="flex flex-row w-10/12 items-center justify-evenly m-auto">
      <div className="flex flex-col">
        <h2 className="text-primary text-[26px] text-center mb-[30px]">
          {faq_title}
        </h2>

        {faqItems.map((item, index) => (
          <div className="flex flex-col gap-y-3 max-w-[630px]" key={index}>
            <div
              className="flex flex-row items-center justify-between pt-[20px]"
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-primary tracking-wider text-[18px]">
                {item.faq_question_title}
              </h3>
              <img
                src={expandedItems.includes(index) ? PlusImg : MinusImg}
                className="w-[28px]"
              />
            </div>
            <p
              className={`text-neutral text-[14px] mb-[10px] ${
                expandedItems.includes(index) ? "" : "hidden"
              }`}
            >
              {item.faq_question_content}
            </p>

            <img src={DividerImg} />
          </div>
        ))}
      </div>
      <img src={faq_image} />
    </div>
  );

  return isMobile ? mobileFAQ : desktopFAQ;
};

export default FAQSection;
