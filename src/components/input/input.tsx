import { InputViewProps } from "./input.type"

export default function InputView({
    label,
    className = "",
    ...rest
}: InputViewProps) {
    const baseClasses =
        "w-full px-4 py-2 pr-10 border border-[#9E9E9E] rounded-md transition focus:outline-none focus:ring-2 focus:ring-[#1447e6] focus:border-[#1447e6]"

    return (
        <div className="w-full space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <input
                type="text"
                {...rest}
                className={`${baseClasses} ${className}`}
            />
        </div>
    )
}
