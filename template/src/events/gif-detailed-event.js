import { fetchGif } from "../requests/request-service";
import { getFavorites } from "../data/favorites.js";

// export const renderGif = async (id = null) => {
//   const response = await fetchGif(id);
//   const result = await response.json();
//   const url = result.url;
//   const userName = result.username;

//   const gifDiv = document.createElement('div');
//   gifDiv.classList.add('gif-detailed');
//   gifDiv.innerHTML = `
//   <img src="${url}" alt="${result.title}" id="gif-detailed-id" data-gif="${result.id}">
//   <h3>${userName}</h3>
//   `;
// };
