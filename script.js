// Dados para Hexágono Externo (HE)
const codigos_HE = ['100102', '100105', '100104', '100110', '100101', '100103', '100112', '101005', '101004'];
const categorias_HE = ['RI', 'HEX', 'LARG', 'ALT'];
const dicionario_HE = {
    '100102': {'RI': 1.80, 'HEX': 2.40, 'LARG': 3.30, 'ALT': 1.00},
    '100105': {'RI': 2.00, 'HEX': 2.70, 'LARG': 4.10, 'ALT': 0.70},
    '100104': {'RI': 2.00, 'HEX': 2.55, 'LARG': 3.40, 'ALT': 0.70},
    '100110': {'RI': 2.50, 'HEX': 3.30, 'LARG': 5.00, 'ALT': 1.00},
    '100101': {'RI': 1.60, 'HEX': 2.40, 'LARG': 3.50, 'ALT': 0.70},
    '100103': {'RI': 1.70, 'HEX': 2.40, 'LARG': 3.50, 'ALT': 1.00},
    '100112': {'RI': 2.50, 'HEX': 3.40, 'LARG': 5.10, 'ALT': 1.00},
    '101005': {'RI': 1.40, 'HEX': 0, 'LARG': 4.80, 'ALT': 0},
    '101004': {'RI': 1.40, 'HEX': 3.30, 'LARG': 4.80, 'ALT': 0}
};
// Dados para Hexágono Interno (HI)
const codigos_HI = ['100208', '100209', '100313', '100120', '100113', '100211', '100204', '100800', '100223', '100222', '100115', '100116', '100117', '100316', '101005', '101004'];
const categorias_HI = ['RI', 'HEX', '2HEX', 'LARG'];
const dicionario_HI = {
    '100208': {'RI': 1.8, 'HEX': 2.3, '2HEX': 0.0, 'LARG': 3.5},
    '100209': {'RI': 2.0, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 4.0},
    '100313': {'RI': 1.6, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 4.3},
    '100120': {'RI': 1.8, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 3.5},
    '100113': {'RI': 1.4, 'HEX': 2.4, '2HEX': 0.0, 'LARG': 4.0},
    '100211': {'RI': 2.0, 'HEX': 2.4, '2HEX': 0.0, 'LARG': 3.3},
    '100204': {'RI': 2.0, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 4.0},
    '100800': {'RI': 1.8, 'HEX': 2.4, '2HEX': 0.0, 'LARG': 3.8},
    '100223': {'RI': 1.6, 'HEX': 2.2, '2HEX': 2.2, 'LARG': 3.5},
    '100222': {'RI': 1.6, 'HEX': 2.7, '2HEX': 2.2, 'LARG': 4.1},
    '100115': {'RI': 1.8, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 3.5},
    '100116': {'RI': 2.0, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 4.3},
    '100117': {'RI': 1.8, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 5.0},
    '100316': {'RI': 1.8, 'HEX': 2.5, '2HEX': 0.0, 'LARG': 3.8},
    '101005': {'RI': 1.4, 'HEX': 0.0, '2HEX': 0.0, 'LARG': 4.8},
    '101004': {'RI': 1.4, 'HEX': 3.3, '2HEX': 0.0, 'LARG': 4.8}
};
// Dados para Cone Morse (CM)
const codigos_CM = ['100703', 'Sistema universal Neodent', '801007', '100712', '100705', '100750', '100755', '100730', '100736', '100790', '100720', '100319', '100320', '100321', '100714', '100701', '100702', '100801', '101005'];
const categorias_CM = ['RI', 'HEX', 'LARG'];
const dicionario_CM = {
    '100703': {'RI': 1.8, 'HEX': 2.1, 'LARG': 3.5},
    'Sistema universal Neodent': {'RI': 0.0, 'HEX': 0.0, 'LARG': 0.0},
    '101007': {'RI': 2.0, 'HEX': 3.0, 'LARG': 4.8},
    '100712': {'RI': 1.6, 'HEX': 2.0, 'LARG': 4.0},
    '100705': {'RI': 1.6, 'HEX': 2.25, 'LARG': 3.5},
    '100750': {'RI': 1.6, 'HEX': 0.0, 'LARG': 3.5},
    '100755': {'RI': 1.6, 'HEX': 0.0, 'LARG': 4.1},
    '100730': {'RI': 2.0, 'HEX': 0.0, 'LARG': 4.8},
    '100736': {'RI': 2.0, 'HEX': 0.0, 'LARG': 6.5},
    '100790': {'RI': 2.0, 'HEX': 0.0, 'LARG': 4.0},
    '100720': {'RI': 1.6, 'HEX': 2.0, 'LARG': 3.5},
    '100319': {'RI': 1.4, 'HEX': 0.0, 'LARG': 3.0},
    '100320': {'RI': 1.6, 'HEX': 2.25, 'LARG': 3.5},
    '100321': {'RI': 2.0, 'HEX': 2.65, 'LARG': 4.3},
    '100714': {'RI': 1.8, 'HEX': 1.9, 'LARG': 3.5},
    '100701': {'RI': 1.6, 'HEX': 2.1, 'LARG': 3.5},
    '100702': {'RI': 2.0, 'HEX': 2.5, 'LARG': 4.5},
    '100801': {'RI': 1.8, 'HEX': 0.0, 'LARG': 3.75},
    '101005': {'RI': 1.4, 'HEX': 0.0, 'LARG': 4.8}
};

function normalizarEConverterDecimal(valor) {
    if (typeof valor === 'string') {
        valor = valor.replace(',', '.');
    }
    return parseFloat(valor);
}

function calcularCompatibilidade(medidasUsuario, medidasComponente, tolerancia = 0.1) {
    let compatibilidade = 100;
    let totalCategoriasConsideradas = 0;
    let somaDiferencas = 0;
    let medidasConsideradas = 0;

    for (let categoria in medidasComponente) {
        if (categoria in medidasUsuario && medidasUsuario[categoria] !== null) {
            // Normaliza e converte a medida do usuário
            let medidaUsuarioNormalizada = normalizarEConverterDecimal(medidasUsuario[categoria]);
            let diff = Math.abs(medidaUsuarioNormalizada - medidasComponente[categoria]);
            if (diff <= tolerancia) {
                somaDiferencas += diff;
                medidasConsideradas++;
            } else {
                return 0; // Exclui o componente se qualquer medida estiver fora do intervalo de tolerância.
            }
        }
        totalCategoriasConsideradas++;
    }

    if (medidasConsideradas > 0) {
        let mediaDiferencas = somaDiferencas / medidasConsideradas;
        compatibilidade -= (mediaDiferencas / tolerancia) * 100 / totalCategoriasConsideradas;
    } else {
        compatibilidade = 0;
    }

    return compatibilidade;
}

function encontrarComponentes(tipo, medidas, tolerancia = 0.21) {
    let dicionario;
    switch (tipo) {
        case 'HE':
            dicionario = dicionario_HE;
            break;
        case 'HI':
            dicionario = dicionario_HI;
            break;
        case 'CM':
            dicionario = dicionario_CM;
            break;
        default:
            return []; // Retorna lista vazia se o tipo não é reconhecido
    }

    let resultados = [];
    for (let nome in dicionario) {
        let medidasComponente = dicionario[nome];
        let compatibilidade = calcularCompatibilidade(medidas, medidasComponente, tolerancia);
        if (compatibilidade > 60) { // Filtra componentes com compatibilidade maior que 60%
            resultados.push({ nome, compatibilidade });
        }
    }

    // Ordena os resultados pela compatibilidade, do maior para o menor
    resultados.sort((a, b) => b.compatibilidade - a.compatibilidade);
    return resultados;
}