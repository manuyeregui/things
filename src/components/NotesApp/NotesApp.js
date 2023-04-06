import FullscreenBox from "../FullscreenBox";
import SideBar from "./SideBar";
import MainWrapper from "./MainWrapper";
import NotesProvider from "./NotesContext";
import ControlPanel from "../Controls/ControlPanel";
import Select from "../Controls/Select";
import { useState } from "react";
import Slider from "../Controls/Slider";

export default function NotesApp() {
  const animations = [
    {
      name: "travel",
    },
    {
      name: "fade",
    },
  ];
  const [animation, setAnimation] = useState(0);
  const changeAnimation = (e) => {
    setAnimation(e.target.value);
  };

  const [duration, setDuration] = useState(0.5);
  const handleDuration = (num) => {
    setDuration(num);
  };

  return (
    <FullscreenBox>
      <ControlPanel>
        <Select
          title="animation"
          options={animations}
          state={animation}
          function={changeAnimation}
        />
        <Slider
          title="duration"
          clickable
          min={0.5}
          max={1.2}
          defaultValue={0.8}
          decimals={2}
          handler={handleDuration}
        />
      </ControlPanel>

      <div
        className="bg-white border-4 border-gray-200 rounded-3xl flex overflow-hidden font-poppins"
        style={{ width: 800, height: 430 }}
      >
        <NotesProvider>
          <SideBar />
          <MainWrapper
            animation={animations[animation].name}
            duration={duration}
          />
        </NotesProvider>
      </div>
    </FullscreenBox>
  );
}
