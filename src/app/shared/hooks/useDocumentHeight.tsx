import { useEffect, useState } from "react";

export function useDocumentHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const getHeight = () => {
      const body = document.body;
      const html = document.documentElement;

      return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
    };

    const updateHeight = () => setHeight(getHeight());

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return height - window.innerHeight;
}
