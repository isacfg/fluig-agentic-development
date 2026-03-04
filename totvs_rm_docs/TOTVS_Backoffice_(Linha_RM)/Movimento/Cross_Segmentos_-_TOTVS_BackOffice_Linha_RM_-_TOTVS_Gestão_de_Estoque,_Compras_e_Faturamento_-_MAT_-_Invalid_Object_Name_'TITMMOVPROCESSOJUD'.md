# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Invalid Object Name 'TITMMOVPROCESSOJUD'

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360043360933-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Invalid-Object-Name-TITMMOVPROCESSOJUD](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360043360933-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Invalid-Object-Name-TITMMOVPROCESSOJUD)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 18 de janeiro de 2022 às 17:06

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00min**

**Dúvida**Como solucionar o erro **Invalid Object Name 'TITMMOVPROCESSOJUD'** ao salvar movimento.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.25.226.

**Solução**Em Ambiente de Homologação acesse a pasta de instalação do sistema e execute o **RM.Atualizador.exe**, existe um script interno para criação da tabela informada no erro, basta atualizar o sistema com a versão que é exibido em tela, conforme prints abaixo:

![Imagem](https://totvssuporte.zendesk.com/attachments/token/vKhnzMH4AT3v5CVwIxmRqFOoW/?name=inline-1505615802.png)
​

Será exibido uma atualização ao lado esquerdo conforme print abaixo:

![Imagem](https://lh3.googleusercontent.com/-X7zibeHZEGI/XkWTwdO6uqI/AAAAAAAAAHo/Gn3CGRy7v5sceOwFX81FIABdtJaX_65owCK8BGAsYHg/s0/2020-02-13.png)
​

Ao executar o script acima a tabela será criada na base de dados e a mensagem não será exibida novamente.

Feito o procedimento em base de homologação e não tenha apresentado problemas, execute também o script em base de produção.
