import { useContext, useRef } from "react";
import { NotesContext } from "./NotesContext";

export default function ResetBtn() {
  const { setNotes } = useContext(NotesContext);

  const Reset = () => {
    setNotes([]);
  };

  return (
    <div
      className="absolute rounded-full bg-black text-gray-100 w-10 h-10 top-5 right-5 cursor-pointer flex justify-center items-center"
      onClick={Reset}
    >
      <span className="material-symbols-outlined">replay</span>
    </div>
  );
}
