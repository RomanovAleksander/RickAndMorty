import { NotFound } from "../Components/NotFound";
import { App } from '../Components/App'
import { CharacterItem } from "../Components/CharacterItem";
import {CharacterList} from "../Components/CharacterList";

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