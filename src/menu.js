const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // First div - Appetizers
    const appetizersDiv = document.createElement('div');
    appetizersDiv.classList.add('menu-category');
    const appetizersHeading = document.createElement('h2');
    appetizersHeading.textContent = 'Appetizers';

    const appetizersList = document.createElement('ul');
    const appetizerItem1 = document.createElement('li');
    appetizerItem1.textContent = "Pomodoro";

    const appetizerItem2 = document.createElement('li');
    appetizerItem2.textContent = "Bolognesa";

    const appetizerItem3 = document.createElement('li');
    appetizerItem3.textContent = "Garlic Bread";

    appetizersList.appendChild(appetizerItem1);
    appetizersList.appendChild(appetizerItem2);
    appetizersList.appendChild(appetizerItem3);

    appetizersDiv.appendChild(appetizersHeading);
    appetizersDiv.appendChild(appetizersList);

    // Second div - Drinks
    const drinksDiv = document.createElement('div');
    drinksDiv.classList.add('menu-category');
    const drinksHeading = document.createElement('h2');
    drinksHeading.textContent = 'Drinks';

    const drinksList = document.createElement('ul');
    const drinkItem1 = document.createElement('li');
    drinkItem1.textContent = "Soda";

    const drinkItem2 = document.createElement('li');
    drinkItem2.textContent = "Mocktail";

    const drinkItem3 = document.createElement('li');
    drinkItem3.textContent = "Iced Tea";

    drinksList.appendChild(drinkItem1);
    drinksList.appendChild(drinkItem2);
    drinksList.appendChild(drinkItem3);

    drinksDiv.appendChild(drinksHeading);
    drinksDiv.appendChild(drinksList);

    // Third div - Plates
    const platesDiv = document.createElement('div');
    platesDiv.classList.add('menu-category');
    const platesHeading = document.createElement('h2');
    platesHeading.textContent = 'Plates';

    const platesList = document.createElement('ul');
    const plateItem1 = document.createElement('li');
    plateItem1.textContent = "Alfredo";

    const plateItem2 = document.createElement('li');
    plateItem2.textContent = "Carbonara";

    const plateItem3 = document.createElement('li');
    plateItem3.textContent = "Lasagna";

    platesList.appendChild(plateItem1);
    platesList.appendChild(plateItem2);
    platesList.appendChild(plateItem3);

    platesDiv.appendChild(platesHeading);
    platesDiv.appendChild(platesList);

    // Append the three divs to pageContent
    pageContent.appendChild(appetizersDiv);
    pageContent.appendChild(drinksDiv);
    pageContent.appendChild(platesDiv);

    // Append the pageContent to the content
    content.appendChild(pageContent);
};

export default createMenuPage;