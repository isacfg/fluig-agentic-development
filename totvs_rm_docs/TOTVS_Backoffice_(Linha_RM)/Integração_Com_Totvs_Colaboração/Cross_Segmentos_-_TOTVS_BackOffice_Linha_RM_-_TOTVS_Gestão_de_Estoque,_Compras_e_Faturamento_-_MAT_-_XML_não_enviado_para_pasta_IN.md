# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - XML não enviado para pasta IN

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027915912-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-XML-n%C3%A3o-enviado-para-pasta-IN](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360027915912-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-XML-n%C3%A3o-enviado-para-pasta-IN)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Com Totvs Colaboração
> **Data:** 1 de agosto de 2022 às 12:34

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Ocorrência**Portal **Neogrid** apresenta nota que não foi enviada para a pasta **IN** e não foi importada no **ERP**, ao **Reenviar ao ERP** ela passa a ser exibida na pasta.

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Esse incidente pode vir a ocorrer devido a alguns fatores:
Ocorreram erros durante a importação do **XML** e este se encontra na pasta **RM\\ERROR**

-   XML foi consumido em Ambiente e/ou Base de testes
-   **Agendamento de** **JOB** ativo onde houve o consumo do arquivo mas ocorreram erros ao importa-lo e arquivo não se encontra na pasta RM\\ERROR.
-   Arquivo foi excluído da pasta
-   **ClientEDI** instalado em mais de uma máquina com serviço ativo
-   Pasta IN não é a configurada no serviço do ClientEDI
-   Serviço ClientEDI inativo.

**Solução**

-   Acessar pasta \\RM\\ERROR e recortar o XML para a pasta IN novamente, feito isso importe-o para o ERP manualmente ou aguarde o próximo Job Agendado
-   Verifique em sua base de testes se o XML não encontrado se encontra disponível para consulta no **Monitor de Arquivos** ou cadastrado na tela de **Cadastro de XML** do menu **Compras**
-   Verifique os Job's executados para o processo de **Importação de Arquivos XML** e busque os que apresentaram erros.
-   Verifique a pasta IN em todas as máquinas onde o ClientEDI foi instalado, o arquivo XML pode ter sido salvo em uma destas pastas
-   Verifique mediante configurações do ClientEDI a pasta configurada para envio dos arquivos
-   Ative o Serviço do ClientEDI.

Caso nenhuma destas opções seja a solução da situação entre em contato com o suporte TOTVS enviando os arquivos de extensão **.log** existentes na pasta **\\bin** do ClientEDI.
