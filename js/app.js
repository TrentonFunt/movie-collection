document.addEventListener('DOMContentLoaded', () => {
    loadMovieCards();

  
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
});

function loadMovieCards() {
    // use sample data for now to avoid fetch requests issues
    const sampleMovie = [
        {
            name: "Twisters",
            description: "Dozens of deadly tornados converge in the Midwest, merging into a mega twister set to obliterate everything for hundreds of miles.",
            genre: "Adventure",
            year: "2024",
            image: "../../images/twisters.webp"
        },
        {
            name: "Carry-On",
            description: "A young TSA agent fights to outsmart a mysterious traveler who blackmails him into letting a dangerous package slip onto a Christmas Eve flight",
            genre: "Thriller",
            year: "2024",
            image: "../../images/carry-on.webp"
        },
        {
            name: "Howl's Moving Castle",
            description: "Sophie, a hat shop worker, befriends the wizard Howl, who lives in a magical flying castle. When a jealous witch curses Sophie to age prematurely, Howl must use his magic to restore her youth and defeat the witch.",
            genre: "Anime",
            year: "2005",
            image: "../../images/howls-moving-castle.webp"
        },
        {
            name: "The Creator",
            description: "Amid a war between humans and AI, a soldier is sent to destroy a world-ending weapon created by the mysterious 'Creator'. He soon discovers the weapon is an AI in the form of a young child..",
            year: "2023",
            genre: "Sci-Fi",
            image: "../../images/the-creator.webp"
        },
        {
            name: "The Northman",
            description: "The Northman is an epic revenge thriller, that explores how far a Viking prince will go to seek justice for his murdered father.",
            year: "2022",
            genre: "Action",
            image: "../../images/the-northman.webp"
        },
        {
            name: "Knock at the Cabin",
            description: "While vacationing at a remote cabin, a young girl and her parents are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
            year: "2023",
            genre: "Thriller",
            image: "../../images/knock-at-the-cabin.webp"
        }
    ];

    renderCards(sampleMovie);

    // Populate filters with the sample data
    populateFilters(sampleMovie);
}

// Add this new function to populate year/genre dropdowns
function populateFilters(movieList) {
    const yearFilter = document.getElementById("year-filter");
    const genreFilter = document.getElementById("genre-filter");

    // Clear existing options (if any)
    yearFilter.innerHTML = '<option value="">All Years</option>';
    genreFilter.innerHTML = '<option value="">All Genres</option>';

    // Extract unique years and genres
    const years = [...new Set(movieList.map(movie => movie.year))];
    const genres = [...new Set(movieList.map(movie => movie.genre))];

    // Populate year filter
    years.sort().forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Populate genre filter
    genres.sort().forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}