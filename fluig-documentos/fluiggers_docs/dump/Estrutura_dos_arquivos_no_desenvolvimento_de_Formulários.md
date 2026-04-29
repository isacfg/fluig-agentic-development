# Estrutura dos arquivos no desenvolvimento de Formulários

> **Fonte:** [https://fluiggers.com.br/t/estrutura-dos-arquivos-no-desenvolvimento-de-formularios/2040](https://fluiggers.com.br/t/estrutura-dos-arquivos-no-desenvolvimento-de-formularios/2040)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 13/07/2023, 12:01
> **Visualizações:** 415 | **Likes:** 3 | **Respostas:** 2

---

## Pergunta original

**Gustavo Henrique Lima Silva** (@guhls) — 13/07/2023, 12:01

Estou iniciando no desenvolvimento de formulários do Fluig, atuando com front-end: html, css/bootstrap(fluig style guide), javascript e jquey basicamente

Porém a estrutura do projeto é “feia” visualmente, segue a seguinte estrutura

```auto
forms/
└── form_meu_formulario/
    ├── events/
    │   └── displayFields.js
    │   └── validateForm.js
    ├── form_meu_formulario.html
    ├── custom.css
    ├── alguns .png
    └── vários  .js
```

O html onde está o formulário possui muitos campos e regras o que dificulta encontrar rapidamente o que procura, vocês utilizam algo para pelo menos separar em pedaços do código em outros html’s?

E a estrutura das pastas, como vocês organizam o desenvolvimento dos formulários, ou o Fluig precisa dessa estrutura tudo jogado em uma pasta para que ele funcione?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/07/2023, 17:21

O que aprendi até agora do Fluig:

O formulário precisa ter todos os campos que são utilizados (isso no html principal) porque o Fluig analisa todos os inputs/textarea/zoom e cria os campos na tabela do banco de dados. Se ele não identificar os campos não criará na tabela.

A pasta `events` precisa ser mantida com esse nome, pois é como o Fluig identifica os eventos de back-end do formulário.

As demais pastas são “ignoradas” ao exportar. O fluig envia basicamente só os arquivos. Mas as referências a subpastas continuam funcionando porque ele também ignora as subpastas na URL (ao menos nos testes que fiz). Porém pode fazer o teste de exportar um formulário cheio de pastas e depois importar esse formulário para o seu projeto e verá que virão somente os arquivos.

Ps: se está “triste” com o visual feio da estrutura dos formulários fique longe dos scripts de Processo/Workflow :frowning:

---

## Resposta #2

**Gustavo Henrique Lima Silva** (@guhls) — 13/07/2023, 18:05 | ❤️ 1

Perguntei sobre essas divisões no código mais por conta que existe algumas ferramentas como Handlebars.js, EJS e até o MustacheJS que aparentemente seria possivel essa divisão do html principal, mas como nunca usei nenhum dessas ferramenta aí veio a dúvida

Digo “feio” mais no sentido de diferente pensando no desenvolvimento web que possui uma estruturação diferente, como src/ asset/ js/ css/ templates/e etc mas isso é mais uma convenção que todos seguem e não algo obrigatório, e era justamente isso que estava curioso de saber, se existe convenções de padrões que facilite o desenvolvimento e na legibilidade, não só do código mas do projeto em si

Não tô triste mano, só aprendendo mesmo, não vou deixar de desenvolver com o fluig por conta disso :slight_smile:

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/07/2023, 10:05 | ❤️ 2

O “triste” foi por brincadeira, hehehe.

Acho que tirando a questão da pasta `events` e que todos os campos devem constar no `form` do HTML principal de resto pode fazer como quiser. Só lembrando que no Fluig em si as pastas não existirão, mas a URL continua funcionando por ignorar as subpastas.

De início eu até estava ao menos aplicando um minify no CSS e JS (do que vai pra front-end), mas ao menos os formulários que fiz não precisaram de coisas gigantes/complexas.

Já nas Widgets você tem uma liberdade maior pra trabalhar o front e organização das pastas.

---
