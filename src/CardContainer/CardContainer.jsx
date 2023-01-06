import data from "../Data/data";
import Card from "../Card/Card";
import "./Style/CardContainer.css"

export default function CardContainer(props) {
    console.log(data);
    return (
        <div className="post-map">
            {data.map((item, index) => (
                <div key={index} className="postinner">
                    <Card item={item}/>
                </div>
            ))}
        </div>
    )
}