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
                    expressão = expressão.replace(/√\(/g, 'Math.sqrt(');
                    expressão = expressão.replace(/x/g, '*');

                    // Corrigindo automaticamente qualquer falta de ")"
                    const abreParenteses = (expressão.match(/\(/g) || []).length;
                    const fechaParenteses = (expressão.match(/\)/g) || []).length;
                    const parentesesFaltantes = abreParenteses - fechaParenteses;
                    expressão += ")".repeat(Math.max(0, parentesesFaltantes));

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