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
    const inputText = document.getElementById('inputText').value.toLowerCase();

    if (isValidInput(inputText)) {
        const encryptedText = encrypt(inputText);
        document.getElementById('outputText').value = encryptedText;
        displayMessage('Texto criptografado com sucesso!', false);
    } else {
        displayMessage('Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais.', true);
    }
}

function displayMessage(message, isError = false) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = '';
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add(isError ? 'error-message' : 'success-message');
    messageContainer.appendChild(messageElement);

    setTimeout(function() {
        messageContainer.innerHTML = '';
    }, 5000);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();

    if (isValidInput(inputText)) {
        const decryptedText = decrypt(inputText);
        document.getElementById('outputText').value = decryptedText;
        displayMessage('Texto descriptografado com sucesso!', false);
    } else {
        displayMessage('Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais.', true);
    }
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    displayMessage('Texto copiado para a área de transferência!', false);
}