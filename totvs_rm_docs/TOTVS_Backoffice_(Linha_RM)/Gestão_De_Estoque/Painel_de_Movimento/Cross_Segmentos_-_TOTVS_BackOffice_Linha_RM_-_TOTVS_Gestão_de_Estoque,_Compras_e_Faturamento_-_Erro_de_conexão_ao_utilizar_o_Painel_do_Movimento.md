# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Erro de conexão ao utilizar o Painel do Movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/21122007971479-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Erro-de-conex%C3%A3o-ao-utilizar-o-Painel-do-Movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/21122007971479-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Erro-de-conex%C3%A3o-ao-utilizar-o-Painel-do-Movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Estoque > Painel de Movimento
> **Data:** 9 de abril de 2025 às 15:53

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/21121991352343)
 Tempo aproximado para leitura: 00:02:00 min**

**Ocorrência**

Na Tentativa de utilizar o Painel de Movimentos uma tela de falha de conexão é Demonstrada.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/21122007969303)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da 12.1.2209

**Causa**
1 - Falta de Configuração da API.
2 - Os Hosts do Sistema não foram executados como administrador.

**Solução**

1 - Para exposição dos Webservices do sistema são necessárias as validações da documentação abaixo:
[O que é e como configurar a HttpPort e ApiPort.](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360044519633-Cross-Segmentos-Backoffice-RM-Integra%C3%A7%C3%A3o-O-que-%C3%A9-e-como-configurar-a-HttpPort-e-ApiPort-?source=search)

Após as configurações acima o Painel será habilitado para utilização.

2 - Os hosts devem ser iniciados como administrador e os Host Services também sendo algumas vezes necessárias a vinculação de um usuário do sistema operacional administrador da rede aos serviços dos hosts RM Conforme o Print abaixo:


![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/21122007969559)
