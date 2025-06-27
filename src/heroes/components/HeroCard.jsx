import { Link } from "react-router-dom";


export const CharactersByHero = ({ characters, alter_ego }) => {
    if (alter_ego === characters) return <></>;

    return <p className="text-muted">{characters}</p>;
}


export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,

}) => {

const heroImageUrl = `./assets/heroes/${id}.jpg`;
  return (
    <div className="col">
        <div className="card">
        <div className="row no-gutters">
            <div className="col-4">
                <img src={heroImageUrl} className="card-img" alt={superhero} />
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
        <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`} className="btn btn-outline-primary">   
                    More info...
                    </Link>
                </div>
            </div>
        </div>
            <div className="card-footer">
                <small className="text-muted">{publisher}</small>
            </div>
        </div>
       
                

        </div>


  )
}

