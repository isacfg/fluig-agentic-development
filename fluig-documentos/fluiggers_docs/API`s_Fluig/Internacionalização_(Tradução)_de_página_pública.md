# Internacionalização (Tradução) de página pública

> **Fonte:** [https://fluiggers.com.br/t/internacionalizacao-traducao-de-pagina-publica/478](https://fluiggers.com.br/t/internacionalizacao-traducao-de-pagina-publica/478)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`
> **Criado em:** 31/05/2021, 09:30
> **Visualizações:** 437 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Cristiano Carvalho** (@Cristiano) — 31/05/2021, 09:30

Prezados, bom dia.
Preciso utilizar os recursos nativos do Fluig de internacionalização (tradução) em uma página pública. Como na página pública não aparece a opção de troca de idioma eu utilizo a API abaixo que o próprio Fluig utiliza para tradução. Ao rodar a rotina na página com autenticação normal funciona, mas sem autenticação mantém sempre no idioma pt\_BR.
Existe alguma opção para utilizar esse recurso em páginas públicas com usuário autenticado via Oauth Application? Percebi que a página de login possui a opção de trocar o idioma e na teoria é uma página pública. Essa minha analogia é válida?

API utilizada sendo que na variável idioma passo pt\_BR, es ou en\_US:
`url: WCMAPI.getServerURL() + '/portal/api/servlet/I18NServlet?locale='+idioma+'&page=codigoPaginaPublica',`

---
