import { IconType } from 'react-icons';

type TechBadgeProps = {
    name: string;
    Icon?: IconType;
}

export const TechBadge = ({ name, Icon }: TechBadgeProps) => {
    return (
        <span className="flex items-center text-purple-200 dark:text-purple-400 bg-purple-700/80 dark:bg-purple-900/80 text-sm py-1 px-3 rounded-lg">
            {Icon && <Icon className="mr-2" />}
            {name}
        </span>
    )
}
