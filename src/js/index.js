// api: <api_key>
// url: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=<api_key>&language=en-US&page=1&include_adult=false


// model-view-controller


import Search from './models/Search'; //Search 'den miras alıyoruz
import { elements, renderLoader, clearLoader } from './base'; //Base içinden elementsleri alıyoruz
import * as searchView from './views/searchView';//Searchviwmden hepsini 'den miras alıyoruz
import * as movieView from './views/movieView';//movieViewden hepsini 'den miras alıyoruz
import { Movie } from './models/Movie';//Movie 'den miras alıyoruz


const state = {};



//SearchContoller

const searchController = async () => {
    const keyword = elements.searchInput.value;

    if (keyword) {
        state.search = new Search(keyword);

        searchView.clearInput();
        searchView.clearResults();

        renderLoader(elements.movieListContainer);
        await state.search.getResults();
        searchView.displayResults(keyword, state.search.data);
        setTimeout(() => {
            clearLoader(elements.movieListContainer);
        }, 1000);
    } else {
        alert('anahtar kelime girmelisiniz');
    }
}

elements.searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    searchController();
    console.log("form submitted");
});


//MovieContoller
const movieController = async () => {
    const id = window.location.hash.replace('#', '');

    if (id) {
        state.movie = new Movie(id);
        renderLoader(elements.movieDetailsContainer);
        await state.movie.GetMovie();
        movieView.backToTop();
        movieView.displayMovie(state.movie.data);
        setTimeout(() => {
            clearLoader(elements.movieDetailsContainer);
        }, 1000);

    }
}

window.addEventListener('hashchange', movieController); //Hashchange tıkladığımız verinin idsini alır.
elements.movieDetaisClose.addEventListener('click', movieView.closeDetails)