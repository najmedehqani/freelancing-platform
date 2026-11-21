import  useOutsideClick  from "../hooks/useOutsideClick";
import { PiX } from "react-icons/pi";
import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FocusTrap } from "focus-trap-react";
import ButtonIcon from "./ButtonIcon";

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="backdrop-blur-sm fixed inset-0 bg-secondary-800/30 flex items-center justify-center z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FocusTrap
            focusTrapOptions={{
              escapeDeactivates: false,
              allowOutsideClick: true,
            }}
          >
            <motion.div
              ref={ref}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="rounded-xl bg-secondary-0 p-4 shadow-lg w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <div
                className="flex items-center justify-between border-b
                border-b-secondary-300 pb-2 mb-6"
              >
                <h2
                  id={titleId}
                  className="text-secondary-700 font-bold text-sm sm:text-base"
                >
                  {title}
                </h2>

                <ButtonIcon
                  onClick={onClose}
                  variant="outline"
                  className="block border-none [&>svg]:w-5 [&>svg]:h-5 p-1"
                  aria-label="بستن مودال"
                >
                  <PiX />
                </ButtonIcon>
              </div>

              {children}
            </motion.div>
          </FocusTrap>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
export default Modal;
