# Processos criados na Plataforma x Widget customizada

> **Fonte:** [https://fluiggers.com.br/t/processos-criados-na-plataforma-x-widget-customizada/2223](https://fluiggers.com.br/t/processos-criados-na-plataforma-x-widget-customizada/2223)
> **Categoria:** BPM
> **Criado em:** 20/09/2023, 07:58
> **Visualizações:** 179 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 20/09/2023, 07:58

Prezado,
Eu sempre tive muita resistência em usar processos no lugar de widgets customizadas.

Isto porque, na minha opinião, os processos criados dentro da plataforma obriga-nos a seguir roteiros que nos fazem perder muito tempo.

Evidentemente que considero que muitas coisas são úteis, mas não creio que o tempo despendido na criação de diagramas, desenhar formulários, indicar regras de formulário e complementar via código de evento de formulário e código de evento de processo, mexer em vários lugares diferentes (cada um com sua semântica), valha a pena.
Prefiro, ainda na minha modesta opinião, desenvolver Widgets, pelas quais eu tenho tudo num lugar só, “conversando” com banco de dados externos e com plena liberdade para Javacript/jQuery/Css.

As regras de aprovação podem ser implementadas em Widgets sem dificuldade, assim como o envio de email personalizado fica muito mais administrável.

Estou errado? Os **procedimentos impostos pela plataforma** na criação de processos são considerados indispensáveis? São sinônimo de eficiência e de boas práticas?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/09/2023, 09:00

Então, o Fluig realmente tem vários pontos negativos nessa questão, principalmente relacionados a não conseguir compartilhar código-fonte facilmente entre artefatos da plataforma (todo processo tenho que criar praticamente o mesmo código pra instanciar serviços etc.), por exemplo.

Já o processo não vejo como um problema desenhar o fluxo e fazer as validações. Mas é estranho desenvolver um formulário, que em teoria pode ser amarrado a mais de um processo, e ter que ficar “perguntando” em qual atividade está pra exibir determinados campos. Deixa o trabalho muito dividido e complicado de se achar. Além disso percebo que um grande problema é efetuar corretamente o fluxo do processo. Muitas vezes só em produção aparecem as “exceções” que querem em algum ponto do fluxo e é trabalhoso ter que reimplementar algumas coisas por isso.

Porém se for pelo caminho de fazer tudo só em widgets, com acesso direto a banco pra fazer toda a tratativa, porque utilizar o Fluig? Não compensa montar um servidor e nele fazer toda essa parte e assim economizar um bom dinheiro com licença (que não julgo barata pro Fluig) e menos dor de cabeça tendo que adaptar todo o código pra rodar no Fluig?

Ultimamente tenho repensado bastante sobre a utilização / troca de plataforma justamente por essas dificuldades. Ainda estamos num estudo sobre a viabilidade, ainda mais que vamos precisar de muito mais integrações entre os sistemas e precisaremos de muito mais auditoria (salvar campos que tiveram alteração etc.) nos sistemas e pelo que conheço de Fluig isso não será muito simples (ele salva versões do formulário, mas usuários querem ver as alterações na tela clicando em algum botão enquanto dentro do processo/widget/etc).

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 20/09/2023, 15:37 | ❤️ 1

Caro [@Bruno\_Gasparetto](/u/bruno_gasparetto), como sempre, uma referência aqui no Fluiggers e em outros lugares também.
Essa dificuldade que você apontou me desanima bastante.

Acho que, no meu caso, é melhor desenvolver widget porque tenho o controle (como falei antes) total do projeto, mas o Fluig fica para as Comunidades, para os avisos, para a publicação de documentos no GED. Já tá bom.

Mas que eu não gosto de BPM, não gosto mesmo.

---
