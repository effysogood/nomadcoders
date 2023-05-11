const selectedBox = document.querySelector('.selected-box');

selectedBox.addEventListener('click', reportCoordinates);

function reportCoordinates(event) {
    const rect = selectedBox.getBoundingClientRect();
    console.log(rect);
    console.log(`client: ${event.clientX}, ${event.clientY}`);
    console.log(`page: ${event.pageX}, ${event.pageY}`);
}
