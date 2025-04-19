export function loadPage() {
    // Reference to the outer container
    const content = document.querySelector('.content');
    content.innerHTML = '';

    // Create the main <main> element
    const main = document.createElement('main');
    main.classList.add('about');

    // Create and append the headings
    const brand = document.createElement('h2');
    brand.classList.add('brand');
    brand.textContent = "Rick & Morty's";

    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = "About";

    // Create paragraph content
    const paragraphs = [
        "Founded in a drunken haze by Rick Sanchez, Dimension Dine-In is the only eatery that transcends space and time. Whether you’re a Gromflomite, Meeseeks, or just a regular Earthling, we promise a culinary journey that messes with your taste buds and your timeline.",
        "Morty handles customer complaints (he’s not great at it), and Summer occasionally DJ’s Tuesday Taco Night.",
        "We don’t take reservations – we bend spacetime to fit everyone in."
    ];

    // Append elements to main
    main.appendChild(brand);
    main.appendChild(name);

    paragraphs.forEach((text, index) => {
        const p = document.createElement('p');
        if (index === 0) p.classList.add('about-info');
        p.textContent = text;
        main.appendChild(p);
    });

    // Append to the container
    content.appendChild(main);

}