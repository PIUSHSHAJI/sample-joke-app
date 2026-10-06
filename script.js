const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');

jokeBtn.addEventListener('click', getJoke);

async function getJoke() {
    jokeText.textContent = "Loading an amazing joke...";
    try {
        // Fetching data from a free, public Joke API
        const response = await fetch('https://appspot.com');
        const data = await response.json();
        
        // Displaying the setup and punchline
        jokeText.innerHTML = `<strong>${data.setup}</strong><br><br><em>${data.punchline}</em>`;
    } catch (error) {
        jokeText.textContent = "Oops! Couldn't grab a joke. Try again.";
    }
}
