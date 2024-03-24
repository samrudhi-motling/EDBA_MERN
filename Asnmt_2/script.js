document.addEventListener("DOMContentLoaded", function () {
    const userIdInput = document.getElementById("userIdInput");
    const fetchUserBtn = document.getElementById("fetchUserBtn");
    const userTableBody = document.getElementById("userTableBody");
    const spinner = document.getElementById("spinner");
    const showAllUsersBtn = document.getElementById("showAllUsersBtn");

    document.getElementById("showAllUsersBtn").addEventListener("click", function () {
        // Show spinner
        spinner.style.display = "block";
    
        // Clear previous user data
        userTableBody.innerHTML = "";
    
        // Fetch all users from the server
        fetch("https://reqres.in/api/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then(data => {
                // Render all users in the table after a delay (to show spinner)
                setTimeout(function () {
                    // Hide spinner
                    spinner.style.display = "none";
    
                    // Show user table section
                    document.getElementById("user-table-section").style.display = 'block';
    
                    // Render all users in the table
                    data.data.forEach(user => {
                        const row = document.createElement("tr");
                        row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.avatar}" alt="avatar"></td>
                    `;
                        userTableBody.appendChild(row);
                    });
                }, 1000); // 1 second delay
            })
            .catch(error => {
                // Hide spinner
                spinner.style.display = "none";
                alert(error.message);
            });
    });
    

    fetchUserBtn.addEventListener("click", function () {
        const userId = userIdInput.value.trim();

        if (userId === "") {
            alert("Please enter a user ID");
            return;
        }

        // Show spinner
        spinner.style.display = "block";

        // Clear previous user data
        userTableBody.innerHTML = "";

        // Fetch user data from the server
        fetch(`https://reqres.in/api/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("User not found");
                }
                return response.json();
            })
            .then(data => {
                // Render user data in table after a 1-second delay (to show spinner)
                setTimeout(function () {
                    // Hide spinner
                    spinner.style.display = "none";

                    // Show user table section
                    document.getElementById("user-table-section").style.display = 'flex';

                    // Render user data in table
                    const user = data.data;
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td>${user.email}</td>
                        <td><img src="${user.avatar}" alt="avatar"></td>
                    `;
                    userTableBody.appendChild(row);
                }, 1000); // 1 second delay
            })
            .catch(error => {
                // Hide spinner
                spinner.style.display = "none";
                alert(error.message);
            });
    });
});

function showUsers() {
    return document.getElementById("userTable");
}