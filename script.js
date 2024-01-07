// Function to calculate the amplitude, midline, period, and max and min values of a sinusoidal function
function calculateSinusoidalProperties(functionString) {
  // Extracting the amplitude, midline, and period from the function string
  const amplitude = parseFloat(functionString.match(/(\d+(\.\d+)?)(?=\s*sin)/)[0]);
  const B = parseFloat(functionString.match(/(?<=sin\()\d+(\.\d+)?(?=x\))/)[0]);
  const midline = parseFloat(functionString.match(/(?<=\+\s*)\d+(\.\d+)?/)[0]);

  // Calculate the max and min values
  const maxValue = midline + amplitude;
  const minValue = midline - amplitude;

  // Returning the calculated properties
  return { amplitude, B, midline, maxValue, minValue };
}

// Function to calculate the properties and display them on the webpage
function calculateProperties() {
  const functionInput = document.getElementById('functionInput');
  const resultContainer = document.getElementById('resultContainer');

  const properties = calculateSinusoidalProperties(functionInput.value);

  resultContainer.innerHTML = `
        <p>Amplitude: ${properties.amplitude}</p>
        <p>Midline: ${properties.midline}</p>
        <p>B: π/${properties.B}</p>
        <p>Max Value: ${properties.maxValue}</p>
        <p>Min Value: ${properties.minValue}</p>
    `;

}


// Add event listener for the calculate button
document.getElementById('calculateButton').addEventListener('click', calculateProperties);
