export function getShade(color,opacity ) {
// Parse the color string and extract the RGB values
const red = parseInt(color.slice(1, 3), 16);
const green = parseInt(color.slice(3, 5), 16);
const blue = parseInt(color.slice(5, 7), 16);

// Calculate the shaded color by reducing the RGB values
const shadedRed = Math.max(red - 17, 0);
const shadedGreen = Math.max(green - 17, 0);
const shadedBlue = Math.max(blue - 17, 0);

// Convert the shaded RGB values back to a color string with opacity
const shadedColor = `rgba(${shadedRed}, ${shadedGreen}, ${shadedBlue}, ${opacity})`;

return shadedColor;
  }