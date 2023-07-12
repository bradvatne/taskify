import { useEffect } from "react";

export const useEnterKeyPress = (callback: Function) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback]);
}; // Dependency on the callback to update if the passed callback changes
