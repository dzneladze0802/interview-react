import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const Dialog: React.FC<{ isOpen: boolean }> = ({ isOpen }) =>
  isOpen && (
    <dialog id="dialog" open={isOpen}>
      DIALOG
    </dialog>
  );

export default function Portal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = document.getElementById("dialog");

    if (dialog) {
      createPortal(<div>OUTER CONETND</div>, dialog);
    }
  }, []);

  return (
    <div>
      <Dialog isOpen={isOpen} />
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dialog</button>
    </div>
  );
}
