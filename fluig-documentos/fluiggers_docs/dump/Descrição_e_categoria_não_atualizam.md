# Descrição e categoria não atualizam

> **Fonte:** [https://fluiggers.com.br/t/descricao-e-categoria-nao-atualizam/3405](https://fluiggers.com.br/t/descricao-e-categoria-nao-atualizam/3405)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`
> **Criado em:** 05/09/2025, 11:21
> **Visualizações:** 31 | **Likes:** 2 | **Respostas:** 4

---

## Pergunta original

**matheus.jesus** (@matheus.jesus) — 05/09/2025, 11:21

![image](https://fluiggers.com.br/uploads/default/original/2X/c/cd4e06149ab8a6e92db217169f392c42cc498a59.png)

![image](https://fluiggers.com.br/uploads/default/original/2X/c/c3bc7f9a092423cc768dce346d62fd283567af2b.png)

conforme imagens, nas configurações do processo, tem uma descrição e categoria diferentes das que estão na aba iniciar processos. alguém sabe porque isso está acontecendo?

---

## Resposta #1

**Pietro** (@pietro) — 05/09/2025, 14:00

Boa tarde,

Provavelmente a versão ativa do processo não é a que você está editando, tem acesso direto ao Eclipse?

Experimenta exportar por lá novamente marcando a opção ‘Liberar Versão’, e deixa salvo lá a descrição e instrução que você quer.

---

## Resposta #2

**matheus.jesus** (@matheus.jesus) — 05/09/2025, 14:08

Eu estou fazendo dessa forma, tanto que a primeira imagem é um print das configurações do processo já dentro do Fluig, e esta com a descrição “Desbloqueio de Cadastros” e a categoria “Desbloqueio”, mas na visulização aparace como “WF\_DESBLOQUEIO\_CADASTRO” e sem categoria

---

## Resposta #3

**Pietro** (@pietro) — 05/09/2025, 14:16

Por acaso você deu uma olhada no log, ver se acusa algum erro ao exportar?

Chegou a tentar mexer por dentro do fluig como na primeira print?

Se tiver como, experimenta rodar esse select no teu SQL, para ver como está no banco.

Manda aqui o que retornar desse sql caso possível, e manda o trecho do erro do server.log, caso algo acuse lá.

select COD\_DEF\_PROCES, cod\_categ from DEF\_PROCES where COD\_DEF\_PROCES = ‘WF\_DESBLOQUEIO\_CADASTRO’

---

## Resposta #4

**matheus.jesus** (@matheus.jesus) — 05/09/2025, 14:32

Então, mas tentei alterar a descrição e a categoria pelo “Configurar processo” e mesmo assim não foi. Então não tem como ter sido na exportação

---

## Resposta #5

**Pietro** (@pietro) — 05/09/2025, 14:39

Consegue então validar no server.log da plataforma e no banco?

O server.log pode pegar na pasta <SEU\_DIRETORIO\_DE\_INSTALAÇÃO>/appserver/domain/servers/fluig1/log/server.log

Pode baixar por dentro também, segue o caminho:
**painel de controle > segurança e acesso > controle de Logs > baixar**

Sobre o SQL, precisaria ter acesso via JDBC ou um dataset com **AppDS** pra pesquisa, posso te auxiliar a criar ambos caso necessário, só me avisar!

Aqui sobre o ds, use o appDS, tenho um código de exemplo aqui caso você não se ache nas FAQs:
[Datasets acessando banco de dados externo - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo)

Sobre os logs, aqui tem uma FAQ sobre também, caso lhe seja interessante.
[Plataforma ❙ Controle de log - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=236428687)

---

## Resposta #6

**matheus.jesus** (@matheus.jesus) — 05/09/2025, 14:53 | ❤️ 2

Cara, o pessoal da TOTVS me respondeu, achei o erro.

Tinha que atualizar nos literais

---
