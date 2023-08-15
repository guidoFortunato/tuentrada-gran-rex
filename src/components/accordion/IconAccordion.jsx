import { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { EventosContext } from "../../context/EventosProvider";

export const IconAccordion = ({ item }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({dataInfoGeneral})
  return (
    <>
      {item ? (
        <AiOutlineMinus 
        style={{
          color: dataInfoGeneral.colorHoverButton,
        }} 
        className={`w-6 h-6 shrink-0`} />
      ) : (
        <AiOutlinePlus 
        style={{
          color: dataInfoGeneral.colorHoverButton,
        }}
        className={`w-6 h-6 shrink-0`} />
      )}
    </>
  );
};
