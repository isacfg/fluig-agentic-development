# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Nenhum Movimento foi Selecionado para a Filial X! Verifique o filtro da Escrituração!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008684688-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Nenhum-Movimento-foi-Selecionado-para-a-Filial-X-Verifique-o-filtro-da-Escritura%C3%A7%C3%A3o](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008684688-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Nenhum-Movimento-foi-Selecionado-para-a-Filial-X-Verifique-o-filtro-da-Escritura%C3%A7%C3%A3o)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 5 de fevereiro de 2025 às 15:51

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/29779690292503)
** Tempo aproximado para leitura: **00:05:00min**

**Ocorrência
**Ao realizar a escrituração de movimentos, é apresentado a mensagem **Nenhum Movimento foi Selecionado para a Filial X! Verifique o filtro da Escrituração!**

![Imagem](http://tdn.totvs.com/download/attachments/238033181/Capturar.PNG?version=1&modificationDate=1464785146000&api=v2)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa**

1.  A data do lançamento do movimento não esta dentro do intervalo definido no filtro de escrituração.
2.  Tipo de Movimento não está parametrizado para **Gerar Escrituração**.
3.  Tipo de Documento Escrituração não está preenchido no Movimento a ser escriturado.
4.  O **Código do Modelo do Documento** do Tipo de Documento informado no Movimento é **55** (NF-e Estadual), mas o movimento não esta autorizado ou cancelado na SEFAZ.
5.  O Movimento é de Nota Fiscal Municipal e o mesmo não está como Integrado ou Cancelado.
6.  O Tipo de Movimento está parametrizado para Emitir Cupom Fiscal, mas o lote criado é para escrituração de Nota Fiscal. 
7.  A CFOP (Natureza de Operação) do Movimento e/ou ítem não estão preenchidos. 
8.  O Número do Movimento não está dentro do intervalo definido no filtro de escrituração. 
9.  Sistema está parametrizado para enviar NF-e Estadual, porém o parâmetro não está sendo visualizado na etapa **Fis - NF-e**. 
10.  O usuário de criação do movimento não é o mesmo que está sendo informado no lote de escrituração.
11.  Movimento já foi escriturado em outro lote.

**Solução
**Segue as respectivas soluções de acordo com a causa:

1.  Acertar para que a data do lançamento do movimento esteja dentro do intervalo do filtro de escrituração. Caso esta data não seja visualizada no movimento, habilite a mesma na Etapa **Mov-Datas 1/2** dos parâmetros do Tipo de Movimento ou acesse o mesmo via Banco de Dados ou Visão de Dados na aba Gestão. 
2.  Parametrizar o tipo de movimento para **Gerar Escrituração** na Etapa **Fis-Escrituração 1/2** dos parâmetros do Tipo de Movimento. 
3.  Preencher do **Tipo de Documento** na Etapa **Fis-Escrituração 1/2** nos parâmetros do Tipo de Movimento. 
4.  Se o **Código do Modelo do Documento** do Tipo de Documento informado no Movimento for **55**, a nota deverá ser Autorizada ou Cancelada na SEFAZ conforme conveniência. 
5.  Se Nota Fiscal Municipal, definir o status de recibo como Integrado ou Cancelado conforme conveniência, onde o Tipo de Documento Escrituração deve ter o Código do Modelo do Documento diferente de **55**. 
6.  Se o movimento não for de Cupom Fiscal, desmarcar o parâmetro **Emite Cupom Fiscal** na Etapa **Fis - Dados** dos Parâmetros do Tipo de Movimento. Caso seja Cupom Fiscal, definir no filtro de escrituração o tipo Redução Z, filtrando a Redução Z e não o número do movimento. 
7.  Verificar se a CFOP do item de movimento esta preenchida. Caso a CFOP esteja parametrizada por movimento, a CFOP do movimento é carregada automaticamente para o item de movimento. 
8.  Acertar para que o Número do Movimento esteja dentro do intervalo definido no filtro de escrituração. 
9.  Alterar temporariamente na Etapa **Mov - Emitente/Destinatário 1/2**, o Emitente para **Empresa** e Destinatário para **Empresa**. Acessar a Etapa **Fis – NF-e** e verificar se o parâmetro **NF-e Estadua**l está como **Não Integrado**. 
10.  Deixar o campo do usuário do lote de escrituração em branco ou informar o usuário no lote de escrituração conforme usuário de criação do(s) movimento(s) que está(ão) sendo escriturado(s).
11.  Para verificar se o movimento já foi escriturado (em outro lote), temos duas opções:

**Acessar a tela de movimento
**Os movimentos já escriturados ficam com o ícone conforme imagem abaixo:

![Imagem](https://tdn.totvs.com/download/attachments/238033181/Capturar222.PNG?version=1&modificationDate=1464785148000&api=v2)

**Consulta SQL:
**SELECT CODLAF, CODLAFE, \* FROM TMOV WHERE IDMOV = X AND CODCOLIGADA = X

**Saiba mais** 
Para mais informações acesse [Escrituração Lançamento Fiscal](https://tdn.totvs.com/pages/releaseview.action?pageId=269432397)
