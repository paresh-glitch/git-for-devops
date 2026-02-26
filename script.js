// 1. Select the elements we need
const themeBtn = document.getElementById('theme-toggle');
const title = document.querySelector('h1');

// 2. Function to update the greeting based on time
function updateGreeting() {
    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) greeting = "Good Morning!";
    else if (hours < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    title.textContent = greeting;
}

// 3. Add Event Listener for the theme toggle
themeBtn.addEventListener('click', () => {
    // Toggle the 'dark-theme' class on the body
    document.body.classList.toggle('dark-theme');
    
    // Update button text
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = "Switch to Light Mode";
    } else {
        themeBtn.textContent = "Switch to Dark Mode";
    }
});

// Run greeting update on page load
updateGreeting();
