// import React, { useState, useEffect } from 'react';
// import qibla from 'qibla-direction';

// const QiblaDirection = () => {
//   const [direction, setDirection] = useState(null);

//   useEffect(() => {
//     const getQiblaDirection = async () => {
//       const { data } = await qibla({ latitude: 21.4225, longitude: 39.8262 }); // replace with your own coordinates
//       setDirection(data.direction);
//     };
//     getQiblaDirection();
//   }, []);

//   return (
//     <div>
//       {direction && (
//         <p>The direction of the Qibla is: {direction} degrees from the North.</p>
//       )}
//     </div>
//   );
// };

// export default QiblaDirection;
