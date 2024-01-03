interface CallToActionButtonProps {
  cta_text: string;
  cta_icon: string | null;
}

const CallToActionButton = ({
  cta_text,
  cta_icon,
}: CallToActionButtonProps) => {
  return (
    <button className="bg-primary text-white text-lg py-3 px-4 rounded-md flex flex-row items-center gap-x-3 w-full justify-center">
      {cta_text}
      {cta_icon && <img src={cta_icon} className="w-[20px]" />}
    </button>
  );
};

export default CallToActionButton;
