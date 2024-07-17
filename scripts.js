// script.js
document.getElementById('unlock-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // const correctPhrases = ["Grattis", "på", "din", "födelsedag", "jag", "älskar", "dig", "mosen"];
    const correctPhrases = ["phrase1", "phrase1", "phrase1", "phrase1", "phrase1", "phrase1", "phrase1", "phrase1"];
    let enteredPhrases = [];

    for (let i = 1; i <= 8; i++) {
        enteredPhrases.push(document.getElementById(`phrase${i}`).value.trim().toLowerCase());
    }

    if (JSON.stringify(correctPhrases) === JSON.stringify(enteredPhrases)) {
        const congratsElement = document.getElementById('congrats');
        const sentenceElement = document.getElementById('sentence');
        const questionsElement = document.getElementById('questions');
        const sentence = "Vart är vi på väg?";
        const words = sentence.split(' ');

        congratsElement.innerText = "Grattis! Du har nått del 2 ";
        congratsElement.classList.add('fade-in');

        setTimeout(() => {
            sentenceElement.innerHTML = '';
            words.forEach((word, index) => {
                const wordElement = document.createElement('span');
                wordElement.classList.add('word');
                wordElement.style.animationDelay = `${index * 0.5}s`;
                wordElement.textContent = word + ' ';
                sentenceElement.appendChild(wordElement);
            });
            sentenceElement.classList.remove('hidden');

            setTimeout(() => {
                const questions = document.querySelectorAll('.question');
                questions.forEach((question, index) => {
                    question.style.animationDelay = `${index * 0.5}s`;
                    question.classList.add('fade-in');
                });
                questionsElement.classList.remove('hidden');
            }, (words.length * 0.5 + 1) * 1000); // Delay to ensure the sentence is fully shown
        }, 1000);

        document.getElementById('hidden-sentence').classList.remove('hidden');
    } else {
        alert("The phrases entered are incorrect. Please try again.");
    }
});