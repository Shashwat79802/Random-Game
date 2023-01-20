let counter = 0;
    
const mcqPages = ["1st.html", "2nd.html", "3rd.html", "4th.html", "5th.html", "6th.html"];

function randomPage() {
    return mcqPages[Math.floor(Math.random() * mcqPages.length)];
}

function checkAnswer(answer) {

    if (answer === "cor") {

        counter++;
        if (counter === 3) {

            window.location.href = "4th.html";

        }
        else {
            window.location.href = randomPage();
        }
    } 
    else {
        counter = 0;
        window.location.href = randomPage();
    }
}