function validarNIF() {
    const input = document.getElementById('nifInput');
    const btn = document.getElementById('btnAcesso');
    const v = input.value;
    
    // Convertemos o texto para um número real
    const num = parseInt(v);

    // Se não for um número OU se tiver menos de 9 dígitos OU se for menor que 111111111
    if (isNaN(num) || v.length !== 9 || num < 111111111 || num > 999999999) {
        input.style.backgroundColor = "yellow"; 
        btn.disabled = true;
    } 
    // Se passar em todos os testes acima, é válido
    else {
        input.style.backgroundColor = "#90ee90"; // Verde
        btn.disabled = false;
    }
}