import { useRef, useEffect } from "react";

const useOnClickOut = (onClickOutside: () => void) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current?.contains(event.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};

export default useOnClickOut;
