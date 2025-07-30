function volume_sphere(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);
  const volumeOutput = document.getElementById("volume");

  // Validate input
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = "NaN";
    return;
  }

  // Calculate volume
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display rounded volume
  volumeOutput.value = volume.toFixed(4);
}

// Attach the handler after the page loads
window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
