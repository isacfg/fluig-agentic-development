# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Executável Delphi não abre

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022342652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Execut%C3%A1vel-Delphi-n%C3%A3o-abre](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360022342652-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Execut%C3%A1vel-Delphi-n%C3%A3o-abre)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 1 de agosto de 2022 às 17:19

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00min**

**Dúvida**Ao abrir executável Delphi do sistema a mensagem abaixo é apresentada:


![delphi.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360019643272/delphi.png)

Ou ao clicar no botão "Iniciar executável do módulo"
![screenshot_20190128_094016.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360019643312/screenshot_20190128_094016.png)
 o sistema exibe a mensagem abaixo:


![mdi.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360019522651/mdi.png)


**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**A partir da versão 12.1.21 a visão Delphi do módulo de Gestão de Estoque, Compras e Faturamento se encontra descontinuada uma vez que todos os recursos do módulo se encontram migrados para .Net.

Caso o acesso a visão Delphi tenha o intuito de efetuar o processo de escrituração, esta pode ser executada via nova MDI através do menu **Integrações - Escrituração de Lançamentos**.

Segue abaixo documentação referente a escrituração migrada:
[Escrituração de Lançamento Fiscais

](http://tdn.totvs.com/pages/viewpage.action?pageId=269432397)A impressão de relatórios .RRM continua disponível no sistema via nova MDI, assim como a edição de relatórios .RRM basta acessar o menu **Gestão - Gerador de Relatórios - Visão .Delphi** e o gerador será aberto como em versões anteriores.
Para que relatórios Delphi sejam impressos via nova MDI a flag "Executa em Job Server" precisa estar marcada na configuração de seu relatório.


![rel.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360019644152/rel.png)

Já em casos de customização esta deverá ser migrada para a nova plataforma.
