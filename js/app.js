const jokeContainer = document.getElementById('randomjoke');
const randomBtn = document.getElementById('btn');
const jokeCategory = document.getElementById('jokecategory');
const jokeGenerator = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let generatorJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(jokeGenerator)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeCategory.textContent = `Joke Type : ${item.category}`;
        jokeContainer.classList.add("fade");
        
        
    })
}
btn.addEventListener('click', generatorJoke);
generatorJoke();


