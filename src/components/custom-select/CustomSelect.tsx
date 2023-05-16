import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IHTMLOption } from "../../typings/generalTypes";
import { useNavigate } from "react-router-dom";
import "./custom-select.scss";

interface IProps {
   data: IHTMLOption[];
   selectedValue?: string | number | null | undefined;
   placeHolderText: string;
}

const CustomSelect = ({ data, selectedValue, placeHolderText }: IProps) => {
   const [active, setActive] = useState<boolean>(false);
   const [value, setValue] = useState<string | number | null | undefined>(selectedValue);
   const navigate = useNavigate();

   const handleBoxClick = () => {
      setActive((prev) => !prev);
   };

   const handleOptionClick = (currentValue: string | number) => {
      setValue(currentValue);
      setActive((prev) => !prev);
      navigate(`/?region=${value}`);
   };

   return (
      <div className="custom-select">
         <div className="custom-select__selected" onClick={handleBoxClick}>
            <span>{value ? value : placeHolderText}</span>
            <MdKeyboardArrowDown />
         </div>

         <div className={`custom-select__options ${active ? "active" : ""}`}>
            {data.map((item) => (
               <div
                  key={item.value}
                  className="custom-select__options__item"
                  onClick={() => handleOptionClick(item.value)}
               >
                  <input className="radio" type="radio" id={item.value.toString()} name="category" />
                  <label
                     className="label"
                     htmlFor={item.value.toString()}
                     onClick={() => handleOptionClick(item.value)}
                  >
                     {item.label}
                  </label>
               </div>
            ))}
         </div>
      </div>
   );
};

export default CustomSelect;
