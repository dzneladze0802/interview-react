import { createPortal } from "react-dom";
import { useState } from "react";

const Dialog: React.FC<{ isOpen: boolean }> = ({ isOpen }) =>
  isOpen && (
    <dialog id="dialog" open={isOpen}>
      DIALOG
    </dialog>
  );

export default function SimplePortal() {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = document.getElementById("dialog");

  return (
    <div>
      {dialog &&
        createPortal(
          <div>OUTER CONETND</div>,
          document.getElementById("dialog") as HTMLDialogElement
        )}
      <Dialog isOpen={isOpen} />
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dialog</button>
    </div>
  );
}
