import './App.css';
import Events from './components/events/events';
import Header from './components/header/header';
import Search from './components/search/search';
// import Footer from './components/footer/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [eventData, setEventData] = useState([]);
  const [eventLimit, setEventLimit] = useState(16);
  const [eventStatus, setEventStatus] = useState();
  const [eventSearch, setEventSearch] = useState([]);
  useEffect(()=> {
    const fetchEventsData = async () => {
      const result = await axios("https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?",{
        params: {
          limit: `${eventLimit}`,
          search_query: `${eventSearch}`,
          past_events: `${eventStatus}`
        }
      });
      setEventData(result.data.events);
    }
    fetchEventsData();
  },[eventLimit, eventStatus, eventSearch]);

  return (
    <div className="app">
      <Header/>
      <Search 
        getSearchEvent = { (value)=> setEventSearch(value)}
        getEventStatus = { (status)=> setEventStatus(status)}
      />
      <Events eventData = {eventData}/>
      <div className="load-more-events">
            <hr className="line-wrapper"/>
            <div className="cta-wrapper"><button className="load-more-cta" onClick={()=> setEventLimit(eventLimit + 12)}> Load More </button></div>
      </div>
    </div>
  );
}

export default App;
