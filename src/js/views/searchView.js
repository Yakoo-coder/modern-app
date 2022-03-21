import { elements } from '../base';

//Temizleme
export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResults = () => {
    elements.movieList.innerHTML = '';
}


//ES6 Arrow function ve back ticklerle html
export const displayResults = (keyword, data) => {
    data.results.forEach(movie => {
        const html = `
            <li class="media mb-3">
                <img src="https://image.tmdb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/92x138';" class="mr-3" alt="${movie.title}">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">
                        <span class="badge badge-primary">${movie.vote_average}</span> 
                        <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                    <p>${movie.overview}</p>
                </div>
            </li>
        `;
        elements.movieListHeader.innerHTML = `${keyword}arasinda ${data.total_results} sonuç bulundu`;
        elements.movieListContainer.classList.add('d-block');
        elements.movieList.insertAdjacentHTML('beforeend', html); //sonuna ekle 
    })
}