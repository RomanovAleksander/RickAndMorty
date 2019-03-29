import { NotFound } from "../components/NotFound";
import { App } from '../components/App'
import { CharacterItem } from "../components/CharacterItem";
import {CharacterList} from "../components/CharacterList";

export const routes = [
    {
        path: '',
        component: CharacterList
    },
    {
        path:'item/:id',
        component: CharacterItem,
    },
    {
        path: '**',
        component: NotFound,
    }
];