import React, { useState } from "react";
import FullscreenBox from "../FullscreenBox";
import ButtonBox from "./ButtonBox";
import Button from "./Button";
import Screen from "./Screen";
import CalcProvider from "./CalcContext";
import ControlPanel from "../Controls/ControlPanel";
import ThemeSelector from "../Controls/ThemeSelector";
import Select from "../Controls/Select";

export default function Calculator() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [".", 0, "="],
  ];

  const [theme, setTheme] = useState(1);
  const themes = [
    {
      name: "light",
      background: "bg-white",
      text: "text-black",
    },
    {
      name: "dark",
      background: "bg-mateblack",
      text: "text-white",
    },
  ];
  const handleTheme = () => setTheme(Number(!theme));

  const [font, setFont] = useState(0);
  const fonts = [
    {
      name: "nunito",
      font: "font-nunito",
    },
    {
      name: "mono",
      font: "font-mono",
    },
    {
      name: "golos",
      font: "font-golos",
    },
    {
      name: "lexend",
      font: "font-lexend",
    },
  ];
  const handleFont = (e) => {
    setFont(e.target.value);
  };

  return (
    <FullscreenBox>
      <ControlPanel title={"calculator"}>
        <ThemeSelector
          title={"theme"}
          icon={
            themes[theme].name === "dark"
              ? "fi-rr-light-switch-off"
              : "fi-rr-light-switch-on"
          }
          active={theme}
          switchTheme={handleTheme}
        />
        <Select
          title="font"
          icon="fi fi-rr-text"
          options={fonts}
          state={font}
          function={handleFont}
        />
      </ControlPanel>

      <CalcProvider>
        <div
          className={`${themes[theme].background} shadow-xl rounded-3xl overflow-hidden transition-all border-2 border-white/10`}
        >
          <Screen theme={themes[theme]} font={fonts[font].font} />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button theme={themes[theme]} value={btn} key={i} />
            ))}
          </ButtonBox>
        </div>
      </CalcProvider>
    </FullscreenBox>
  );
}
