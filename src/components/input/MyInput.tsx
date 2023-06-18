import { ChangeEvent } from "react";
import '../input/input.css';

// -- props type
interface Props {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MyInput = (props: Props) => {
    const { placeholder, value, onChange } = props;

    //You can convert the value to a string using the toString() method.
    const inputClassName = 'input-style';
    return (
        <input placeholder={placeholder} value={value} onChange={onChange} className={inputClassName.toString()} />
    )
}

export default MyInput;