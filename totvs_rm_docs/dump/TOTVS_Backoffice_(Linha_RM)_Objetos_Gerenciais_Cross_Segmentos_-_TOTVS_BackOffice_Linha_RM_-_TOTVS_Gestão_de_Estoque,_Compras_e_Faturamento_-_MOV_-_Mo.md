# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Movimento possui vínculo com o Gestão Hospitalar e não pode ser excluído

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539041175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-possui-v%C3%ADnculo-com-o-Gest%C3%A3o-Hospitalar-e-n%C3%A3o-pode-ser-exclu%C3%ADdo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4407539041175-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Movimento-possui-v%C3%ADnculo-com-o-Gest%C3%A3o-Hospitalar-e-n%C3%A3o-pode-ser-exclu%C3%ADdo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Objetos Gerenciais
> **Data:** 9 de abril de 2025 às 16:07

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:02:00 min**

**Ocorrência**

Ao excluir um Movimento é apresentada mensagem:

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4407530877463/mceclip0.png)

**Ambiente**

Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - Todas as versões.

**Solução**

Para verificar se o movimento possui vínculo com o Gestão Hospitalar, execute a consulta abaixo:

SELECT IDMOV FROM SZOPMEPACIENTECAB (NOLOCK) WHERE CODCOLIGADA = **X** AND IDMOV = **Y**

Onde X corresponde a **Coligada** em que o movimento pertence e Y corresponde ao **Identificador do Movimento** a ser excluído.

Caso a sentença retorne resultado, mostra que de fato este movimento possui integração com o Gestão Hospitalar.

Para exclusão do movimento será necessário desfazer esta integração via Gestão Hospitalar.

Esta tabela geralmente é preenchida quando o movimento passa pelo **Anexo |** **Movimento x OPME** e este é vinculado a um registro do Gestão Hospitalar.

**Importante:**

Para maiores informações sobre o desvinculo, será necessário entrar em contato com o suporte do RM Hospitais e Clínicas (Gestão Hospitalar) para que lhe orientem quanto a este processo do registro de **OPME** (Órteses, Próteses e Materiais Especiais).
