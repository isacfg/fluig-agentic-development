# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Utilização de Preço Total no Item de Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000643827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-Pre%C3%A7o-Total-no-Item-de-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000643827-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Utiliza%C3%A7%C3%A3o-de-Pre%C3%A7o-Total-no-Item-de-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 8 de dezembro de 2021 às 10:10

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura**: 00:04:00min**

**Dúvida
**Como parametrizar o sistema para utilização de Preço Total no Item de Movimento e levar este valor para o Lançamento Financeiro?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80.

**Solução**Para solucionar esta dúvida, siga os passos listados abaixo:

1.  Acesse os parâmetros do tipo de movimento em **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | selecionar o Tipo de Movimento utilizado** (caso encontre dificuldades para localizar o tipo de movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search)) avance até a **etapa 28 -** **Item - Preços**, marque a opção **Editar Preço Total** e coloque a forma de calculo como **Calcular Preço Total:
    ![Sem_t_tulo.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001019068/Sem_t_tulo.png)
    **
2.  Após esta edição, acesse a **etapa 13 - Mov - Valores Financeiros 2/4** e informe uma fórmula para o **valor** **bruto** que tenha a função responsável pela busca do valor **Preço Total**.
    **Exemplo:**
    ![Sem_t_tulo.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001019708/Sem_t_tulo.png)

3.  Na **etapa 56 - Fin - Faturamento 3/3**, informe no campo de Fórmula do Valor a Ratear, uma fórmula que retorne o valor bruto do movimento, por exemplo, **MVB;**
4.  Faça a inclusão do movimento como de costume, para este exemplo, utilizaremos a quantidade de 15000 e o preço unitário de R$3,2162400000. Veja que para o campo Preço Total, o valor calculado foi de 48243,6000:
    ![item.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001020188/item.png)


Após salvar o movimento, é necessário conferir o lançamento financeiro. Acesse o movimento novamente, vá até a aba Lançamentos e clique em Financeiro. Neste exemplo, podemos notar que o valor original do lançamento financeiro foi gerado corretamente utilizando a variável MVB conforme proposto. Isso porque a função MVB irá retornar o resultado da fórmula informada no passo 2 deste documento:

![lancamento.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360001034267/lancamento.png)

**Importante
**Neste exemplo o produto utilizado contém mais de 4 casas decimais. Caso não saiba como realizar esta configuração, [clique aqui.](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000650788)
