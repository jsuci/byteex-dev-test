interface BannerProps {
  content: any;
}

const Banner = ({ content }: BannerProps) => {
  const { banner_text_1, banner_text_2, banner_text_3 } = content;

  return (
    <>
      <div className="bg-banner">
        <div className="w-10/12 m-auto flex flex-row items-center justify-center h-9">
          <span className="text-sm sm:invisible md:visible">{`${banner_text_1} | ${banner_text_2} | ${banner_text_3}`}</span>
          <span className="text-sm sm:visible md:invisible">{`${banner_text_2}`}</span>
        </div>
      </div>
    </>
  );
};

export default Banner;
