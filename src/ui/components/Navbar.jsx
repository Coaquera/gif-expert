import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { useContext } from 'react';

export const Navbar = () => {


//aparte la linea de user?.name me dice que si es nulo
//no continue caso contrario si tiene un valor
// que continue

    const {user, logout,logged} = useContext(AuthContext);

    console.log("detalles",user);
    const navigate = useNavigate();
    

    //replace borra el historial anterior
    const onLogout = () =>{

        logout();

        navigate('/login',{
            replace:true,
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link${isActive? 'active':''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link${isActive? 'active':''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link${isActive? 'active':''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>


                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                       {logged && user?.name}
                    </span>
                    <button 
                        onClick={onLogout}
                        className='nav-item nav-link btn'>
                        Logout
                    </button>
                    {/* <NavLink 
                        className={({isActive})=>`nav-item nav-link${isActive? 'active':''}`}
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}