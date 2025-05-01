import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    axios.get('https://date.nager.at/api/v3/publicholidays/2025/US')
      .then(res => setHolidays(res.data));
  }, []);

  return (
    <div>
      <h1>Holidays in 2025 (US)</h1>
      <ul>
        {holidays.map((holiday, i) => (
          <li key={i}>{holiday.date} – {holiday.localName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
