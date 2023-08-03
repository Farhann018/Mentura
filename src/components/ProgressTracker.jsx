import React, { useState } from 'react';

const ProgressTracker = ({question}) => {

  const circlesCount = 4; // Change this to match the number of circles you have.

  // State to manage the current active step
  const [currentActive, setCurrentActive] = useState(1);

  // Function to update the progress and circles
  const update = () => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
      if (index < currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    const progress = ((currentActive - 1) / (circlesCount - 1)) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
  };

  const handleNext = () => {
    setCurrentActive((prev) => (prev < circlesCount ? prev + 1 : circlesCount));
  };

  const handlePrev = () => {
    setCurrentActive((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="progress-tracker ">
      <div className="circle-container">
        {Array.from({ length: circlesCount }).map((_, index) => (
          <div key={index} className={`circle ${question > index + 1 ? 'bg-blue-500' : ''}`}>
            {index + 1}
          </div>
        ))}
      </div>
      {/* <button id="prev" onClick={handlePrev}>Prev</button>
      <button id="next" onClick={handleNext}>Next</button> */}
    </div>
  );
};
export default ProgressTracker;
