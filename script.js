document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href='index.html';
});
    
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Cadatro realizado com sucesso!');
        window.location.href = 'index.html';
    });

    document.querySelectorAll('.buy-btn').forEach(button=> {
        button.addEventListener('click', function() {
            alert('Produto comprado com sucesso!');
        });
    });