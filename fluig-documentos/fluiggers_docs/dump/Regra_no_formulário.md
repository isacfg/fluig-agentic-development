# Regra no formulário

> **Fonte:** [https://fluiggers.com.br/t/regra-no-formulario/3481](https://fluiggers.com.br/t/regra-no-formulario/3481)
> **Categoria:** Sem categoria
> **Criado em:** 28/10/2025, 13:26
> **Visualizações:** 63 | **Likes:** 4 | **Respostas:** 4

---

## Pergunta original

**Murilo Cardoso** (@Murilo_Cardoso) — 28/10/2025, 13:26

Eai galera, tudo bem com vocês?
Estou com um problema, inclusive é no Fluig 2.0

Estou fazendo um processo onde, o no formulário existe algumas etapas, e precisa seguir essas regras
Um exemplo
1 - Projeto - apenas o solicitante pode responder e enviar.
2 - Após o envio uma área determinada precisa aprovar ou não, aprovando ele segue ou o projeto e cancelado.
E assim vai até chegar os sócios.

Mas estou com dificuldades para aplicar essa regra nele, eu olhando vejo que pode ser um problema no js e não no workflow (acho)

E é apenas um formulário com varias etapas.
Mesmo com abertura na totvs, ainda não consegui de fato identificar o real problema.

Caso tenham uma ideia de ajuda.
Ou caso queiram mais detalhes, ficarei muito grato.

---

## Resposta #1

**Pietro** (@pietro) — 29/10/2025, 16:33 | ❤️ 1

Boa tarde.

Se você genuinamente quer ajuda, manda exatamente qual o erro, se possivel com print/por escrito, e pelo menos uma print do workflow, o código também ajudaria, mas ai depende de você querer compartilhar ou não.

Como você explicou não tem como entender onde ou no que é o problema, pois se quer sabemos como foi montado.

---

## Resposta #2

**Murilo Cardoso** (@Murilo_Cardoso) — 30/10/2025, 10:00

**Bom dia.**
Caso tenha dúvida se preciso de ajuda? a resposta é sim
Entendo que a explicação anterior não tenha ficado muito clara, então vou detalhar melhor.

O projeto que estou desenvolvendo possui 6 etapas, e ele segue uma regra básica: caso a etapa 1 não tenha sido respondida, a etapa 2 não deve ser desbloqueada para a próxima área responder — e assim sucessivamente.

O código base que quase funcionou foi um único script que fiz de forma contínua (um código grande), mas ainda não atingiu o comportamento esperado.
Segue abaixo:

Workflow é meio extenso, mas basicamente é assim

Início (Solicitante)

1.  Proposta (Solicitante)
2.  Aprovação PMO (PMO)
3.  **Decisão: PMO Aprovou?**
    -   **Caminho NÃO:** Retorna para **Proposta** (Solicitante)

    -   **Caminho SIM:**

4.  TAP (Gerente de Projetos)
5.  Parecer Técnico (Áreas Técnicas)
6.  Fórum (Comitê de Investimento)
7.  **Decisão: Fórum Aprovou?**
    -   **Caminho NÃO:** Retorna para **Parecer Técnico** (Áreas Técnicas)

    -   **Caminho SIM:** Próximo formulário

8.  Sócios (Nível Executivo/Sócios)
9.  **Decisão: Aprovado?**
    -   **Caminho SIM (Aprovado):** **Fim do Processo (Aprovado)**

    -   **Caminho NÃO (Reprovado):** **Fim do Processo (Reprovado)**


O código por ser um pouco extenso, não da pra colocar aqui, mas mando em um bloco de notas

[projeto investimento.txt](https://fluiggers.com.br/uploads/short-url/m2kqO69Gs85F5INv3IslzGJHwYm.txt) (42,1,KB)

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Jonathan Albuquerque** (@Jonathan.Albuquerque) — 30/10/2025, 23:55 | ❤️ 2

Murilo, analisei seu código com e gostaria de compartilhar algumas observações.

Recomendo fortemente que você faça ou revise os cursos de desenvolvimento disponíveis na [fluig academy](https://academy.fluig.com/), especialmente os módulos que abordam o [style guide](https://style.fluig.com/). Isso vai te ajudar a alinhar melhor seu projeto às boas práticas da plataforma.

Notei que há um excesso de código gerado por inteligência artificial que acabou trazendo uma complexidade desnecessária para um projeto que, de verdade, é bastante simples. Nem você conseguiu identificar com clareza onde está o erro ou por que ele ocorre, o que dificulta bastante qualquer sugestão ou ajuda mais precisa. Para isso, seria necessário ter acesso ao projeto completo, além dos cadastros, não apenas ao HTML.

Há também alguns pontos técnicos, o uso do zoom no HTML não está corretamente implementado, a estrutura pai-filho não está funcional, e tem uns trechos no seu javascript que nem eu entendi o porque existe.

Pela flexibilidade que o Fluig oferece é comum querermos sair um pouco do padrão. Masss, sem o domínio das particularidades que o fluig tem, fica difícil. O Fluig possui umas regrinhas que vai te exigir uma técnica que está além de qualquer documentação.

E esquece a Totvs, ela não vai revisar o seu javascript por um problema que não é dela kkk.

Por isso, minha sugestão é que você inicie uma refatoração do projeto, etapa por etapa, explorando melhor os recursos como *displayFields* e os eventos de processo. Isso vai te ajudar a construir um bpm mais robusto.

Faça seu cadastro na Academy, tira alguns certificados, leia a documentação com atenção e quando tiver evoluído o seu projeto compartilhe aqui novamente.

A galera aqui é meio cabulosa, tem gente com dez anos de fluig🧓

Assim poderemos discutir de forma mais técnica e contribuir com sugestões mais assertivas.

[Eventos de Processos - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Eventos+de+Processos)j

[Nomenclatura e Estrutura de Formulários - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=244448460)

[Personalização de formulários - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=663066946)

[Formulários - Campo Pesquisa (zoom) - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=872686733)

abs

---

## Resposta #4

**Murilo Cardoso** (@Murilo_Cardoso) — 31/10/2025, 16:23 | ❤️ 1

Eai Jonathan, tudo bem?

Agradeço muito as recomendações e entendo perfeitamente a galera ter vários anos de Fluig.
Como comecei agora, e assim, onde estou não tenho com quem a recorrer, queria entender melhor sobre.
Mas um pouco depois de enviar esse arquivo, fiz a decisão de fazer algo só na mão mesmo, mesmo sendo mais demorado e pensei, “quem sabe daria certo”.

E de fato, olhando documentações, revisando alguns vídeos do academy, consegui fazer o processo aqui prosseguir muito mais.

E novamente.. Agradeço muito a atenção
Peço perdão por algo, pois como foi dito, começando agora agora com uma ferramenta, onde não tenho quem a recorrer além da TOTVS e agora vocês.

Abraços e ainda vou ver mais sobre as documentações e tudo o que você me falou.

---

## Resposta #5

**Murilo Cardoso** (@Murilo_Cardoso) — 03/11/2025, 17:09

Boa tarde,

Só compartilhando isso que deu certo.
Fiz outro processo de reembolso e despesa, utilizando as dicas que vocês me passaram, agradeço Pietro e Jonathan pelas dicas, não só aqui, vi em outros comentários também.

Estava com problemas em um processo, onde quando o solicitante fazer uma requisição, iria para uma outra etapa, e assim a requisição ficaria bloqueada com os dados que o solicitante colocou e assim iria seguir com o processo.

E resumidamente, como não tinha costume de usar o displayFields, displayFields e validateForm. ( coisa de garoto novo no sistema ).

Utilizando as dicas passadas.

Resumo técnico de como foi feito:

#### [](#p-7695-h-1-arquitetura-e-fluxo-workflow-bpm-1)1\. Arquitetura e Fluxo (Workflow BPM)

-   **Definição:** O processo é um fluxo de trabalho sequencial de três etapas de aprovação.

-   **Atribuição por Grupo:** As tarefas são atribuídas diretamente aos grupos responsáveis pela execução (ex: `grupo_solicitante`, `grupo_forum_investimentos`, `grupo_socios`), o que garante o roteamento correto e a distribuição de tarefas.

-   **Controle de Movimentação:** O fluxo define transições condicionais (setas) no diagrama para garantir que a solicitação siga o caminho correto de aprovação ou reprovação.


#### [](#p-7695-h-2-segurana-e-visibilidade-camada-de-eventos-2)2\. Segurança e Visibilidade (Camada de Eventos)

-   **Princípio de Segurança Máxima:** A segurança é garantida pelo script **`displayFields.js`**. Este script aplica a **Programação Defensiva**, que funciona da seguinte forma:

    1.  Primeiro, ele desabilita todos os campos do formulário (Bloqueio Universal).

    2.  Em seguida, ele verifica a qual grupo o usuário logado pertence, e **somente** se o grupo for o responsável pela atividade atual, os campos correspondentes são re-habilitados.

-   **Regras de Negócio:** O script **`validateForm.js`** aplica as regras de obrigatoriedade e consistência de dados, garantindo que a validação seja executada apenas para a atividade atual (`WKNumState`).


#### [](#p-7695-h-3-formulrio-e-dados-interface-ecm-3)3\. Formulário e Dados (Interface ECM)

-   **Estrutura de Dados:** O formulário (`solicitarReembolso.html`) está dividido visualmente em painéis para cada etapa do processo (Solicitante, Centro de Custo e Financeiro), facilitando a experiência do usuário.

-   **Dataset Integrado:** O campo “Centro de custo” é populado dinamicamente por um Dataset customizado (`dsCentroCusto.js`), que fornece dados mestres (IDs e Descrições) de forma externa ao formulário.

-   **Estabilidade de Execução:** O carregamento dos recursos essenciais (como o jQuery) foi estabilizado no cabeçalho do HTML, garantindo que os scripts de segurança (`displayFields.js`) sejam executados sem falhas no navegador.


Peço perdão por algo e agradeço muito.
Caso tenham dúvidas de como foi estruturado, consigo adaptar para mandar aqui.

abraços.

---

## Resposta #6

**Jonathas** (@JonathasFluig) — 05/11/2025, 20:26

Muito bom mesmo, me ajudou também.

---
