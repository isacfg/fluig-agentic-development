# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CMP - Parametrização Cotação Web

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039895753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Parametriza%C3%A7%C3%A3o-Cota%C3%A7%C3%A3o-Web](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360039895753-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CMP-Parametriza%C3%A7%C3%A3o-Cota%C3%A7%C3%A3o-Web)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Compras
> **Data:** 9 de abril de 2025 às 15:26

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:01:00 min**

**Dúvida**Como parametrizar o sistema para utilizar a Cotação Web?

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Solução
**Para parametrizar o sistema para utilizar a cotação Web é necessário:
Acessar o **Módulo de Gestão de Estoque, Compras e Faturamento** | Vá no menu **Ambiente** | **Parâmetros** |  **Estoque, Compras e Faturamento** | **Gestão de Compras** | **Cotação (*Verificar o escopo necessário, Geral ou por filial*)** | **Etapa Definições Gerais 2/4** | **Marcar o parâmetro "Usar Orçamento na Web" conforme print abaixo:**

![Imagem](https://tdn.totvs.com/download/attachments/285644244/image2017-7-24%2011%3A18%3A47.png?version=1&modificationDate=1500906618000&api=v2)

**Obs.:** Importar o relatório *.Net* de cotação Web "*NUCREL00028 - Exportação Cotação WEB.TotvsReport*" disponível na pasta "..CorporeRM\\ObjetosGerenciais/Relatorios"

**Obs.2**: O link para o Web Service deve ser gerado pelo Cliente e adicionado no relatório citado acima.

**PROCESSO:
**Pelo Usuário:

1 - Criar a cotação através do menu **Compras** | **Cotação** | **Incluir**

2 - Comunicar fornecedores para a **cotação** e selecione a opção **"Exportar Orçamento p/ Web"**

![Imagem](https://tdn.totvs.com/download/attachments/285644244/image2017-7-24%2011%3A24%3A50.png?version=1&modificationDate=1500906618000&api=v2)

**Pelo Cliente:**

1 - Acessar o link do portal, enviado no e-mail

2 - Logar com o usuário e senha informados no e-mail

3- Preencher a cotação e finalizar o processo

**Pelo Usuário:**

1 - Acessar a tela de **Cotação**

2 - Executar o processo de **"Importação de Cotação Web"** disponível no menu Processo

![Imagem](https://tdn.totvs.com/download/attachments/285644244/image2017-7-24%2011%3A28%3A45.png?version=1&modificationDate=1500906618000&api=v2)
