import purify from "dompurify";
import { useEffect, useState } from "react";
import CallToActionButton from "./ui/CallToActionButton";

interface CallToActionGroup {
  cta_icon: string;
  cta_text: string;
}

interface AboutSectionData {
  call_to_action_group: CallToActionGroup;
  about_section_title: string;
  about_section_content: string;
  about_section_image: string;
}

interface AboutSectionProps {
  content: AboutSectionData;
}

const AboutSection = ({
  content: {
    call_to_action_group,
    about_section_title,
    about_section_content,
    about_section_image,
  },
}: AboutSectionProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const sanitizedHtml = purify.sanitize(about_section_content);

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

  return (
    <div className="flex flex-col py-8 px-[37px] items-center bg-bgsection lg:flex-row lg:items-start lg:gap-x-10">
      {!isMobile && <img src={about_section_image} />}

      <div className="flex flex-col items-center gap-y-12 lg:gap-y-8 lg:items-start">
        <h2 className="text-primary text-[28px] tracking-wide">
          {about_section_title}
        </h2>
        {isMobile && <img src={about_section_image} />}
        <p
          className="text-sectiontext text-[18px] lg:text-[16px]"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
        {!isMobile && (
          <CallToActionButton
            cta_text={call_to_action_group.cta_text}
            cta_icon={null}
          />
        )}
      </div>
    </div>
  );
};

export default AboutSection;
