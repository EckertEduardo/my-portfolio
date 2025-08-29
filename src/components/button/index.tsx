import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    customClassName?: string;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
    const baseClass = 'bg-purple-600 dark:bg-purple-900 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 transition-all';
    const hoverClass = !props.disabled ? 'hover:bg-purple-800 dark:hover:bg-purple-600' : '';
    const disabledClass = props.disabled ? 'disabled:opacity-50' : '';

    return (
        <button className={`${baseClass} ${hoverClass} ${disabledClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
