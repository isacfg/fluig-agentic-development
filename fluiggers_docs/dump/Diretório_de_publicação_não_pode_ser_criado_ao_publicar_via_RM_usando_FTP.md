# "Diretório de publicação não pode ser criado" ao publicar via RM usando FTP

> **Fonte:** [https://fluiggers.com.br/t/diretorio-de-publicacao-nao-pode-ser-criado-ao-publicar-via-rm-usando-ftp/1316](https://fluiggers.com.br/t/diretorio-de-publicacao-nao-pode-ser-criado-ao-publicar-via-rm-usando-ftp/1316)
> **Categoria:** ECM / GED
> **Tags:** `upload`, `ftp`
> **Criado em:** 16/09/2022, 09:59
> **Visualizações:** 347 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 16/09/2022, 09:59

Salve galera!

Beleza? Após recriar um servidor de homologação estamos com a mensagem abaixo ao tentar enviar um documento do RM para o Fluig:

2022-09-16 09:52:40,408 ERROR \[com.datasul.technology.webdesk.dm.business.DocumentAbstractBO\] (default task-12) Failed to insert document: : java.lang.Exception: DiretÃ³rio de publicaÃ§Ã£o nÃ£o pode ser criado! Verifique o diretÃ³rio informado no volume e as permissÃµes de diretÃ³rio do sistema operacional.

Porém, já validamos os acessos ao FTP e o log do fluig confirma isso. Todo o volume foi colocado com permissão total para todos no servidor (Windows) para tirar a prova. Acredito que seja alguma permissão dentro do Fluig, mas qual?

Valeu galera!!!

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Everton Alves** (@everton) — 16/09/2022, 11:42

Olá,

Já tive um problema parecido uma vez, não sei se com você é a mesma coisa.
O usuário que eu usava para enviar o arquivo para o fluig não tinha permissão de escrita na pasta.
Adicionei permissão para esse usuário e o fluig aceitou o arquivo normalmente.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 07/10/2022, 09:24 | ❤️ 2

Cara, esqueci de contar… era permissão de pasta em um volume de rede, não o volume principal. O ambiente do cliente possuía vários volumes de rede que precisavam de ajuste de permissão para o usuário que inicia o serviço do Fluig.

Valeu demais!!

---
