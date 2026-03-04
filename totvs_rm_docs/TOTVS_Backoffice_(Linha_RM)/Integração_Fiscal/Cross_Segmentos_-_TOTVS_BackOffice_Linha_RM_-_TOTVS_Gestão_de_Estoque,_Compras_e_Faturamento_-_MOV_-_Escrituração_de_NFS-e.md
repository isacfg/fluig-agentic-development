# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Escrituração de NFS-e

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024645292-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Escritura%C3%A7%C3%A3o-de-NFS-e](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360024645292-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Escritura%C3%A7%C3%A3o-de-NFS-e)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 26 de julho de 2022 às 17:08

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00min**

**Ocorrência**Ao escriturar NFS-e sistema apresenta a mensagem abaixo:

Erros ao Validar Movimentos
Erro: Nota Fiscal de Serviços Eletrônica (NFS-e) ainda não foi autorizada pela Prefeitura
OU a NFS-e está Cancelada e o Movimento correspondente ainda não foi Cancelado.

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento- Todas as versões.

**Causa
**Esse incidente pode vir a ocorrer pelos motivos abaixo:

-   NFS-e não foi autorizada pela Prefeitura;
-   NFS-e se encontra cancelada no site da Prefeitura mas o movimento ainda não foi cancelado;
-   Movimento de retorno de RPS se encontra parametrizado para enviar NFS-e.

**Solução**Para solucionar essa ocorrência, realize os seguintes passos:

1.  Caso a NFS-e não esteja autorizada, aguarde sua autorização para que possa ser escriturada;
2.  Caso a NFS-e esteja cancelada mas o movimento correspondente não esteja cancelado, cancele-o para que a nota possa ser escriturada;
3.  Acesse os parâmetros do tipo de movimento de retorno de RPS (2.2.xx) e na etapa **Fis - NFE** selecione a opção **Não integrado** para o campo **NFS-e Municipal (Modelo Nacional)**.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4415217189783/mceclip0.png)

Caso encontre dificuldades para localizar os parâmetros do tipo de movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento?source=search).
