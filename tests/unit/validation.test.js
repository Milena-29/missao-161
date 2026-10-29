// Importa a função normalizeTitle
const { normalizeTitle, validateTaskInput } = require('../../src/validation');


//Agrupa um bloco  de testes relacionados para manter a organazição 
describe ('Validação de tarefas',  () => {

test('Remove espaços do inicio e do fim do título', ()  =>{
    expect(normalizeTitle ('   Teste Unitário   ')).toBe('Teste Unitário');

});

test('Retorna uma string vazia se o título for um número' ,() =>{
    expect(normalizeTitle( 12415844 )).toBe('');

});

test('Retorna uma string vazia se o título for uma entrada nula', () =>{
    expect(normalizeTitle( null )).toBe('');
});

test('Retorna uma string vazia se o título for uma entrada indefinido', () =>{
    expect(normalizeTitle( undefined )).toBe('');
});

  
// Casos de teste para a função validateTaskInput

  // Verifica se a função retorna uma string vazia quando o título contém apenas espaços.
  test('Retorna uma string vazia se a entrada recebe um título com apenas espaços', () => {
    expect(normalizeTitle('     ')).toBe('');
  });

  // Verifica se a função retorna uma string vazia quando a descrição não é uma string.
  test('Retorna uma string vazia se a descrição receber um valor que não seja uma string', () => {
    expect(normalizeDescription(12345)).toBe('');
  });

  // Verifica se um título com 125 caracteres, e é rejeitado por ultrapassar o limite de 120.
  test('Retorna um erro se a entrada recebe um título com 125 caracteres', () => {
    const title = 'A'.repeat(125);

    expect(() => validateTaskInput({ title }))
      .toThrow('O título deve ter no máximo 120 caracteres.');
  });

});

