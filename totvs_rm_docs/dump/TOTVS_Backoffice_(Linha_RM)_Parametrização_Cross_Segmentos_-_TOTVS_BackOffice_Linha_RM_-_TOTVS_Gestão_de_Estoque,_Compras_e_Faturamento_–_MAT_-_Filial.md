# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – MAT - Filial 0 não possui estado cadastrado! Não é possível escriturar movimento.

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402269351191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Filial-0-n%C3%A3o-possui-estado-cadastrado-N%C3%A3o-%C3%A9-poss%C3%ADvel-escriturar-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402269351191-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Filial-0-n%C3%A3o-possui-estado-cadastrado-N%C3%A3o-%C3%A9-poss%C3%ADvel-escriturar-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 14 de fevereiro de 2022 às 11:36

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
** Tempo aproximado para leitura: **00:02:00min**

**Ocorrência**

Ao escriturar NF sistema apresenta a seguinte mensagem:

**\=========================================================
Escrituração
Total de Movimentos Selecionados: 1
Total de Lançamentos Gerados: 0
Total de Erros Encontrados: 2
Valor Total de Lançamentos Escriturados: 0,00
\=========================================================**

**\---------------------------------------------------------------------------------
Erros ao Validar Movimentos**

**Movimento Inconsistente:
Id Mov: xxxx
Número: xxxxxxx
Data Mov: xx/xx/xxxx
Série: x
Tipo de Movimento: 3.x.xx
Filial: 1
Erro: Filial 0 não possui estado cadastrado! Não é possível escriturar movimento.

****Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões. 

**Solução
**Quando utilizado movimento do tipo 3.X.XX, o **Emitente/Destinatário** da NF devem ser **Empresa/Empresa**.

Sendo assim, é necessários que acesse **Parâmetros | Gestão de Estoque, Compras e Faturamento | acesse o tipo de movimento desejado, etapa Mov – Emitente/Destinatário 1/2:**

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4402269157271/mceclip0.png)

Caso encontre dificuldades para localizar o tipo de movimento [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento).
