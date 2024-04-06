console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imagesContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                imagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => {
            console.error("Error fetching dog images:", error);
        });

    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsList = document.getElementById("dog-breeds");
            Object.keys(data.message).forEach(breed => {
                const listItem = document.createElement("li");
                listItem.textContent = breed;
                breedsList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching dog breeds:", error);
        });

    // Challenge 3: Change font color on breed click
    const breedsList = document.getElementById("dog-breeds");
    breedsList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change the font color to blue (you can choose any color)
        }
    });

    // Challenge 4: Filter breeds by dropdown selection
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
    });

    function filterBreeds(letter) {
        const breedItems = breedsList.querySelectorAll("li");
        breedItems.forEach(item => {
            if (!item.textContent.startsWith(letter)) {
                item.style.display = "none";
            } else {
                item.style.display = "list-item";
            }
        });
    }
});