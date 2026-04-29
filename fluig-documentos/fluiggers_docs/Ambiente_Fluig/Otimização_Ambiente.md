# Otimização Ambiente

> **Fonte:** [https://fluiggers.com.br/t/otimizacao-ambiente/3020](https://fluiggers.com.br/t/otimizacao-ambiente/3020)
> **Categoria:** Ambiente Fluig
> **Criado em:** 14/10/2024, 09:57
> **Visualizações:** 71 | **Likes:** 0 | **Respostas:** 2

---

## Pergunta original

**Gabriel Borchardt** (@Gabriel_Borchardt) — 14/10/2024, 09:57

Bom dia pessoal, tudo certo?
Estamos com problemas recorrentes com nosso ambiente de produção do Fluig, ele está consumindo muita CPU e a cada 2 semanas (ou menos dependendo da semana) está sendo necessário reiniciar devida a grande lentidão do sistema, o que ocasiona alguns minutos de indisponibilidade do Fluig.

Alguém ja passou por isso? Temos em torno de 100 usuários que utilizam os processos diariamente, e também temos uma intranet que está configurada para ser a página inicial de todos navegadores, página essa que constantemente faz requisições a cada X segundos para ter dados atualizados de indicadores, o que pode ocasionar certa lentidão também.

Conseguem me dar um help?

---

## Resposta #1

**Matheus Mósso** (@msmosso) — 14/10/2024, 11:43

Pode ser que haja algum dataset que não está encerrando a conexão com o banco ou alguma consulta grande que está aguardando muito tempo por timeout.

Aqui em nossa empresa configuramos para que o nosso servidor reinicie sempre nas madrugadas e problema foi resolvido.

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 14/10/2024, 11:57

Além dos restarts periódicos, vale também uma olhada nos logs e/ou no Melody, pra verficar as threads potencialmente ‘presas’, por ali pode ser que encontre um bug ou oportunidade pra otimizar algum código.

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/10/2024, 21:46

Essa ideia de reiniciar o servidor de tempos em tempos é interessante. Por aqui só reinicio quando fazemos alguma atualização na máquina, hehehe. Mas o uso não é tão intenso.

---

## Resposta #4

**Gabriel Borchardt** (@Gabriel_Borchardt) — 16/10/2024, 08:09

No nosso caso, reiniciar o servidor em si não é viável por conta que existem turnos de madrugada e nesse servidor também existe o serviço de catracas para entrar na empresa que sincroniza com o ERP.

Existe alguma forma ou script para reinicializar apenas os serviços do fluig?

---

## Resposta #5

**Igor Rodrigues** (@fluigor.com.br) — 16/10/2024, 21:34

[@Gabriel\_Borchardt](/u/gabriel_borchardt)

Acho que podemos encontrar algumas situações, além do sistema de catracas o que mais roda no mesmo servidor do fluig Qual a Configuração atual do servidor, me parece que o teu volume de acesso x uso exige que vc avalie sua infraestrutura e talvez até migre o ambiente para Alta disponibilidade.

“Temos em torno de 100 usuários que utilizam os processos diariamente, e também temos uma intranet que está configurada para ser a página inicial de todos navegadores, página essa que constantemente faz requisições a cada X segundos para ter dados atualizados de indicadores”

---
