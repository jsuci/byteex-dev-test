import NextBtnImg from "../../assets/next-btn.png";
import PrevBtnImg from "../../assets/prev-btn.png";

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
}

const ImageSectionSlider = ({
  content: { benefits_image_3 },
}: ImageSectionSliderProps) => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center max-w-[280px] sm:max-w-[320px] lg:max-w-[433px] lg:ml-auto">
        <img src={benefits_image_3.benefits_big_image} />
        <p className="text-[16px] text-neutral mt-2">White Robe</p>
        <div className="flex flex-row w-[130%] lg:w-[120%] justify-between absolute items-center m-auto">
          <img src={PrevBtnImg} className="max-w-[13px] lg:max-w-[15px] ml-3" />
          <img src={NextBtnImg} className="max-w-[13px] lg:max-w-[15px] mr-3" />
        </div>
      </div>
      ;
    </>
  );
};

export default ImageSectionSlider;
