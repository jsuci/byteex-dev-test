interface BannerProps {
  content: {
    [key: string]: string;
  };
}

const Banner = ({
  content: { banner_text_1, banner_text_2, banner_text_3 },
}: BannerProps) => {
  return (
    <>
      <div className="bg-banner">
        <div className="flex flex-row items-center justify-center text-center py-3">
          <span className="text-sm lg:hidden">{`${banner_text_2}`}</span>
          <span className="hidden lg:inline-block text-sm">{`${banner_text_1} | ${banner_text_2} | ${banner_text_3}`}</span>
        </div>
      </div>
    </>
  );
};

export default Banner;
