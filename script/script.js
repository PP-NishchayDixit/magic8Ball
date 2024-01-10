document.addEventListener("DOMContentLoaded", function () {
    const magic8Ball = {
        answerList: [
            "No",
            "Yes",
            "I don't think so...",
            "Of course!",
            "Indubitably",
            "In your dreams.",
        ],
    };

    const ANSWER_IMG =
        "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png";
    const BALL_ANIMATION = "shake";

    answerElement.style.display = "none";

    const askQuestion = (question) => {
        ballElement.classList.add(BALL_ANIMATION);
        ballElement.src = ANSWER_IMG;
        answerElement.style.display = "block";

        const answerIndex = Math.floor(
            Math.random() * magic8Ball.answerList.length
        );
        const answer = magic8Ball.answerList[answerIndex];

        answerElement.textContent = answer;

        const questionData = { question, selectedAnswer: answer };
        magic8Ball.askHistory = magic8Ball.askHistory || [];
        magic8Ball.askHistory.push(questionData);
    };

    const onAskBtnClick = () => {
        ballElement.classList.remove(BALL_ANIMATION);
        answerElement.style.display = "none";

        console.log("magic8Ball", magic8Ball);

        setTimeout(() => {
            askQuestion(getUserInput());
        }, 100);
    };

    btnQuestion.addEventListener("click", onAskBtnClick);
});
