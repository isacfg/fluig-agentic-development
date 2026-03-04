# Pegar dados do histórico da solicitação

> **Fonte:** [https://fluiggers.com.br/t/pegar-dados-do-historico-da-solicitacao/2799](https://fluiggers.com.br/t/pegar-dados-do-historico-da-solicitacao/2799)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `fluigapi`
> **Criado em:** 21/05/2024, 11:36
> **Visualizações:** 283 | **Likes:** 2 | **Respostas:** 0

---

## Pergunta original

**Jose Henrique ** (@Jose) — 21/05/2024, 11:36

Estou na missão de criar uma aba no formulário que traga de forma mais clean e de fácil compreensão o histórico do processo, retirando algumas informações que atrapalham o usuário.

os dados que falo em questão seriam esses da imagem abaixo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/d/d31486564b6e31e5ba7fbbac700976c2a132bfb4_2_690x201.png)

Gostaria de pegar as observações que os usuários fazem, em que etapa do processo se encontra e quem fez a observação.

Procurei por algumas APIs porém não achei nenhuma.

---

## Resposta #1

**Sérgio Machado** (@sergio.machado) — 22/05/2024, 10:00 | ❤️ 1

A forma mais fácil de chegar neste resultado é criar uma tabela pai e filho com os seguintes campos de exemplo e ir alimentando através dos eventos de processos.

1.  Data com minutos e segundos que foi gerado o histórico;
2.  Atividade em que foi gerado o histórico;
3.  Nome do usuário logado;
4.  Evento que sinalize se o histórico gerado foi de criação, movimentação, reprovação, etc;
5.  Detalhes adicionais do registro, como por exemplo, se foi de reprovação e seu formulário tem um campo para informar a justificativa, pode capturar este valor.

Dá um trabalho mas o resultado fica bem satisfatório.
Veja este exemplo abaixo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/be55545def3c47b235aff47939e280b4963ec69f_2_690x130.png)

---

## Resposta #2

**venturelli** (@venturelli) — 22/05/2024, 10:20 | ❤️ 1

Dependendo do que realmente precisas, acho que a solução do [@sergio.machado](/u/sergio.machado) é mais elegante. Se eu não me engano, este exemplo faz algo parecido [Browse Samples / Exemplos-Avancados-de-Processos - fluig Stash](https://git.fluig.com/projects/SAMPLES/repos/exemplos-avancados-de-processos/browse/atendimento-chamados) (mas sem a parte de pegar o nome da atividade)

Mas se quiser fazer exatamente o que você descreveu:

-   Usar [Requests/findHistoriesByProcessInstanceId](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findHistoriesByProcessInstanceId) passando o ‘types’ como ‘observation’. Essa api está marcada como Beta e pode ter alterações, mas hoje é a única opção para isso. E ela também não trás o nome da atividade apenas o movementSequence.
-   Então vai ter que ser chamada a API [Requests/findActivitiesByRequest](https://api.fluig.com/latest/process-management/swagger-ui/#/Requests/findActivitiesByRequest). A parte boa é que dá pra chamar apenas uma vez essa segunda api e fazer um “mapa” de movementsequence/nome da atividade e depois utilizar pra popular os históricos.

---
