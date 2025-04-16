import { ButtonsProps } from "./button-form.type";

export default function Button({ children }: ButtonsProps) {
    return (
        <button
            type="submit"
            className="w-full h-[48px] bg-blue-600 hover:bg-blue-700 text-white py-2 font-medium transition-colors"
        >
            {children}
        </button>
    );
}

