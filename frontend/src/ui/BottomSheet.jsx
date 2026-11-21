import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import ButtonIcon from "./ButtonIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { FocusTrap } from "focus-trap-react";

function BottomSheet({ open, onClose, children, title }) {
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
        <>
          <motion.div
            className="backdrop-blur-sm fixed inset-0 bg-secondary-800/30 z-20"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <FocusTrap
            focusTrapOptions={{
              escapeDeactivates: false,
              allowOutsideClick: true,
            }}
          >
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl z-30 ">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className="bg-secondary-100 rounded-t-3xl w-full"
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <div className="p-4 overflow-y-auto max-h-[90vh]">
                  <div className="flex items-center mb-10">
                    <h3 className="font-bold text-secondary-700 flex-1 text-center">
                      {title}
                    </h3>
                    <ButtonIcon
                      variant="outline"
                      onClick={onClose}
                      aria-label="بستن"
                    >
                      <XMarkIcon />
                    </ButtonIcon>
                  </div>
                  <div>{children}</div>

                  <Button
                    className="w-full my-4"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    اعمال تغییرات
                  </Button>
                </div>
              </motion.div>
            </div>
          </FocusTrap>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default BottomSheet;
