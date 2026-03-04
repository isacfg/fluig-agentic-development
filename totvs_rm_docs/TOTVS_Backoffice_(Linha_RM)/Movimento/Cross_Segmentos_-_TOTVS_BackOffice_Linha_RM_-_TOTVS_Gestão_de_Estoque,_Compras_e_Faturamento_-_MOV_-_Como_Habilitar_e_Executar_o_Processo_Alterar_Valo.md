# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como Habilitar e Executar o Processo Alterar Valor Lançamento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036165573-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Habilitar-e-Executar-o-Processo-Alterar-Valor-Lan%C3%A7amento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036165573-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-Habilitar-e-Executar-o-Processo-Alterar-Valor-Lan%C3%A7amento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 26 de julho de 2022 às 17:24

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min**

**Dúvida**Como habilitar e executar o processo **Alterar Valor Lançamento** disponível no movimento, aba Lançamentos | Financeiro?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**O processo **Alterar Valor Lançamento** tem o objetivo de permitir que o usuário altere manualmente o valor das parcelas calculadas automaticamente pela condição de pagamento informada no movimento, aba Integrações | Financeira. Para executa-lo deverá editar o movimento em questão aba Lançamentos > Financeiro > Processos, conforme exemplo abaixo:
![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046514814/mceclip0.png)


Nos parâmetros do processo é permitido alterar o valor dos lançamentos gerados pelo movimento, desde que a soma das parcelas seja igual ao total original. Para entender como os Valores Originais dos Lançamentos são calculados, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360036106553).


![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047377813/mceclip0.png)


O processo será habilitado no movimento parametrizado para integração financeira (parâmetros do tipo de movimento, etapa Fin - Faturamento 1/6) e poderá ser executado somente se o Tipo de Geração for *Edita*, conforme evidenciado abaixo:
![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360047378233/mceclip1.png)


Para acessá-lo e executa-lo com sucesso também é necessário que o usuário possua um perfil associado no módulo TOTVS Gestão Financeira, com permissão para visualização e edição de lançamentos.
Além disso, é imprescindível que o contexto selecionado no momento da edição do movimento seja o módulo Gestão de Estoque, Compras e Faturamento, **caso contrário o processo não será visualizado**.
![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360046515114/mceclip2.png)
