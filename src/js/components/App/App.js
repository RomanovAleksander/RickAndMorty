import Component from "../../framework/Component";
import {CharacterList} from "../CharacterList";

export default class App extends Component{
    constructor(host, props) {
        super(host, props);
        this.props = props;
    }

    render(){
        return [
            // {
            //     tag: CharacterList,
            //     props: {}
            // },
            this.props.routerOutlet
        ];
    }
}

