export default function Info({info}) {
  const {timezone, day_of_year, day_of_week, week_number} = info;
  return (
    <section className="info-container">
      <ul className="stats">
        <li className="stats-item">
          <p>CURRENT TIMEZONE</p>
          <span>{timezone}</span>
        </li>
        <li className="stats-item">
          <p>DAY OF THE YEAR</p>
          <span>{day_of_year}</span>
        </li>
        <li className="stats-item">
          <p>DAY OF THE WEEK</p>
          <span>{day_of_week || 7}</span>
        </li>
        <li className="stats-item">
          <p>WEEK NUMBER</p>
          <span>{week_number}</span>
        </li>
      </ul>
    </section>
  );
}
