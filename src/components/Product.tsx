import { ChangeEvent, useState } from "react";
import Input from "./input";

const Product = () => {
    const [pName, setPName] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPName(e.target.value)
    }

    return (
        <>
            <h2>ONLINE STORE</h2>
            <Input placeholder="write down your product name" value={pName} onChange={handleChange} />
            <h1>Product name: {pName}</h1>
        </>
    )
}

export default Product;