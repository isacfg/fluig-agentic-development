# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Quais variáveis utilizar no Complemento de Histórico do Item de Evento Contábil

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000371488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quais-vari%C3%A1veis-utilizar-no-Complemento-de-Hist%C3%B3rico-do-Item-de-Evento-Cont%C3%A1bil](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000371488-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Quais-vari%C3%A1veis-utilizar-no-Complemento-de-Hist%C3%B3rico-do-Item-de-Evento-Cont%C3%A1bil)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 28 de setembro de 2021 às 17:05

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:03:00 min****Dúvida
**Quais variáveis utilizar no **Complemento de Histórico do Item de Evento Contábil**?

**Ambiente
**Cross Segmentos - TOTVS Backoffice (Linha RM) - TOTVS Gestão de Estoque Compras e Faturamento - A partir da 11.80.

**Solução**
Com o intuito de automatizar o Complemento do Histórico Contábil, o sistema disponibiliza uma lista de campos possíveis de serem utilizados no campo destacado:

![Sem_t_tulo.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360000564747/Sem_t_tulo.png)

Para acessar o campo destacado no print acima, acesse:

1.  Menu Cadastros | Eventos Contábeis;
2.  Marque e edite o Evento Contábil que deseja configurar;
3.  Clique sobre a aba Itens Evento;
4.  Edite a o item de evento que deseja, seja ele de Débito ou Crédito;
5.  Clique sobre a aba Dados Complementares.

Abaixo estão listadas as variáveis disponíveis para utilização no Complemento de Histórico Contábil:

\[CCF\] Código do Cli/For
\[NOM\] Nome fantasia do Cli/For
\[RAZ\] Razão do Cli/For
\[NUM\] Numero do Movimento
\[HIS\] Histórico
\[EMI\] Data de Emissão
\[SAI\] Data de Saída
\[VLL\] Valor Líquido
\[NCF\] Nº do Documento no Cli/For
\[SGN\] Segundo Número
\[REL\] Número do Movimento Relacionado
\[MOV\] Data do Movimento
\[FAN\] Nome Fantasia do Cli/For
\[FU1\] Nome do Funcionário 1
\[OBS\] Observações do Movimento

**Observação:** Ao utilizar a variável **\[REL\]** o histórico irá buscar informações da tabela **TMOV** no campo **IDMOVRELAC**.

![mceclip0.png](https://centraldeatendimento.totvs.com/hc/article_attachments/1500002490842/mceclip0.png)

O movimento relacionado por este campo, será o apresentado no histórico do item de evento quando utilizar a variável em específico.
