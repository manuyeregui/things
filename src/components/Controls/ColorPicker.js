import React from "react";

export default function ColorPicker(props) {
  return (
    <div className="flex justify-between items-center cursor-default">
      <span>{props.title}</span>

      <div className="flex items-center relative">
        <label
          htmlFor="color"
          className="border-b-2 border-white/10 cursor-pointer"
          style={{ color: props.color }}
        >
          {props.color}
        </label>
        <input
          id="color"
          type="color"
          className="outline-none border-none bg-transparent appearance-none w-0"
          value={props.color}
          onChange={props.handleColor}
        />
      </div>
    </div>
  );
}
