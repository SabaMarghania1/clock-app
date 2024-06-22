import sun from '../assets/shared/icon-sun.svg';
import moon from '../assets/shared/icon-moon.svg';

import iconArrow from '../assets/shared/icon-arrow-down.svg';
import {useEffect} from 'react';

export default function Time({handleExpanded, expanded, datetime, clientInfo}) {
  const date = new Date(datetime);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const formatMinutes = (minutes < 10 ? '0' : '') + minutes;
  const [country, city] = clientInfo;

  const timeRangeString =
    hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  const sectionStyle = expanded ? {marginTop: '67px'} : {};

  useEffect(() => {
    const theme = hour >= 6 && hour < 21 ? 'day' : 'night';
    document.documentElement.setAttribute('data-theme', theme);
  }, [hour]);

  return (
    <section className="time-container" style={sectionStyle}>
      <div className="time-range">
        <img src={hour < 18 || hour <= 5 ? sun : moon} alt="image" />
        <p>{timeRangeString}</p>
      </div>
      <p className="time">
        {hour}:{formatMinutes} <span>BST</span>
      </p>
      <p className="location">
        IN {city}, {country}
      </p>

      <span className="more" role="button" onClick={handleExpanded}>
        <span className="text">MORE</span>
        <div className={expanded ? 'circle expanded' : 'circle'}>
          <img src={iconArrow} alt="arrow" className="arrow" />
        </div>
      </span>
    </section>
  );
}
