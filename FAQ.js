let questionBtns = document.querySelectorAll(".qBtn")
let answers = document.querySelectorAll(".answer")
let arrow = document.querySelectorAll(".arrow")

function FAQ() {
    questionBtns.forEach((question, i) => {
        let answer = answers[i]
        let Arrow = arrow[i]

        question.addEventListener('click', function () {
            Checkanswersopen()
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

function Checkanswersopen(){
    for(let i=0;i<answers.length;i++){
        if(answers[i].style.display=='block'){
            answers[i].style.display='none'
        }
    }
}

FAQ()