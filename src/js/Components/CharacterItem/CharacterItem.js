import Component from "../../framework/Component";
import RickandmortyAPI from "../../Services/RickandmortyAPI";
import img from "../../../images/logo.png"

export default class CharacterItem extends Component {
    constructor(host, props) {
        super(host, props);
        this.id = this.props.id;

        RickandmortyAPI.getItem(this.id).then(data => {
            this.updateState({item: data,});
            console.log(this.state.item);
        });
    }

    init() {
        this.state = {
            item: [],
        }
    };

    render() {
        const item = this.state.item;

        if (!this.state) {
            return [
                {
                    tag: 'H2',
                    content: 'Loading....'
                }
            ]
        } else return [
            {
                tag: 'div',
                classList: ['card-wrapper'],
                children: [
                    {
                        tag: 'a',
                        content: 'X',
                        classList: ['close'],
                        attributes: [
                            {
                                name: 'href',
                                value: `#/`
                            },
                        ],
                    },
                    {
                        tag: 'a',
                        content: 'PREV',
                        classList: ['prev'],
                        attributes: [
                            {
                                name: 'href',
                                value: `#/item/${item.id-1}`
                            },
                        ],
                    },
                    {
                        tag: 'div',
                        classList: ['card'],
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
                                                value: (item.image) ? item.image : img,
                                            },
                                        ]
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['card-title'],
                                        children: [
                                            {
                                                tag: 'h2',
                                                content: (item.name) ? item.name : '-',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                tag: 'div',
                                classList: ['card-info'],
                                children: [
                                    {
                                        tag: 'div',
                                        classList: ['card-info_container'],
                                        children: [
                                            {
                                                tag: 'span',
                                                content: 'STATUS',
                                            },
                                            {
                                                tag: 'p',
                                                content: (item.status) ? item.status : '-',
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['card-info_container'],
                                        children: [
                                            {
                                                tag: 'span',
                                                content: 'SPECIES',
                                            },
                                            {
                                                tag: 'p',
                                                content: (item.species) ? item.species : '-',
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['card-info_container'],
                                        children: [
                                            {
                                                tag: 'span',
                                                content: 'GENDER',
                                            },
                                            {
                                                tag: 'p',
                                                content: (item.gender) ? item.gender : '-',
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['card-info_container'],
                                        children: [
                                            {
                                                tag: 'span',
                                                content: 'ORIGIN',
                                            },
                                            {
                                                tag: 'p',
                                                content: (item.origin) ? item.origin.name : '-',
                                            },
                                        ],
                                    },
                                    {
                                        tag: 'div',
                                        classList: ['card-info_container'],
                                        children: [
                                            {
                                                tag: 'span',
                                                content: 'LAST LOCATION',
                                            },
                                            {
                                                tag: 'p',
                                                content: (item.location) ? item.location.name : '-',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        tag: 'a',
                        content: 'NEXT',
                        classList: ['next'],
                        attributes: [
                            {
                                name: 'href',
                                value: `#/item/${item.id+1}`
                            },
                        ],
                    },
                ],
            },
        ]
    }
}


