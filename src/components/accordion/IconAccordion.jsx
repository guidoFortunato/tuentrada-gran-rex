import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const IconAccordion = ({ item }) => {
  return (
    <>
      {item ? (
        <AiOutlineMinus className={`w-6 h-6 shrink-0`} />
      ) : (
        <AiOutlinePlus className={`w-6 h-6 shrink-0`} />
      )}
    </>
  );
};
