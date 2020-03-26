import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  //Remove own garbage (memory leak)
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    //If you return a function in useEffect, it's the cleanup function
    //Will only run if the modalRoot gets closed
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(<div> {children} </div>, elRef.current);
};

export default Modal;
