// import React, { useState, useEffect } from 'react';

// function QuranReader() {
//   const [quranicText, setQuranicText] = useState('');

//   useEffect(() => {
//     fetch('/api/quran/1')
//       .then(response => response.json())
//       .then(data => {
//         setQuranicText(data.quranicText);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>First Para of Quranic Text</h1>
//       <p>{quranicText}</p>
//     </div>
//   );
// }

// export default QuranReader;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuranReader() {
  const [para1, setPara1] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api');
        setPara1(response.data.data.ayahs);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Quran Para 1</h1>
      <ul>
        {para1.map((ayah) => (
          <li key={ayah.numberInSurah}>{ayah.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuranReader;

