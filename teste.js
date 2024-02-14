const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "vari myVar = 10",
        "let myVar = 10",
        "myVar 10 = var"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "Console.log()"
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript",
      respostas: [
        "// Este é um comentário;",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses não é um tipo de dado em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Float"
      ],
      correta: 2
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "def myFunction() {}",
        "myFunction = function() {}"
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":="
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas palavras-chave é usada para declarar uma variável constante em JavaScript?",
      respostas: [
        "let",
        "const",
        "var"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "parseFloat()"
      ],
      correta: 0
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }