import EventCard from "../eventCard/eventCard";
import "./events.css";
const Events = (props) => {
    return(
        <div className="events-wrapper">
            <div className="events-available">250+ Events</div>
            <div className="events-card-wrapper">
                {props.eventData.map((result) => (
                    <EventCard key={result.event_id} data = {result} />
                ))}
            </div>
           
        </div>
    );
}
export default Events; 