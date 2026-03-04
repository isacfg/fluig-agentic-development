# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Fórmula Visual: Executar processo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024258792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Executar-processo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024258792-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-F%C3%B3rmula-Visual-Executar-processo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:10

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
Tempo aproximado para leitura: 00:03:00 min**

**Dúvida**Como executar um processo a partir de fórmula visual?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução**Será preciso utilizar um conjunto de duas atividades para execução do processo via fórmula visual. **Preparar execução do processo** e **Executar processo**. Abaixo segue o detalhamento de como configurar a fórmula de acordo com seu processo (usaremos o processo de cancelar movimento como exemplo):

**1 - Executar o processo desejado, via sistema**
Acesse a tela em que o processo é executado e, para qualquer registro, execute o processo da mesma maneira que deseja que a fórmula o execute:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022718651/mceclip0.png)

**2 - Identificar o Job gerado**
Acesse a tela de Gerenciamento de Jobs (menu Ambiente) e filtre pelo job criado na execução do processo (passo 1):

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022718791/mceclip1.png)

**3 -** **Crie uma nova fórmula visual**
Esta será responsável pela execução do processo em seu contexto.

**4 - Atividades a serem utilizadas**
Pesquise e arraste para o **WorkFlow** as atividades necessárias para a execução do processo:
\- Preparar Execução do Processo 
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022692192/mceclip3.png)


\- Executar Processo
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022692232/mceclip4.png)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022692352/mceclip5.png)

**5 - Selecionar o processo e seu XML
**Clique com o botão direito na atividade **Preparar Execução do Processo** e na opção "Selecionar XML do Log de execução de processos" filtre e selecione o JOB consultado no **passo 2**.
\- Feito isto, a atividade terá as propriedades "Nome do processo" e "XML do processo" preenchidas:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022719311/mceclip6.png)

**6 - Renomear as atividades
**De maneira opcional, renomeie as atividades para melhor entendimento do fluxo criado.

**7 - Inclusão de parâmetros para a execução**
Editar o XML importado e no local dos valores a serem substituídos em tempo de execução realizar a inclusão das variáveis dentro de colchetes, por exemplo, transformar os campos chave do processo em parâmetros
Original:

<PrimaryKeyList xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" xmlns="http://www.totvs.com/">
 <d2p1:ArrayOfanyType>
 <d2p1:anyType xmlns:d4p1="http://www.w3.org/2001/XMLSchema" i:type="d4p1:short">1</d2p1:anyType>
 <d2p1:anyType xmlns:d4p1="http://www.w3.org/2001/XMLSchema" i:type="d4p1:int">1413418</d2p1:anyType>
 </d2p1:ArrayOfanyType>
 </PrimaryKeyList>

Alterado:

<PrimaryKeyList xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" xmlns="http://www.totvs.com/">
 <d2p1:ArrayOfanyType>
 <d2p1:anyType xmlns:d4p1="http://www.w3.org/2001/XMLSchema" i:type="d4p1:short">**\[coligadadinamica\]<**/d2p1:anyType>
 <d2p1:anyType xmlns:d4p1="http://www.w3.org/2001/XMLSchema" i:type="d4p1:int">**\[idmovdinamico\]**</d2p1:anyType>
 </d2p1:ArrayOfanyType>
 </PrimaryKeyList>

\- Isto fará com que sejam criados os parâmetros na aba **Propriedade** da atividade **Preparar Execução do Processo**


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022693292/mceclip0.png)

Neste exemplo foram modificados quatro campos do XML sendo dois deles com o mesmo valor, gerando assim três parâmetros.
XML do exemplo:

<?xml version="1.0" encoding="utf-16"?>
<MovCancelMovProcParams xmlns:i="http://www.w3.org/2001/XMLSchema-instance" z:Id="i1" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" xmlns="http://www.totvs.com.br/RM/">
 <PrimaryKeyList xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" xmlns="http://www.totvs.com/">
 <d2p1:ArrayOfanyType>
 <d2p1:anyType xmlns:d4p1="http://www.w3.org/2001/XMLSchema" i:type="d4p1:short">**\[coligadadinamica\]**</d2p1:anyType>
 <d2p1:anyType xmlns:d4p1="http://www.w3.org/2001/XMLSchema" i:type="d4p1:int">**\[idmovdinamico\]**</d2p1:anyType>
 </d2p1:ArrayOfanyType>
 </PrimaryKeyList>
 <PrimaryKeyNames xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" xmlns="http://www.totvs.com/">
 <d2p1:string>CODCOLIGADA</d2p1:string>
 <d2p1:string>IDMOV</d2p1:string>
 </PrimaryKeyNames>
 <MovimentosACancelar>
 <MovimentosCancelar z:Id="i3">
 <ApagarMovRelac>false</ApagarMovRelac>
 <CancelarMovimentosGeradosSimultFaturamento>false</CancelarMovimentosGeradosSimultFaturamento>
 <CancelarMovimentosGeradosSimultReabriCotacao>false</CancelarMovimentosGeradosSimultReabriCotacao>
 <CodColigada>1</CodColigada>
 <CodSistemaLogado>T</CodSistemaLogado>
 <CodUsuarioLogado>mestre</CodUsuarioLogado>
 <DataCancelamento>2019-02-25T00:00:00-03:00</DataCancelamento>
 <ExcluirItensDaCotacao>false</ExcluirItensDaCotacao>
 <IdExercicioFiscal>22</IdExercicioFiscal>
 <IdMov>**\[idmovdinamico\]**</IdMov>
 <MotivoCancelamento></MotivoCancelamento>
 <NumeroMov>**\[numeromovdinamico\]**</NumeroMov>
 </MovimentosCancelar>
 </MovimentosACancelar>
</MovCancelMovProcParams>

**8 - Preencher os parâmetros de acordo com seu processo e necessidade**
Neste exemplo foram criadas três atividades de expressão 
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022693712/mceclip2.png)
com valores fixos e estas apontadas nos parâmetros da atividade **Preparar Execução do Processo**


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022693672/mceclip1.png)

**9 - Configurar a atividade de execução do processo**
Na atividade **Executar processo** informe os parâmetros:
\- Nome do processo (o mesmo da atividade **Preparar Execução do Processo)**
\- Atividade de Preparar parâmetros (apontar para a atividade **Preparar Execução do Processo)**


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022699712/mceclip3.png)



**10 - Configurar a execução do processo
**No exemplo criado a execução será feita manualmente através da opção "Salvar e Executar" do cadastro de fórmula. Contudo, esta execução estará diretamente ligada ao contexto desejado pelo seu processo, assim como o preenchimento dos parâmetros do processo.

**Complemento**
Fórmula visual criada disponível no anexo.
