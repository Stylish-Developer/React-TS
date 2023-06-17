import { ChangeEvent } from "react";
import MyInput from "./MyInput";

// -- props types
interface Props {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input = (props: Props) => {
    const { placeholder,value,onChange } = props;
    return (
        <>
            <MyInput placeholder={placeholder} value={value} onChange={onChange}/>
        </>
    )
}

export default Input;