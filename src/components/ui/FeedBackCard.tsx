interface FeedbackCardProps {
  feedback_image: string;
  feedback_name: string;
  star_rating_image: string;
  rating_message: string;
  feedback_message: string;
}

const FeedbackCard = ({
  feedback_image,
  feedback_name,
  star_rating_image,
  rating_message,
  feedback_message,
}: FeedbackCardProps) => {
  return (
    <>
      <div className="rounded-lg shadow-lg max-w-[420px] h-[172px] bg-white flex flex-col gap-y-3 justify-center p-4">
        <div className="flex flex-row items-center gap-x-3 justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <img src={feedback_image} className="w-[40px]" />
            <span className="text-neutral">{feedback_name}</span>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <img src={star_rating_image} className="w-[60px]" />
            <span className="text-neutral text-[12px]">{rating_message}</span>
          </div>
        </div>

        <p className="text-neutral text-[12px]">{feedback_message}</p>
      </div>
    </>
  );
};

export default FeedbackCard;
