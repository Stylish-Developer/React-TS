
//  -- method 1 - standard
/* export enum macProducts {
    m1 = "Macbook Pro 13'inch",
    m2 = "MacBook Air 15'inch",
    m2pro = "MacBook Pro 14'inch",

}

interface containerProps {
    display: string,
    justifyContent: string,
    alignItems: string
} */
//-----------------------------------------------------------------------
// -- method 2 - enum as props

export enum macProducts {
    m1 = "MacBook Pro 13'inch",
    m2 = "MacBook Air 15'inch",
    m2pro = "MacBook Pro 14'inch",

}

interface containerProps {
    display: string,
    justifyContent: string,
    alignItems: string
}

interface Props {
    model: macProducts
}

const Enumconept = (props: Props) => {

    const { model } = props;
    // -- internel style
    const containerStyle: containerProps = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }

    const handleClick = (product: string): void => {
        alert(`Your order ${product} is placed succesfully`);
    }

    return (
        <>
            <h5>ENUM CONCEPT</h5>
            <div style={containerStyle}>
                <button type="button" onClick={() => handleClick(macProducts.m1)}>{macProducts.m1}</button>
                <button type="button" onClick={() => handleClick(macProducts.m2)}>{macProducts.m2}</button>
                <button type="button" onClick={() => handleClick(macProducts.m2pro)}>{macProducts.m2pro}</button>

            </div>
            <h1>Your choosed model {model}</h1>
        </>
    )
}

export default Enumconept;