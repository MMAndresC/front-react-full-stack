import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPremiereFilms } from "../../redux/films/films.actions";
import "./Home.scss";

const Home = () => {
    const { film } = useSelector(state => state.film);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPremiereFilms());
    }, []);
    return (
        <>
            <h1 className="SectionTitle">UPGRADE CINES</h1>
            {film.length > 0 &&
                film.map((fil) => {
                    return (
                        <section key={fil._id}>
                            <h2>{fil.name}</h2>
                            <img src={fil.poster} alt={fil.name}/>
                        </section>
                    );
                })
            }
        </>
    );
}

export default Home;