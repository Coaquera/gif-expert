import { Navigate, useNavigate, useParams } from "react-router"
import { getByHeroId } from "../helpers";
import { useMemo } from "react";


export const HeroPage = () => {
  const {theId} = useParams();
  const navigate = useNavigate();

  //dependencia es el id
  //cuando cambe el id, se dispara de nuevo
  const hero = useMemo(()=>getByHeroId(theId),[theId]);//getByHeroId(theId);

  //console.log(hero);

  const onNavigateBack = () => {
    //esto va a vavegar al historial anterior
    //ademas si se carga directo a la descripcion de un heroe
    // puede sacarnos de la pagina web
    navigate(-1);

    //podemos hacer una condicion que nos indique que horeo 
    //es asi podriamos regresar a la route de 'dc' o 'marvel'
  }

  if(!hero) {
   return <Navigate to="/marvel" /> 
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${ theId }.jpg` } 
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__bounce"
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )

}
