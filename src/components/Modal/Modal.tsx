import { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ isOpen, title, children, onClose }: ModalProps) => {
  if (!isOpen) return null;

  useEffect(() => {
    function handleClose(key: KeyboardEvent) {
      if (key.code === "Escape") onClose();
    }
  
    window.addEventListener("keydown", handleClose);
  
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  },[onClose])
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-4/5 bg-white dark:bg-neutral-900 rounded-xl sm:w-full max-w-lg p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};