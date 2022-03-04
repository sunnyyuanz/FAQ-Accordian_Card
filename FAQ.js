let questionBtns = document.querySelectorAll(".qBtn")
let answers = document.querySelectorAll(".answer")
let arrow = document.querySelectorAll(".arrow")

function FAQ() {
    questionBtns.forEach((question, i) => {
        let answer = answers[i]
        let Arrow = arrow[i]

        question.addEventListener('click', function () {
            // TODO: create a function that will iterate through all buttons and set them to the "closed" state
            if (answer.style.display == 'block') {
                answer.style.display = 'none'
                question.style.fontWeight = '400'
                Arrow.style.transform = 'none'

            } else {
                answer.style.display = 'block'
                question.style.fontWeight = '700'
                Arrow.style.transform = 'rotate(180deg)'
            }
        });
    })
};

FAQ()
