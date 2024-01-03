import CTAWithRating from "./ui/CTAWithRating";

import { useEffect, useState } from "react";
import HowToOrderSectionSlider from "./ui/HowToOrderSectionSlider";

interface HowToOrderStep {
  how_to_order_image: string;
  how_to_order_title: string;
  how_to_order_content: string;
}

interface CallToActionGroup {
  cta_icon: boolean;
  cta_text: string;
}

interface OverallRatingGroup {
  star_rating_image: string;
  rating_message: string;
}

interface HowToOrderSectionData {
  how_to_order_title: string;
  how_to_order_step_1: HowToOrderStep;
  how_to_order_step_2: HowToOrderStep;
  how_to_order_step_3: HowToOrderStep;
  call_to_action_group: CallToActionGroup;
  overall_rating_group: OverallRatingGroup;
}

interface HowToOrderSectionProps {
  content: HowToOrderSectionData;
}

const HowToOrderSection = ({
  content: {
    how_to_order_title,
    how_to_order_step_1,
    how_to_order_step_2,
    how_to_order_step_3,
    call_to_action_group,
    overall_rating_group,
  },
}: HowToOrderSectionProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const items: HowToOrderStep[] = [
    how_to_order_step_1,
    how_to_order_step_2,
    how_to_order_step_3,
  ];
  const colors: string[] = ["#F0EEEF", "#F9F0E6", "#F0EEEF"];

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

  return (
    <div className="flex flex-col gap-y-6 items-center justify-center mx-[30px] mt-[60px] mb-[30px]">
      <h2 className="text-primary text-[26px] lg:text-[32px]">
        {how_to_order_title}
      </h2>

      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-8">
        {!isMobile &&
          items.map((item, index) => (
            <div
              className="relative flex flex-col max-w-[360px] maxh-[360px] rounded-xl justify-center items-center p-[60px] gap-y-4"
              key={index}
              style={{ backgroundColor: colors[index] }}
            >
              <img src={item.how_to_order_image} className="w-[56px]" />
              <p className="text-[28px] tracking-wide text-primary">
                {item.how_to_order_title}
              </p>
              <p className="text-[18px] tracking-wide text-center text-neutral">
                {item.how_to_order_content}
              </p>
            </div>
          ))}

        {isMobile && <HowToOrderSectionSlider content={items[0]} />}

        {isMobile && (
          <div className="w-full max-w-[400px]">
            <CTAWithRating
              btn_text={call_to_action_group.cta_text}
              rating_message={overall_rating_group.rating_message}
            />
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="w-full max-w-[400px] mt-[30px] mb-[40px]">
          <CTAWithRating
            btn_text={call_to_action_group.cta_text}
            rating_message={overall_rating_group.rating_message}
          />
        </div>
      )}
    </div>
  );
};

export default HowToOrderSection;
