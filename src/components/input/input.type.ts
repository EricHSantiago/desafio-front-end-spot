import { InputHTMLAttributes } from "react"

export interface InputViewProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}