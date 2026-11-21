import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FocusTrap } from "focus-trap-react";
import clsx from "clsx";
const drawerWidth = {
  sm: "w-[250px]",
  md: "w-[350px]",
  lg: "w-[500px]",
};

function Drawer({
  open,
  onClose,
  children,
  size = "sm",
  className = "",
  ariaLabel,
}) {
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
          {/* Backdrop */}
          <motion.div
            className="backdrop-blur-sm fixed inset-0 bg-secondary-800/30 z-20"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />

          {/* Drawer panel */}
          <FocusTrap
            focusTrapOptions={{
              escapeDeactivates: false,
              allowOutsideClick: true,
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={ariaLabel}
              className={`fixed top-0 right-0 h-full z-30 ${
                drawerWidth[size] ?? drawerWidth.sm
              }`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <div
                className={clsx(
                  "h-full overflow-y-auto bg-secondary-0",
                  className,
                )}
              >
                {children}
              </div>
            </motion.div>
          </FocusTrap>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default Drawer;
