function playGame() {
    const choice = document.getElementById('choice').value; // Obtém a escolha do jogador (Par ou Ímpar)
    const playerNumber = parseInt(document.getElementById('player-number').value); // Obtém e converte o número do jogador para inteiro
    const robotNumber = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 10 para o robô

    if (isNaN(playerNumber) || playerNumber < 0 || playerNumber > 10) {
        // Verifica se o número do jogador é válido
        alert('Por favor, insira um número válido entre 0 e 10.');
        return; // Interrompe a execução se o número for inválido
    }

    const sum = playerNumber + robotNumber; // Calcula a soma dos números do jogador e do robô
    const result = sum % 2 === 0 ? 'par' : 'impar'; // Determina se a soma é Par ou Ímpar

    let resultMessage = `Você escolheu ${choice}.<br>`; // Mensagem inicial com a escolha do jogador
    resultMessage += `Seu número: ${playerNumber}<br>`; // Adiciona o número do jogador à mensagem
    resultMessage += `Número do robô: ${robotNumber}<br>`; // Adiciona o número do robô à mensagem
    resultMessage += `Soma: ${sum} (${result})<br>`; // Adiciona a soma e o resultado (Par ou Ímpar) à mensagem

    if (choice === result) {
        // Verifica se o jogador ganhou
        resultMessage += 'Você ganhou!';
    } else {
        // Caso contrário, o robô ganhou
        resultMessage += 'O robô ganhou!';
    }

    document.getElementById('result-message').innerHTML = resultMessage; // Exibe a mensagem de resultado na página
}
