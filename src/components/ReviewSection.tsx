import FeedbackCardSlider from "./ui/FeedbackCardSlider";
import type { ReviewSection, FeedbackGroup } from "../types";

const ReviewSection = ({
  review_section_title,
  review_section_subtitle,
  review_section_image,
  feedback_groups,
}: ReviewSection) => {
  const images: string[] = Object.values(review_section_image);
  const half: number = Math.ceil(images.length / 2);

  const feedbackItems: FeedbackGroup[] = Object.values(feedback_groups);

  return (
    <>
      <div className="flex flex-col w-full items-center gap-y-7 mb-[30px]">
        <h2 className="text-primary text-[26px] tracking-wider text-center mx-[30px]">
          {review_section_title}
        </h2>
        <p className="text-[16px] tracking-wider text-center mx-[30px] max-w-[670px] leading-relaxed">
          {review_section_subtitle}
        </p>
        <div className="flex flex-col mb-[30px]">
          <div className="flex flex-row overflow-auto items-center justify-center">
            {images.slice(0, half).map((imgGroup, index) => (
              <img src={imgGroup} key={index} />
            ))}
          </div>
          <div className="flex flex-row w-full jus overflow-auto items-center justify-center">
            {images.slice(half, images.length).map((imgGroup, index) => (
              <img src={imgGroup} key={index} />
            ))}
          </div>
        </div>

        <FeedbackCardSlider content={feedbackItems} />
      </div>
    </>
  );
};

export default ReviewSection;
