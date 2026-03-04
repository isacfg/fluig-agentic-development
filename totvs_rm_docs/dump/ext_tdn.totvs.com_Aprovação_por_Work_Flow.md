# Aprovação por Work Flow

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938301](https://tdn.totvs.com/pages/releaseview.action?pageId=423938301)
> **Domínio:** TDN (TOTVS Developer Network)

---

A integração entre o TOTVS Gestão de Estoque, Compras e Faturamento e o TOTVS Gestão de Relacionamento com Clientes consiste em ter uma aprovação de movimentos, cotações por fluxo de trabalho. No momento que o movimento está sendo criado, um atendimento é inserido no TOTVS Gestão de Relacionamento com Clientes, e até que o mesmo seja concluído ou cancelado, o movimento não estará apto para o faturamento.
***Observação**:* Disponibilizado no TOTVS Gestão de Relacionamento com Clientes dois serviços do TOTVS Gestão de Estoque, Compras e Faturamento que poderão ser executados assim que um atendimento vinculado a um movimento do TOTVS Gestão de Estoque, Compras e Faturamento seja encaminhado para uma determinada etapa configurado pelo usuário. Os serviços disponibilizados são:

1.  Faturamento automático do movimento caso o atendimento no TOTVS Gestão de Relacionamento com Clientes seja "Aprovado"
2.  Cancelamento do movimento caso o atendimento no TOTVS Gestão de Relacionamento com Clientes seja "Desaprovado"

Na visão de movimentos o sistema disponibiliza ícones que proporcionam o filtro de movimentos "Aprovados", "Não Aprovados" e "Em processo de aprovação" de Work Flow

***********
![Imagem relacionada](https://upload.wikimedia.org/wikipedia/commons/e/eb/Blue_check.svg)
*********Parametrização**

Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | editar o tipo de movimento | Etapa 73 - WorkFlow:
**Coligada do Atendimento:** Informe a coligada onde o respectivo atendimento será gerado.
**Grupo de Atendimento*:*** Informe o Grupo de Atendimento  que fará parte do movimento de aprovação por Work Flow.
**Tipo de Atendimento:** Informe o Tipo de Atendimento que fará parte deste movimento de aprovação por Work Flow.
**Classificação*:*** Informe a Classificação que fará parte deste movimento de aprovação por Work Flow
**Prioridade***:* Informe a Prioridade que fará parte deste movimento de aprovação por Work Flow.
***Observações**:*

-   É possível o Faturamento/Cancelamento automáticos de Movimentos relacionados a Atendimentos do processo de Aprovação por WorkFlow diretamente no TOTVS Gestão de Relacionamento com o Cliente. Desta forma, o processo torna-se autônomo e transparente ao Usuário 'aprovador', agilizando os processos e aumentando a eficiência rotina de Aprovação.
-   Para o correto funcionamento, existem parametrizações a serem feitas no sistema TOTVS Gestão de Relacionamento com os Clientes. Para isto, deve ser consultado o documento 'Como Fazer' desta rotina para orientações de parametrizações dos sistemas para o devido funcionamento.

-   O processo de Aprovação por Work Flow na visão de movimentos gera o atendimento quando não existe atendimento gerado ou quando o atendimento não está em Work Flow (HATENDIMENTOBASE.CODSTATUS = 'A'). Caso o Atendimento gerado na inclusão do movimento tenha seu status alterado para Cancelado(C) ou Aprovado (F) no TOTVS Gestão de Relacionamento com Clientes, ao executar o processo de aprovação por Wor Flow será gerado novo atendimento. 



Informações Adicionais

[Aprovação de Movimentos Através do Work Flow](https://tdn.totvs.com/pages/viewpage.action?pageId=4813523)
