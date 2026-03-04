# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Cópia de Contratos Entre Coligadas

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/23376496917527-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-C%C3%B3pia-de-Contratos-Entre-Coligadas](https://centraldeatendimento.totvs.com/hc/pt-br/articles/23376496917527-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-C%C3%B3pia-de-Contratos-Entre-Coligadas)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 20 de fevereiro de 2025 às 17:36

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/23376496890903)
 Tempo aproximado para leitura: **00:02:00 min**

**Dúvida**Como habilitar o processo Cópia de Contratos Entre Coligadas no módulo Gestão de Estoque, Compras e Faturamento?

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 12.1.2306 e superiores.

**Sobre o Processo**

O processo de "**Cópia de contrato entre coligadas**" permite que um contrato seja copiado para sua própria coligada ou para outras coligadas. Ao realizar a cópia, um novo contrato será gerado e todos os campos de cadastro serão copiados.

Apesar do nome do processo, o destino é definido por coligada e filial, logo é possível copiar o contrato da coligada: 1, filial: 1 para a coligada: 1, filial: 1, 2, 3 e etc. de uma única vez, assim como para qualquer outra coligada e filial que estejam ativas.

O novo contrato é uma cópia do original e conta apenas com as seguintes diferenças

-   O identificador de contrato que é novo é único por contrato.
-   O nome do contrato recebe o prefixo **<<Cópia>>** para indicar que foi copiado e precisa ser verificado e ter seu nome ajustado.
-   O código do contrato recebe o prefixo "**\# + filial de destino**" 

Após a realização com sucesso da cópia, ao acessar o contrato copiado é feito uma sinalização visual em vermelho, evidenciando os campos que o usuário precisa ajustar manualmente

A cor vermelha é mantida enquanto houver "<<Cópia>>" no nome do contrato e enquanto o código do contrato não for alterado e salvo

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23376527748375)

**Solução**

Para que o processo seja disponibilizado para execução, acesse:

Módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > Selecione o Perfil associado ao usuário > Acesso a Menus > e habilite a permissão Cópia de contrato entre coligadas:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23376496893975)

Após parametrização, o processo será liberado nos Processos:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/23376496895511)

**OBSERVAÇÃO:**

1.  É necessário que o perfil do usuário também tenha permissão para incluir contrato.
2.  Se o usuário estiver associado em mais de um perfil, todos precisam possuir a mesma permissão para que o processo seja apresentado.

**IMPORTANTE:**

1.  Campos complementares também serão copiados, no entanto diferenças de nome e configuração do tipo do campo podem gerar erros ao realizar a cópia, ao copiar entre coligadas garanta que os campos complementares são idênticos.
2.  Após a cópia do contrato para a coligada de destino, deverá editar o contrato para acerto do código do contrato, conforme a máscara parametrizada.
3.  Após a cópia do contrato para a coligada de destino, deverá editar o nome do contrato.
4.  Todos os contratos copiados deverão ser revisados, principalmente quando não se trabalha com cliente\\fornecedor global.
5.  Não é possível realizar a cópia de contratos "Cancelados"

Para mais informações, acesse:

**[Cópia de contrato entre coligadas](https://tdn.totvs.com/pages/viewpage.action?pageId=744466761)**
