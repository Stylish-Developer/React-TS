
// -- props types
interface Props {
    name: string
    age: number
    email: string
    designation: string

}

const Person = (props: Props) => {
    const { name, age, email, designation } = props;
    return (
        <>
            <div>
                <p>Name {name}</p>
                <p>Age {age}</p>
                <p>Email {email}</p>
                <p>Designation {designation}</p>
            </div>
        </>
    )
}

export default Person;