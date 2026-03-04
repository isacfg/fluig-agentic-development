# Erro ao atualizar versão do Fluig Versao 1.7.1 - 210713

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-atualizar-versao-do-fluig-versao-1-7-1-210713/567](https://fluiggers.com.br/t/erro-ao-atualizar-versao-do-fluig-versao-1-7-1-210713/567)
> **Categoria:** Ambiente Fluig
> **Criado em:** 20/07/2021, 09:04
> **Visualizações:** 1975 | **Likes:** 5 | **Respostas:** 5

---

## Pergunta original

**Bruno Freitas** (@Bruno_Freitas) — 20/07/2021, 09:04

Bom dia srs alguém ja passou pelo mesmo problema abaixo ao tentar atualizar a versão do fluig?

![image](https://fluiggers.com.br/uploads/default/optimized/1X/ee288c348408881b3c2ba53c4f922a82db10457a_2_690x404.png)

o Serviço fluig realtime está em execução. Finalize o serviço para continua a instalação.

Obs os serviços estão parados.

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 20/07/2021, 09:19

Os serviços do Fluig estão para iniciar automaticamente? Se “não” estiverem reinicia o servidor e tenta instalar novamente. Assim se tiver alguma coisa pendurada por trás já resolve.

---

## Resposta #2

**Bruno Freitas** (@Bruno_Freitas) — 20/07/2021, 09:23

Bom dia Willian!

Todos serviços do fluig estão para iniciar manualmente e já reiniciei o servidor tbm, mais continua com mesmo erro ao tentar instalar a atualização.

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 20/07/2021, 09:30

Dai complica se nem chegaram a iniciar. Tenta listar por linha de comando os serviços de pé ver se tem algo que possa travar.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 21/07/2021, 08:26

usa um programa chamado Unlocker, e verifica a pasta do Fluig com ele - ele vai tentar mostrar qual o processo que tá travando os arquivos de serem atualizados…

Outra manha é tentar renomear a pasta base do Fluig, ele não vai permitir e talvez indique qual processo/programa travou ela.

---

## Resposta #5

**Mauricio Freitas** (@mauriciolanner) — 01/04/2022, 10:20 | ❤️ 1

O problema chegou a ser resolvido? Estou passando por isso em uma instalação nova

---

## Resposta #6

**Igor Rodrigues** (@fluigor.com.br) — 01/04/2022, 16:28

[@mauriciolanner](/u/mauriciolanner) Verifica se tu não tem antivirus ativo, ele bloqueia a descompactacao dos arquivos do instalador.

---

## Resposta #7 ✅ RESPOSTA ACEITA

**William Kiefer** (@bokrs) — 17/08/2022, 17:11 | ❤️ 3

A dica pra rodar a atualização é executar através de linha de comando…

Abre um prompt na PASTA da atualização:

E cola no CMD isso aqui: → jdk-64\\bin\\java -Dignore.service.check=true -jar fluig-installer.jar

---

## Resposta #8

**Daniel Cabral Santos** (@daniel.cabral) — 21/08/2022, 10:50 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/bokrs/48/51_2.png) bokrs:
>
> > jdk-64\\bin\\java -Dignore.service.check=true -jar fluig-installer.jar

Aconteceu comigo recentemente…valeu [@bokrs](/u/bokrs)

---
