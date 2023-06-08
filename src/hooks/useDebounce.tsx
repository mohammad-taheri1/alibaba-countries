import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number = 3000) => {
   const [debouncedValue, setDebouncedValue] = useState<string>(value);

   useEffect(() => {
      const timerId = setTimeout(() => {
         setDebouncedValue(value);
      }, delay);

      return () => {
         clearTimeout(timerId);
      };
   }, [value, delay]);

   return debouncedValue;
};

export default useDebounce;
