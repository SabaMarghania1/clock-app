import sun from '../assets/shared/icon-sun.svg';
import moon from '../assets/shared/icon-moon.svg';

import iconArrow from '../assets/shared/icon-arrow-down.svg';

export default function Time({handleExpanded, expanded}) {
  const sectionStyle = expanded ? {marginTop: '67px'} : {};
  return (
    <section className="time-container" style={sectionStyle}>
      <div className="time-range">
        <img src={sun} alt="image" />
        <p>GOOD MORNING</p>
      </div>
      <p className="time">
        11:37 <span>BST</span>
      </p>
      <p className="location">IN LONDON, UK</p>

      <span className="more" role="button" onClick={handleExpanded}>
        <span className="text">MORE</span>
        <div className={expanded ? 'circle expanded' : 'circle'}>
          <img src={iconArrow} alt="arrow" className="arrow" />
        </div>
      </span>
    </section>
  );
}
