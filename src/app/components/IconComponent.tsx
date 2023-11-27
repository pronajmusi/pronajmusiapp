import { LiaLightbulb } from "react-icons/lia"
import { AiOutlineShop } from "react-icons/ai"
import { BsTag } from "react-icons/bs"
import { AddIconKeys } from "../constants/contants";

export default function IconComponent({ iconKey }: any) {
    const iconMapping: Record<AddIconKeys, any> = {
        [AddIconKeys.LIALIGHTBULB]: <LiaLightbulb size={80} />,
        [AddIconKeys.AIOUTLINESHOP]: <AiOutlineShop size={80} />,
        [AddIconKeys.BSTAG]: <BsTag size={80} />,
    };

    const selectedIcon = iconMapping[iconKey as AddIconKeys] || null;

    return (
        <div>{selectedIcon}</div>
    )
}