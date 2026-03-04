# Análise de Log Fluig 1.7.0 ou superior direto no navegador

> **Fonte:** [https://fluiggers.com.br/t/analise-de-log-fluig-1-7-0-ou-superior-direto-no-navegador/117](https://fluiggers.com.br/t/analise-de-log-fluig-1-7-0-ou-superior-direto-no-navegador/117)
> **Categoria:** Ambiente Fluig
> **Criado em:** 15/03/2021, 16:20
> **Visualizações:** 3178 | **Likes:** 36 | **Respostas:** 5

---

## Pergunta original

**Igor Rodrigues** (@fluigor.com.br) — 15/03/2021, 16:20 | ❤️ 12

Componente para análise de log direto no navegador.

Para realizar a implantação, siga os passos abaixo.

**1**. Realize o download do componente, pelo link: \[[2.72 MB file on MEGA](https://mega.nz/file/pDQmRDCa#nIS-USianINXBIndstenHBRC1bmumAF3Q7ehaq5lwcM)\]

**2**. Acesse a plataforma Fluig com o usuario administrador

**3**. Acesse menu Painel de Controle > Central de Componentes

**4**. Realize o **deploy** do componente **fluig\_log.war**

**5.** Acesse o painel de Log, após efetuar o login com usuário administrador http://servidor:porta/log\_fluig

![image](https://fluiggers.com.br/uploads/default/optimized/1X/fd1a5756b49cf33e71f43bb1fc2350485e3fb5c6_2_690x336.png)

![image](https://fluiggers.com.br/uploads/default/optimized/1X/04e0fd8dd25cf40ee1b550e16956b9ce034f4fbe_2_690x336.png)

*Créditos de Desenvolvimento para:* **Rodrigo Machado**[fluig\_log.war](https://fluiggers.com.br/uploads/short-url/Aig7iqx2uWZwDjanjpjN0agRvS9.war) (2,7,MB)

---

## Resposta #1

**Julio Vitor Vaz da Rocha** (@JulioRocha) — 17/03/2021, 17:35 | ❤️ 2

Cara, perfeito!

Vai me ajudar demais. Aqui na empresa nosso Fluig é Cloud, então precisamos ficar baixando o Log frequentemente para realizar análises.

---

## Resposta #2

**Helbert Campos** (@helbert_campos) — 23/03/2021, 14:08 | ❤️ 3

Olá [@fluigor.com.br](/u/fluigor.com.br) … sou novo aqui na comunidade e acredito que posso contribuir muito com os conteúdos :grin:

Mas já aproveito pra lhe dar meus parabéns e meu respeito! Essa solução está sensacional … o front-end ficou show! Parabéns :clap::clap::clap:

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 23/03/2021, 14:56 | ❤️ 3

Tomei a liberdade de anexar o arquivo aqui no fórum também (caso o Mega expire)

---

## Resposta #4

**Igor Rodrigues** (@fluigor.com.br) — 24/03/2021, 10:29 | ❤️ 1

[@helbert\_campos](/u/helbert_campos)

Bem vindo meu amigo!

---

## Resposta #5

**Willian Laynes** (@Willian_Laynes) — 01/04/2021, 12:02 | ❤️ 1

Muito bom! Valeu por compartilhar.

---

## Resposta #6

**Daniel ** (@daniel_fmartins) — 22/07/2021, 10:19

Esse compoente é público?

Nativamente, o log só é dispobilizado para admins da plataforma, se não me engano.

Só uma dúvida mesmo.

Parabéns, ficou ótimo.

---

## Resposta #7

**Willian Laynes** (@Willian_Laynes) — 22/07/2021, 10:29 | ❤️ 2

Só tem que ter cuidado com ele, porque pelo que testei você não precisa estar logado para ver o log (na versão que baixei) e é meio perigoso liberar o log para qualquer um ver.

---

## Resposta #8

**Sérgio Machado** (@sergio.machado) — 22/07/2021, 17:59 | ❤️ 1

Opa Daniel, eu testei aqui e realmente como o Willian mencionou mesmo sem estar logado ele exibe, estou instalando somente em ambiente de homologação. Afinal esse componente tem me ajudado demais na hora de debugar

---

## Resposta #9

**Sérgio Machado** (@sergio.machado) — 22/09/2022, 07:19 | ❤️ 10

Fala aí galera, beleza?

Essa widget parou de funcionar na versão 1.8 do fluig, pelo menos aqui parou. Verificando o erro que saia no console, observei que as requisições eram realizadas utilizando $GET().

Então aproveitei e alterei para fetch api e também fiz o bloqueio de acesso, agora **somente usuário administradores conseguem visualizar essa tela de logs**.

Para quem quiser estarei subindo o arquivo war aqui
[fluig\_log.war](https://fluiggers.com.br/uploads/short-url/5ZbNEN5857OW8MSdywunL2NZnju.war) (302,1,KB)

---

## Resposta #10

**Igor Rodrigues** (@fluigor.com.br) — 04/10/2022, 15:34 | ❤️ 1

Tirou onda [@sergio.machado](/u/sergio.machado)

Valeu! <3

---

## Resposta #11

**raquel.figueiredo** (@Raquel) — 17/05/2023, 16:09

Tentei atualizar o fluig\_log, mas recebo a mensagem:

O arquivo log\_fluig foi declarado mais de uma vez na lista de recursos

Alguém sabe como forçar a substituição do arquivo?

---

## Resposta #12

**Jenifer Mendes** (@Jenifer_Mendes) — 21/05/2023, 19:23

Solução incrível! Obrigada

---

## Resposta #13

**Luckas Delboni** (@Luckas_Delboni) — 12/06/2023, 19:09

Procure na central de componentes conforme especificado no primeiro comentário, possivelmente já havia esse arquivo ativado, quando achar o fluig\_log coloque para desativar e tente adicionar o arquivo novamente.

---

## Resposta #14

**raquel.figueiredo** (@Raquel) — 15/06/2023, 16:41

Tentei isso, mas ainda não funcionou. Devido a urgência optamos por chamar o suporte da TOTVS e eles resolveram.
Muito obrigada pela ajuda [@Luckas\_Delboni](/u/luckas_delboni)!

---
