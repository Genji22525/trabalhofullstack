const form = document.getElementById('form-cadastro');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const telefone = document.getElementById('telefone').value;

  const pessoa = {
    nome,
    cpf,
    telefone,
  };

  try {
    const response = await fetch('http://localhost:3000/pessoas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pessoa),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});