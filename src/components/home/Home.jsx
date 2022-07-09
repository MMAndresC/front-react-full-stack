import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPremiereFilms } from "../../redux/films/films.actions";
import "./Home.scss";

const Home = () => {
    const { film } = useSelector(state => state.film);
    const { isPremiere } = useSelector(state => state.film);
    const dispatch = useDispatch();
    //Lo pongo asi porque solo quiero que haga el dispatch cuando cargue la pagina por 1º vez
    // y cuando venga de administracion porque film contendra las inactivas y solo queremos mostrar las activas
    useEffect(() => {
        if (film.length === 0){
            dispatch(getPremiereFilms());
        }
        if(!isPremiere){
            dispatch(getPremiereFilms());
        }
        // eslint-disable-next-line
    }, [isPremiere, film]);
    return (
        <>
            <h1 className="SectionTitle">UPGRADE CINES</h1>
            {film.length > 0 &&
                film.map((fil, index) => {
                    return (
                        <section key={fil._id}>
                            <Link to={`/details/${index}`} >
                                <h2>{fil.name}</h2>
                                <img src={fil.poster} alt={fil.name} />
                            </Link>
                        </section>

                    );
                })
            }
        </>
    );
}

export default Home;