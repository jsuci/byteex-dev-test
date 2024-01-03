import NextBtnImg from "../../assets/next-btn.png";
import PrevBtnImg from "../../assets/prev-btn.png";

interface HowToOrderStep {
  how_to_order_image: string;
  how_to_order_title: string;
  how_to_order_content: string;
}

interface HowToOrderSectionSliderProps {
  content: HowToOrderStep;
}

const HowToOrderSectionSlider = ({ content }: HowToOrderSectionSliderProps) => {
  return (
    <>
      <div className="relative bg-[#F9F0E6] flex flex-col max-w-[360px] maxh-[360px] rounded-xl justify-center items-center p-[60px] gap-y-4">
        <img src={content.how_to_order_image} className="w-[56px]" />
        <p className="text-[28px] tracking-wide text-primary">
          {content.how_to_order_title}
        </p>
        <p className="text-[18px] tracking-wide text-center text-neutral">
          {content.how_to_order_content}
        </p>

        <div className="flex flex-row items-center justify-between absolute m-auto w-[120%]">
          <img src={PrevBtnImg} className="w-[15px]" />
          <img src={NextBtnImg} className="w-[15px]" />
        </div>
      </div>
    </>
  );
};

export default HowToOrderSectionSlider;
