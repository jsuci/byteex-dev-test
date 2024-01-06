type SiteLogoProps = {
  content: string;
};

const SiteLogo = ({ content }: SiteLogoProps) => {
  return (
    <div className="w-10/12 m-auto flex flex-col">
      <div className="my-4 flex flex-row justify-center lg:justify-start lg:mt-8 lg:mb-16">
        <img src={content} />
      </div>
    </div>
  );
};

export default SiteLogo;
