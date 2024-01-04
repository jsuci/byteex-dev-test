import { useEffect, useState } from "react";
import CTAWithRating from "./ui/CTAWithRating";
import CallToActionButton from "./ui/CallToActionButton";
import ArrowImg from "../assets/arrow.png";
import DividerVertical from "../assets/divider-vertical.png";
import BgBottomImg from "../assets/bg-bottom.png";

interface FinalCTABenefit {
  final_cta_benefit_icon: string;
  final_cta_benefit_text: string;
}

interface FinalCTASectionContent {
  final_cta_title: string;
  final_cta_subtitle: string;
  final_cta_subtitle_2: string;
  final_cta_image: string;
  final_cta_payment_image: string;
  final_cta_benefits_group: {
    final_cta_benefit_1: FinalCTABenefit;
    final_cta_benefit_2: FinalCTABenefit;
    final_cta_benefit_3: FinalCTABenefit;
  };
}

interface FinalCTASectionProps {
  content: FinalCTASectionContent;
}

const FinalCTASection = ({
  content: {
    final_cta_title,
    final_cta_subtitle,
    final_cta_subtitle_2,
    final_cta_image,
    final_cta_payment_image,
    final_cta_benefits_group: {
      final_cta_benefit_1,
      final_cta_benefit_2,
      final_cta_benefit_3,
    },
  },
}: FinalCTASectionProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const benefitItems: FinalCTABenefit[] = [
    final_cta_benefit_1,
    final_cta_benefit_2,
    final_cta_benefit_3,
  ];

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

  const mobileFinalCTA = (
    <div className="w-full mt-[20px] p-[30px]">
      <div className="flex flex-col items-center gap-y-7">
        <h2 className="text-primary tracking-wider text-[26px] text-center">
          {final_cta_title}
        </h2>
        <p className="">{final_cta_subtitle}</p>
        <img src={final_cta_image} />

        <div className="w-full px-[30px]">
          <CTAWithRating
            btn_text="Customize Your Outfit"
            rating_message="Over 500+ 5 Star Reviews Online"
          />
        </div>
      </div>
    </div>
  );

  const desktopFinalCTA = (
    <div className="w-full relative">
      <div className="flex flex-col items-center gap-y-7">
        <h2 className="text-primary tracking-wider text-[32px] text-center">
          {final_cta_title}
        </h2>
        <p className="max-w-[600px] m-auto text-center leading-8 tracking-wider">
          {final_cta_subtitle_2}
        </p>

        <img src={final_cta_image} />

        <div className="flex flex-col w-[360px] gap-y-2">
          <CallToActionButton
            cta_icon={ArrowImg}
            cta_text="Customize Your Outfit"
          />
          <img src={final_cta_payment_image} />
        </div>

        <div className="flex flex-row gap-x-9  mb-[60px]">
          {benefitItems.map((item, index) => (
            <div className="flex flex-row items-center" key={index}>
              <img src={item.final_cta_benefit_icon} className="w-[33px]" />
              <p className="text-[15px] text-neutral w-[150px]">
                {item.final_cta_benefit_text}
              </p>

              {index < benefitItems.length - 1 && (
                <img src={DividerVertical} className="max-h-[50px]" />
              )}
            </div>
          ))}
        </div>
      </div>

      <img src={BgBottomImg} className="w-full absolute bottom-0 -z-50" />
    </div>
  );

  return isMobile ? mobileFinalCTA : desktopFinalCTA;
};

export default FinalCTASection;
