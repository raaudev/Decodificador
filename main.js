function encrypt(text) {
    return text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function isValidInput(text) {
    return /^[a-z\s]+$/.test(text);
}

function encryptText() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const text = inputText.value.toLowerCase();

    if (isValidInput(text)) {
        const encryptedText = encrypt(text);
        outputText.value = encryptedText;
        displayMessage('Texto criptografado com sucesso!', 'success');
        outputText.classList.add('fade-in');
        setTimeout(() => outputText.classList.remove('fade-in'), 500);
    } else {
        displayMessage('Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais.', 'error');
        inputText.classList.add('input-error');
        setTimeout(() => inputText.classList.remove('input-error'), 1000);
    }
}

function decryptText() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const text = inputText.value.toLowerCase();

    if (isValidInput(text)) {
        const decryptedText = decrypt(text);
        outputText.value = decryptedText;
        displayMessage('Texto descriptografado com sucesso!', 'success');
        outputText.classList.add('fade-in');
        setTimeout(() => outputText.classList.remove('fade-in'), 500);
    } else {
        displayMessage('Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais.', 'error');
        inputText.classList.add('input-error');
        setTimeout(() => inputText.classList.remove('input-error'), 1000);
    }
}

function displayMessage(message, type = 'info') {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = '';
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message', type);
    messageContainer.appendChild(messageElement);

    // Animação de entrada
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 10);

    // Animação de saída e remoção
    setTimeout(() => {
        messageElement.classList.remove('show');
        messageElement.classList.add('hide');
        messageElement.addEventListener('transitionend', () => {
            messageContainer.innerHTML = '';
        }, { once: true });
    }, 4000);
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    if (outputText.value) {
        outputText.select();
        document.execCommand('copy');
        displayMessage('Texto copiado para a área de transferência!', 'success');
        outputText.classList.add('copied-animation');
        setTimeout(() => outputText.classList.remove('copied-animation'), 1000);
    } else {
        displayMessage('Não há texto para copiar!', 'info');
    }
}

function clearInput() {
    document.getElementById('inputText').value = '';
    displayMessage('Campo de entrada limpo!', 'info');
}

function clearOutput() {
    document.getElementById('outputText').value = '';
    displayMessage('Campo de saída limpo!', 'info');
}

// Adicionar event listeners para os botões de limpar
document.addEventListener('DOMContentLoaded', () => {
    const inputContainer = document.querySelector('.container');
    const outputContainer = document.querySelector('.container__copiar');

    // Botão de limpar para o input
    const clearInputBtn = document.createElement('button');
    clearInputBtn.innerHTML = '<i class="bi bi-x-circle"></i> Limpar';
    clearInputBtn.classList.add('btn__clear', 'btn__clear--input');
    clearInputBtn.onclick = clearInput;
    inputContainer.appendChild(clearInputBtn);

    // Botão de limpar para o output
    const clearOutputBtn = document.createElement('button');
    clearOutputBtn.innerHTML = '<i class="bi bi-x-circle"></i> Limpar';
    clearOutputBtn.classList.add('btn__clear', 'btn__clear--output');
    clearOutputBtn.onclick = clearOutput;
    outputContainer.appendChild(clearOutputBtn);
});

