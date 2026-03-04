# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Aplicar IntelliTrace

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000779787-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aplicar-IntelliTrace](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000779787-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Aplicar-IntelliTrace)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:13

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00 min**

**Dúvida**Como executar o IntelliTrace e enviar para análise?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – Todas as versões.

**Solução
**Para executar o **IntelliTrace** e enviar para o suporte os arquivos gerados, basta seguir os passos abaixo:

-   1\. Descompactar o arquivo **IntelliTraceCollection (Anexo)** na pasta **RM.Net**. Será gerada uma pasta com o nome **IntelliTraceCollection** e dois arquivos **.BAT** dentro da pasta **RM.Net**;
-   2\. Desinstalar todos os hosts na máquina: **RM.Host.Exe** **e** **RM.Host.ServiceManager.exe**
-   3\. Executar o **.BAT** para iniciar o **RM.Host e RM.exe**:

Pasta RM.NET > IntelliTrace RM.Host.Exe .bat 
Pasta RM.NET > IntelliTrace RM.Exe .bat

-   4\. Será gerado um arquivo na pasta **..\\RM.Net\\IntelliTraceCollection** com a extensão **.itrace**
    Exemplo: **IntelliTraceLogFiles.RM.EXE.itrace**;
-   5\. Para parar a execução do IntelliTrace saia do **RM.exe** e em seguida finalize a execução das BATs;
-   6\. Neste arquivo **.itrace** que está gravado todo o histórico de execução da rotina;
-   7\. **Compacte-os** e nos envie para análise do processo.
