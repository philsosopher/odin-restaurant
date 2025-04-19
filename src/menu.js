export function loadPage() {
    // Reference to the outer container
    const content = document.querySelector('.content');
    content.innerHTML = '';

    // Create the main container
    const main = document.createElement('main');
    main.classList.add('menu');

    // Create and append the headings
    const brand = document.createElement('h2');
    brand.classList.add('brand');
    brand.textContent = "Rick & Morty's";

    const name = document.createElement('h2');
    name.classList.add('name');
    name.textContent = "Menu";

    main.appendChild(brand);
    main.appendChild(name);

    // Menu items data
    const menuItems = [
        {
            name: "Plumbus Poppers",
            info: "Spicy, cheesy bites straight from Dimension C-137.",
            price: "20 $chmeckles"
        },
        {
            name: "Morty’s Mini Meeseeks",
            info: "Bite-sized blue balls of happiness (Not actual Meeseeks, promise.)",
            price: "15 $chmeckles"
        },
        {
            name: "Portal Punch",
            info: "Glows neon green. Not FDA approved.",
            price: "25 $chmeckles"
        },
        {
            name: "Wubba Lubba Limonade",
            info: "Sharp lemon with a subtle existential dread finish.",
            price: "19 $chmeckles"
        }
    ];

    // Create each menu item
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        const itemInfo = document.createElement('p');
        itemInfo.classList.add('item-info');
        itemInfo.textContent = item.info;

        const itemPrice = document.createElement('h4');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;

        const separator = document.createElement('hr');
        separator.classList.add('menu-separator');

        // Append everything to menuItem
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemInfo);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(separator);

        // Append menuItem to main
        main.appendChild(menuItem);
    });

    // Finally, add everything to the page
    content.appendChild(main);

}