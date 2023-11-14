/*document.querySelector("html").addEventListener("click", () => {
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*let myVariable;
myVariable = "Bob";

let myVariable = "Bob";

myVariable;

function mult(num1, num2) {
    let result = num1 * num2;
    return result;
}
mult(5, 7);

document.querySelector("img").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});
    alert("Ouch! Stop poking me!");
});

*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "SNice.svg.png") {
        myImage.setAttribute("src", "download.jpeg");
    } else {
        myImage.setAttribute("src", "SNice.svg.png");
    }
}

const myHeading = document.querySelector('h1');
const myButton = document.querySelector('button');

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Sup, ${myName}`;
    }
}

function handleButtonClick() {
    setUserName();
}

// Event listener for the button click
myButton.addEventListener('click', handleButtonClick);

// Check if there's a name in local storage
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Sup, ${storedName}`;
}

 


