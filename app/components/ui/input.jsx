import { cn } from "@/lib/utils"

const inputStyle = {
  default:
    "placeholder:font-body-s-normal placeholder:text-base-soft-content/75 selection:bg-custom-primary-soft selection:text-custom-primary-soft-content bg-base-100 border border-base-300 max-lg:min-h-12 h-10 rounded-md shadow-xs shadow-base-content/10 px-3 py-1 font-body-base-normal",
  file: "file:text-base-content file:h-7 file:min-h-0", // vedi custom css
}

function Input({ className, type, ...props }) {
  return (
    <input
      className={cn(
        `flex w-full transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${inputStyle.default}`,
        "focus-state",
        "aria-invalid:ring-custom-error aria-invalid:border-custom-error-soft",
        `${inputStyle.file}`,
        className
      )}
      data-slot='input'
      type={type}
      {...props}
    />
  )
}

export { Input }
