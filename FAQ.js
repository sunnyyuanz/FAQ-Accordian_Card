let questionBtns = document.querySelectorAll(".question")
let answers=document.querySelectorAll(".answer")

function FAQ() {
    questionBtns.forEach((question, i) => {

        question.addEventListener('click', function () {
            if (question.classList.contains("open")) {
                question.classList.remove("open")

            } else {
                Checkanswersopen()
                question.classList.add("open")
            }
        });
    })
};

function Checkanswersopen() {
    for (let i = 0; i < answers.length; i++) {
        questionBtns[i].classList.remove("open")
    }
}

FAQ()