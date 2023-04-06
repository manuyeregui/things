import React from "react";

export default function Skeleton(props) {
  return (
    <div
      className={
        "opacity-10 rounded-md " +
        props.w +
        " " +
        props.h +
        " " +
        props.bg +
        " " +
        (props.title && "mb-4")
      }
    />
  );
}
