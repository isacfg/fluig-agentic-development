# MATFATCMPCRM01-2833_DT_Importação_de_NF-e_e_CT-e

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=392500033](https://tdn.totvs.com/pages/releaseview.action?pageId=392500033)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Importação deXML de NF-e e CT-e

## Características do Requisito

**Linha de Produto:**

RM

**Segmento:**

Construção e Projetos

**Módulo:**

**Totvs Gestão de Estoque, Compras*.e Faturamento*.

**Rotina:**

**Rotina**

**Nome Técnico**

*NF-e*

*CT-e*

**NOTA FISCAL ELETRÔNICA**

**CONHECIMENTO DE TRANSPORTE ELETRÔNICO**

**Cadastros Iniciais:**

\-

**Parâmetro(s):**

Parâmetro Financeiros do Tipo de Movimento

**Ponto de Entrada:**

\-

**Tickets relacionados**

MATFATCMPCRM01-2833

**Requisito/S****tory/Issue (informe o requisito relacionado):**

 MATFATCMPCRM01-2833

**País(es):**

Bra.

**Banco(s) de Dados:**

*SQLServer e Oracle.*

**Tabelas Utilizadas:**

TNFEENTRADA

**Sistema(s) Operacional(is):**

\-

**Pacote:**

\-

## Descrição

Implementação da importação de arquivos XML de CT-e e NF-e para inclusão de Movimento.



## Procedimento para Implantação

O sistema é atualizado logo após a aplicação do pacote de atualizações de uma das seguintes versões:

-   12.1.22 ou superiores.



## Procedimento para Utilização

1.  Para parametrizar essa opção, deve acessar o **Totvs Gestão de Estoque, Compras e Faturamento → Ambiente → Gestão de Estoque Compras e Faturamento** e acessar **Integrações → Fiscal → Dados Fiscais → Importação/Envio de Arquivo XML** e marcar a opção **Realizar Importação de XML de NF-e e CT-e** e selecionar a pasta de onde os arquivos serão buscados na opção **Diretório Padrão para Importação dos Arquivos XML**
    ![Imagem](https://centraldeatendimento.totvs.com/download/attachments/392500033/image2018-8-16_19-27-20.png?version=1&modificationDate=1534461481000&api=v2)


-   Os demais procedimentos para inclusão podem ser vistos nos seguintes documentos:
    1.  Para inclusão de NF-e: [TSRMCN ER Inclusão de Movimento através de XML TOTVS Colaboração](/pages/viewpage.action?pageId=224106789)
    2.  Para Inclusão de CT-e: [1277238 MATFATCMPCRM01-1120 DT Recebimento de CT-e através de XML TOTVS Colaboração](/pages/viewpage.action?pageId=322150273)
