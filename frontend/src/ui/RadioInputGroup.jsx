import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs, disabled }) {
  const { name, options } = configs;

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-center gap-x-8 ">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            label={label}
            value={value}
            id={value}
            name={name}
            register={register}
            watch={watch}
            errors={errors}
            disabled={disabled}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-red-600 absolute right-0 -bottom-4 text-xs">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
export default RadioInputGroup;
