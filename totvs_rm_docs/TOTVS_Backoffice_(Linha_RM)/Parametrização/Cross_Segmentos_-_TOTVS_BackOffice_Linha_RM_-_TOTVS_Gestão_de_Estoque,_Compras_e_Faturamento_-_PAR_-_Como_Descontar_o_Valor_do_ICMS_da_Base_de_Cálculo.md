# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PAR - Como Descontar o Valor do ICMS da Base de Cálculo das Contribuições Sociais

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402705309335-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Descontar-o-Valor-do-ICMS-da-Base-de-C%C3%A1lculo-das-Contribui%C3%A7%C3%B5es-Sociais](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4402705309335-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PAR-Como-Descontar-o-Valor-do-ICMS-da-Base-de-C%C3%A1lculo-das-Contribui%C3%A7%C3%B5es-Sociais)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 4 de novembro de 2025 às 18:12

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/22027454984215)
 Tempo aproximado para leitura: 00:02:00 min** 

**Dúvida**Como descontar o valor do ICMS da base de cálculo das contribuições PIS e COFINS?

**Ambiente**Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

**Solução**

Para abater o valor do ICMS da base de cálculo das contribuições PIS/COFINS e demais tributos conforme regra de negócio é necessário acessar os parâmetros do tipo de movimento, etapa Fis - Tributação Item, editar a fórmula de base de cálculo do PIS e COFINS e subtrair o ICMS usando a função LVL('ICMS').

**Exemplo:**
(KQT \* KPU) - LVL('ICMS')

Onde:
KQT = Quantidade do item
KPU = Preço Unitário do item
LVL('ICMS') = Valor do tributo especificado para o item do movimento.

**Importante:**

A partir da versão 12.1.31.200 o sistema irá seguir a seguinte sequência de cálculo para definir os valores de integração fiscal do movimento:

1º ICMS
2º ICMS ST
3º DIFAL
4º Simples Nacional
5º PIS/Pasep
6º COFINS
7º PIS Importação
8º COFINS Importação

Os tributos abaixo seguirão a ordem que for definida na parametrização do movimento, etapa Fis - Tributação - Item:
ISS
IRRF
IRPJ
CSLL
INSS

Em versões anteriores a 12.1.31.200, para que o cálculo seja feito corretamente é necessário que o tributo ICMS esteja parametrizado antes do PIS e COFINS, conforme exemplo abaixo:

![mceclip2.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4402697174167)

Exemplo de tributação do item de movimento:

![mceclip3.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4402697198103)
