import FeedbackCard from "./FeedBackCard";
import NextBtnImg from "../../assets/next-btn.png";
import PrevBtnImg from "../../assets/prev-btn.png";
import { useEffect, useState } from "react";
import CTAWithRating from "./CTAWithRating";

interface FeedbackGroup {
  feedback_image: string;
  feedback_name: string;
  feedback_message: string;
  feedback_rating: string;
}

interface FeedbackCardSliderProps {
  content: FeedbackGroup[];
  visibleThumbnails?: number;
}

const FeedbackCardSlider = ({
  content,
  visibleThumbnails = 3,
}: FeedbackCardSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState(0);
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

  const handleArrowClickDesktop = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setStartIndex((prevIndex) =>
        prevIndex === 0 ? content.length - visibleThumbnails : prevIndex - 1
      );
    } else {
      setStartIndex((prevIndex) =>
        prevIndex === content.length - visibleThumbnails
          ? 0
          : Math.min(content.length - visibleThumbnails, prevIndex + 1)
      );
    }
  };

  const handleArrowClickMobile = (direction: "prev" | "next") => {
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

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const item: FeedbackGroup = content[currentIndex];

  const mobileFeedbackSlider = (
    <div className="relative flex flex-col items-center max-w-[460px] m-auto px-3">
      <div className="items-center justify-center flex flex-col mx-[30px] max-w-[350px] gap-y-6">
        <FeedbackCard
          feedback_image={item.feedback_image}
          feedback_name={item.feedback_name}
          feedback_message={item.feedback_message}
          star_rating_image={item.feedback_rating}
          is_section={true}
        />
        <div className="flex flex-row gap-x-6">
          {content.map((_, index) => (
            <div
              className={
                index === currentIndex
                  ? "text-[#000]"
                  : "text-[#C4C4C4] cursor-pointer"
              }
              key={index}
              onClick={() => handleThumbnailClick(index)}
            >
              ⬤
            </div>
          ))}
        </div>

        <CTAWithRating
          btn_text="Customize Your Outfit"
          rating_message="Over 500+ 5 Star Reviews Online"
        />
      </div>

      <div className="flex flex-row items-center justify-between absolute w-full top-[90px]">
        <img
          src={PrevBtnImg}
          className="max-w-[13px] lg:max-w-[15px] ml-3 cursor-pointer"
          onClick={() => handleArrowClickMobile("prev")}
        />
        <img
          src={NextBtnImg}
          className="max-w-[13px] lg:max-w-[15px] mr-3 cursor-pointer"
          onClick={() => handleArrowClickMobile("next")}
        />
      </div>
    </div>
  );

  const desktopFeedbackSlider = (
    <>
      <div className="flex flex-col relative w-10/12">
        <div className="relative items-start gap-x-12 justify-center flex flex-row mx-[60px]">
          {content
            .slice(startIndex, startIndex + visibleThumbnails)
            .map((item, index) => (
              <div className="flex flex-col w-[550px]">
                <FeedbackCard
                  feedback_image={item.feedback_image}
                  feedback_name={item.feedback_name}
                  feedback_message={item.feedback_message}
                  star_rating_image={item.feedback_rating}
                  is_section={true}
                  key={index}
                />
              </div>
            ))}
        </div>

        <div className="flex flex-row items-center justify-between m-auto absolute w-[100%] top-[90px]">
          <img
            src={PrevBtnImg}
            className="max-w-[13px] lg:max-w-[20px] ml-3 cursor-pointer"
            onClick={() => handleArrowClickDesktop("prev")}
          />
          <img
            src={NextBtnImg}
            className="max-w-[13px] lg:max-w-[20px] mr-3 cursor-pointer"
            onClick={() => handleArrowClickDesktop("next")}
          />
        </div>
      </div>
      <div className="flex flex-col w-[400px]">
        <CTAWithRating
          btn_text="Customize Your Outfit"
          rating_message="Over 500+ 5 Star Reviews Online"
        />
      </div>
    </>
  );

  return isMobile ? mobileFeedbackSlider : desktopFeedbackSlider;
};

export default FeedbackCardSlider;
