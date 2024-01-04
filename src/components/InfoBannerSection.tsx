import { useEffect, useState } from "react";
import DividerImg from "../assets/divider.png";
import DividerVerticalImg from "../assets/divider-vertical.png";

interface InfoItem {
  info_icon: string;
  info_title: string;
  info_subtitle: string;
}

interface InfoBannerSectionContent {
  info_banner_title: string;
  info_1: InfoItem;
  info_2: InfoItem;
  info_3: InfoItem;
}

interface InfoBannerSectionProps {
  content: InfoBannerSectionContent;
}

const InfoBannerSection = ({
  content: { info_banner_title, info_1, info_2, info_3 },
}: InfoBannerSectionProps) => {
  const bannerItems: InfoItem[] = [info_1, info_2, info_3];
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

  const mobileBanner = (
    <div className="bg-[#F0EEEF] w-full mt-[30px] p-[30px]">
      <div className=" flex flex-col items-center justify-center m-auto gap-y-6">
        <h2 className="text-primary text-[30px] tracking-wider mb-[30px] text-center">
          {info_banner_title}
        </h2>

        {bannerItems.map((items, index) => (
          <div className="flex flex-col items-center gap-y-3" key={index}>
            <img src={items.info_icon} className="w-[42px]" />
            <p className="text-[22px] font-bold text-primary tracking-widest">
              {items.info_title}
            </p>
            <p className="text-[13px] tracking-wide text-primary font-medium">
              {items.info_subtitle}
            </p>
            <img src={DividerImg} className="mt-[10px]" />
          </div>
        ))}
      </div>
    </div>
  );

  const desktopBanner = (
    <div className="bg-[#F0EEEF] w-full mt-[30px] p-[30px] mb-[60px]">
      <div className="flex flex-col gap-y-3">
        <h2 className="text-primary text-[30px] tracking-wider text-center mb-[10px]">
          {info_banner_title}
        </h2>
        <div className="flex flex-row items-center justify-center">
          {bannerItems.map((items, index) => (
            <div className="flex flex-row gap-x-6 items-center justify-center">
              <div
                className="flex flex-col gap-y-3 items-center justify-center ml-[20px]"
                key={index}
              >
                <img src={items.info_icon} className="w-[42px]" />
                <p className="text-[22px] font-bold text-primary tracking-widest">
                  {items.info_title}
                </p>
                <p className="text-[13px] tracking-wide text-primary font-medium">
                  {items.info_subtitle}
                </p>
              </div>

              {index < bannerItems.length - 1 && (
                <img src={DividerVerticalImg} className="mx-[20px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return isMobile ? mobileBanner : desktopBanner;
};

export default InfoBannerSection;
