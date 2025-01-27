let clickCount = 0;

function onYesClick() {
    window.location.href = "yesButton.html";
    alert("YAAAAYYY !!! SHE SAID YESSS !!!! \n DATE NIGHT THIS WEEKEND !!!!");
}

function onNoClick() {
    const acceptButton = document.querySelector('.accept-button');
    const rejectButton = document.querySelector('.reject-button');

    // Increase the size of the Yes button based on the click count
    clickCount++;
    acceptButton.style.fontSize = `${50 + clickCount}px`;

    // Change the text of the No button to a random statement
    const randomStatements = [
        "Are you sure?",
        "Think twice !",
        "Is there a chance?",
        "Maybe reconsider?",
        "Please say yes !!"
    ];
    const randomIndex = Math.floor(Math.random() * randomStatements.length);
    rejectButton.innerHTML = randomStatements[randomIndex];
}
