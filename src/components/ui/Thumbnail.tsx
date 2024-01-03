// Thumbnail.tsx

import React, { FC, MouseEvent } from "react";

interface ThumbnailProps {
  src: string;
  isSelected: boolean;
  onClick: (event: MouseEvent<HTMLImageElement>) => void;
}

const Thumbnail: FC<ThumbnailProps> = ({ src, isSelected, onClick }) => {
  const thumbnailStyle: React.CSSProperties = {
    border: isSelected ? "2px solid white" : "none",
    cursor: "pointer",
  };

  return (
    <img src={src} alt="Thumbnail" style={thumbnailStyle} onClick={onClick} />
  );
};

export default Thumbnail;
