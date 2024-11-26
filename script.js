const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Submit button is clicked");
});
