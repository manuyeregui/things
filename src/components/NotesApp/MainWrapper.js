import { useContext, useState, useRef, useEffect } from "react";
import { NotesContext } from "./NotesContext";
import Note from "./Note";
import ResetBtn from "./ResetBtn";

export default function MainWrapper({ animation, duration }) {
  const { notes } = useContext(NotesContext);

  const ref = useRef();

  const [pos, setPos] = useState(null);

  useEffect(() => {
    const bounds = ref.current.getBoundingClientRect();
    setPos(bounds);
  }, []);

  return (
    <div className="py-5 px-16 w-full h-full space-y-8 relative">
      <div className="flex items-center space-x-1 h-6 text-black/40">
        <span className="material-symbols-rounded text-lg font-bold">
          search
        </span>
        <span className="font-medium tracking-tight">Search</span>
      </div>

      <div>
        <h1 className="text-6xl leading-[3rem] font-semibold mb-8">Notes</h1>

        <ResetBtn />

        <div style={{ height: 240 }} ref={ref}>
          {notes.map((note, i) => (
            <Note
              data={{ ...note, finalBounds: pos }}
              index={i}
              key={note.id}
              animation={animation}
              duration={duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
