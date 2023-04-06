import FullscreenBox from "../FullscreenBox";
import background from "./img/background.jpg";
import Card from "./Card";
import { useState } from "react";
import ControlPanel from "../Controls/ControlPanel";
import Slider from "../Controls/Slider";

export default function CardFrame() {
  const [rotation, setRotation] = useState(0.05);
  const [glow, setGlow] = useState(0.75);

  const handleRotation = (rot) => {
    setRotation(rot);
  };

  const handleGlow = (glow) => {
    setGlow(glow);
  };

  return (
    <FullscreenBox>
      <ControlPanel>
        <Slider
          title="rotation"
          clickable
          min={25}
          max={75}
          defaultValue={50}
          decimals={0}
          unit="degrees"
          handler={handleRotation}
        />
        <Slider
          title="glow"
          clickable
          min={0.25}
          max={1}
          defaultValue={0.75}
          decimals={2}
          unit="opacity"
          handler={handleGlow}
        />
      </ControlPanel>
      <div
        id="frame"
        className="aspect-square rounded-xl overflow-hidden relative"
        style={{
          perspective: 1000,
          height: 700,
        }}
      >
        <img src={background} className="absolute w-full h-full top-0 left-0" />

        <Card glow={glow} rotation={rotation} />
      </div>
    </FullscreenBox>
  );
}
