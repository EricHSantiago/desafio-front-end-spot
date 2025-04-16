import { InputViewProps } from "./input.type"

export default function InputView({
    label,
    className = "",
    ...rest
}: InputViewProps) {
    const baseClasses =
        "w-full px-4 py-2 pr-10 border rounded-md outline-none transition focus:ring-2 border-[#9E9E9E] focus:ring-blue-500"

    return (
        <div className="w-full space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <input
                {...rest}
                className={`${baseClasses} ${className}`}
            />
        </div>
    )
}
