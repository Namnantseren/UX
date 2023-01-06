import './Style/Style.css'
import '../Data/data'

export default function Card(props) {
    return (
        <div className='allCard'>
                <div className="card">
                    <div className='cardImage'>
                        <img src={props.item.image} alt="img"/>
                    </div>
                    <div className=''>
                        <div className="col">
                            <p className="nov">NOV 23 2020</p>
                            <p className="thisWay">{props.item.title}</p>
                            <p className="quick">{props.item.description}</p>
                            <p className="read">READ MORE</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}