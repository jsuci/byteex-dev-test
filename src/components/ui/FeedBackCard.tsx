interface FeedbackCardProps {
  feedback_image: string;
  feedback_name: string;
  star_rating_image: string;
  rating_message?: string;
  feedback_message: string;
  is_section?: boolean;
}

const FeedbackCard = ({
  feedback_image,
  feedback_name,
  star_rating_image,
  rating_message,
  feedback_message,
  is_section = false,
}: FeedbackCardProps) => {
  return (
    <>
      <div className="rounded-lg shadow-lg bg-white flex flex-col gap-y-3 justify-center p-[30px]">
        <div className="flex flex-row items-center gap-x-3 justify-between">
          <div className="flex flex-row items-center gap-x-3">
            <img src={feedback_image} className="w-[40px] rounded-full" />
            <div className="flex flex-col gap-y-2">
              {is_section && (
                <img src={star_rating_image} className="h-[12px]" />
              )}
              <span className="text-neutral">{feedback_name}</span>
            </div>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            {!is_section && (
              <img src={star_rating_image} className="h-[12px]" />
            )}
            {rating_message && (
              <span className="text-neutral text-[12px]">{rating_message}</span>
            )}
          </div>
        </div>

        <p className="text-neutral text-[13px] tracking-wide leading-6">
          {feedback_message}
        </p>
      </div>
    </>
  );
};

export default FeedbackCard;
