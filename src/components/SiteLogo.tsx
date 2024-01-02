interface SiteLogoProps {
  content: string;
}

const SiteLogo = ({ content }: SiteLogoProps) => {
  return (
    <div className="my-4 flex flex-row justify-center lg:justify-start lg:mt-8 lg:mb-16">
      <img src={content} />
    </div>
  );
};

export default SiteLogo;
