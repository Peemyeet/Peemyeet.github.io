// Snowfall effect
(function () {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const numberOfSnowflakes = 100;
  
    // Create snowflakes
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.innerHTML = '❄'; // Snowflake character, you can use other symbols like 🌨️ or images
      snowflakesContainer.appendChild(snowflake);
  
      // Set random properties for each snowflake
      const size = Math.random() * 10 + 5; // Random size between 5px and 15px
      snowflake.style.fontSize = `${size}px`;
  
      const startPositionX = Math.random() * window.innerWidth; // Random starting horizontal position
      snowflake.style.left = `${startPositionX}px`;
  
      const animationDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
      snowflake.style.animationDuration = `${animationDuration}s`;
  
      const delay = Math.random() * 5; // Random delay to stagger the start times
      snowflake.style.animationDelay = `${delay}s`;
  
      // Set random horizontal movement (drift) to create a more realistic effect
      const drift = Math.random() * 2 - 1; // Random horizontal drift between -1 and 1
      snowflake.style.animationName = 'fall';
      snowflake.style.animationTimingFunction = 'linear';
    }
  
    // Create snowflakes on page load
    for (let i = 0; i < numberOfSnowflakes; i++) {
      createSnowflake();
    }
  })();
  
