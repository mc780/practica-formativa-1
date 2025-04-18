
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const datos = {
        usuario: document.getElementById('usuario').value,
        password: document.getElementById('password').value
    };

    fetch('http://127.0.0.1:5500/index.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => console.log('Respuesta del servidor:', data))
        .catch(error => console.error('Error:', error));
});