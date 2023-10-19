import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {
    const content = document.querySelector('#content');

    // Create a div for the navigation
    const navDiv = document.createElement('div');
    navDiv.setAttribute('id', 'nav');

    // Create an unordered list
    const ulElement = document.createElement('ul');

    // Create three list items with divs
    for (let i = 1; i <= 3; i++) {
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');

        // Set id and class attributes for the div
        divElement.setAttribute('id', `btn-${i}`);
        divElement.classList.add('tab');

        // Set text content for the div
        divElement.textContent = i === 1 ? 'Home' : i === 2 ? 'Menu' : 'Contact';

        // Append the div to the list item
        liElement.appendChild(divElement);

        // Add event listener to each div
        divElement.addEventListener('click', () => {
            clearContent();
            if (i === 1) {
                createRestaurantHomePage();
            } else if (i === 2) {
                createMenuPage();
            } else if (i === 3) {
                createContactPage();
            }
        });

        // Append the list item to the unordered list
        ulElement.appendChild(liElement);
    }

    // Append the unordered list to the navigation div
    navDiv.appendChild(ulElement);

    // Append the navigation div to the content
    content.appendChild(navDiv);
}

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default createTabs;