// 'use client';

// import React, { useEffect, useState } from 'react';

// interface LoaderProps {
//   onFinish: () => void;
// }

// export default function Loader({ onFinish }: LoaderProps) {
//   const [progress, setProgress] = useState<number>(0);
//   const [isVisible, setIsVisible] = useState<boolean>(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setIsVisible(false);
//             onFinish();
//           }, 500);
//           return 100;
//         }
//         return prevProgress + Math.random() * 30 + 5;
//       });
//     }, 300);

//     return () => clearInterval(interval);
//   }, [onFinish]);

//   if (!isVisible) return null;

//   return (
//     <div
//       className={`fixed inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-700 z-50 ${
//         isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}
//     >
//       {/* Logo / Brand */}
//       <div className="mb-12">
//         <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
//           off<span className="text-[#EB6200]">-white</span>
//         </h1>
//       </div>

//       {/* Loading Text */}
//       <div className="mb-8">
//         <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide">
//           Loading<span className="animate-pulse">...</span>
//         </p>
//       </div>

//       {/* Progress Bar */}
//       <div className="w-80 md:w-96 h-1 bg-gray-200 rounded-full overflow-hidden shadow-sm">
//         <div
//           className="h-full bg-gradient-to-r from-[#EB6200] to-[#FF8C00] transition-all duration-300 ease-out rounded-full"
//           style={{
//             width: `${Math.min(progress, 100)}%`,
//             boxShadow: '0 0 20px rgba(235, 98, 0, 0.5)',
//           }}
//         />
//       </div>

//       {/* Progress Percentage */}
//       <div className="mt-8">
//         <p className="text-xs md:text-sm text-gray-500 font-semibold tracking-widest">
//           {Math.round(progress)}%
//         </p>
//       </div>

//       {/* Optional: Loading Text */}
//       <div className="mt-16 text-center">
//         <p className="text-xs text-gray-400 tracking-wide">
//           Preparing your experience...
//         </p>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 3000); // Adjust duration as needed (3 seconds)

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-700 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Logo / Brand */}
      {/* <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
          off<span className="text-[#EB6200]">-white</span>
        </h1>
      </div> */}

      {/* Grid Loader Spinner */}
      <div className="mb-12">
        <GridLoader color="#EB6200" size={15} margin={8} speedMultiplier={1} />
        {/* <PropagateLoader color="#EB6200" size={15} margin={8} speedMultiplier={1} /> */}
      </div>

      {/* Loading Text */}
      {/* <div>
        <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div> */}

      {/* Optional: Loading Message */}
      {/* <div className="mt-12 text-center">
        <p className="text-xs text-gray-400 tracking-wide">
          Preparing your experience...
        </p>
      </div> */}
    </div>
  );
}
