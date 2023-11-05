// Number of snowflakes you want
const numSnowflakes = 50;

// Get the container element where the snowflakes will be added
const container = document.getElementById('snowflake-container');

for (let i = 0; i < numSnowflakes; i++) {
  // Create a new div element
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake'; // Add the "snowflake" class

  // Append the snowflake to the container
  container.appendChild(snowflake);
}