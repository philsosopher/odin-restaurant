export function loadPage() {
    // Get the container (make sure it exists in your HTML)
    const content = document.querySelector('.content');

    // Create <main> with class "home"
    const main = document.createElement('main');
    main.classList.add('home');

    // Create brand heading
    const brand = document.createElement('h2');
    brand.classList.add('brand');
    brand.textContent = "Rick & Morty's";

    // Create restaurant name
    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = "Dimension Dine-In";

    // Create paragraph
    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = "Tired of eating from just one planet? At Dimension Dine-In, we blend flavors from across the cosmos – curated by Rick himself (mostly while drunk) and taste-tested by Morty (against his will).";

    // Create button
    const button = document.createElement('button');
    button.classList.add('view-menu');
    button.textContent = "View Menu";

    // Append all to main
    main.appendChild(brand);
    main.appendChild(name);
    main.appendChild(info);
    main.appendChild(button);

    // Append main to content container
    content.appendChild(main);

}