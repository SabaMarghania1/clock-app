// https://api.ipbase.com/v2/info?apikey=ipb_live_XPsrYmD0Hfwe319OfuuM4DJd9bVD5zty8fa8ucJr&language=en&ip=109.172.197.23
import {useState} from 'react';
import Main from './components/Main';
import Quotes from './components/Quotes';
import Time from './components/Time';
import Info from './components/Info';

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(prev => !prev);
  };
  return (
    <>
      <Main>
        {!expanded && <Quotes />}
        <Time expanded={expanded} handleExpanded={handleExpanded} />
        {expanded && <Info />}
      </Main>
    </>
  );
}

export default App;
