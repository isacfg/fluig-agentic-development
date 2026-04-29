# Foto de Perfil de Usuário

> **Fonte:** [https://fluiggers.com.br/t/foto-de-perfil-de-usuario/470](https://fluiggers.com.br/t/foto-de-perfil-de-usuario/470)
> **Categoria:** Sem categoria
> **Criado em:** 27/05/2021, 17:04
> **Visualizações:** 667 | **Likes:** 1 | **Respostas:** 5

---

## Pergunta original

**Giovani Hardt** (@ghardt) — 27/05/2021, 17:04

Estou com uma demanda, de atualizar as fotos dos perfis dos usuários (aprox 2000), gostaria de saber se existe uma API ou qualquer outro meio, utilizando uma listagem com os id dos usuários e endereço one a imagem encontra-se armazenada.

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 29/05/2021, 15:54

Se você tiver acesso ao servidor pode tentar direto na pasta de dados

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 18/04/2024, 09:36

Amigos, isto é uma pergunta velha a qual caiu no meu colo também.
Que pastas têm as fotos dos perfis que aparecem no Fluig?

---

## Resposta #3

**venturelli** (@venturelli) — 02/05/2024, 11:36

Não é recomendável a utilização diretamente na pasta porque é usado geração de thumbs e outros serviços ao fazer via API, o que vai gerar alguns comportamentos estranhos no teu ambiente. Então opte por usar a api.

[https://api.fluig.com/latest/collaboration/swagger-ui/#/Profile\_picture/updateFile](https://api.fluig.com/latest/collaboration/swagger-ui/#/Profile_picture/updateFile)

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 02/05/2024, 15:12

Uma coisa que não sei se mudou no Fluig é que ele não processava essas imagens para cada tamanho/cenário. Se você subia uma foto de 2mb, eram 2mb a serem carregados pra exibir a miniatura da foto da pessoa. Alguém sabe se mudou?

---

## Resposta #5

**venturelli** (@venturelli) — 02/05/2024, 16:12 | ❤️ 1

Antigamente sim. Hoje, salvo algum erro ou código antigo, deve carregar sempre tamanhos menores: [Configurar e Habilitar Thumbnails - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Configurar+e+Habilitar+Thumbnails).

Dá pra conferir pela url da imagem. No do perfil, aquele círculo no topo da página, o src passa o param type: "/collaboration/api/v3/users/adm2/picture?type=SMALL\_PICTURE e dai abrir uma manut caso encontre algum lugar que não está carregando dessa forma.

Pra usar /collaboration/swagger-ui/#/Profile\_picture/getProfilePicture tem essa lista do types possíveis:
X\_SMALL\_PICTURE: 34 x 34
SMALL\_PICTURE: 60 x 60
MEDIUM\_PICTURE: 100 x 100
LARGE\_PICTURE: 140 x 140
ou DEFAULT\_PICTURE (que - acho - pega o tamanho original).

---

## Resposta #6

**Daniel Cabral Santos** (@daniel.cabral) — 03/05/2024, 10:14

Provavelmente herança de versões antigas no caso aqui - é uma instalação beeeem antiga. Vou fazer uma otimização nas fotos atuais e observar se as fotos novas já serão otimizadas. Muito obrigado!

---
