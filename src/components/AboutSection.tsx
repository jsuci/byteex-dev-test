import purify from "dompurify";
import { useEffect, useState } from "react";
import CallToActionButton from "./ui/CallToActionButton";
import type { AboutSection } from "../types";

const AboutSection = ({
  call_to_action_group,
  about_section_title,
  about_section_content,
  about_section_image,
}: AboutSection) => {
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
    <div className="w-full m-auto bg-bgsection">
      <div className="w-10/12 m-auto flex flex-col py-8 px-[37px] items-cente lg:flex-row lg:items-start lg:gap-x-10">
        {!isMobile && <img src={about_section_image} />}

        <div className="flex flex-col items-center gap-y-12 lg:gap-y-8 lg:items-start">
          <h2 className="text-primary text-[28px] tracking-wide text-center">
            {about_section_title}
          </h2>
          {isMobile && <img src={about_section_image} />}
          <p
            className="text-sectiontext text-[18px] lg:text-[16px]"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />
          {!isMobile && (
            <div className="w-full max-w-[360px]">
              <CallToActionButton
                cta_text={call_to_action_group.cta_text}
                cta_icon={null}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
