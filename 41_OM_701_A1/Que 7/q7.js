import fetch from "node-fetch";

async function fetchGooglePage() {
  try {
    const response = await fetch('https://www.google.com');
    const html = await response.text();
    console.log('Google page fetched successfully!');
    console.log('----------------------------------------');
    console.log(html.substring(0, 100)); // Print first 100 characters
    console.log('----------------------------------------');
  } catch (error) {
    console.error(' Error fetching Google page:', error.message);
  }
}

fetchGooglePage();
