# Requisição externa - API Fluig

> **Fonte:** [https://fluiggers.com.br/t/requisicao-externa-api-fluig/2355](https://fluiggers.com.br/t/requisicao-externa-api-fluig/2355)
> **Categoria:** API`s Fluig
> **Tags:** `fluigapi`, `rest`
> **Criado em:** 16/11/2023, 10:34
> **Visualizações:** 350 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**victor ferreira** (@nikof) — 16/11/2023, 10:34

Senhores, bom dia !

Estou desenvolvendo um serviço que precisará acessar a API do Fluig externamente.

Referente a parte de oauth já fiz cadastro do provider, application, e gerei os tokens para o usuario aplicativo.

Já consigo chamar externamente os endpoints do metodo GET, porém ao fazer uma requisição PUT é retornado um erro dizendo que o usuario está invalido:

![image](https://fluiggers.com.br/uploads/default/original/2X/1/1382b0cf80237b12e8812efc8d719a386264ab3e.png)

Não estou passando nenhum usuario na requisição, somente as keys

Creio que estou deixando passar alguma autenticação mas não sei exatamente qual

Alguém teria alguma dica do que pode ser ?

Obrigado !

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Matheus Loreto** (@matheusl) — 16/11/2023, 16:36

Recomendo verificar se não é relacionado a permissões. Como está tentando editar um formulário, pode ser preciso dar permissão para o usuário aplicativo, se está executando a edição diretamente pela API.

---

## Resposta #2

**victor ferreira** (@nikof) — 17/11/2023, 00:31

Matheus, sabe me dizer como definir essa permissão para o usuario aplicativo ? pois não tenho ele como um usuario comum do fluig, somente no oauth application

---

## Resposta #3

**Matheus Loreto** (@matheusl) — 17/11/2023, 08:40

Estranho, no meu ambiente aparecem no cadastro padrão de usuários, e é possível vincular papéis e grupos.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/923e319739577e86b1fbbfb192b687995f9d073c_2_690x181.png)

---

## Resposta #4

**victor ferreira** (@nikof) — 17/11/2023, 08:51 | ❤️ 1

Valeu Matheus, era isso mesmo, consegui vincular o usuario aplicativo nos usuarios e setei a permissão, agora consegui realizar o PUT.

Muito obrigado!

---
