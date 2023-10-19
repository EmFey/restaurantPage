const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // First div with headline and copy
    const textDiv = document.createElement('div');

    // Headline element
    const headline = document.createElement('h1');
    headline.textContent = "FINE DINE WITH US";
    textDiv.appendChild(headline);

    // Copy element
    const copy = document.createElement('p');
    copy.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita fugit consequatur ipsa assumenda recusandae nesciunt, architecto quod dignissimos tempore asperiores dolores. Doloribus iste consectetur modi ducimus enim autem rem veritatis quisquam. Magni porro harum eveniet sint molestiae accusantium eum omnis, amet nesciunt id molestias ab praesentium nisi vitae illum accusamus incidunt vel minima rem cumque consequuntur atque perspiciatis nulla aspernatur. Eos, voluptas facilis quasi veritatis ratione expedita deserunt quia fugit aspernatur voluptatum, rerum consequatur cupiditate provident impedit, qui illo nulla sapiente minus assumenda? Placeat sit nam beatae qui illum dolores cupiditate, earum, et ipsum, ducimus blanditiis. Distinctio libero natus eius.";
    textDiv.appendChild(copy);

    // Append the first div to pageContent
    pageContent.appendChild(textDiv);

    // Second div with image
    const imageDiv = document.createElement('div');

    // Image element
    const image = document.createElement('img');
    image.src = "/home/fey/repos/restaurantPage/src/fine.jpeg";
    image.alt = "Fine Dine Image";
    image.height = "300";

    // Append the image to the second div
    imageDiv.appendChild(image);

    // Append the second div to pageContent
    pageContent.appendChild(imageDiv);

    // Append the pageContent to the content
    content.appendChild(pageContent);
};

export default createRestaurantHomePage;