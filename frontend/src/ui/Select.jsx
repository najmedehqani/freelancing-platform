import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

function Select({
  value,
  onChange,
  options = [],
  placeholder,
  buttonClassName,
  optionsClassName,
  disabled = false,
  name,
}) {
  const selectedItem = options.find((item) => item.value === value);

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled} name={name}>
      {({ open }) => (
        <div className="relative">
          <ListboxButton
            aria-label={
              selectedItem
                ? `${placeholder}: ${selectedItem.label}`
                : placeholder
            }
            className={clsx(
              "textField__input flex items-center justify-between group focus:outline-none focus-visible:outline-none",
              {
                "cursor-not-allowed opacity-60": disabled,
              },
              buttonClassName,
            )}
          >
            <span className="truncate">
              {selectedItem ? selectedItem.label : placeholder}
            </span>
            <ChevronDownIcon
              className="w-4 h-4 shrink-0 transition-all ease-out duration-300
             group-data-[open]:rotate-180"
            />
          </ListboxButton>
          <AnimatePresence>
            {open && (
              <ListboxOptions
                modal={false}
                static
                as={motion.div}
                initial={{ opacity: 0, scale: 0.96, y: -4 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 400, damping: 30 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 30 },
                }}
                anchor="bottom start"
                className={clsx(
                  " w-[var(--button-width)] z-10 flex flex-col gap-1 bg-secondary-0 shadow dark:shadow-black/10 rounded-lg p-1 max-h-60 overflow-auto overscroll-contain origin-top focus:outline-none focus-visible:outline-none",
                  optionsClassName,
                )}
              >
                {options.map((item) => (
                  <ListboxOption
                    key={item.value}
                    value={item.value}
                    className={({ focus, selected }) =>
                      clsx(
                        "cursor-pointer text-secondary-900 select-none px-3 py-2 rounded-md font-medium transition-colors ease-out duration-200",
                        {
                          "bg-primary-400 text-white": selected,
                          "bg-primary-200  dark:text-secondary-100":
                            focus && !selected,
                        },
                      )
                    }
                  >
                    {item.label}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            )}
          </AnimatePresence>
        </div>
      )}
    </Listbox>
  );
}

export default Select;
