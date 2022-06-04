import logo from '../../assets/logo.svg';
import eventsBanner from '../../assets/events-banner.svg';
import "./header.css";
const Header = () => {
    return(
        <div className="header">
            <div className="header-image">
                <img src={logo} alt="konfhub-logo"></img>
            </div>
            <div className="events-container">
                <div className="events-description">
                    <h1>Events</h1>
                    <p className="event-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus 
                        non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
                        etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                    </p>
                </div>
                <div className="events-banner-img">
                    <img src={eventsBanner} alt="events banner"></img>
                </div>
            </div>
        </div>
    );
}
export default Header;