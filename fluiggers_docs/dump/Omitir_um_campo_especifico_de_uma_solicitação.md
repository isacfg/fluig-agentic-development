# Omitir um campo especifico de uma solicitação

> **Fonte:** [https://fluiggers.com.br/t/omitir-um-campo-especifico-de-uma-solicitacao/1185](https://fluiggers.com.br/t/omitir-um-campo-especifico-de-uma-solicitacao/1185)
> **Categoria:** BPM
> **Tags:** `form`, `bpm`
> **Criado em:** 13/07/2022, 11:32
> **Visualizações:** 629 | **Likes:** 1 | **Respostas:** 7

---

## Pergunta original

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 13/07/2022, 11:32

Bom dia.

Estou trabalhando em um fluxo que contém um campo salário desde o inicio da solicitação. existe alguma técnica que posso usar para para não mostrar esse campo para pessoas que não participam da solicitação?

Na tela **Consultar solicitações** é possível tirar um relatório avançado da solicitação e neste relatório o valor do campo salário fica exposto. Existe alguma configuração que não conheço para impedir que esse campo faça parte do relatório avançado?

Creio que ate mesmo remover a permissão de alguns usuários de gerar esse relatório possa me ajudar.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 14/07/2022, 09:45

No display fileds você seta ele para disable ai ele não aparece.
Vale lembrar que por padrão quem não participa da solicitação não consegue enxergar, e se alguém que não participou enxerga é porque foi dada a permissão. No seu código vc tem que verificar se form mode está em view e esconder tb lá o salario. Ai resolve.

---

## Resposta #2

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 15/07/2022, 09:55

No formulário já faço o que você sugeriu. O meu problema esta na tela de consultar solicitações como as imagens abaixo mostram.

![Captura de tela 2022-07-15 094230](https://fluiggers.com.br/uploads/default/optimized/1X/2887f768cedc2c43f848759e3c777e005186da1e_2_345x140.png)

![Captura de tela 2022-07-15 095236](https://fluiggers.com.br/uploads/default/optimized/1X/066dbc9d72181205492ca9a06f7cd7b3bb5cb596_2_345x140.png)

Este checkbox que exporta os dados do formulário cria um excel com os dados de cada solicitação e uma das colunas é a de salário que eu preciso esconder.

Mas percebi que o usuário em questão tem papel ***admin*** e estou procurando qual permissão deixa o usuário realizar essa exportação avançada. se eu conseguir remover ela creio que resolva meu problema.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/07/2022, 09:57

ainda não testei, mas o Fluig tem a opção de informar os campos que são anonimizados (obrigatoriedade da lgpd). Talvez assim ele evite exportar alguns dados sensíveis.

aqui usamos o fluig para o processo de aprovação de pautas da diretoria e surgiu esse medo de informações sigilosas aparecem pra qualquer um que verifique o processo. Ainda estamos estudando pra garantir que realmente só quem participou do processo tenha acesso aos dados.

---

## Resposta #4

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 15/07/2022, 10:09

Encontrei essa frase em um site falando sobre a versão Lake.

> Ao configurar um formulário dentro de um processo com regras específicas, pode-se definir quais dados ficarão disponíveis para visualização e consulta, configurando em todos os campos o item Privacidade, anonimizando o conteúdo do campo com a justificativa e motivo da ação.

*fonte: [Fluig Lake e a LGPD](https://crmservices.com.br/blog/fluig-lake-e-a-lgpd/)*

Vou ler com calma a documentação para encontrar onde fala dessa configuração. Farei alguns testes. assim que tiver alguma conclusão compartilho aqui.

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/07/2022, 10:54

Na documentação tem um pouco da explicação onde fala das atualizações do Lake: [Atualização Lake (1.7) - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=440834439#Atualiza%C3%A7%C3%A3oLake\(1.7\)-Documentos)

Infelizmente a documentação de formulário tá faltando essa parte da LGPD.

E não faço ideia de como realmente está funcionando isso por enquanto. Preciso muito arranjar um tempo pra ver como o Fluig trata os dados e se é possível converter os formulários atualizando os campos.

---

## Resposta #6

**Eustaquio Ferreira** (@Eustaquio_Ferreira) — 15/07/2022, 11:22 | ❤️ 1

Segue um video que encontrei. mostrando como configurar a Anonimização

[WEBINAR - LGPD Fluig - na prática](https://www.youtube.com/watch?v=F7Oz8nlyFzc)

e um link da documentação que fala sobre a LGPD. Mas não esta publicada ainda:

[Aplicando a LGPD em Formulários](https://tdn.totvs.com/pages/viewpage.action?pageId=668198808)

---

## Resposta #7

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/07/2022, 15:50

assisti ao webinar e pelo que entendi ele só vai permitir anonimizar mesmo, não tem isso de proteger de não aparecer em relatórios/exportação.

---

## Resposta #8

**Cassius** (@Cassius) — 08/11/2024, 10:21

Bom dia a todas e todos.

Estamos com uma demanda e assim como você disse [@Bruno\_Gasparetto](/u/bruno_gasparetto) em sua interação aqui em 07/2022 “… e surgiu esse medo de informações sigilosas aparecem pra qualquer um que verifique o processo.” também estamos com esta preocupação.
Vocês sabem se nas versões mais novas do Fluig foram disponibilizadas opções para que possamos proteger informações sigilosas onde só as pessoas autorizadas possam acessá-las?

Obrigado.

Cassius

---

## Resposta #9

**venturelli** (@venturelli) — 08/11/2024, 17:16

Antes de mais nada é importante marcar o processo como **não** público. Ou seja, quem terá acesso aos dados:

-   solicitante
-   pessoas que movimentaram a solicitação
-   pessoas definidas como gestoras do processo
-   pessoas à quem foi dado permissão de visualização no processo

Se a intenção é esconder as informações desses personagens, o Fluig não tem nada nativo de fato.

Se isso fosse uma necessidade, de bate pronto eu pensaria ou em copiar os dados para outro formulário que só o adm tem acesso e limpar no formulário original ou mesmo criptografar essa informação no formulário.

---

## Resposta #10

**Daniel Sales** (@Daniel_Sales) — 13/11/2024, 17:43

Esperimente ver se os dados pessoais servem para seu proposito no painel de controle do fluig ([https://urldofluig/personalData](https://urldofluig/personalData))

Nunca usei mas sei que tem e talvez seja oque precisa

---
