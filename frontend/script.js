document.addEventListener("DOMContentLoaded", async function() {
    var counterContainer = document.querySelector(".counter");

    try {
        const response = await fetch(config.API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        counterContainer.innerHTML = `${data}`;
    } catch (error) {
        console.error("Error updating visitor count: ", error);
    }
});