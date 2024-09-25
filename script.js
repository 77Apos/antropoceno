const words = [
  "ANTROPO", "PIROCENO", "CHTHULUCENO", "CAPITALOCENO", "PLANTATIOCENO",
  "ATROPOBCENO", "TECNOCENO", "ANTICENO", "ANTITROPO", "CENO", "ANTROPO",
  "ANTA", "CARROCENO", "IDUSTRICENO", "DESTRUICENO", "CONTRACENO", 
  "CONTRACENSO", "PLANTACENO", "ECNOCENO", "CENO", "CENOCONTROCENO", 
  "PERDACENO", "MINÉRIOCENO", "NEGROCENO", "VIDACENO", "SIGNOCENO", 
  "ANTROPO-CENA", "ANTROPO", "PIROCENO", "CHTHULUCENO", "CAPITALOCENO", "PLANTATIOCENO",
  "ATROPOBCENO", "TECNOCENO", "ANTICENO", "ANTITROPO", "CENO", "ANTROPO",
  "ANTA", "CARROCENO", "IDUSTRICENO", "DESTRUICENO", "CONTRACENO", 
  "CONTRACENSO", "PLANTACENO", "ECNOCENO", "CENO", "CENOCONTROCENO", 
  "PERDACENO", "MINÉRIOCENO", "NEGROCENO", "VIDACENO", "SIGNOCENO", 
  "ANTROPO-CENA"
];

let isTyping = false; // Variável de controle para evitar sobreposição

document.addEventListener('click', function () {
    if (!isTyping) { // Só executa se não estiver digitando
        randomizeWord();
    }
});

async function randomizeWord() {
    isTyping = true; // Bloqueia novos cliques
    const currentWordIndex = Math.floor(Math.random() * words.length);
    const wordContainer = document.getElementById("typing-effect");
    wordContainer.innerHTML = ""; // Limpa a palavra anterior
    const selectedWord = words[currentWordIndex]; // Palavra selecionada

    // Chama a função para ler em voz alta
    speakWord(selectedWord);

    // Chama a função que aplica o efeito de digitação e espera a conclusão
    await typeWord(selectedWord, wordContainer);
    
    isTyping = false; // Libera cliques após concluir a digitação
}

function typeWord(word, container) {
    return new Promise((resolve) => {
        let index = 0;
        const typingSpeed = 150;
        
        function type() {
            if (index < word.length) {
                container.innerHTML += word.charAt(index);
                index++;
                setTimeout(type, typingSpeed);
            } else {
                resolve(); // Resolve a Promise quando a digitação termina
            }
        }
        
        type();
    });
}

// Função para ler a palavra em voz alta
function speakWord(word) {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'pt-BR'; // Configura o idioma para Português
    window.speechSynthesis.speak(speech);
}
