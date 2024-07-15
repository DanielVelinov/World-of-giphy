// import { TRENDING } from './common/constants.js';
// import { toggleFavoriteStatus } from './events/favorites-events.js';
// import { q } from './events/helpers.js';
// import { loadPage, renderCategory, renderMovieDetails } from './events/navigation-events.js';
// import { renderSearchItems } from './events/search-events.js';
import { renderSearchItems } from "./events/search-events.js";
import { fetchTrendingGIFs } from "./views/home-view.js";
import { showFavorites } from "./views/favorites-view.js";
import { toUploadView } from "./views/search-view.js";
import { toAboutView } from "./views/about-view.js";
// document.addEventListener('DOMContentLoaded', () => {

//   // add global listener
//   document.addEventListener('click', event => {

//     // nav events
//     if (event.target.classList.contains('nav-link')) {

//       loadPage(event.target.getAttribute('data-page'));
//     }

//     // show category events
//     if (event.target.classList.contains(/* your button class here */)) {
//       renderCategory(+event.target.getAttribute(/* your correct data attribute here */));
//     }

//     // show gif events
//     if (event.target.classList.contains(/* your button class here */)) {
//       renderGifDetails(+event.target.getAttribute(/* your correct data attribute here */));
//     }

//     // toggle favorite event
//     if (event.target.classList.contains(/* favorites item class here */)) {
//       toggleFavoriteStatus(+event.target.getAttribute(/* your correct data attribute here */));
//     }

//   });

//   // search events
//   q('input#search').addEventListener('input', event => {
//     renderSearchItems(event.target.value);
//   });

//   loadPage(TRENDING);

// });

// TODO

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const searchTerm = event.target.value.trim();
            renderSearchItems(searchTerm);
        }
    });

    document.getElementById('favorites-link').addEventListener('click', function (event) {
        event.preventDefault();
        showFavorites();
    });

    document.getElementById('trending-link').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Trending clicked')
        fetchTrendingGIFs();
    });

    // document.getElementById('gif-detailed-id').addEventListener('click', function (event) {
    //     if (event.target.classList.contains('gif-detailed')) {

    //         renderGif(event.target.getAttribute('data-gif'));
    //     }
    // });

    document.getElementById('upload-link').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Upload link clicked');
        toUploadView();
    });



    document.getElementById('about-link').addEventListener('click', function (event) {
        event.preventDefault();
        console.log('About link clicked');
        toAboutView();
    });
});