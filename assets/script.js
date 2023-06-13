function ocultar(obj, es){
    let div = document.querySelector(obj);
    if(es==1){
        div.style.display = 'flex';
    }else{
        div.style.display = 'none';
    };
};

function red(page){
    window.location = page;
}

const CaseItem = [];
//0-Name, 1-Pré-Condições, 2-Pós-Condições, 3-Detalhamento, 4-Massa de entrada e saída,
//5-Critérios Especiais, 6-Ambiente, 7-Implementação, 8-Iteração
CaseItem[0] = [
    'Caso de Teste - 001 Name',
    '...1',
    '...2',
    '...3',
    '...4',
    '...5',
    '...6',
    '...7',
    '...8',
];
CaseItem[1] = [
    '...0',
    '...1',
    '...2',
    '...3',
    '...4',
    '...5',
    '...6',
    '...7',
    '...8',
];
CaseItem[2] = [
    '...0',
    '...1',
    '...2',
    '...3',
    '...4',
    '...5',
    '...6',
    '...7',
    '...8',
];
CaseItem[3] = [
    '...0',
    '...1',
    '...2',
    '...3',
    '...4',
    '...5',
    '...6',
    '...7',
    '...8',
];
CaseItem[4] = [
    '...0',
    '...1',
    '...2',
    '...3',
    '...4',
    '...5',
    '...6',
    '...7',
    '...8',
];