import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  function handleBackdropClick(e) {
    if (e.target === dialog.current && onClose) {
      onClose();
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      onClick={handleBackdropClick}
      onClose={onClose}
      className="modal"
    >
          {children}
    </dialog>,
    document.getElementById('modal')
  );
}
