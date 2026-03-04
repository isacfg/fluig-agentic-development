# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Como realizar a emissão de Nota Fiscal Complementar

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/8526729528087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-realizar-a-emiss%C3%A3o-de-Nota-Fiscal-Complementar](https://centraldeatendimento.totvs.com/hc/pt-br/articles/8526729528087-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Como-realizar-a-emiss%C3%A3o-de-Nota-Fiscal-Complementar)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 31 de agosto de 2022 às 14:03

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00 min
**

**Dúvida**Este Documento auxilia a criação de um movimento básico para complementar impostos de uma NF-e no sistema. Qualquer NF-e complementar deve ser emitida de acordo com a legislação vigente mesmo que esteja em desacordo com este documento.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Solução**

Criando uma NF-e Complementar

**1.** Parametrize um movimento de NF-e normalmente;

**2.** Acesse os parâmetros do movimento em: Opções | Parâmetros | RMNucleus | selecione onde o tipo de movimento esta inserido (compras, vendas, outras movimentações);

**3.** Habilite nos parâmetros do Tipo de Movimento o parâmetro “Usar Cópia de Movimento por referência”, na etapa “Mov – Outros Dados”. O motivo da referencia deve ser  “6 – Complementar/Retificadora”;

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8526490856343/mceclip0.png)


**4.** Na etapa “Item – Preços” marque a opção “Aceitar Preço Zero”;

![mceclip1.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8526528334871/mceclip1.png)

**5.** Acesse o Menu Cadastros | Produtos e Serviços e Cadastre um Produto Genérico para complementar o Imposto.

**OBSERVAÇÃO:
**O produto deverá ser do Tipo Produto.

**6.** Entre no cadastro da natureza de operação (CFOP) em Cadastros | Tabelas de tributação | Natureza de operação | edite a natureza a ser utilizada | aba Tributação ICMS/IPI | edite a regra de ICMS | na aba identificação o tipo de tributação tem que ser “Outros” | na aba Outros dados marque o flag Operação complementar com o tipo de ICMS a ser complementado | salve as configurações.

**​​OBSERVAÇÕES:**
Deve-se informar o Tipo de Tributação como "Outros";

Marcar o flag Operação Complementar do tipo de ICMS a ser complementado.

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8526533096855/mceclip2.png)

**7.** Entre no tipo de movimento criado para complemento (Movimentos | selecione o tipo de movimento | preencha o filtro com o movimento complementar), gere um movimento por referencia através do menu Processos | "assistente de copia por referência“.

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8526569325079/mceclip3.png)

Preencha o filtro para referenciar ao movimento original:

![mceclip4.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8526574335895/mceclip4.png)

**OBSERVAÇÃO:
**Os itens não serão copiados você deverá utilizar o item cadastrado anteriormente na etapa 5.

**8.** Preencha apenas a quantidade 1 e os valores que serão complementados.

![mceclip5.png](https://centraldeatendimento.totvs.com/hc/article_attachments/8526627395991/mceclip5.png)

Após a realização do passo a passo proceda com o envio da NF-e Normalmente.
