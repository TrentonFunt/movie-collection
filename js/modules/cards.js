function renderCards(movieList) {
    const cardGrid = document.getElementById('card-grid');
    cardGrid.innerHTML = '';

    movieList.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'card';
        
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