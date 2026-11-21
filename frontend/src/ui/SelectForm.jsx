import { Controller } from "react-hook-form";
import { useMemo } from "react";
import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
function SelectForm({
  name,
  control,
  options = [],
  label,
  isRequired,
  placeholder,
  disabled = false,
  buttonClassName,
  optionsClassName,
}) {
  const optionsMap = useMemo(() => {
    return new Map(options.map((item) => [item.value, item.label]));
  }, [options]);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const selectedLabel = optionsMap.get(field.value) || placeholder;
        const errorId = `${name}-error`;
        return (
          <Field className="relative">
            <Label className="mb-2 block text-secondary-700">
              {label} {isRequired && <span className="text-error">*</span>}
            </Label>
            <Listbox
              value={field.value ?? ""}
              onChange={field.onChange}
              disabled={disabled}
            >
              {({ open }) => (
                <>
                  <ListboxButton
                    ref={field.ref}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    onBlur={field.onBlur}
                    className={clsx(
                      "textField__input flex items-center justify-between group ",
                      {
                        "border-red-600": error,
                      },
                      buttonClassName,
                    )}
                  >
                    <span
                      className={clsx({
                        "text-secondary-400": !optionsMap.has(field.value),
                        "text-secondary-900": optionsMap.has(field.value),
                      })}
                    >
                      {selectedLabel}
                    </span>
                    <ChevronDownIcon className="w-4 h-4 group-data-[open]:rotate-180" />
                  </ListboxButton>

                  <AnimatePresence>
                    {open && (
                      <ListboxOptions
                        static
                        as={motion.div}
                        anchor="bottom start"
                        modal={false}
                        initial={{ opacity: 0, scale: 0.96, y: -4 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.96,
                          y: -4,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          },
                        }}
                        className={clsx(
                          "ignore-modal-close w-[var(--button-width)] z-[50] max-h-60 overflow-y-auto mt-0.5 flex flex-col gap-1 bg-secondary-0 border border-secondary-300 rounded-lg p-1 origin-top",
                          optionsClassName,
                        )}
                      >
                        {options.map((item) => (
                          <ListboxOption
                            key={item.value}
                            value={item.value}
                            className={({ focus, selected }) =>
                              clsx(
                                "cursor-pointer select-none px-3 py-2 rounded-md text-secondary-900 transition-colors ease-out duration-200",
                                {
                                  "bg-primary-400 text-white": selected,
                                  "bg-primary-200 dark:text-secondary-100":
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
                </>
              )}
            </Listbox>
            {error && (
              <span
                id={errorId}
                className="absolute right-0 -bottom-5 text-xs text-red-600"
              >
                {error.message}
              </span>
            )}
          </Field>
        );
      }}
    />
  );
}
export default SelectForm;
// import { Controller } from "react-hook-form";
// import { useMemo } from "react";
// import {
//   Field,
//   Label,
//   Listbox,
//   ListboxButton,
//   ListboxOption,
//   ListboxOptions,
// } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import clsx from "clsx";
// function SelectForm({
//   name,
//   control,
//   options = [],
//   label,
//   isRequired,
//   placeholder,
//   disabled = false,
//   buttonClassName,
//   optionsClassName,
// }) {
//   const optionsMap = useMemo(() => {
//     return new Map(options.map((item) => [item.value, item.label]));
//   }, [options]);
//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field, fieldState: { error } }) => {

//         const selectedLabel = optionsMap.get(field.value) || placeholder;
//         const errorId = `${name}-error`;
//         return (
//           <Field className="relative">
//             <Label className="mb-2 block text-secondary-700">
//               {label} {isRequired && <span className="text-error">*</span>}
//             </Label>
//             <Listbox
//               value={field.value}
//               onChange={field.onChange}
//               disabled={disabled}
//             >
//               <ListboxButton
//                aria-invalid={!!error}
//                 aria-describedby={error ? errorId : undefined}
//                 onBlur={field.onBlur}
//                 className={clsx(
//                   "textField__input flex items-center justify-between group ",
//                   {
//                     "border-red-600": error,
//                   },
//                   buttonClassName,
//                 )}
//               >
//                 <span
//                   className={clsx({
//                     "text-secondary-400": !optionsMap.has(field.value),
//                     "text-secondary-900": optionsMap.has(field.value),
//                   })}
//                 >
//                   {selectedLabel}
//                 </span>
//                 <ChevronDownIcon className="w-4 h-4 group-data-[open]:rotate-180" />
//               </ListboxButton>

//               <ListboxOptions
//                 anchor="bottom start"
//                 modal={false}
//                 transition
//                 className={clsx(
//                   "ignore-modal-close w-[var(--button-width)] z-[50] max-h-60 overflow-y-auto mt-0.5 flex flex-col gap-1 bg-secondary-0 border border-secondary-300 rounded-lg p-1 origin-top transition duration-300 ease-out data-[closed]:scale-90 data-[closed]:opacity-0",
//                   optionsClassName,
//                 )}
//               >
//                 {options.map((item) => (
//                   <ListboxOption
//                     key={item.value}
//                     value={item.value}
//                     className={({ focus, selected }) =>
//                       clsx(
//                         "cursor-pointer select-none px-3 py-2 rounded-md text-secondary-900 transition-colors ease-out duration-200",
//                         {
//                           "bg-primary-400 text-white": selected,
//                           "bg-primary-200": focus && !selected,
//                         },
//                       )
//                     }
//                   >
//                     {item.label}
//                   </ListboxOption>
//                 ))}
//               </ListboxOptions>
//             </Listbox>
//             {error && (
//               <span  id={errorId} className="absolute right-0 -bottom-5 text-xs text-red-600">
//                 {error.message}
//               </span>
//             )}
//           </Field>
//         );
//       }}
//     />
//   );
// }
// export default SelectForm;
