const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', getJoke);

async function getJoke() {
    jokeText.textContent = "Loading an amazing joke...";
    try {
        // Fetching data from the new, local-friendly API
        const response = await fetch('https://icanhazdadjoke.com', {
            headers: { 'Accept': 'application/json' }
        });
        
        const data = await response.json();
        
        // Displaying the dad joke string layout
        jokeText.innerHTML = `<strong>${data.joke}</strong>`;
    } catch (error) {
        jokeText.textContent = "Oops! Couldn't grab a joke. Try again.";
    }
}
