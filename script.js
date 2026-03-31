const inputsTag = document.querySelectorAll('.input');
const taskContainer = document.querySelector('.task-container');


inputsTag.forEach((eachElement) => {
    eachElement.addEventListener('blur', (e) => {
        console.log(eachElement.value);
        eachElement.innerText = eachElement.value;
    });
});

const setGoalText = document.querySelector('.about-set-goal p');

const checkButton = document.querySelectorAll('.circle');
const svgList = document.querySelectorAll('svg');

const bottomText = document.querySelector('.bottom');
const goalText = document.querySelector('.goal');

// initializing the count for progress bar
const progressValue = document.querySelector('.progress-value');
const progressParagraph = document.querySelector('.progress-value p')
let countTaskDone = 0;




taskContainer.addEventListener('click', (e) => {
    if ((inputsTag[0].value !== '') && (inputsTag[1].value !== '') && (inputsTag[2].value !== '')) {

        for (let i = 0; i < checkButton.length; i++) {
            if (e.target === checkButton[i] || e.target === svgList[i]) {
                if (countTaskDone < checkButton.length) {
                    countTaskDone = countTaskDone + 1;
                    progressValue.style.maxWidth = `${33.33*countTaskDone}%`;
                    progressParagraph.innerText = `${countTaskDone}/${checkButton.length} completed`
                }
                if (e.target === svgList[i]) {
                    console.log(e.target.parentElement.nextElementSibling.value);

                    if (e.target.parentElement.nextElementSibling.value !== '') {
                        console.log(e.target);
                        e.target.parentElement.nextElementSibling.style.color = "red";
                        e.target.parentElement.nextElementSibling.style.textDecoration = "line-through";
                        e.target.parentElement.style.backgroundColor = "#48A300";
                        goalText.innerText = "Just a step away, keep going!";
                        bottomText.innerText = "“Keep Going, You’re making great progress!”";
                    }
                }
                else {
                    console.log(e.target.nextElementSibling.value);

                    if (e.target.nextElementSibling.value !== '') {
                        console.log(e.target);
                        e.target.nextElementSibling.style.color = "red";
                        e.target.nextElementSibling.style.textDecoration = "line-through";
                        e.target.style.backgroundColor = "#48A300";
                        goalText.innerText = "Just a step away, keep going!";
                        bottomText.innerText = "“Keep Going, You’re making great progress!”";

                    }
                }
            }
        }

    }
    else {
        for (let i = 0; i < checkButton.length; i++) {
            if (e.target === checkButton[i] || e.target === svgList[i]) {
                setGoalText.style.display = "block";
            }
        }
    }
});


inputsTag.forEach((eachElement) => {
    eachElement.addEventListener('focus', (e) => {
        setGoalText.style.display = "none";
        for (let i = 0; i < inputsTag.length; i++) {
            if (e.target === inputsTag[i]) {
                inputsTag[i].style.color = "black";
                inputsTag[i].style.textDecoration = "none";
                checkButton[i].style.backgroundColor = "#FBFBFB"
            }
        }
    });
});










