# Fechar solicitação que não foi assumida

> **Fonte:** [https://fluiggers.com.br/t/fechar-solicitacao-que-nao-foi-assumida/2951](https://fluiggers.com.br/t/fechar-solicitacao-que-nao-foi-assumida/2951)
> **Categoria:** API`s Fluig
> **Criado em:** 02/09/2024, 18:03
> **Visualizações:** 67 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Eduardo Guimarães** (@Eduardo_Guimaraes) — 02/09/2024, 18:03

Boa tarde, pessoal. Estou com um problema com uma solicitação que pode ser finalizada por outra solicitação no fluig. Eu tenho um dataset que usa o saveAndSendTask para finalizar as solicitações e ele funciona perfeitamente para finalizar solicitações em que um usuário já assumiu, onde eu passo a matrícula dele no colleagueId. O problema são os casos de solicitações que foram atribuidas para o grupo, mas ninguém assumiu. Alguém sabe como eu posso passar esse parâmetro nesses casos?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 03/09/2024, 22:20

Mesmo nestes casos, acredito que seja possível movimentar com o gestor do processo. Neste caso, seria até mais adequado já que daria pra criar um usuário identificado para o dataset (algo como `Integração Dataset XYZ`) e não precisaria das credenciais do usuário da tarefa.

Mas, caso não funcione, você pode usar o método `takeProcessTask` para assumir a tarefa antes de movimentar.

---

## Resposta #2

**Eduardo Guimarães** (@Eduardo_Guimaraes) — 06/09/2024, 15:55 | ❤️ 1

Tentei colocando o gestor no colleagueId, mas não funcionou também. Pelo menos atribuindo para o usuário antes com o takeProcessTask deu certo. Valeu demais!!

---
