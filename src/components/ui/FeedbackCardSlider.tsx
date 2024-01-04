import FeedbackCard from "./FeedBackCard";
import NextBtnImg from "../../assets/next-btn.png";
import PrevBtnImg from "../../assets/prev-btn.png";
import { useState } from "react";

interface FeedbackGroup {
  feedback_image: string;
  feedback_name: string;
  feedback_message: string;
  feedback_rating: string;
}

interface FeedbackCardSliderProps {
  content: FeedbackGroup[];
}

const FeedbackCardSlider = ({ content }: FeedbackCardSliderProps) => {
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

  const item: FeedbackGroup = content[currentIndex];

  return (
    <div className="relative items-center justify-center flex flex-col mx-[30px] max-w-[350px]">
      <FeedbackCard
        feedback_image={item.feedback_image}
        feedback_name={item.feedback_name}
        feedback_message={item.feedback_message}
        star_rating_image={item.feedback_rating}
        is_section={true}
      />

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
  );
};

export default FeedbackCardSlider;
