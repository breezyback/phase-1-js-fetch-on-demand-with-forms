const init = () => {
  const form = document.querySelector("form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const id = e.target.children[1].value;
    
    fetch("http://localhost:3000/movies/" + id)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            title.innerText = data.title;
            summary.innerText = data.summary;
        })
        .catch(error => console.log(error.message));
  }
}

document.addEventListener('DOMContentLoaded', init);