import { useMemo } from "react";
import { heroes } from "../data/heroes"
import { getHeroesPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

export const HeroList = ({publisher}) => {
    //este metodo no necesita de getHeroesPublisher
    //const heroes2 = heroes;
    //console.log(heroes2);


    //Esto se puede optimizar usando MEMO
    // en caso la lista de heroes sea muy grande
    //por el momento no es necesario
    const heroes = useMemo(()=>getHeroesPublisher(publisher),[publisher]); 


    return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {   
            //este metodo no necesita de getHeroesPublisher
            // heroes2.filter(hero =>hero.publisher === publisher)
            //         .map(hero =>(
            //         <li key={hero.id}>{hero.id}</li>
            //         ))
            heroes.map(hero =>(
                // <li key={hero.id}>{hero.id}</li>
                <HeroCard
                    key={hero.id}
                    {...hero}
                />
                ))
        }
    </div>

    )
}
