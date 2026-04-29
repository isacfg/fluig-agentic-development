# Atividade Serviço - Mensagem da Captura de Erro No Catch

> **Fonte:** [https://fluiggers.com.br/t/atividade-servico-mensagem-da-captura-de-erro-no-catch/862](https://fluiggers.com.br/t/atividade-servico-mensagem-da-captura-de-erro-no-catch/862)
> **Categoria:** BPM
> **Tags:** `servicetask`, `atividade-serviço`
> **Criado em:** 07/01/2022, 17:53
> **Visualizações:** 1070 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Wanderson Mendes** (@Wanderson_Mendes) — 07/01/2022, 17:53

Olá, eu preciso salvar alguns campos com a mensagem de erro em um fluxo de automático, porém quando caímos no **throw** os dados não são salvos no **hAPI.setCardValue**.

De acordo com o fórum: [https://fluiggers.com.br/t/atividade-servico-mensagem-da-captura-de-erro/372](https://fluiggers.com.br/t/atividade-servico-mensagem-da-captura-de-erro/372) eu devo sempre retornar *true* na tarefa e tratar o meu erro em uma condição, similar à imagem abaixo:
![image](https://fluiggers.com.br/uploads/default/original/1X/a5bfe182771799e53fca118414a0de60a1be99fd.png)

O meu problema é que quando o fluxo cai no catch ele não sai da tarefa automática, então eu gostaria de saber como fazer para a tarefa de serviço enviar para a próxima etapa sem o **throw**

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 08/01/2022, 10:45

Você precisa pensar qual é o melhor método para tratar o erro.

Quando você cria uma **Atividade de Serviço** você indica quantas tentativas ela deve realizar antes seguir o fluxo do `catch`. Toda vez que você dá um `throw`, ou que alguma `Exception` é disparada dentro da atividade sem você a capturar, é considerado um erro e vai tentar executar a atividade de serviço novamente no tempo indicado na sua configuração. Somente após exceder o limite de tentativas é que o `"catch"` da atividade vai encaminhar para próxima ação.

O problema do throw é que ele interrompe a atividade e assim não salva os dados no formulário com a `hAPI.setCardValue`. Por isso no post citado deram a sugestão de sempre retornar `true` (pra nunca cair no catch da atividade) e tratar o erro de outra forma. Por exemplo, você pode criar campos no formulário pra indicar o erro no serviço, salvar as informações nesses campos, dar um `return true` pra não cair no catch e então tratar o que vai acontecer de acordo com os campos. Então precisa analisar muito bem o que e como você quer tratar os erros.

No meu caso, do post que você citou, eu precisava fazer várias etapas e por isso resolvi fazer um encadeamento de atividades de serviço. Nessa situação eu precisava de um serviço que cria um PDF e o anexa no Processo, precisava criar o Processo em outro sistema (DocFlow) e então precisava enviar todos os anexos do Fluig para esse outro sistema.

![image](https://fluiggers.com.br/uploads/default/optimized/1X/5edb729e5a0e16776d9a9ddc36566f90bb9b24d4_2_690x240.png)

Como é obrigatório criar o processo no DocFlow eu fiz os “catches” jogarem para a atividade “Cadastrar manualmente no DocFlow” onde o usuário pode fazer tudo manualmente ou enviar para a condicional “Nova Tentativa Automática”, que vai encaminhar para o serviço correto de acordo com as informações salvas.

Lembrando que quando tem um throw na atividade a próxima tentativa trará tanto o número da tentativa quanto a mensagem que foi disparada no throw e você pode se basear nisso para tratar a situação.

Um exemplo de como tratar o serviço sem deixar cair no catch da atividade:

```javascript
/**
 * Atividade de serviço pra executar a ação
 *
 * @param {number} attempt Número da tentativa
 * @param {string} message Última mensagem de erro da atividade
 * @returns {boolean} True se executou
 * @throws {string} Exceção com a mensagem de erro
 */
function servicetask112(attempt, message) {
    try {
        executaAtividade(); // Pode disparar um throw "mensagem do erro"
    } catch (e) {
        // Deu erro e é a terceira e última tentativa da atividade
        if (attempt == 3) {
            hAPI.setCardValue("erroServico", e);
            return true;
        } else {
            throw e; // Não é a última tentativa. Deixar tentar novamente
        }
    }

    return true;
}
```

Assim você cria o fluxo do catch na atividade só por obrigação, pois ele nunca será executado e você garante que o que for inserido no formulário será salvo.

---
