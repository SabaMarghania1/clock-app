import React, {useState} from 'react';
import Main from './components/Main';
import Quotes from './components/Quotes';
import Time from './components/Time';
import Info from './components/Info';
import useFetch from './useFetch';

function App() {
  const [expanded, setExpanded] = useState(false);

  const {data: timeInfo, error: timeError} = useFetch(
    'https://worldtimeapi.org/api/timezone/Asia/Tbilisi',
    60000
  );
  const {client_ip, datetime} = timeInfo || {};

  // const {data: ipInfo, error: ipError} = useFetch(
  //   `https://api.ipbase.com/v2/info?apikey=ipb_live_CZlgiW8TyVutuY55pjH0YefyOoxyYoadkB8YyRDZ&language=en&ip=${client_ip}`
  // );

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
          // clientInfo={clientInfo }
          clientInfo={['Georgia', 'Tbilisi']}
        />
      </Main>
      {expanded && <Info info={timeInfo} />}
    </>
  );
}

export default App;
