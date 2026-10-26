// Importa a função normalizeTitle
const {normalizeTitle} = require ( '../../src/validation');


//Agrupa um bloco  de testes relacionados para manter a organazição 
describe ('Validação de tarefas',  () => {

test('Remove espaços do inicio e do fim do título', ()  =>{
    expect(normalizeTitle ('   Teste Unitário   ')).toBe('Teste Unitário');

});

test('retorna uma string vazia se o título for um número' ,() =>{
    expect(normalizeTitle( 12415844 )).toBe('');

});

test('retorna uma string vazia se o título for uma entrada nula', () =>{
    expect(normalizeTitle( null )).toBe('');
});

test('retorna uma string vazia se o título for uma entrada indefinido', () =>{
    expect(normalizeTitle( undefined )).toBe('');
});

});