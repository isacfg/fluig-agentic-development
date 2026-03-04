# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Código do Patrimônio dos Itens deve estar preenchido para Naturezas referentes ao Ativo Imobilizado

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360020717612-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3digo-do-Patrim%C3%B4nio-dos-Itens-deve-estar-preenchido-para-Naturezas-referentes-ao-Ativo-Imobilizado](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360020717612-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-C%C3%B3digo-do-Patrim%C3%B4nio-dos-Itens-deve-estar-preenchido-para-Naturezas-referentes-ao-Ativo-Imobilizado)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 21 de julho de 2022 às 17:58

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: 00:02:00 min.**

**Ocorrência**No módulo **Gestão de Estoque, Compras e Faturamento**, ao tentar realizar **Escrituração de lançamentos**  é apresentada a mensagem:

*"Erro na inclusão de Registro:*
*Documento xxxxxx - Serie X - Data xx/xx/xxxx - Parcela 1 - Item xxx.xx.xxxx:*
*Código do Patrimônio dos Itens deve estar preenchido para Natureza referentes ao Ativo Imobilizado.*

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**Este incidente ocorre, pois sua CFOP esta configurada como "Ativo Imobilizado" e o item de movimento não foi integrado ao **Gestão Patrimonial** (entrada) ou não tem a localização do bem informado (saída).

**Solução**Para solucionar esta ocorrência, realize os seguintes passos:

1\. Confirme que o Tipo de Movimento que está sendo escriturado esteja parametrizado para utilizar integração com Gestão Patrimonial (Etapa **Patrimônio**);
2\. Caso seja um movimento de saída, deve estar informado nele a localização do bem (aba **Integração - Patrimônio**);
3\. Se for um movimento de entrada, ele deverá ser integrado via Gestão patrimonial para que o código do bem seja gerado;

**Informações adicionais:**
Caso a empresa não possua integração com o TOTVS Gestão Patrimonial (RM Bonum), então **Não** deve-se configurar a CFOP como Ativo Imobilizado. Assim, se faz necessário desmarcar a flag existente no cadastro de CFOP (**aba Outros Dados campo Tipo de operação**), que o caracteriza desta maneira, pois esta configuração tem por objetivo efetuar o controle do **CIAP**, onde para a empresa que não realiza este controle via ERP da TOTVS não terá esta informação como obrigatória tornando a flag desnecessária.

Caso a empresa precise controlar CIAP via ERP da TOTVS, então deverá implementar a integração com o Gestão Patrimonial.

**Atenção:**
O serviço de escrituração migrada irá inserir o lançamento fiscal da mesma forma que seria inserido manualmente no TOTVS Gestão Fiscal. Sendo assim, a CFOP de ativo imobilizado exige que a localização (código) do bem seja informada para salvar o registro.

**Saiba mais**
Para mais informações sobre a Escrituração Migrada, [clique aqui](http://tdn.totvs.com/pages/viewpage.action?pageId=144408904). [](http://tdn.totvs.com/pages/viewpage.action?pageId=144408904)
