document.getElementById('form-cadastro').addEventListener('submit', function (event) {
  event.preventDefault();

  // 1. Capturar valores dos inputs
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const idade = document.getElementById('idade').value;
  const interesses = document.getElementById('interesses').value;

  // 2. Tratar os dados
  const nomeTratado = nome.trim();
  const emailTratado = email.trim().toLowerCase();
  const idadeTratada = parseInt(idade);
  const interessesTratados = interesses
    .trim()
    .toLowerCase()
    .split(',')
    .map(interesse => interesse.trim());

  // Verificar se "música" está nos interesses
  const temMusica = interessesTratados.includes('música');

  // 3. Criar objeto com os dados formatados
  const dadosFormatados = {
    nome: nomeTratado,
    email: emailTratado,
    idade: idadeTratada,
    interesses: interessesTratados,
    temMusica: temMusica
  };

  // 4. Exibir resultado formatado na section
  const resultadoSection = document.getElementById('resultado');
  resultadoSection.style.display = 'block';
  resultadoSection.innerHTML = `
    <h3>Dados do Cadastro:</h3>
    <p><strong>Nome:</strong> ${dadosFormatados.nome}</p>
    <p><strong>Email:</strong> ${dadosFormatados.email}</p>
    <p><strong>Idade:</strong> ${dadosFormatados.idade}</p>
    <p><strong>Interesses:</strong> ${dadosFormatados.interesses.join(', ')}</p>
    <p><strong>Gosta de música:</strong> ${dadosFormatados.temMusica ? 'Sim' : 'Não'}</p>
  `;

  // 5. Exibir objeto formatado no console
  console.log('Dados formatados:', dadosFormatados);
});
