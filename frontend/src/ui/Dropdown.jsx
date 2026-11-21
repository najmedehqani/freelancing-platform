import clsx from "clsx";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dropdown({
  button,
  items = [],
  className,
  buttonLabel,
}) {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <MenuButton
            aria-label={buttonLabel}
            className="focus:outline-none focus-visible:outline-none"
          >
            {typeof button === "function" ? button({ open }) : button}
          </MenuButton>

          <AnimatePresence>
            {open && (
              <MenuItems
                static
                modal={false}
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
                // transition={{ type: "spring", stiffness: 400, damping: 30 }}
                anchor="bottom end"
                className={clsx(
                  "focus:outline-none focus-visible:outline-none z-20",
                  className,
                )}
              >
                {items.map(renderItem)}
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}

function renderItem(item) {
  switch (item.type) {
    case "label":
      return (
        <div key={item.id} className={item.className}>
          {item.content}
        </div>
      );

    case "divider":
      return (
        <MenuSeparator key={item.id} className="my-2 h-px bg-secondary-200" />
      );

    case "button":
      return (
        <MenuItem
          key={item.id}
          as="button"
          type="button"
          onClick={item.onClick}
          className={item.className}
        >
          {item.content}
        </MenuItem>
      );

    case "link":
      return (
        <MenuItem
          key={item.id}
          as={Link}
          to={item.href}
          className={item.className}
        >
          {item.content}
        </MenuItem>
      );
    case "component":
      return (
        <MenuItem key={item.id} as="div" className={item.className}>
          {item.content}
        </MenuItem>
      );

    default:
      return null;
  }
}
