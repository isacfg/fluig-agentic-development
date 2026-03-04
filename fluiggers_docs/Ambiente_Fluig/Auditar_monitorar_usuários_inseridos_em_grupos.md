# Auditar/monitorar usuários inseridos em grupos

> **Fonte:** [https://fluiggers.com.br/t/auditar-monitorar-usuarios-inseridos-em-grupos/599](https://fluiggers.com.br/t/auditar-monitorar-usuarios-inseridos-em-grupos/599)
> **Categoria:** Ambiente Fluig
> **Criado em:** 06/08/2021, 09:43
> **Visualizações:** 826 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Adilson Honorato** (@Adilsonorato) — 06/08/2021, 09:43

Bom dia a todos.

Atualmente, na empresa em que trabalho, temos a equipe de desenvolvedores fluig e uma outra equipe de controle de acessos dos fluxos desenvolvidos.

Recentemente, a equipe de controle de acesso têm inserido usuários em grupos indevidos, e não conseguimos encontrar nenhum registro de quem possa ter feito isso.
Procurei nas tabelas de banco de dados e nos arquivos de log dos servidores, mas não encontrei nada que me permitisse rastrear tal ação, nem mesmo na documentação.

Vocês conhecem algum tipo de log que registre essas atividades de inserção de usuários em grupos?

Agradeço a atenção.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 06/08/2021, 12:07

Opa bom dia Adilson, tudo bem?
Se essa alteração estiver no arquivo de log resolver seu problema, a princípio a maneira mais fácil que vejo de resolver isso, é através dos [eventos globais](https://tdn.totvs.com/display/public/fluig/Desenvolvimento+de+Eventos).

Fazendo uso dos seguintes eventos:

**afterCreateUser** - Evento disparado depois da criação de um novo usuário.
**afterUpdateUser** - Evento disparado depois da atualização de um usuário

Com isso poderia colocar para sair no log o usuário que esta alterando e o usuário que teve o registro alterado.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 10/08/2021, 10:22

Se fizer a guarda dos logs, isso vai funcionar muito bem. Uma outra alternativa poderia ser inserir os dados em algum dataset ou banco externo - com o passar do tempo e o volume desses registros aumentando, ter tudo num banco pode ser interessante…

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 10/08/2021, 10:25

Ainda sobre a guarda dos logs - sem considerar ferramentas mais robustas de log, sempre puxo saco do logmx: [Analisador de log - LOGMX](https://fluiggers.com.br/t/analisador-de-log-logmx/431)

Além disso, houve uma ocasião em que um cliente pediu uma forma rapida de arquivar estes logs sem gastar muito espaço, fizemos um pequeno script com o robocopy:

```auto
REM SCRIPT PARA BACKUP LOG FLUIG - CODEMGE - MAIO 2019 - DANIEL C SANTOS - GAO TECNOLOGIA
REM Executa a cópia
RoboCopy.exe  "D:\fluig\appserver\domain\servers\fluig1\log" "D:\backup_log_fluig" server.log.* /MOV /MT:8 /XF server.log /FP /LOG+:D:\backup_log_fluig\log_backup.txt
REM cria arquivos rar individuais, apagando a origem.
for /f %%F in ('dir /b "d:\backup_log_fluig\server.*"') do (rar a -DF -m5 "d:\backup_log_fluig\logs\%%F.rar" "%%F")
exit
```

---
