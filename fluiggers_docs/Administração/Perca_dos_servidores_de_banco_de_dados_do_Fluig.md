# Perca dos servidores de banco de dados do Fluig

> **Fonte:** [https://fluiggers.com.br/t/perca-dos-servidores-de-banco-de-dados-do-fluig/2883](https://fluiggers.com.br/t/perca-dos-servidores-de-banco-de-dados-do-fluig/2883)
> **Categoria:** Administração
> **Tags:** `banco-de-dados`
> **Criado em:** 15/07/2024, 09:11
> **Visualizações:** 68 | **Likes:** 2 | **Respostas:** 1

---

## Pergunta original

**Rodrigo NL** (@rodrigo.lima) — 15/07/2024, 09:11

Bom dia,

Tivemos a perca do servidor que continha o banco de dados do fluig e seus respectivos bkp.

Minha duvida é:

Se criar um banco de dados novo e apontar minha aplicação, irei perder os formulários que haviam?

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 15/07/2024, 10:57

Seja bem-vindo, [@rodrigo.lima](/u/rodrigo.lima)

Eu creio que sim, porque toda a estrutura do Fluig está no banco de dados. Mas, vou deixar os mais experientes dar a resposta final.

---

## Resposta #2

**venturelli** (@venturelli) — 15/07/2024, 12:11 | ❤️ 1

Os formulários em si ficam armazenados no volume, mas os eventos ficam na base, então foram perdidos também.

Já os dados (os registros do formulário) ficam todos armazenados no banco de dados como o [@Mautresim](/u/mautresim) já deu a má noticia.

Assim como toda estrutura de documentos e solicitações…

Dependendo do volume de dados, acho que vale a pena consultar uma consultoria de recuperação de dados. A não ser no caso de um ataque de ransomware, dai provavelmente não tem solução.

Claro que agora já sabes, mas nunca se deve confiar apenas em um dispositivo pra backup, mas pra futuras referências, tem esse post [https://www.kingston.com/br/blog/personal-storage/computer-backup-tips:](https://www.kingston.com/br/blog/personal-storage/computer-backup-tips:)

> Teoria de backup 3-2-1
>
> Esta regra é baseada na teoria de que você tem três cópias de seus arquivos, armazena duas cópias em diferentes dispositivos (seja na nuvem ou no armazenamento externo) e uma cópia em um local seguro como um cofre ou fora do local. Para algumas pessoas esta teoria pode soar ligeiramente exagerada, mas se alguma coisa acontecer com seus backups você vai agradecer por ter feito isso!

---

## Resposta #3

**Rodrigo NL** (@rodrigo.lima) — 15/07/2024, 13:30

Sim, como o que se tinha no Fluig não era nada critico, não teve essa precaução nos BKP.

Vou criar uma banco do zero e aponta a aplicação, para ver como se comporta.

Após os testes retorno aqui o que conseguimos evoluir ou não.

Obrigado pela ajuda.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 16/07/2024, 11:29 | ❤️ 1

Um exemplo de implementação da estratégia 3-2-1 que vejo em alguns clientes:

A cópia original (o banco online em operação)
Uma cópia quente em nuvem
Uma cópia fria em dispositivo offline (HDs externos, fita, etc).

…fora as possibilidades em um ambiente virtualizado, como os backups da máquina virtual em si e os snapshots periódicos.

Backup nunca é demais.

---
