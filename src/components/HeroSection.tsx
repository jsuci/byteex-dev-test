import { useEffect, useState } from "react";
import CallToActionButton from "./ui/CallToActionButton";
import BGSectionImg from "../assets/bg-section.png";
import FeedbackCard from "./ui/FeedBackCard";

interface HeroSubtitle {
  hero_subtitle_text: string;
  hero_subtitle_icon: string;
}

interface HeroSubtitleGroup {
  hero_subtitle_1: HeroSubtitle;
  hero_subtitle_2: HeroSubtitle;
  hero_subtitle_3: HeroSubtitle;
}

interface HeroFeedbackGroup {
  feedback_image: string;
  feedback_name: string;
  feedback_message: string;
}

interface OverallRatingGroup {
  star_rating_image: string;
  rating_message: string;
}

interface CallToActionGroup {
  cta_icon: string;
  cta_text: string;
}

interface PartnerImageGroup {
  partner_img_1: string;
  partner_img_2: string;
  partner_img_3: string;
  partner_img_4: string;
  partner_img_5: string;
}

interface AsSeenGroup {
  as_seen_text: string;
  partner_image_group: PartnerImageGroup;
}

interface HeroSectionProps {
  content: {
    hero_section_title: string;
    hero_section_subtitle_group: HeroSubtitleGroup;
    hero_image: string;
    hero_section_feedback_group: HeroFeedbackGroup;
    overall_rating_group: OverallRatingGroup;
    call_to_action_group: CallToActionGroup;
    as_seen_group: AsSeenGroup;
  };
}

const HeroSection = ({
  content: {
    hero_section_title,
    hero_section_subtitle_group,
    hero_image,
    hero_section_feedback_group,
    overall_rating_group,
    call_to_action_group,
    as_seen_group,
  },
}: HeroSectionProps) => {
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

  const mobileHero = (
    <>
      <div className="flex flex-col gap-y-3 justify-center items-center">
        <h2 className="text-lg font-normal text-center text-primary">
          {hero_section_title}
        </h2>
        <img src={hero_image} className="m-auto" />
        <div className="flex flex-col gap-y-4 mt-5 mb-4 px-4">
          {hero_section_subtitle_group &&
            Object.values(hero_section_subtitle_group).map(
              (subtitle, index) => (
                <div key={index} className="flex flex-row items-center gap-x-4">
                  <img className="w-8" src={subtitle.hero_subtitle_icon} />
                  <p className="text-md">{subtitle.hero_subtitle_text}</p>
                </div>
              )
            )}
        </div>

        <div className="w-full">
          <CallToActionButton
            cta_icon={call_to_action_group.cta_icon}
            cta_text={call_to_action_group.cta_text}
          />
        </div>
      </div>

      {/* feedback card */}
      <div className="mt-[30px]">
        <FeedbackCard
          feedback_image={hero_section_feedback_group.feedback_image}
          feedback_name={hero_section_feedback_group.feedback_name}
          feedback_message={hero_section_feedback_group.feedback_message}
          rating_message={overall_rating_group.rating_message}
          star_rating_image={overall_rating_group.star_rating_image}
        />
      </div>
    </>
  );

  const dekstopHero = (
    <>
      <div className="flex flex-row relative items-center">
        {/* text */}
        <div className="w-[592px] m-auto">
          <h2 className="font-normal text-start text-primary text-4xl leading-snug">
            {hero_section_title}
          </h2>
          <div className="flex flex-col gap-y-4 mt-5 mb-8">
            {hero_section_subtitle_group &&
              Object.values(hero_section_subtitle_group).map(
                (subtitle, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-x-4 w-[425px]"
                  >
                    <img className="w-8" src={subtitle.hero_subtitle_icon} />
                    <p className="text-base">{subtitle.hero_subtitle_text}</p>
                  </div>
                )
              )}
          </div>

          <div className="max-w-[362px] mb-[30px]">
            <CallToActionButton
              cta_icon={call_to_action_group.cta_icon}
              cta_text={call_to_action_group.cta_text}
            />
          </div>

          {/* feedback card */}
          <div className="max-w-[450px] h-[190px] -mb-[160px]">
            <FeedbackCard
              feedback_image={hero_section_feedback_group.feedback_image}
              feedback_name={hero_section_feedback_group.feedback_name}
              feedback_message={hero_section_feedback_group.feedback_message}
              rating_message={overall_rating_group.rating_message}
              star_rating_image={overall_rating_group.star_rating_image}
            />
          </div>
        </div>

        {/* hero image */}
        <img
          src={hero_image}
          className="aspect-[1.72] object-contain object-center max-w-[725px
        ] overflow-hidden m-auto mt-1 max-md:max-w-full max-md:mt-10"
        />
      </div>
    </>
  );

  return (
    <>
      <div className="w-10/12 m-auto flex flex-col mb-20">
        {isMobile ? mobileHero : dekstopHero}
      </div>

      <div className="w-full relative lg:overflow-hidden">
        <img
          src={BGSectionImg}
          className="w-full h-[300px] lg:h-[430px] -mt-40 relative -z-40"
        />

        {/* as seen in */}
        <div className="absolute flex flex-col w-full m-auto justify-center items-center top-28 left-0">
          <p className="text-xl text-neutral tracking-wider">
            {as_seen_group.as_seen_text}
          </p>

          <div className="flex flex-row justify-evenly w-10/12 items-center mt-3 gap-x-6 flex-nowrap overflow-scroll lg:overflow-hidden">
            {as_seen_group.partner_image_group &&
              Object.values(as_seen_group.partner_image_group).map(
                (imagelink, index) => (
                  <img key={index} src={imagelink} className="h-full" />
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
