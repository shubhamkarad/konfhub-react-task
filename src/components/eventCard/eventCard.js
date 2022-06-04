import eventCardImg from "../../assets/event-card-img.png";
import podium from "../../assets/icons/podium.svg";
import info from "../../assets/icons/info.svg";
import indicator from "../../assets/icons/indicator.svg";
import "./eventCard.css";
const EventCard = (props) => {
    return(
        <div className="card">
            <div className="indicator-img">
                <img src={indicator} alt="card-indicator"></img>
            </div>
            <div className="event-card-img">
                <img src={eventCardImg} alt="event"></img>
            </div>
            <div className="event-card-desc">
            <div className="event-card-title">{props.data.name}</div>
            <div className="event-card-details">
                <div className="event-card-info">
                    <img src={podium} alt="event-venue"/>
                    <p className="event-venue">Raddison Blue</p>
                </div>
                <div className="event-card-info">
                    <img src={info} alt="event-venue"/>
                    {props.data.is_free ? <p>Free |</p> : <p>Paid |</p>}
                    {props.data.is_virtual ? <p>Online</p> : <p>Offline</p>}
                </div>
            </div>
            </div>
        </div>
    );
}
export default EventCard;