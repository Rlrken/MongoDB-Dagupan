
// Step 4.1: Event Listener
document.getElementById("fetchBtn").addEventListener("click", fetchData);

const output = document.getElementById("output");
const loading = document.getElementById("loading");

// Step 4.2: Fetch API
function fetchData() {

    output.innerHTML = "";
    loading.textContent = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")

        // Step 4.3: Convert to JSON
        .then(response => response.json())

        // Step 5.1: Display data
        .then(data => {
            loading.textContent = "";

            data.forEach(user => {
                let div = document.createElement("div");
                div.classList.add("user");

                div.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                `;

                output.appendChild(div);
            });
        })

        // Step 5.2: Error handling
        .catch(error => {
            loading.textContent = "Failed to fetch data.";
            console.error(error);
        });
}