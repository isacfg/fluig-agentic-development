# Retirar pessoa de consenso "on-the-fly"

> **Fonte:** [https://fluiggers.com.br/t/retirar-pessoa-de-consenso-on-the-fly/1578](https://fluiggers.com.br/t/retirar-pessoa-de-consenso-on-the-fly/1578)
> **Categoria:** BPM
> **Tags:** `consenso`
> **Criado em:** 16/01/2023, 16:47
> **Visualizações:** 344 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 16/01/2023, 16:47

Salve, nação! Alguém já passou por isso aqui? Vejam, temos esse consenso aqui:

![image](https://fluiggers.com.br/uploads/default/original/1X/4221692d80e0decaa62596f14bec825469539602.png)

A pessoa que não completou a tarefa é um diretor que não deveria ter entrado no papel responsável ainda - essa solicitação pertence à diretoria antiga e, por motivos jurídicos, não podemos desfazer as movimentações já feitas.

Como remover a pessoa que não deveria fazer parte do consenso sem desfazer as ações de quem já ‘votou’?

Valeuu!!!

---

## Resposta #1

**jonathas araujo** (@jonathas_araujo) — 16/01/2023, 17:29

Ainda não vi isso, comentei aqui para ficar a parte de como resolver.

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 17/01/2023, 10:14

Bom dia mestre,
Acredito que via banco seja possivel deletar a linha que foi gerada para esta pessoa.
Procura na tabela tar\_proces pelo numero do fluig e vc vai ver todas as demandas la dessa tarefa. faça uma copia da linha e apague ela. Outra solução e ajustar o calculo do consenço para 75% e solicitar que um gestor revise sua opção dai o fluig deve recalcular a porcentagem e seguir em frente. Dai volta para 100%

---

## Resposta #3

**Daniel Cabral Santos** (@daniel.cabral) — 17/01/2023, 10:28

Nós cogitamos a revisão da decisão, mas juridicamente não podem mais fazer isso porque é um órgão público e a diretoria mudou recentemente - as decisões originais são de pessoas que não estão mais ali e não podem ser modificadas, isso colocaria em xeque a integridade do Fluig (sobre isso, sempre há um jeito, mas…)

Acho que já tomaram uma decisão embasada no jurídico, vou descobrir hoje e conto aqui!

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 17/01/2023, 10:43

E a questão do subistituto?
Não atenderia?

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 17/01/2023, 11:10

Fiz um teste aqui

![image](https://fluiggers.com.br/uploads/default/optimized/1X/017e82cbbbb35c06751791ce8b695e2dbfbbafa4_2_690x387.png)

Caiu na tabela mesmo que te falei e so removi a linha e o aprovador sumiu.
Isso vai resolver

---

## Resposta #6

**Ricardo Andrade** (@Ricardo_Andrade) — 23/01/2023, 16:12

Boa tarde [@daniel.cabral](/u/daniel.cabral) ,
Talvez uma alternativa é fazer a transferência da pendência deste usuário para um dos membros que já completou a tarefa em painel de controle/tranferir pendências.
atte.

---

## Resposta #7 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 31/01/2023, 10:24 | ❤️ 1

Bom dia [@Ricardo\_Andrade](/u/ricardo_andrade) ! No final das contas o jurídico ‘deu um jeitinho’ lá para manter o trâmite o mais limpo possível. O diretor que foi incluído aprovou e deixou uma ressalva a respeito, para se isentar de qualquer responsabilidade. O sistema é auditado e qualquer alteração de banco de dados seria ruim.

Valeu, pessoal!!

---
