import { useState, useEffect } from "react";

const ProgressiveImg = ({ placeholderSrc, src, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc
      ? "blur-[10px] duration-500 ease-linear"
      : "blur-[0px] transition-[filter] duration-500 ease-linear ";

  return (
    <img
      loading="lazy"
      decoding="async"
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`${className} ${customClass} `}
    />
  );
};
export default ProgressiveImg;
