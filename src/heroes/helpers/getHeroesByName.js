import { heroes } from "../data/heroes";

export const getHeroesByName = (name='') => {

    name = name.toLocaleLowerCase().trim();

    if (!name){
        return [];
    }
    
    //con el fin busca un elemento no esto []
    //entonces da un error ya que en la properties
    //cuando desestructuramos tenemos un error por
    //que recimos esto {id,....}
    //return heroes.find(hero => hero.superhero===name);

    //esto solo devuelve un elemento
    //return heroes.filter(hero => hero.superhero ===name);

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    );
}

