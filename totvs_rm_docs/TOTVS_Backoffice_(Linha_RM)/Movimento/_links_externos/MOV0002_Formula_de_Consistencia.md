# MOV0002_Formula_de_Consistencia

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/MOV0002_Formula_de_Consistencia](https://tdn.totvs.com/display/public/LRM/MOV0002_Formula_de_Consistencia)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

Todas

**Ocorrência:**

Consistência de Movimento

**Ambiente:**

Criação de Movimentos

**Passo a passo:**

# Objetivo

Este documento tem como finalidade ensinar aos usuários administrados do sistema como criar uma Fórmula de Consistência para validar determinadas informações no momento de salvar um movimento.

# Passo a Passo

Fórmula Exemplo:

SE USUARIOCORRENTE <> 'mestre'

ENTAO 'Usuário não está autorizado a incluir esse movimento!'

SENAO

SE TABMOVRELACPED ('CODTMV' , 'S') <> '1.1.04' OU TABMOV ('STSCOMPRAS' , 'S') <> 'G'

ENTAO 'Esse movimento só pode ser incluido através do faturamento do movimento 1.1.04 ou gerado pelo processo de Cotação.'

SENAO 1

FIMSE

FIMSE

-   [Consistência 1](#)
-   [Consistência 2](#)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/268572429/image2016-10-24%2017%3A28%3A3.png?version=1&modificationDate=1477342344000&api=v2)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/268572429/image2016-10-24%2017%3A30%3A25.png?version=1&modificationDate=1477342344000&api=v2)

Observações

-   Fórmulas de Consistências podem ser utilizadas tanto para Movimento quanto para Item;
-   A execução da Fórmula de Consistência quando vinculada ao item, somente é executada quando o movimento é salvo;
-   Fórmulas de Consistências de Movimento, devem utilizar funções de fórmula referentes a movimento. Exemplo (TABMOVRELACPED, TABMOV)
-   Fórmulas de Consistências de Item de Movimento, devem utilizar funções de fórmula referentes a Item. Exemplo (TABITMRELACPED, TABITM).

**Observações:**

Para mais informações:



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)

**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
