# Editando form em "tempo real"

> **Fonte:** [https://fluiggers.com.br/t/editando-form-em-tempo-real/2925](https://fluiggers.com.br/t/editando-form-em-tempo-real/2925)
> **Categoria:** Formulários
> **Tags:** `form`, `edição`
> **Criado em:** 13/08/2024, 08:26
> **Visualizações:** 96 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 13/08/2024, 08:26

Salve, nação!

Beleza? Há muito tempo havia um ‘jeitinho’ de ir construindo o básico dos forms tem tempo real, com o arquivo salvo na sua própria máquina mesmo, pra agilizar o processo…acho que foi o [@Leandro\_Taschek](/u/leandro_taschek) que ensinou uma vez. Hoje com alguns servidores Fluig na nuvem não me parece mais possível usar a mesma técnica.

Como fazem hoje (se fazem) para evitar tanto edita/exporta/edita/exporta?

Valeu!!

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 13/08/2024, 09:11

Toda a parte de layout eu faço direto na máquina. Basta colocar o endereço completo nos css e js que estão no servidor Fluig.

Claro que assim os eventos de back não funcionam e não tem o zoom carregado, mas dá pra fazer toda a parte de layout ao menos.

Mas pode ser que na nuvem tenha alguma proteção pra não carregar os arquivos quando a solicitação não vem do próprio servidor. Nunca usei a versão cloud pra saber como é.

---

## Resposta #2

**venturelli** (@venturelli) — 13/08/2024, 17:09 | ❤️ 1

Acredito que funcionaria quando se tem acesso ao volume do servidor de alguma forma usando essa pasta diretamente para trabalhar em uma IDE, mas os eventos são persistidos no banco de dados, então isso não teria como fugir de exportar manualmente.

Tem como fazer via angular ([https://youtu.be/9aeAYEIOWJg](https://youtu.be/9aeAYEIOWJg)) uns ajustes para simular mais facilmente algumas requisições para o Fluig e não precisar exportar tanto.

Dá pra fazer algo mais pró: criar um script customizado via [Run on Save - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) que rode um comando específico que faça a exportação para o Fluig automaticamente.

---

## Resposta #3

**Allan Reichert** (@allan.reichert) — 14/08/2024, 09:09 | ❤️ 1

uma forma que uso as vezes é alterar algum detalhe dos scripts e as validações do processo via banco de dados (no caso tenho acesso ao banco), casos por exemplo como alterar uma versão anterior de um formulário ou alguma validação de um processo sem ter que gerar uma nova versão.

event\_ficha: Contem os scripts de validações do formulário;
event\_process: Contem os scripts de validações do processo;
estado\_proces\_cond: Contem as validações condicionais dos processos;

Também é possível alterar o HTML do formulário pelo servidor
:<Base Fluig>\\VOLUME<Nome do volume>\\forms

---

## Resposta #4

**Mendes** (@andersonma) — 15/08/2024, 10:52 | ❤️ 1

Faço da mesma forma que o [@Bruno\_Gasparetto](/u/bruno_gasparetto) comentou. Adiciono os arquivos Jquery e style-guiide na pasta do formulário e abro no navegador.

At.te,

---

## Resposta #5 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 15/08/2024, 16:33 | ❤️ 1

Então, nem precisa baixar nada. Só colocar o caminho completo do servidor nos src/href dos scripts e estilos. Na pasta mesmo, local, só os arquivos customizados.

![image](https://fluiggers.com.br/uploads/default/original/2X/5/59319f54c2189825bb1c485c4dddb47efe3c49ca.png)

---

## Resposta #6

**Daniel Cabral Santos** (@daniel.cabral) — 20/08/2024, 08:30

Valeu turma, colocar a URL absoluta nos forms diretamente vai resolver, pelo menos parcialmente.

---
