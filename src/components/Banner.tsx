import type { BannerMessageGroup } from "../types";

const Banner = ({ ...rest }: BannerMessageGroup) => {
  const items: string[] = Object.values(rest);
  return (
    <>
      <div className="bg-secondary">
        <div className="flex flex-row items-center justify-center text-center py-2">
          <span className="text-sm lg:hidden">{`${rest["banner_text_2"]}`}</span>
          {items.map((item, index) => (
            <div
              className="flex flex-row items-center justify-center"
              key={index}
            >
              <span className="hidden lg:inline-block text-sm">{item}</span>
              {index < items.length - 1 && (
                <span className="mx-[10px] text-[#565656] text-[10px] hidden lg:inline">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
