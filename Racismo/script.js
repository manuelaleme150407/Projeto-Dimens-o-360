function showFeedback(isCorrect) {
    const backgroundOverlay = document.getElementById('background-overlay');
    
    if (isCorrect) {
        // Se a resposta estiver certa, exibe o fundo verde e a mensagem de sucesso
        document.getElementById('background-overlay').style.opacity = 1;
        document.getElementById('success-message').style.display = 'block';
        backgroundOverlay.classList.remove('red'); // Remove fundo vermelho
        backgroundOverlay.classList.add('green'); // Adiciona fundo verde
        setTimeout(function() {
            document.getElementById('success-message').style.display = 'none';
            backgroundOverlay.classList.remove('green'); // Remove fundo verde
        }, 1500); // A mensagem de sucesso some após 1,5 segundos
    } else {
        // Se a resposta estiver errada, exibe o fundo vermelho e a mensagem de erro
        document.getElementById('background-overlay').style.opacity = 1;
        document.getElementById('error-message').style.display = 'block';
        backgroundOverlay.classList.remove('green'); // Remove fundo verde
        backgroundOverlay.classList.add('red'); // Adiciona fundo vermelho
        setTimeout(function() {
            document.getElementById('error-message').style.display = 'none';
            backgroundOverlay.classList.remove('red'); // Remove fundo vermelho
        }, 1500); // A mensagem de erro some após 1,5 segundos
    }
}

// Função que lida com o envio do formulário e a pontuação
document.querySelectorAll('.question-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const correctAnswer = this.querySelector('input[value="correct"]:checked');

        if (correctAnswer) {
            score += 10; // Aumenta a pontuação por acertar
            updateScore();
            showFeedback(true); // Exibe feedback de acerto
        } else {
            showFeedback(false); // Exibe feedback de erro
        }

        // Impedir o formulário de ser enviado novamente e dar feedback visual
        this.querySelector('button').disabled = true;
    });
});

// Iniciar o quiz quando o botão "Iniciar Quiz" for pressionado
document.getElementById('start-btn').addEventListener('click', function() {
    startQuiz();
    this.style.display = 'none'; // Ocultar o botão "Iniciar Quiz" após clicar
    document.getElementById('countdown').style.display = 'block'; // Mostrar contagem regressiva
});

let score = 0;
let timer;
let countdownTime = 60; // Tempo do cronômetro em segundos

// Atualizar a pontuação
function updateScore() {
    document.getElementById('score').textContent = 'Pontuação: ' + score;
}

// Função para iniciar o quiz e a contagem regressiva
function startQuiz() {
    // Tornar o quiz visível
    document.getElementById('quiz-container').style.display = 'block';

    // Iniciar contagem regressiva
    document.getElementById('countdown').style.display = 'block';
    timer = setInterval(function() {
        if (countdownTime <= 0) {
            clearInterval(timer);
            alert('Tempo esgotado! Sua pontuação final é: ' + score);
            return;
        }
        document.getElementById('countdown').textContent = `Tempo restante: ${countdownTime}s`;
        countdownTime--;
    }, 1000);
}

// Função que lida com o envio do formulário e a pontuação
document.querySelectorAll('.question-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const correctAnswer = this.querySelector('input[value="correct"]:checked');

        if (correctAnswer) {
            score += 10; // Aumenta a pontuação por acertar
            updateScore();
        }

        // Impedir o formulário de ser enviado novamente e dar feedback visual
        this.querySelector('button').disabled = true;
    });
});

// Iniciar o quiz quando o botão "Iniciar Quiz" for pressionado
document.getElementById('start-btn').addEventListener('click', function() {
    startQuiz();
    this.style.display = 'none'; // Ocultar o botão "Iniciar Quiz" após clicar
});




