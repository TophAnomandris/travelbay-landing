const Heading1 = ({ text, className }) => {
  return <h1 className={`font-interDisplay ${className}`}>{text}</h1>;
};

// small: 32px, large: 56px
const Heading2 = ({ text, className }) => {
  return (
    <h2
      className={`font-interDisplay font-bold text-[32px] lg:text-[56px] leading-[40px]  lg:leading-[64px] tracking-small lg:tracking-light ${className}`}
    >
      {text}
    </h2>
  );
};

// small: 32px, large: 48px
const SmallHeading2 = ({ text, className }) => {
  return (
    <h2
      className={`font-interDisplay font-bold text-[32px] lg:text-[48px] leading-[40px]  lg:leading-[64px] tracking-small lg:tracking-light ${className}`}
    >
      {text}
    </h2>
  );
};

// small: 24px, large: 40px
const Heading3 = ({ text, className }) => {
  return (
    <h3
      className={`font-interDisplay font-bold text-2xl lg:text-[40px] lg:leading-[48px] tracking-light ${className}`}
    >
      {text}
    </h3>
  );
};

// large: 32px
const Heading4 = ({ text, className }) => {
  return (
    <h4
      className={`font-interDisplay font-bold text-[32px] lg:leading-[40px] ${className}`}
    >
      {text}
    </h4>
  );
};

//large:20px

const Heading6 = ({ text, className }) => {
  return (
    <h4 className={`font-interDisplay font-bold text-xl  ${className}`}>
      {text}
    </h4>
  );
};

export { Heading1, Heading2, SmallHeading2, Heading3, Heading4, Heading6 };
