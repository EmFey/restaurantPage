const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // First div with address and map
    const addressAndMapDiv = document.createElement('div');
    addressAndMapDiv.classList.add('contact-section');

    // Sub-div for address
    const addressDiv = document.createElement('div');
    addressDiv.classList.add('contact-info');

    const addressHeading = document.createElement('h2');
    addressHeading.textContent = 'Address';

    const addressText = document.createElement('p');
    addressText.textContent = '123 Main Street, City, Country';

    addressDiv.appendChild(addressHeading);
    addressDiv.appendChild(addressText);

    // Sub-div for live map (You need to replace the src with your actual map URL)
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map');

    const mapFrame = document.createElement('iframe');
    mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=123+Main+Street,City,Country`;
    mapFrame.width = '100%';
    mapFrame.height = '450';
    mapFrame.frameBorder = '0';
    mapFrame.allowFullscreen = true;

mapDiv.appendChild(mapFrame);

    // Append address and map sub-divs to the main div
    addressAndMapDiv.appendChild(addressDiv);
    addressAndMapDiv.appendChild(mapDiv);

    // Second div with trading hours and contact info
    const hoursAndContactDiv = document.createElement('div');
    hoursAndContactDiv.classList.add('contact-section');

    // Sub-div for trading hours
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('contact-info');

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Trading Hours';

    const hoursList = document.createElement('ul');
    // Add your trading hours as list items here
    const hoursItem1 = document.createElement('li');
    hoursItem1.textContent = 'Monday: 9am - 5pm';

    const hoursItem2 = document.createElement('li');
    hoursItem2.textContent = 'Tuesday: 9am - 5pm';

    // Add more list items as needed

    hoursList.appendChild(hoursItem1);
    hoursList.appendChild(hoursItem2);
    // Append more list items as needed

    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(hoursList);

    // Sub-div for contact info
    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.classList.add('contact-info');

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';

    const contactList = document.createElement('ul');
    const phoneItem = document.createElement('li');
    phoneItem.textContent = 'Phone: +1 123-456-7890';

    const emailItem = document.createElement('li');
    emailItem.textContent = 'Email: info@example.com';

    contactList.appendChild(phoneItem);
    contactList.appendChild(emailItem);

    contactInfoDiv.appendChild(contactHeading);
    contactInfoDiv.appendChild(contactList);

    // Append trading hours and contact info sub-divs to the main div
    hoursAndContactDiv.appendChild(hoursDiv);
    hoursAndContactDiv.appendChild(contactInfoDiv);

    // Append the two main divs to the pageContent
    pageContent.appendChild(addressAndMapDiv);
    pageContent.appendChild(hoursAndContactDiv);

    // Append the pageContent to the content
    content.appendChild(pageContent);
};

export default createContactPage;