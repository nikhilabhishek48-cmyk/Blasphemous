const BACKEND_URL = 'https://your-backend.onrender.com'; // ← CHANGE TO YOUR RENDER URL

// Fetch dynamic lore from Firebase via backend
async function loadLore() {
  try {
    const res = await fetch(`${BACKEND_URL}/api/lore`);
    const data = await res.json();
    document.getElementById('dynamic-lore').innerHTML = `
      <h2>The Miracle</h2>
      <p>${data.miracle || "The curse spreads across Cvstodia..."}</p>
    `;
  } catch (e) {
    console.log("Backend not ready yet");
  }
}

// Submit prayer form
async function submitPrayer() {
  const name = document.getElementById('prayer-name').value;
  const message = document.getElementById('prayer-message').value;

  try {
    const res = await fetch(`${BACKEND_URL}/api/prayer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message })
    });
    const data = await res.json();
    alert(data.message);
    document.getElementById('prayer-form').reset();
  } catch (e) {
    alert("The High Wills are silent... try again later.");
  }
}

// Enter world animation (existing)
function enterWorld() {
  alert("🩸 The Miracle has begun... Welcome to Blasphemous!");
}

// Load lore when page loads
window.onload = loadLore;
