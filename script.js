const inputsTag = document.querySelectorAll('.input');
const taskContainer = document.querySelector('.task-container');
const setGoalText = document.querySelector('.about-set-goal p');

const checkButton = document.querySelectorAll('.circle');
const svgList = document.querySelectorAll('svg');

const bottomText = document.querySelector('.bottom');
const goalText = document.querySelector('.goal');

// initializing the count for progress bar
const progressValue = document.querySelector('.progress-value');
const progressParagraph = document.querySelector('.progress-value p')
let countTaskDone = 0;

const enteredData = JSON.parse(localStorage.getItem('enteredData')) || {};

const styleDataStatus = JSON.parse(localStorage.getItem('styleDataStatus')) || {};

for (let i = 0; i < inputsTag.length; i++) {
    if(enteredData[i]){
        inputsTag[i].value = enteredData[i];
    }
    if (styleDataStatus[i]) {
        // console.log("love you sujit")
        inputsTag[i].classList.toggle('clickedEffect');
        checkButton[i].classList.toggle('checkIndication');
        checkButton[i].classList.add('done');
        countTaskDone = countTaskDone + 1;
        progressValue.style.maxWidth = `${1 / checkButton.length * 100 * countTaskDone}%`;
        progressParagraph.innerText = `${countTaskDone}/${checkButton.length} completed`

    }
}


inputsTag.forEach((eachElement, index) => {
    eachElement.addEventListener('blur', (e) => {
        // console.log(eachElement.value);
        enteredData[index] = eachElement.value;
        localStorage.setItem('enteredData', JSON.stringify(enteredData));
        eachElement.innerText = eachElement.value;
    });
});






taskContainer.addEventListener('click', (e) => {
    const TruthyFalsyValue = [...inputsTag].every((eachElement) => {
        return eachElement.value.trim() !== '';
    });
    if (TruthyFalsyValue) {

        for (let i = 0; i < checkButton.length; i++) {
            if (e.target === checkButton[i] || e.target === svgList[i]) {
                // checking the checkbutton toggle or not according to this it will be change
                const isCompleted = checkButton[i].classList.contains('done');
                if (!isCompleted) {
                    countTaskDone = countTaskDone + 1;
                    progressValue.style.maxWidth = `${1 / checkButton.length * 100 * countTaskDone}%`;
                    progressParagraph.innerText = `${countTaskDone}/${checkButton.length} completed`

                    if (e.target === svgList[i]) {
                        console.log(e.target.parentElement.nextElementSibling.value);

                        if (e.target.parentElement.nextElementSibling.value !== '') {
                            e.target.parentElement.nextElementSibling.classList.toggle('clickedEffect');
                            e.target.parentElement.classList.toggle('checkIndication');
                            e.target.parentElement.classList.add('done');
                            goalText.innerText = "Just a step away, keep going!";
                            bottomText.innerText = "“Keep Going, You’re making great progress!”";
                        }
                    }
                    else {
                        console.log(e.target.nextElementSibling.value);

                        if (e.target.nextElementSibling.value !== '') {
                            e.target.nextElementSibling.classList.toggle('clickedEffect');
                            e.target.classList.toggle('checkIndication');
                            e.target.classList.add('done');
                            goalText.innerText = "Just a step away, keep going!";
                            bottomText.innerText = "“Keep Going, You’re making great progress!”";

                        }
                    }

                }

                else {
                    countTaskDone = countTaskDone - 1;
                    progressValue.style.maxWidth = `${1 / checkButton.length * 100 * countTaskDone}%`;
                    progressParagraph.innerText = `${countTaskDone}/${checkButton.length} completed`

                    if (e.target === svgList[i]) {
                        console.log(e.target.parentElement.nextElementSibling.value);

                        if (e.target.parentElement.nextElementSibling.value !== '') {
                            e.target.parentElement.nextElementSibling.classList.toggle('clickedEffect');
                            e.target.parentElement.classList.toggle('checkIndication');
                            e.target.parentElement.classList.remove('done');
                            goalText.innerText = "Just a step away, keep going!";
                            bottomText.innerText = "“Keep Going, You’re making great progress!”";
                        }
                    }
                    else {
                        console.log(e.target.nextElementSibling.value);

                        if (e.target.nextElementSibling.value !== '') {
                            e.target.nextElementSibling.classList.toggle('clickedEffect');
                            e.target.classList.toggle('checkIndication');
                            e.target.classList.remove('done');
                            goalText.innerText = "Just a step away, keep going!";
                            bottomText.innerText = "“Keep Going, You’re making great progress!”";

                        }
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


    for (let s = 0; s < checkButton.length; s++) {
        const ifCompleted = checkButton[s].classList.contains('done');
        if (ifCompleted) {
            styleDataStatus[s] = true;
            localStorage.setItem('styleDataStatus', JSON.stringify(styleDataStatus));
        }
        else {
            styleDataStatus[s] = false;
            localStorage.setItem('styleDataStatus', JSON.stringify(styleDataStatus));
        }
    }

    congractulation();

});


inputsTag.forEach((eachElement) => {
    eachElement.addEventListener('focus', (e) => {
        setGoalText.style.display = "none";
        for (let i = 0; i < inputsTag.length; i++) {
            if (e.target === inputsTag[i]) {
                inputsTag[i].classList.remove('clickedEffect');
                checkButton[i].classList.remove('checkIndication');
            }
            if (inputsTag[i] === e.target) {
                const isCompleted = checkButton[i].classList.contains('done');
                if (isCompleted) {
                    countTaskDone = countTaskDone - 1;
                    progressValue.style.maxWidth = `${1 / checkButton.length * 100 * countTaskDone}%`;
                    progressParagraph.innerText = `${countTaskDone}/${checkButton.length} completed`
                    checkButton[i].classList.remove('done')
                }
            }
        }

    });
});

function congractulation() {
    const allTrueNot = [...checkButton].every((eachElement) => {
        return eachElement.classList.contains('done');
    })
    if(allTrueNot){
         bottomText.innerText = "Congractulation for completion of targeted task";
         alert('congractulation')
    }
}
congractulation();




