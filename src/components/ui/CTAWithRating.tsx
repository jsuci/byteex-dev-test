import ArrowImg from "../../assets/arrow.png";
import StarImg from "../../assets/start.png";

interface CTAWithRatingProps {
  btn_text: string;
  rating_message: string;
}

const CTAWithRating = ({ btn_text, rating_message }: CTAWithRatingProps) => {
  return (
    <div className="flex flex-col gap-y-2 items-center">
      <button className="bg-primary text-white text-lg py-3 px-4 rounded-md flex flex-row items-center gap-x-3 w-full justify-center">
        {btn_text}
        <img src={ArrowImg} className="w-[20px]" />
      </button>
      <div className="flex flex-row items-center gap-x-2 p-2">
        <img src={StarImg} className="w-[80px]" />
        <p className="text-neutral text-[14px]">{rating_message}</p>
      </div>
    </div>
  );
};

export default CTAWithRating;
