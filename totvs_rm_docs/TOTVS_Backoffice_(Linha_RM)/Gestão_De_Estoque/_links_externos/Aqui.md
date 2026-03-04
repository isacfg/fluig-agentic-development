# Demonstração do processo de Industrialização (Retorno em 1 NF) - Remetente

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=74646698](https://tdn.totvs.com/pages/releaseview.action?pageId=74646698)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Produto**

**:**

TOTVS Gestão de Estoque Compras e Faturamento                       **Versão:** 11.52 e posteriores                                                              

**Processo**

**:**

Estoque DE/COM Terceiros

**Subprocesso**

**:**

Demonstração do processo de Industrialização (Retorno em 1 NF) - Remetente

**Data da publicação**

**:**

13/09/2013

### **Demonstração do processo:**

Estoque do produto antes do processo:

Saldo Atual: 10,00

Saldo Disponível: 10,00

Saldo Financeiro: 1.000,00

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/1.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

#### **\--> Inclusão do movimento de Remessa Para Industrialização:**

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/19-1.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

**

Informar o local de estoque que o produto vai sair e o fornecedor que está sendo enviado o produto para ser industrializado.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/2.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Informar o Produto e a Quantidade do produto que será enviado para a Industrialização.

Após o Movimento de Remessa para Industrialização incluído, a verificação do produto na consulta de saldos e custos.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/3.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Saldo Atual do produto: 10,00

Saldo Disponível: 0,00

#### **\--> Inclusão do movimento de Industrialização Realizada por Terceiros:**

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/4.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Filtrar o movimento de Remessa Para Industrialização.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/5.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Marcar o Item que foi industrializado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/6.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

O Movimento de Retorno Simbólico da Mercadoria irá ser aberto.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/7.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)
 

No Movimento de Retorno Simbólico da Mercadoria incluir o serviço de Industrialização e o preço do serviço.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/8.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Informar a quantidade do produto que foi industrializado.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/9.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Ao salvar esse movimento de retorno simbólico da mercadoria, o sistema irá gerar automaticamente o movimento de entrada do produto acabado:

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/10.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

O movimento será aberto sem nenhum item, dessa forma o usuário deve informar qual foi produto acabado.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/11.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)
 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/12.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Após o movimento de Retorno da Mercadoria Simbólica (Parcial) e Entrada do Produto Acabado o Saldo do produto vai ficar da seguinte forma:

Saldo Atual: 3,00 (Produtos que não foram industrializados)

Saldo Disponível: 0,00 (Porque ainda não foi feito o movimento de retorno do produto não industrializado).

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/13.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

#### \--> Inclusão do movimento de Retorno do Produto não Industrializado.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/14.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Selecionar o movimento de Remessa Para Industrialização e executar o processo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/15.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

O Movimento de Retorno da Mercadoria não Industrializada irá ser gerado com a quantidade do produto que ainda não foi devolvida.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/16.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Após a Inclusão do Movimento vamos verificar o Saldo do Produto.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/17.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Saldo Atual: 3,00

Saldo Disponível: 3,00

E a consulta do Saldo do Produto Acabado:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/74646698/18.JPG?version=1&modificationDate=1379091710000&api=v2&effects=drop-shadow)

Saldo Atual: 2,00

Saldo Disponível: 2,00
