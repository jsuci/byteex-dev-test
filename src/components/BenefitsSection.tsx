import ImageSectionSlider from "./ui/ImageSectionSlider";
import DividerImg from "../assets/divider.png";
import { useEffect, useState } from "react";
import CTAWithRating from "./ui/CTAWithRating";
import type { BenefitsSection } from "../types";

interface BenefitsSectionProps {
  content: {
    benefits_title: string;
    benefits_list_1: BenefitsList;
    benefits_list_2: BenefitsList;
    benefits_list_3: BenefitsList;
    benefits_list_4: BenefitsList;
    benefits_slide_image_group: BenefitsImageGroup;
  };
}

interface BenefitsList {
  benefits_list_title: string;
  benefits_list_subtitle: string;
  benefits_list_icon: string;
}

interface BenefitsImageGroup {
  benefits_image_1: BigSmallImage;
  benefits_image_2: BigSmallImage;
  benefits_image_3: BigSmallImage;
}

interface BigSmallImage {
  benefits_big_image: string;
  benefits_small_image: string;
  benefit_title: string;
}

const BenefitsSection = ({
  benefits_title,
  benefits_list_1,
  benefits_list_2,
  benefits_list_3,
  benefits_list_4,
  benefits_slide_image_group,
}: BenefitsSection) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const benefitsList: BenefitsList[] = [
    benefits_list_1,
    benefits_list_2,
    benefits_list_3,
    benefits_list_4,
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

  return (
    <>
      <div className="w-10/12 m-auto mb-[30px] flex flex-col lg:flex-row lg:justify-between lg:gap-x-7 mt-[30px] 2xl:px-28">
        <div className="flex flex-col items-center mb-[40px] lg:mb-0 lg:items-start lg:w-[660px] lg:mr-[30px]">
          <h2 className="text-[30px] lg:text-[32px] text-primary text-center lg:text-left tracking-wider mb-[20px] lg:mb-[85px]">
            {benefits_title}
          </h2>

          {isMobile && (
            <ImageSectionSlider content={benefits_slide_image_group} />
          )}

          {benefitsList.map((benefits, index) => (
            <div
              className="flex flex-col gap-y-5 justify-center items-center lg:flex-row lg:items-start lg:gap-x-7 lg:mb-[30px]"
              key={index}
            >
              <img
                src={benefits.benefits_list_icon}
                className="w-[42px] h-[42px]"
              />
              <div className="flex flex-col gap-y-4 justify-center items-center lg:items-start">
                <p className="text-[22px] text-primary text-center">
                  {benefits.benefits_list_title}
                </p>
                <p className="text-[15px] text-neutral tracking-wider mx-[40px] text-center lg:text-left lg:mx-0">
                  {benefits.benefits_list_subtitle}
                </p>
              </div>

              {index < benefitsList.length - 1 && (
                <img
                  src={DividerImg}
                  className="mb-[30px] mt-[30px] lg:hidden"
                />
              )}
            </div>
          ))}
        </div>

        {isMobile && (
          <CTAWithRating
            btn_text="Customize Your Outfit"
            rating_message="One of 500+ 5 Star Reviews Online"
          />
        )}

        {!isMobile && (
          <ImageSectionSlider content={benefits_slide_image_group} />
        )}
      </div>
    </>
  );
};

export default BenefitsSection;
