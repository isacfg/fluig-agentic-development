# Assinatura simples em formulário do fluig

> **Fonte:** [https://fluiggers.com.br/t/assinatura-simples-em-formulario-do-fluig/2851](https://fluiggers.com.br/t/assinatura-simples-em-formulario-do-fluig/2851)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 13/06/2024, 15:18
> **Visualizações:** 256 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Allan Reichert** (@allan.reichert) — 13/06/2024, 15:18

Boa tarde Pessoal,

Gostaria de uma ajuda ou caso alguem puder compartilhar uma forma de fazer assinatura manual simples(sem certificado) no fluig e armazenar no formulario.

estou montando algo utilizando o canvas (signaturePad) conforme figura abaixo mas nao estou conseguindo armazenar a figura ao enviar o formulário

![image](https://fluiggers.com.br/uploads/default/optimized/2X/c/cde4336e34201767adf17ce50e654e22efbff15c_2_690x274.jpeg)

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 17/06/2024, 15:09 | ❤️ 1

Minha solução provisoria foi armazenar o valor do input canvas em campos de textarea segmentando em partes de 4000 caracteres, limite do campo pra nao fazer gambiarra no banco

quando necessario assinar traz o input canvas, quando salvou, retorna o valor como imagem

![image](https://fluiggers.com.br/uploads/default/original/2X/7/75c6421be708663e5b69224707ed4de9a6fbd659.png)

![image](https://fluiggers.com.br/uploads/default/original/2X/0/071f96e647445ac01ffbbcfcf550b45dec704565.png)

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 18/06/2024, 08:20 | ❤️ 1

Pensei em duas possibilidades, se ajudar:

-   Salvar a imagem como anexo do form e resgatá-la na abertura - isso implica em fazer toda a lógica das APIs pra fazer o CRUD da imagem;
-   Salvar a imagem no GED, com uma estrutura de pastas de acordo e também implementando o CRUD da operação.

---

## Resposta #3

**João vitor** (@joao.dourado) — 02/10/2024, 10:06

Bom dia!

A solução que implementei foi a seguinte:

1.  Criei um campo canvas para capturar a assinatura.
2.  Após a finalização da assinatura, adicionei um botão que, ao ser clicado, salva a assinatura como anexo no formulário.
3.  Na inicialização do formulário, fiz uma consulta para verificar se há um documento anexo correspondente à assinatura.
4.  Se o anexo existir, converto o documento em base64 e redesenho a assinatura no campo canvas.

Obs:Durante a movimentação de cada atividade, o campo canvas é limpo para evitar que o valor seja enviado ao banco de dados, prevenindo possíveis erros devido ao excesso de caracteres.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/f/ffd87405cf8b1f1d3b56bc8982ec23b4337a057d_2_690x108.png)

---

## Resposta #4

**lucaslamb** (@lucaslamb) — 12/11/2024, 11:12

Estou tentando utilizar esse método pelo aplicativo MyFluig, mas sem sucesso ainda, alguém conseguiu utilizar mobile?

---

## Resposta #5

**Allan Reichert** (@allan.reichert) — 14/11/2024, 17:39 | ❤️ 1

Ainda nao usei o projeto em produção mas testei hj pra entender, ao tocar no campo movimenta a página ao invés de desenhar, então da pra usar o codigo abaixo para desconsiderar os movimentos da pagina ao tocar na área do canvas

![image](https://fluiggers.com.br/uploads/default/original/2X/c/c6c779b267f0e7e5b0f33bda135613a61537c71d.png)

---
