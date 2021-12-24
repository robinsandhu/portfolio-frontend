import React from "react"
import "./SidebarOption.css"

function SidebarOption({ text, handle, active }) {
  return (
    <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
      <h2>{text}</h2>
      {
        handle?
        <p>{handle}</p>
        :
        <React.Fragment />
      }
    </div>
  );
}

export default SidebarOption;