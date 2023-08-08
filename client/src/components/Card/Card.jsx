import "./Card.css";

const Card = ({cats}) => {

    const allCats = cats.length > 0 ? cats : [];
    let images = "https://cdn2.thecatapi.com/images/";
    return(
        <div className="Cards">
            {
                allCats.map(cat => (
                    <div className="card" key={cat.id}>
                        <h2>{cat.name}</h2>
                         <img src={`${images}${cat.reference_image_id}.jpg`} alt={cat.name} />
                         <h2>{cat.temperament}</h2>
                         <h2>intelligence : {cat.intelligence}</h2>
                         <h4>Life: {cat.life_span}</h4>
                         <h2>{cat.origin}</h2>
                    </div>
                ))
            }
        </div>
    )
};

export default Card;