# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Tela Branca ao utilizar o Painel do Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/21018257083671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tela-Branca-ao-utilizar-o-Painel-do-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/21018257083671-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Tela-Branca-ao-utilizar-o-Painel-do-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
> **Data:** 5 de fevereiro de 2024 às 12:28

---


![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/21018257057175)
 Tempo aproximado para leitura: **00:02:00 min

****Ocorrência n°1** Na Tentativa de utilizar o Painel de Movimentos uma tela branca é Demonstrada:

![Imagem](https://atendimento.totvs.com/attachments/token/q5QoRHXP34a9Sx4kLlNZQP27C/?name=image001.png)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.2209

**Causa**
1 - Falta de Configuração da API.

2 - Os Hosts do Sistema não foram executados como administrador.

**Solução**

1 - Para exposição dos Webservices do sistema são necessárias as validações da documentação abaixo:
[O que é e como configurar a HttpPort e ApiPort.](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360044519633-Cross-Segmentos-Backoffice-RM-Integra%C3%A7%C3%A3o-O-que-%C3%A9-e-como-configurar-a-HttpPort-e-ApiPort-?source=search)

Após as configurações acima o Painel será habilitado para utilização.
