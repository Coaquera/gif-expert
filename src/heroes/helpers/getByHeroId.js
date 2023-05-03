import { heroes } from "../data/heroes"

export const getByHeroId = (id) => {

    return heroes.find(hero => hero.id===id);
    
}
