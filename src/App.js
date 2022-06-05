import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Events from './components/events/events';
import Header from './components/header/header';
import Search from './components/search/search';
import LoadMoreCta from './components/loadMoreCta/loadMoreCta';
function App() {
  const [eventData, setEventData] = useState([]);
  const [eventLimit, setEventLimit] = useState(16);
  const [eventStatus, setEventStatus] = useState();
  const [eventSearch, setEventSearch] = useState([]);
  const [eventCount, setEventCount] = useState();
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
      setEventCount(result.data.count);
    }
    fetchEventsData();
  },[eventLimit, eventStatus, eventSearch, eventCount]);

  return (
    <div className="app">
      <Header/>
      <Search 
        getSearchEvent = { (value)=> setEventSearch(value)}
        getEventStatus = { (status)=> setEventStatus(status)}
      />
      <Events eventData = {eventData} eventCount = {eventCount}/>
      <LoadMoreCta 
        eventLimit = {eventLimit}
        loadMoreEvents = {(limit) => setEventLimit(limit)}
      />
    </div>
  );
}

export default App;
