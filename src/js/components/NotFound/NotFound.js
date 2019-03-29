import Component from "../../framework/Component";

export default class NotFound extends Component {

    constructor(host, props) {
        super(host, props);
    }

    render() {
        return [
            {
                tag: 'div',
                classList: 'not-found',
                content: 'Person is not found'
            }
        ]
    }
}