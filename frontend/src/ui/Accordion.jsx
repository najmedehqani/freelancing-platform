import clsx from "clsx";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

function Accordion({
  wrapperClass,
  title,
  buttonClass,
  iconClass="w-5 h-5",
  pannelClass,
  children,
  showDivider,
}) {
  return (
    <Disclosure as="div" className={wrapperClass}>
      {({ open }) => (
        <>
          <DisclosureButton className={buttonClass}>
            {title}
            <ChevronDownIcon
              className={clsx(
                "transition-transform duration-300",
                open && "rotate-180",
                iconClass,
              )}
            />
          </DisclosureButton>
          <AnimatePresence>
            {open && (
              <DisclosurePanel static as={Fragment}>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className={clsx(pannelClass)}>
                    {showDivider && (
                      <div className="border-t border-secondary-200 mb-4"></div>
                    )}
                    {children}
                  </div>
                </motion.div>
              </DisclosurePanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
}

export default Accordion;

