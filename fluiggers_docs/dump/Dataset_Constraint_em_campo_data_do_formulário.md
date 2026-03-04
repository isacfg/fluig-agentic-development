# Dataset Constraint em campo data do formulário

> **Fonte:** [https://fluiggers.com.br/t/dataset-constraint-em-campo-data-do-formulario/317](https://fluiggers.com.br/t/dataset-constraint-em-campo-data-do-formulario/317)
> **Categoria:** BPM
> **Criado em:** 08/04/2021, 16:55
> **Visualizações:** 1296 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Rodrigo de Oliveira** (@redschenko) — 08/04/2021, 16:55

Boa tarde.

Criei um processo e no formulário utilizado, tenho um campo que armazeno a data no formato DD/MM/YYYY.
Ao consultar o dataset interno filtrando DE/ATE por este campo data, não funciona corretamente.
Isto é, ao filtrar de 30/03/2021 até 08/04/2021, como a data está armazenada no formato “string”, o sistema entende que a data 30/03/2021 é maior 08/04/2021 e não está trazendo resultados.

Alguém sabe como solucionar?

At
Rodrigo de Oliveira.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/04/2021, 17:55 | ❤️ 1

Pelo que já sofri com o Fluig percebi que todos os campos do formulário são salvos como texto, então quando você tenta filtrar data ele vai fazer uma comparação textual ao invés de utilizar o tipo Date/Timestamp.

Uma solução, que passei a utilizar, é ter um campo oculto com a data no formato ISO (YYYY-MM-DD), pois assim ela funciona mesmo com comparação de string.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 09/04/2021, 09:01 | ❤️ 3

Bom dia [@redschenko](/u/redschenko).

Tenho um dataset sincronizado que busca informações de data em um bd e salva ela no formato que ela vem do banco.

![image](https://fluiggers.com.br/uploads/default/original/1X/fedb61ee243ad27f1be92a77267e227814d50a84.png)

Na hora de criar as constraints, converto a data pro formato YYYY-DD-MM e funciona normalmente.

![image](https://fluiggers.com.br/uploads/default/original/1X/3313cfa82b575cb4d69d6ca5eb5ac847fcc1d4f0.png)

* * *

![image](https://fluiggers.com.br/uploads/default/original/1X/68acd78c533a84a3fa258cc1ef8fe1f59e053684.png)

---

## Resposta #3

**Rodrigo de Oliveira** (@redschenko) — 09/04/2021, 14:50 | ❤️ 1

Obrigado pelas respostas [@Bruno\_Gasparetto](/u/bruno_gasparetto) e [@victorcastro](/u/victorcastro)
Como estou tendo outros problemas com este dataset interno, vou fazer um dataset customizado utilizando uma select direto no cadastro do formulário (tabela ML).

---

## Resposta #4

**Daniel Sales** (@Daniel_Sales) — 10/04/2021, 11:19

O ideal e trabalhar com a data invertida anomesdia.
O campo date do html ja salva assim

---

## Resposta #5

**Victor Castro** (@victorcastro) — 13/04/2021, 13:13

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) victorcastro:
>
> > Tenho um dataset sincronizado que busca informações de data em um bd e salva ela no formato que ela vem do banco.

[@redschenko](/u/redschenko) esqueci de citar algo importante: essas colunas do dataset que eu citei tá com o tipo DATE.

![image](https://fluiggers.com.br/uploads/default/original/1X/3f016a27e3bd77cb855349bbe73492f8dac0bacf.png)

Lembrei disso porque encontrei um problema agora. Atualizei pra versão mais atual do Fluig (1.7.0-210406) e antes era salvo no formato de data mesmo.

![image](https://fluiggers.com.br/uploads/default/original/1X/b6d8fa28ee571f5be0e2b38fa1c272b1ca7f6d5e.png)

Agora tá vindo no formato **timestamp**.

![image](https://fluiggers.com.br/uploads/default/original/1X/ec64da5668d81b599f48f692a283b01044a6cd13.png)

Vou ter que dar manutenção em todos os datasets :expressionless:

---
