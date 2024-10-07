document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Simulando credenciais de login
    if (username === 'usuario_teste' && password === 'senha_teste') {
        message.textContent = 'Bem-vindo, ' + username + '!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Credenciais inválidas.';
        message.style.color = 'red';
    }
});
