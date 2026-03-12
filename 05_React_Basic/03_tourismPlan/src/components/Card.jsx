import { useState } from "react";
function Card({id,image,name,info,price,removeTour}){

    const [readMore, setReadMore] = useState(false);
    const desc=readMore ? info : `${info.substring(0,200)}...`;
    const readMoreHandler=()=>{
        setReadMore(!readMore);
    }
    return(
        <div className="card">
            <img src={image} alt={name} className="image"/>
            <div className="tourInfo">
                <div className="tourDetails">
                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>
                <div className="description">
                    {desc}
                    <span className="readMore" onClick={readMoreHandler}>
                        {readMore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>
            <button onClick={()=>removeTour(id)} className="btnRed">
                Not Interested
            </button>
        </div>
    );
}
export default Card;