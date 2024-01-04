import { useState } from "react";
import NextBtnImg from "../../assets/next-btn.png";
import PrevBtnImg from "../../assets/prev-btn.png";
import Thumbnail from "./Thumbnail";

interface ImageSectionSliderProps {
  content: {
    benefits_image_1: BigSmallImage;
    benefits_image_2: BigSmallImage;
    benefits_image_3: BigSmallImage;
  };
}

interface BigSmallImage {
  benefits_big_image: string;
  benefits_small_image: string;
  benefit_title: string;
}

const ImageSectionSlider = ({ content }: ImageSectionSliderProps) => {
  const bigImageUrls = Object.values(content).map(
    (image) => image.benefits_big_image
  );

  const smallImageUrls = Object.values(content).map(
    (image) => image.benefits_small_image
  );

  const titles = Object.values(content).map((image) => image.benefit_title);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleArrowClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? bigImageUrls.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === bigImageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center mb-[36px] max-w-[280px] sm:max-w-[320px] lg:max-w-[433px] lg:ml-auto">
        <img src={bigImageUrls[currentIndex]} />

        <div className="flex flex-row gap-x-4 w-[32px] justify-center -mt-10 mb-5">
          {smallImageUrls.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              isSelected={index === currentIndex}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>

        <p className="text-[16px] text-neutral mt-2">{titles[currentIndex]}</p>
        <div className="flex flex-row w-[128%] lg:w-[120%] justify-between absolute items-center m-auto">
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

export default ImageSectionSlider;
