# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Cancelar ou Excluir Movimento - Pedido já Recebido!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003397211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Cancelar-ou-Excluir-Movimento-Pedido-j%C3%A1-Recebido](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003397211-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Cancelar-ou-Excluir-Movimento-Pedido-j%C3%A1-Recebido)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 19 de junho de 2024 às 18:17

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/21166631511447)
Tempo aproximado para leitura: 00:02:00 min**

**Ocorrência
**Ao tentar Excluir ou Cancelar um movimento apresenta a mensagem de erro "**Pedido já recebido!"** e não é possível concluir o processo.

**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/21167394334487)
**

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Situação 1
**O movimento a ser excluído/cancelado possui o processo de faturamento executado e gerou uma movimentação de destino.
**Solução
**Para conseguir excluir/cancelar o movimento será necessário cancelar e excluir o movimento de destino gerado para que o movimento que está tentando executar o processo seja reaberto.

É possível identificar o movimento gerado no faturamento clicando no ícone de rastreamento:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/21167394359063)

Neste exemplo o movimento 1.1.01 está com status Recebido pois no faturamento ele gerou o movimento 1.1.03.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/21167360028567)

Neste caso será necessário acessar o movimento de destino e excluir ele. Após a exclusão, acesse novamente o movimento original para executar o processo.

**Situação 2**
No movimento a ser excluído/cancelado foi executado o processo de Concluir Pedido. 
Conseguimos identificar que um movimento foi concluído acessando a rastreabilidade do movimento e visualizando que o campo "Qtde. Concluída" está preenchido.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/21167394404119)

**Obs:** Quando esse processo é executado não tem como cancelar ou excluir o movimento pois este processo é **irreversível.

**

**Situação 3**

A mensagem de erro também é apresentada ao tentar **Faturar** um movimento que esteja com o status **Faturado.** Nesse caso não é possível faturar e será necessário fazer verificação do movimento conforme instruções explicadas acima. 

#### Para mais informações sobre o processo de Concluir Pedido:

#### [**Processo Concluir Pedido**](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360035469033-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Processo-Concluir-Pedido)

**Vídeo How To com mais informações:

**

[🎥 Vídeo](https://centraldeatendimento.totvs.com//www.youtube-nocookie.com/embed/jQqbi7ISRJ8)
