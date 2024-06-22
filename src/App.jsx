import React, {useState} from 'react';
import Main from './components/Main';
import Quotes from './components/Quotes';
import Time from './components/Time';
import Info from './components/Info';
import useFetch from './useFetch';

function App() {
  const [expanded, setExpanded] = useState(false);

  const {data: timeInfo, error: timeError} = useFetch(
    'http://worldtimeapi.org/api/timezone/Asia/Tbilisi'
  );
  const {client_ip, datetime} = timeInfo || {};

  const {data: clientInfo, error: clientError} = useFetch(
    'https://api.ipbase.com/v2/info?apikey=ipb_live_XPsrYmD0Hfwe319OfuuM4DJd9bVD5zty8fa8ucJr&language=en&ip=109.172.197.23'
  );

  const handleExpanded = () => {
    setExpanded(prev => !prev);
  };

  return (
    <>
      <Main>
        {!expanded && <Quotes />}
        <Time
          expanded={expanded}
          handleExpanded={handleExpanded}
          datetime={datetime}
          ipAddress={client_ip}
        />
        {expanded && <Info info={timeInfo} />}
      </Main>
    </>
  );
}

export default App;
