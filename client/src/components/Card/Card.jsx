import "./Card.css";

const Card = ({cats}) => {

    const allCats = cats.length > 0 ? cats : [];

    return(
        <div className="Cards">
            {
                allCats.map(cat => (
                    <div className="card" key={cat.id}>
                        <h2>{cat.name}</h2>
                         <img src={cat.reference_image_id} alt={cat.name} />
                         <h2>{cat.temperament}</h2>
                         <h4>{cat.life_span}</h4>
                         <h2>{cat.origin}</h2>
                    </div>
                ))
            }
        </div>
    )
};

export default Card;