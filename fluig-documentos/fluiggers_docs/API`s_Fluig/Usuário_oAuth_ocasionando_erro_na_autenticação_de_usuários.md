# Usuário oAuth ocasionando erro na autenticação de usuários

> **Fonte:** [https://fluiggers.com.br/t/usuario-oauth-ocasionando-erro-na-autenticacao-de-usuarios/2839](https://fluiggers.com.br/t/usuario-oauth-ocasionando-erro-na-autenticacao-de-usuarios/2839)
> **Categoria:** API`s Fluig
> **Tags:** `wcmapi`
> **Criado em:** 06/06/2024, 10:44
> **Visualizações:** 309 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Gabriel Borchardt** (@Gabriel_Borchardt) — 06/06/2024, 10:44

Olá pessoal, estou com um problema que não consigo identificar a razão:

Para criarmos uma intranet 100% personalizada com widgets criadas do 0, usamos uma conexão com usuário oAuth criado no proprio Fluig, até então tudo correto, porém percebemos que ao tentar logar no fluig a partir da intranet (que no nosso contexto de rede é a pagina exibida ao abrir uma nova aba de navegador sempre) de forma publica, no momento que vc loga aparece o erro da foto, e ao dar um um WCMAPI.getUser() no console, vc percebe que o usuario que está autenticado é o usuário que eu utilizo na hora de requisitar os datasets.

Existe uma justificativa disso acontecer? Porque no entendimento que tive, o usuário usa a credencial para o Fluig validar aquele acesso, até então não era explícito ao meu ver que realizaria o login na plataforma, o que causa erro aos usuários (E nem é sempre, não tem como rastrear uma forma de dar erro).

Segue abaixo uma demonstração após um usuário logar depois de vir da intranet que usou o oAuth para consultar os dados.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/1/14512dca297abd8c27d273f6ecec1a479ccd964d_2_690x108.png)

---

## Resposta #1

**Gabriel Borchardt** (@Gabriel_Borchardt) — 12/06/2024, 09:05

Bom dia Pessoal, alguém com experiência no Fluig já viu algo parecido?

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 14/06/2024, 17:26

Nunca tentei fazer autenticação OAuth assim no Fluig (aqui uso só pra sistema efetuar alguma integração no Fluig, não pra usuários logarem), mas se ele tá logando como o usuário OAuth não é porque você está passando as credenciais do usuário OAuth ao invés do usuário que precisa logar?

Acho que na documentação do Fluig deve ter algo explicando como gerar os tokens para os usuários comuns e como eles dão a permissão de aplicação ao requisitar no oauth do fluig.

---

## Resposta #3

**Gabriel Borchardt** (@Gabriel_Borchardt) — 24/06/2024, 11:50

Meu problema é outro… Ele usa oAuth apenas para integrar com Fluig mesmo, só passando os dados do usuário para buscar informações em páginas que não estou exigindo credenciais para visualizar… O problema maior é quando meu usuário clica para login (fiz um botão com a url na página home que consequentemente pedirá senha, visto que não está logado…) Porém em momentos específicos e sem nenhuma regra para acontecer, mostra esse problema ai que coloquei o print, ele fica uma tela como se tivesse logado mas não está, mas ao clicar no usuário vc percebe que está usando justo a credencial que coloco para puxar dados de dataset… Nunca presenciei isso e acaba causando umas situações chatas pra usuário, até agr estou sem solução tbm

---
