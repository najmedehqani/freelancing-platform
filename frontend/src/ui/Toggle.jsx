import { Switch } from "@headlessui/react";

function Toggle({ label, enabled, onChange }) {
  return (
    <Switch.Group>
      <div className="flex items-center gap-x-2">
        <Switch
          checked={enabled}
          onChange={onChange}
          className={`${
            enabled ? "bg-primary-500" : "bg-secondary-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none  focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
          />
        </Switch>
        <Switch.Label>{label}</Switch.Label>
      </div>
    </Switch.Group>
  );
}
export default Toggle;
