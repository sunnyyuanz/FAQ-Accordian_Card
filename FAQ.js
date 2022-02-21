let QQbtn = document.querySelectorAll(".QQbtn")
let A = document.querySelectorAll(".AA")
let arrow = document.querySelectorAll(".arrow")

function FAQ() {
    QQbtn.forEach(Question)
    function Question(qq, qindex, question) {
        qq[qindex] = QQbtn[qindex];
        question = qq[qindex];
        let answer = A[qindex]
        let Arrow = arrow[qindex]


        question.addEventListener('click', function () {
            if (answer.style.display == 'block') {
                answer.style.display = 'none'
                question.style.fontWeight = '400'
                Arrow.style.transform = 'none'

            } else {
                answer.style.display = 'block'
                question.style.fontWeight = '700'
                Arrow.style.transform = 'rotate(180deg)'


            }
        })

    }
}

FAQ()