import { useState } from "react";
import NextBtnImg from "../../assets/next-btn.png";
import PrevBtnImg from "../../assets/prev-btn.png";

interface HowToOrderStep {
  how_to_order_image: string;
  how_to_order_title: string;
  how_to_order_content: string;
}

interface HowToOrderSectionSliderProps {
  content: HowToOrderStep[];
}

const HowToOrderSectionSlider = ({ content }: HowToOrderSectionSliderProps) => {
  const colors: string[] = ["#F0EEEF", "#F9F0E6", "#F0EEEF"];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleArrowClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <>
      <div
        className="relative bg-[#F9F0E6] flex flex-col max-w-[360px] h-[280px] rounded-xl justify-center items-center p-[50px] gap-y-4"
        key={currentIndex}
        style={{ backgroundColor: colors[currentIndex] }}
      >
        <img
          src={content[currentIndex].how_to_order_image}
          className="w-[56px]"
        />
        <p className="text-[28px] tracking-wide text-primary">
          {content[currentIndex].how_to_order_title}
        </p>
        <p className="text-[16px] lg:text-[18px] tracking-wide text-center text-neutral">
          {content[currentIndex].how_to_order_content}
        </p>

        <div className="flex flex-row items-center justify-between absolute m-auto w-[120%]">
          <img
            src={PrevBtnImg}
            className="max-w-[13px] lg:max-w-[15px] ml-3 cursor-pointer"
            onClick={() => handleArrowClick("prev")}
          />
          <img
            src={NextBtnImg}
            className="max-w-[13px] lg:max-w-[15px] mr-3 cursor-pointer"
            onClick={() => handleArrowClick("next")}
          />
        </div>
      </div>
    </>
  );
};

export default HowToOrderSectionSlider;
