import { Component } from "react"

// -- props type
interface Props {
    job: string;
}
interface State {
    name: string
}
class ClassComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: 'Gowtham'
        }
    }
    render() {
        const { name } = this.state;
        const { job } = this.props;

        return (
            <>
                <h3>Myname: {name}</h3>
                <h3>Job:  {job}</h3>
            </>
        )
    }
}

export default ClassComponent;