import React, { useEffect } from "react";
import Landing from "screens/landing/Landing";

const App = () => {
  useEffect(() => {
    const blockClicks = (event) => {
      const interactive = event.target.closest("a, button, [role='button']");
      if (!interactive) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
    };

    const blockSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    document.addEventListener("click", blockClicks, true);
    document.addEventListener("submit", blockSubmit, true);

    return () => {
      document.removeEventListener("click", blockClicks, true);
      document.removeEventListener("submit", blockSubmit, true);
    };
  }, []);

  return <Landing />;
};

export default App;
