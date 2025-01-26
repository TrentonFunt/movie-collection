function renderCards(movieList) {
  const cardGrid = document.getElementById("card-grid");
  const searchBox = document.getElementById("search-box");
  const yearFilter = document.getElementById("year-filter");
  const genreFilter = document.getElementById("genre-filter");

  // Combined filter function
  function updateCards() {
    const searchValue = searchBox.value.toLowerCase();
    const selectedYear = yearFilter.value;
    const selectedGenre = genreFilter.value;

    const filteredMovies = movieList.filter(movie => {
      const matchesSearch = movie.name.toLowerCase().includes(searchValue);
      const matchesYear = !selectedYear || movie.year === selectedYear;
      const matchesGenre = !selectedGenre || movie.genre === selectedGenre;
      return matchesSearch && matchesYear && matchesGenre;
    });

    cardGrid.innerHTML = "";

    if (filteredMovies.length === 0) {
      cardGrid.innerHTML = `<p>No movies found matching your criteria.</p>`;
    } else {
      filteredMovies.forEach(movie => {
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
  }

  // Event listeners for all filters
  searchBox.addEventListener("input", updateCards);
  yearFilter.addEventListener("change", updateCards);
  genreFilter.addEventListener("change", updateCards);

  // Initial render
  updateCards();
  
}

  
