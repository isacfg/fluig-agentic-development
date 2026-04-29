# Autenticação de Usuário em Aplicação Externa

> **Fonte:** [https://fluiggers.com.br/t/autenticacao-de-usuario-em-aplicacao-externa/1062](https://fluiggers.com.br/t/autenticacao-de-usuario-em-aplicacao-externa/1062)
> **Categoria:** API`s Fluig
> **Tags:** `api`, `oauth`
> **Criado em:** 29/04/2022, 08:51
> **Visualizações:** 1501 | **Likes:** 10 | **Respostas:** 8

---

## Pergunta original

**Victor Hugo** (@victorhugo-soulsys) — 29/04/2022, 08:51 | ❤️ 1

Fala pessoal!

Preciso criar uma aplicação, externa ao fluig, em que seja possível autenticar usuários com o login e senha da plataforma.

Estou procurando no google e no TDN e ainda não consegui reunir todas as peças do quebra cabeças.

Gostaria de pedir a ajuda da comunidade desse fórum para as seguintes dúvidas:

-   Como acesso as documentações das APIs REST da minha plataforma ? Qual o endereço ? Exemplo: [http://192.168.0.10:8080/api/v2/users](http://192.168.0.10:8080/api/v2/users)

-   De acordo com as minhas pesquisas, [esse é o melhor exemplo](https://forum.fluig.com/4354-get-em-ged-fluig-para-url-publica-de-documento) que encontrei para autenticação pelo browser. Mas não achei nada relacionado a enviar o usuário e senha para realizar ações em nome do usuário. Existe algum exemplo/documentação específica sobre isso ? No TDN tem um exemplo com client Java, que não me atende.


Qualquer ajuda será muito bem-vinda! :slightly_smiling_face:

Obrigado.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 29/04/2022, 09:19

Se por acaso vc usar o identity tem como via api validar o usuário e a senha

---

## Resposta #2

**Victor Hugo** (@victorhugo-soulsys) — 29/04/2022, 11:33

Olá Daniel!

Infelizmente não usamos o identity.

Obrigado pela reposta.

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 02/05/2022, 11:02 | ❤️ 1

Sem usar o identity, eu iria pela opção de criar um dataset que consulta a tabela FDN\_USERTENANT da Plataforma onde tu tem o login e a senha em HASH MD5.
Apartir disso, tu utiliza a API REST do fluig que consulta dataset para conseguir validar o login e senha do usuário no banco de dados do Fluig.

---

## Resposta #4

**Victor Hugo** (@victorhugo-soulsys) — 02/05/2022, 15:50

Olá Fluigor!

Obrigado pela dica! Parece ser um caminho interessante.

Você tem alguma referência sobre como eu poderia descriptografar a senha no código do dataset ? Tem algum recurso do fluig para fazer isso ?

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 03/05/2022, 14:06 | ❤️ 2

Bom dia aplica o MD5 na senha digitada e ele gera o hash md5 que vc compara no banco
Não há como descriptografar.

você sempre compara os hash.

---

## Resposta #6

**Victor Hugo** (@victorhugo-soulsys) — 03/05/2022, 15:31

Opa!! Obrigado pela dica!!

Vou testar aqui. Se der certo eu posto o código.

Obrigado mais uma vez! :wink:

---

## Resposta #7

**Guilherme Beranger** (@Guilherme_Beranger) — 30/05/2022, 16:37 | ❤️ 1

Boa tarde Amigo,

já conseguiu andar com o processo?
Eu recentemente passei por um problema parecido,
tinha que fazer requisições externas na plataforma sem User e Senha,
se precisar de ajuda me chama que eu to aqui

ou no email - [guilherme.sberanger@gmail.com](mailto:guilherme.sberanger@gmail.com)

---

## Resposta #8

**Victor Hugo** (@victorhugo-soulsys) — 31/05/2022, 09:11 | ❤️ 1

Bom dia Guilherme!

Eu estava fazendo testes de viabilidade para um projeto que vou precisar desenvolver nos próximos meses. Ainda não avancei nessa parte do login, mas vou precisar autenticar um usuário do fluig a partir da uma aplicação web externa. Após essa autenticação, o usuário deverá conseguir realizar ações através da API do fluig, como movimentação solicitações do BPM.

Você acha que isso é possível sem o Identity ? Você fez algo parecido ?

Se puder compartilhar algum material, ficarei bem agradecido … rs

Meu e-mail é victor.hugo@soulsys.tech

Muito obrigado, amigo!

---

## Resposta #9

**Guilherme Beranger** (@Guilherme_Beranger) — 31/05/2022, 09:31 | ❤️ 1

> ![](https://fluiggers.com.br/letter_avatar_proxy/v4/letter/v/7993a0/48.png) victorhugo-soulsys:
>
> > victor

Bom dia amigo,
te mandei no email.

---

## Resposta #10

**Matheus Andrade** (@Matheus_Andrade1) — 15/02/2024, 15:04 | ❤️ 1

Olá, Poderia compartilhar a solução ?Email: [matheus.andrade.ti@gmail.com](mailto:matheus.andrade.ti@gmail.com)

---

## Resposta #11

**Guilherme Beranger** (@Guilherme_Beranger) — 19/02/2024, 16:34

Te mandei um email man.

---

## Resposta #12

**JULIANO SOARES BACHESQUE** (@Juliano) — 15/03/2024, 11:50

Pessoal, poderiam compartilhar comigo? [julianobach@gmail.com](mailto:julianobach@gmail.com)

---

## Resposta #13

**venturelli** (@venturelli) — 03/04/2024, 14:20 | ❤️ 2

Espero que tenha solucionado, mas em todo o caso, não faça o exemplo do link que você citou como melhor exemplo. Isso expõe um usuário e senha no Fluig e permite acessos irregulares de qualquer pessoa.

Caso ainda precise de algo, você pode criar um dataset e permitir acesso público a ele criando um componente: [GitHub - thiagovent/fluig-public-dataset: Uma forma de disponibilizar acesso público a um dataset no fluig de forma segura e sem expor o usuário e senha](https://github.com/thiagovent/fluig-public-dataset/)

---

## Resposta #14

**Daniel Sales** (@Daniel_Sales) — 18/04/2024, 21:24

Boa Noite,
uma boa pratica e criar uma middleware em java e nela fazer toda a validação.
Eu tenho uma aqui em que eu uso com weebhok para o TAE (TOTVS Assiantura eletreonica) ela recebe os dados to tae quando uma ação ocorre dai faço o move do fluig. Serviria muito bem para o que você precisa e é bem segura pois vc tem acesso a tudo do fluig via chamada das apis. Use a ideia do [@venturelli](/u/venturelli) e chame via api um dataset dataset que vai consultar as tabelas do fluig para saber se o login existe e depois se o password esta correto.
Espero que ajude.

---

## Resposta #15

**Cassius** (@Cassius) — 24/04/2024, 15:43

Guilherme, boa tarde. Tudo bem?

Poderia me mandar o e-mail também?
[cassius.chieregatti@tutanota.com](mailto:cassius.chieregatti@tutanota.com)
Muito obrigado.

---

## Resposta #16

**henrique.rosa** (@henrique.rosa) — 23/12/2024, 10:52

Opa tudo certo? poderia me mandar o e-mail também
[henriquemateusdapazrosa@gmail.com](mailto:henriquemateusdapazrosa@gmail.com)
Muito Obrigado!!

---
