import Component from "../../framework/Component";
import RickandmortyAPI from "../../Services/RickandmortyAPI";

export default class CharacterList extends Component {
    constructor(host, props) {
        super(host, props);

        RickandmortyAPI.getData().then(data => {
            this.updateState({result: data.results,});
        });
    }

    init() {
        this.state = {
            result: [],
        }
    };

    render() {
        console.log(this.state);
        if (!this.state) {
            return [
                {
                    tag: 'H2',
                    content: 'Loading....'
                }
            ]
        } else return this.state.result.map((item) => (
                {
                    tag: 'a',
                    classList: ['card'],
                    attributes: [
                        {
                            name: 'href',
                            value: `#/item/${item.id}`
                        },
                    ],
                    children: [
                        {
                            tag: 'div',
                            classList: ['card-header'],
                            children: [
                                {
                                    tag: 'img',
                                    classList: ['card-img'],
                                    attributes: [
                                        {
                                            name: 'src',
                                            value: item.image,
                                        },
                                    ]
                                },
                                {
                                    tag: 'div',
                                    classList: ['card-title'],
                                    children: [
                                        {
                                            tag: 'h2',
                                            content: item.name,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                }
            ))
    }
}


