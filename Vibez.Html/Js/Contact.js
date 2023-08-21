document.getElementById("submitBtn").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const feedback = document.getElementById("feedback").value;

    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = ""; // Clear previous error messages

    if (!firstName || !lastName || !email || !phone || !feedback) {
        errorMessage.innerHTML = "Please fill out all required fields.";
        return;
    }

    if (!isValidEmail(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return;
    } 
    // If all checks pass, you can proceed with form submission
    // Add your code here to handle form submission
});

document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("error-message").innerHTML = "";
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


const startChatBtn = document.getElementById("startChatBtn");
const chatPopup = document.getElementById("chatPopup");
const closeChatBtn = document.getElementById("closeChatBtn");

startChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "block";
});

closeChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "none";
});