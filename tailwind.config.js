module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    stroke: (theme) => ({
      black: theme("colors.black.100"),
    }),

    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
      out: ["Outfit", "DM Sans"],
      playfair: ["Playfair Display", "serif"],
      inter: ["Inter", "sans-serif"],
      interDisplay: ["InterDisplay", "sans-serif"],
    },

    extend: {
      letterSpacing: {
        heavy: "-3%",
        medium: "-2%",
        light: "-1%",
        small: "-0.5%",
      },

      dropShadow: {
        header: "0 4px 100px 0 rgba(92, 92, 92, 0.16)",
      },
      boxShadow: {
        "custom-combo": "0px 0px 0px 4px #99A0AE29, 0px 0px 0px 2px #fff",
        btn: "0px 8px 11px rgba(0, 0, 0, 0.34)",
        header: "0 4px 100px 0 rgba(92, 92, 92, 0.16)",
        custom:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
      },

      spacing: {
        72: "4.5rem",
        140: "8.75rem",
        65: "4rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      width: {
        iw: "18rem",
        pw: "72rem",
        ew: "68rem",
        mw: "600px",
      },
      height: {
        ih: "17.5rem",
        ph: "10.5rem",
        eh: "52.5rem",
        slider: "40rem",
      },

      fontSize: {
        t: "2rem",
        cb: "14px",
        40: "40px",
        32: "32px",
      },

      lineHeight: {
        2: "0.5rem",
        1: "0.25rem",
        0: "0.01rem",
      },
      inset: {
        28: "28px",
        33: "33px",
      },
      borderRadius: {
        100: "100px",
        16: "16px",
        18: "18px",
        4: "4px",
        8: "8px",
        20: "20px",
        67: "67px",
        60: "60px",
      },

      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        "spin-slow": "spin 3s linear infinite",
        fade: "fade 1s ease-in-out",
      },
      scale: {
        80: "0.80",
      },
      border: {
        thin: "#0000001A",
        gray: "#00000033",
      },
      colors: {
        black: {
          tranparent: "#00000099",
          500: "#000000",
          100: "#0C203C",
          200: "#000000",
        },
        tint: {
          70: "#667085",
          80: "#475467",
          100: "#1D2939",
          110: "#101C28",
        },

        gray: {
          30: "#E0E0E0",
          40: "#F5F5F5B5",
          50: "#E5E5E5",
          60: "#828282",
          100: "#6D7079",
          200: "#FCFCFC",
          300: "#4B5563",
          400: "#5D6D8F",
          500: "#1D2939",
          700: "#5C5C5C",
        },
        white: {
          100: "#ffffff",
          soft: "#E1E4EA",
          neutral: "#F5F7F9",
          tranparent: "#FFFFFF6B",
        },
        primary: {
          100: "#FAF9FF",
          200: "#000000",
          transparent: " #00FFFF",
        },
        gradient: {
          100: "linear-gradient(143.07deg, #1C9FDA 21.46%, #074967 88%)",
        },
        btn: {
          100: " #C4C4C43D",
          disabled: " #C4C4C43D ",
        },
        blue: {
          50: "#FAF9FF",
          90: "#093549",
          100: "#1C9FDA",
          200: "#0C203C",
          tranparent: "#1C9FDA29",
        },
        gold: {
          100: "#FEBB02",
          200: "#DFA709",
          300: "#E7AE0F",
        },
        green: {
          100: "#0EA70B",
          200: "#27AE60",
          300: "#0EA70B",
          light: "#27AE601A",
        },
        yellow: {
          100: "#FEBB0230",
          200: "#FEBB02",
        },
        orange: {
          100: "#A95810",
          200: "#F85A23",
        },
        red: {
          100: "#FF0000",
        },
        brown: {
          100: "#993B1A",
        },
        border: {
          thin: "#0000001A",
          gray: "#00000033",
          blue: "#1C9FDA3B",
          deepgray: "#9CA3AF",
          red: "#FF0000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
