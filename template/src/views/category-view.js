import { CONTAINER_SELECTOR } from "../common/constants";
import { q } from "../events/helpers";

export const toCategoriesView = (categories) => {
    q(CONTAINER_SELECTOR).innerHTML = `
    <div id="categories">
        <h1>Categories</h1>
        <div class="content">
            ${categories.map(category => `
                <div class="category">
                    <img src="${category.gif.images.fixed_height.url}" alt="${category.name}">
                    <p>${category.name}</p>
                </div>
            `).join('')}
        </div>
    </div>
`;
}