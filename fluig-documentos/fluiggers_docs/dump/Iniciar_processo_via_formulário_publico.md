# Iniciar processo via formulário publico

> **Fonte:** [https://fluiggers.com.br/t/iniciar-processo-via-formulario-publico/560](https://fluiggers.com.br/t/iniciar-processo-via-formulario-publico/560)
> **Categoria:** Formulários
> **Criado em:** 15/07/2021, 13:50
> **Visualizações:** 2088 | **Likes:** 13 | **Respostas:** 12

---

## Pergunta original

**Daniel ** (@daniel_fmartins) — 15/07/2021, 13:50 | ❤️ 1

Bom tarde.

Mediante a necessidade de iniciar um processo a partir de uma página pública fluig, fiz da seguinte forma:

Construi uma página pública, e ao usuário executar uma ação de click, é consumido o serviço simpleStartProcess do ECMWorkflowEngineService.

Tudo ocorre tranquilo até então…

Porém o que me incomoda é que no XML que faz a requisição é necessário passar um usuário e senha:

![image](https://fluiggers.com.br/uploads/default/original/1X/91051d2584a992cfb7e5a4fafb1bc07d05579413.png)

Isso não me parece legal, apesar de até o momento através do inspecionar elementos não consegui acessar o xml que possui as credenciais.

Alguém já passou ou algo parecido? ou até mesmo iniciou a solicitação de outra forma(via REST por exemplo)?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/07/2021, 15:40 | ❤️ 1

Também tenho essa dúvida.

Eu utilizei vários serviços SOAP em Widgets de páginas privadas. Não deixava o login e senha direto na string do xml e sim num dataset (assim ficava mais fácil trocar as credenciais), mas como eu tinha que buscar o valor do dataset se inspecionar a rede consegue pegar as credenciais. Bem inseguro.

Pensei em criar um Dataset que consome o SOAP, deixando tudo em backend, e no front só chamar esse dataset. Ao menos não há perigo de exibir as credenciais.

---

## Resposta #2

**Willian Laynes** (@Willian_Laynes) — 15/07/2021, 19:30 | ❤️ 2

Você pode usar as APIs V2 do Fluig e autenticar com oAuth.

[https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/start](https://api.fluig.com/latest/process-management/swagger-ui/#/Processes/start)

Você só vai precisar criar um usuário customer com Key e Secret.

---

## Resposta #3

**Daniel ** (@daniel_fmartins) — 15/07/2021, 20:20

[@Willian\_Laynes](/u/willian_laynes) olhando aqui, na parte da configuração do oAuth, tenho que criar um novo registro(ou reaproveitar um existente) em *OAuth Provider* e depois criar um registro em *OAuth Application* para conseguir construir um serviço com no caso OAuth 1, é isso?

Na parte de adicionar um novo registro em *OAuth Application*, a *Consumer Key* e *Consumer Key* são campos em que eu mesmo defino qualquer chave para usar depois?

---

## Resposta #4

**Willian Laynes** (@Willian_Laynes) — 15/07/2021, 20:33

Se já existir um você pode aproveitar Consumer Key e Secret você que define. Depois ele vai gerar os Tokens para você.

---

## Resposta #5

**Willian Laynes** (@Willian_Laynes) — 15/07/2021, 20:37 | ❤️ 1

Só verifica se o provider que existe, está usando o método correto.

![image](https://fluiggers.com.br/uploads/default/original/1X/5f3d8cadc55184a43caa84d1e62d80b86cd7b57d.png)

Exemplo de application:

![image](https://fluiggers.com.br/uploads/default/original/1X/0a915ff20703b4d27776236cb7705e62740b2172.png)

Depois só selecionar e clicar aqui em cima:

![image](https://fluiggers.com.br/uploads/default/original/1X/e10e036d707a4338963f28a50778b0f531ddadbf.png)

---

## Resposta #6

**Daniel Sales** (@Daniel_Sales) — 16/07/2021, 08:47 | ❤️ 2

Ja fiz algo parecido com isso que você quer, o problema é que se o usuario acessar a pagina publica mesmo logado no fluig o fluig se perde.
Fiz ate um dataset que valida usuario e senha no identity.
Vou procurar e posto o fonte aqui.

---

## Resposta #7

**Daniel ** (@daniel_fmartins) — 16/07/2021, 13:42

[@Willian\_Laynes](/u/willian_laynes) tem algum exemplo de como é feito o consumo da API REST na widget?

Consegui configurar o serviço e funcionou de boa. Estou tendo só um pouco de dificuldade no consumo.

---

## Resposta #8

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 14:13 | ❤️ 1

Consigo sim, já te passo

---

## Resposta #9

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 14:54 | ❤️ 1

Opa… [@daniel\_fmartins](/u/daniel_fmartins)

Fiz um POC aqui para você testar, ele esta em uma pagina web normal. Pode rodar no BROWSER.
Para você rodar em uma WIDGET, não esqueça de fazer a importação dos arquivos no “aplication.info”.
Você tem que alterar algumas variáveis do script (TOKENS e KEYS)

Segue os arquivos.

[REST\_EXTERNO\_START.zip](https://fluiggers.com.br/uploads/short-url/pzZ3CVLrr8mUZIkrrbACFKNNaqw.zip) (10,6,KB)

Eu fiz meio rápido aqui, se tiver algum problema me avisa.

---

## Resposta #10

**Daniel ** (@daniel_fmartins) — 16/07/2021, 15:23

Desconfia de algo?

![image](https://fluiggers.com.br/uploads/default/original/1X/0e7f12c3a376fbef29b2048581af2d624ef86cb1.png)

[rest.html](https://fluiggers.com.br/uploads/short-url/rjN8haSJtvGGLyetUuPT6aZDLGK.html) (5,7,KB)

---

## Resposta #11

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 15:32

Ele ta puxando a URL correta? Eu vi que deixei pra pegar da maquina

---

## Resposta #12

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 15:35

Vou fazer uma widget aqui de POC mesmo e te passo, mais fácil.

---

## Resposta #13

**Daniel ** (@daniel_fmartins) — 16/07/2021, 15:35

assim deu erro de CORS, por conta da origin ser “null”.

---

## Resposta #14

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 15:36 | ❤️ 1

Sim eu não consegui testar tive que fazer um atendimento aqui, deixa eu passar para uma widget publica aqui…acho que te ajuda melhor.

---

## Resposta #15 ✅ RESPOSTA ACEITA

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 16:44 | ❤️ 1

Se eu te contar que a URL que estávamos testando estava errada. Alterei para a correta e gerei uma WIDGET.

[WIDGET\_PLUBICA\_REST\_START.zip](https://fluiggers.com.br/uploads/short-url/7NpGbXqzYsHVzAZ05VNDLxPeVVu.zip) (42,1,KB)

Vamos ver se agora vai.

---

## Resposta #16

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 16:46

URL correta é “{url do fluig}/process-management/api/v2/processes/{seu processo}/start”

---

## Resposta #17

**Daniel ** (@daniel_fmartins) — 16/07/2021, 22:01

[@Willian\_Laynes](/u/willian_laynes) funcionou bem.

Porém ao tentar startar o processo pela página publica não estando logado é gerado um Internal Server Error.

![image](https://fluiggers.com.br/uploads/default/original/1X/930d1952ea1664a7157c6faeded3f144a83d54ef.png)

Tentando verificar aqui o que possa ser.

Não sei se tem relação com o comentário do [@Daniel\_Sales](/u/daniel_sales) .

---

## Resposta #18

**Willian Laynes** (@Willian_Laynes) — 16/07/2021, 22:30 | ❤️ 2

Estranho porque o teste que fiz foi em uma pagina publica.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/8acec0d1b5dd6c72710d5fb3e4d0fe4a4156a50d_2_690x307.png)

As suas keys e tokens de autenticação estão ok? Você alterou no arquivo?

---

## Resposta #19

**system** (@system) — 19/07/2021, 09:26

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
