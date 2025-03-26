document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let expressão = '';

    document.querySelectorAll('.botao').forEach(botao => {
        botao.addEventListener('click', () => {
            const valor = botao.textContent;

            if (valor === 'C') {
                expressão = '';
                display.value = '0';
            } else if (valor === '=') {
                try {
                    // Correção: substitui todas as ocorrências da raiz quadrada adequadamente
                    expressão = expressão.replace(/√\(/g, 'Math.sqrt(');
                    expressão = expressão.replace(/x/g, '*'); // Corrigindo multiplicação "x" para o operador "*"
                    const resultado = eval(expressão);
                    display.value = resultado;
                    expressão = resultado.toString();
                } catch {
                    display.value = "Erro!";
                    expressão = '';
                }
            } else if (valor === '√') {
                expressão += '√(';
                display.value = expressão;
            } else {
                if (display.value === '0' && valor !== '.') {
                    expressão = valor;
                } else {
                    expressão += valor;
                }
                display.value = expressão;
            }
        });
    });
});