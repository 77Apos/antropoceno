const words = ["ANTROPO", "PIROCENO", "CHTHULUCENO", "CAPITALOCENO", "PLANTATIOCENO", "ATROPOBCENO", "TECNOCENO", "ANTICENO", "ANTITROPO", "CENO", "ANTROPO", "ANTA", "CARROCENO", "IDUSTRICENO", "DESTRUICENO", "CONTRACENO", "CONTRACENSO", "PLANTACENO", "ECNOCENO", "CENO", "CENOCONTROCENO", "PERDACENO", "MINÉRIOCENO", "NEGROCENO", "VIDACENO", "SIGNOCENO"];

let currentWordIndex = 0;

document.addEventListener('click', function () {
    randomizeWord();
    
});

function randomizeWord() {
    const currentWordIndex = Math.floor(Math.random() * words.length); // Seleciona o índice aleatório
    const wordContainer = document.getElementById("typing-effect");

    wordContainer.innerHTML = ""; // Limpa a palavra anterior

    // Chama a função que aplica o efeito de digitação na palavra selecionada
    typeWord(words[currentWordIndex], wordContainer);
}

function typeWord(word, container) {
    let index = 0;
    const typingSpeed = 150; // Velocidade da digitação

    function type() {
        if (index < word.length) {
            container.innerHTML += word.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
}
