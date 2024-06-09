import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, cssName = "", onClose}) {
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${cssName}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
