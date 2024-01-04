interface FeedbackGroup {
  feedback_image: string;
  feedback_name: string;
  feedback_message: string;
  feedback_rating: string;
}

interface ReviewSectionData {
  review_section_title: string;
  review_section_subtitle: string;
  review_section_image: string[];
  feedback_groups: FeedbackGroup[];
}

interface ReviewSectionProps {
  content: ReviewSectionData;
}

const ReviewSection = ({
  content: {
    review_section_title,
    review_section_subtitle,
    review_section_image,
  },
}: ReviewSectionProps) => {
  const images: string[] = Object.values(review_section_image);
  const half: number = Math.ceil(images.length / 2);

  return (
    <div className="flex flex-col w-full items-center gap-y-7 mb-[60px]">
      <h2 className="text-primary text-[26px] tracking-wider text-center mx-[30px]">
        {review_section_title}
      </h2>
      <p className="text-[16px] tracking-wider text-center mx-[30px] max-w-[670px] leading-relaxed">
        {review_section_subtitle}
      </p>
      <div className="flex flex-col">
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
    </div>
  );
};

export default ReviewSection;
