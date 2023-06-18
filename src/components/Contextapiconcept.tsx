import { useContext } from "react";
import { AppContext } from "./context";

const ContextApiConcept = () => {
    const data = useContext(AppContext);

    return (
        <>
            <h2>CONTEXT API CONCEPT</h2>
            <p style={{ fontSize: '36px' }}>Employee Name: {data?.employeeName}</p>
        </>
    )
}

export default ContextApiConcept;