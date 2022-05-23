let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };
  
//   diasDaSemana.1; // SyntaxError: Unexpected number
  console.log(diasDaSemana['1']); // domingo
  console.log(diasDaSemana[1]); // domingo
  // console.log(diasDaSemana.1); // Nao funciona



//a chave banco do objeto conta, guarda um outro objeto

let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta['banco']); // { cod: '012', id: 4, nome: 'TrybeBank' }
  //  console.log(conta[banco]); // Nao funciona
  console.log(conta[infoDoBanco]['nome']); // TrybeBank
  console.log(conta['banco']['nome']); // TrybeBank
  // console.log(conta[infoDoBanco][nome]); // Nao funciona
  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4

  console.log(conta.banco.id) // 4
  console.log(conta.banco.nome) // TrybeBank
  console.log(conta.banco) // { cod: '012', id: 4, nome: 'TrybeBank' }



//a chave infoPessoal que possui outras 3 chaves

let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario.infoPessoal.endereco); // {rua: 'Smith Street', bairro: 'Brooklyn', cidade: 'Nova Iorque', estado: 'Nova Iorque'}
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque



  // array composto por objetos

let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
      1: 'teste',
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];

  console.log(moradores[0][1]); // teste

  console.log(moradores[0]); //Mostra tudo sobre o primeiro objeto do array
  console.log(moradores[moradores.length - 1]); //Mostra tudo sobre o ultimo objeto do array
  console.log(moradores[moradores.length - 1].andar); //Mostra a chave andar do primeiro objeto do array
  // console.log(moradores[moradores.length - 1][1]); // Mostra undefined. 
  // Mas se alguma chave se chamasse 1, o valor dessa chave seria mostrado.
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  console.log(moradores[0].nome) //Luiza



let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(vector[0]); // [ 1, 2 ]
console.log(vector[0][0]); // 1
console.log(vector[1]); // [ 3, 4, 5, 6 ]
console.log(vector[1][3]); // 6

