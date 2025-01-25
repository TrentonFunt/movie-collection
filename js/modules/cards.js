function renderCards(movieList) {
  const cardGrid = document.getElementById("card-grid");
  const searchBox = document.getElementById("search-box");
  cardGrid.innerHTML = "";

  searchBox.addEventListener("input", () => {
    const searchValue = searchBox.value.toLowerCase();

    const filteredMovies = movieList.filter((movie) =>
      movie.name.toLowerCase().includes(searchValue)
    );

    cardGrid.innerHTML = "";

    filteredMovies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
                <img src="${movie.image}" alt="${movie.name}">
                <h3>${movie.name}</h3>
                <h4>${movie.year}</h4>
                <h4><i>${movie.genre}</i></h4>
                <span class="type">${movie.description}</span>
            `;

      cardGrid.appendChild(card);
    });

    if (filteredMovies.length === 0) {
      cardGrid.innerHTML = `<p>No movies found matching your search.</p>`;
    }
  });

  movieList.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <img src="${movie.image}" alt="${movie.name}">
            <h3>${movie.name}</h3>
            <h4>${movie.year}</h4>
            <h4><i>${movie.genre}</i></h4>
            <span class="type">${movie.description}</span>
        `;

    cardGrid.appendChild(card);
  });
}
