window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const movieId = parseInt(params.get('id'));
    const movie = movieList.results.find(m => m.id === movieId);

    const detailDiv = document.getElementById('movieDetail');
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    if (movie) {
      const imageUrl = movie.poster_path
        ? imageBaseUrl + movie.poster_path
        : './image/default.jpg';

      detailDiv.innerHTML = `
        <div class="row">
          <div class="col-md-4">
            <img src="${imageUrl}" alt="${movie.title}" class="img-fluid rounded">
          </div>
          <div class="col-md-8">
            <h1>${movie.title}</h1>
            <p>${movie.overview}</p>
            <p>${movie.popularity}</p>
            <p>${movie.rel}</p>
          </div>
        </div>
      `;
    } else {
      detailDiv.innerHTML = `<p class="text-danger">영화 정보를 찾을 수 없습니다.</p>`;
    }
  });