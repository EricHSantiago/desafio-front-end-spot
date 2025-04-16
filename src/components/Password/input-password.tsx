'use client'

import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { InputPasswordViewProps } from "./input-password.type"

export default function InputPasswordView({
    label,
    className = "",
    ...rest
}: InputPasswordViewProps) {
    const [showPassword, setShowPassword] = useState(false)

    const baseClasses =
        "w-full px-4 py-2 pr-10 border rounded-md outline-none transition focus:ring-2 border-[#9E9E9E] focus:ring-blue-500"

    return (
        <div className="w-full space-y-1">
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    {...rest}
                    type={showPassword ? "text" : "password"}
                    className={`${baseClasses} ${className}`}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
            </div>
        </div>
    )
}
