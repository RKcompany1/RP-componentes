
const coneMorseImages = {
    '100703': '100703.PNG',
    '101007': '101007.PNG',
    '100712': '100712.PNG',
    '100705': '100705.PNG',
    '100750': '100750.PNG',
    '100755': '100755.PNG',
    '100730': '100730.PNG',
    '100736': '100736.PNG',
    '100790': '100790.PNG',
    '100720': '100720.PNG',
    '100319': '100319.PNG',
    '100320': '100320.PNG',
    '100321': '100321.PNG',
    '100714': '100714.PNG',
    '100701': '100701.PNG',
    '100702': '100702.PNG',
    '100801': '100801.PNG',
    '101005': '101005.PNG'
};


document.addEventListener('DOMContentLoaded', function() {
    const resultados = JSON.parse(localStorage.getItem('resultados')) || [];
    exibirResultadosNaPagina(resultados);
});
function exibirResultadosNaPagina(componentes) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    const lista = document.createElement('ul');
    resultsContainer.appendChild(lista);

    if (componentes.length === 0 || componentes[0].nome === 'Nenhum componente compatível') {
        const item = document.createElement('li');
        item.textContent = 'Nenhum componente compatível encontrado.';
        lista.appendChild(item);
        return;
    } else {
        for (const { nome, compatibilidade } of componentes) {
            const item = document.createElement('li');
            item.textContent = `${nome} - Compatibilidade: ${compatibilidade.toFixed(2)}%`;
            item.classList.add('result-item'); // Esta classe deve ser usada para estilização

            if (coneMorseImages[nome]) {
                const img = document.createElement('img');
                img.src = coneMorseImages[nome];
                img.alt = 'Imagem do componente ${nome}';
                img.style = 'width: 200px; height: auto; margin-right: 20px'; // Ajuste conforme necessário

                // Adiciona a imagem ao item da lista
                item.appendChild(img);
            }

            lista.appendChild(item);
        }
    }

    resultsContainer.appendChild(lista);
}