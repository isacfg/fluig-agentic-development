# Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) - MAT - Preenchimento Código de Receita em linha de Tributo

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025848572-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MAT-Preenchimento-C%C3%B3digo-de-Receita-em-linha-de-Tributo](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360025848572-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS-MAT-Preenchimento-C%C3%B3digo-de-Receita-em-linha-de-Tributo)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 30 de agosto de 2021 às 19:03

---

**Dúvida**Qual a regra utilizada e de quais locais o sistema busca o **Código de Receita** dos **Tributos**?

**Ambiente**Cross Segmentos - TOTVS BackOffice (Linha RM) - TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) – A partir da versão 11.22

**Solução**

A partir da versão **12.1.22** o sistema passou a trabalhar com a regra abaixo.
Antes desta versão o sistema seguia regras apenas para preenchimento da informação para o tributo IRRF.
Os demais tributos não possuíam regra própria.

A coluna **Código de Retenção** existente na linha de cada tributo do movimento possui regras específicas para que sejam preenchidas. Segue abaixo as regras existentes para cada tributo. As regras abaixo se referem a utilização dos tributo no item de movimento **Fis - Tributação Item.**

-   **IRRF e IRRF-PJ:**
    -   Caso o Tipo de Movimento se encontre parametrizado para **Buscar Alíquota** em **Natureza**, **Produto**, **Tipo de Movimento**, **Tributo**, **Código de Receita** ou **Serviço**, o sistema seguirá a seguinte ordem de hierarquia:
        1º - Tipo de Movimento; 
        2º - Anexo Clientes/Fornecedores do Produto;
        3º - Produto; 
        4º - Cliente/Fornecedor aba Tributos.
    -   Caso esteja parametrizado para Buscar Alíquota no **Cliente** a regra muda e passa a carregar o Código de Receita informado no Cadastro do Cliente/Fornecedor apenas.
    -   Buscando alíquota em qualquer outra das opções existentes o código não será preenchido na linha do tributo.
-   **CSRF, PIS-RF, COFINS-RF, CSLL\_RF:**
    -   Caso o Tipo de Movimento se encontre parametrizado para **Buscar Alíquota** em **Natureza**, **Produto**, **Tipo de Movimento**, **Tributo**, **Código de Receita** ou **Serviço**, o sistema seguirá a seguinte ordem de hierarquia:
        1º - Tipo de Movimento; 
        2º - Carregar o Código de Receita informado no Anexo **Tributos Default de Fornecedores** no Cadastro do Cliente/Fornecedor (exceto a **COSIRF** este irá buscar sempre o código informado nos parâmetros do Tipo de Movimento).
    -   Caso esteja parametrizado para Buscar Alíquota no Cliente a regra muda e passa a carregar o Código de Receita informado em **Anexos - Tributos Default de Fornecedores** no Cadastro do Cliente/Fornecedor apenas.
    -   Buscando alíquota em qualquer outra das opções existentes o código não será preenchido na linha do tributo.
-   **CPRB:**
    -   Caso o Tipo de Movimento se encontre parametrizado para **Buscar Alíquota** em **Produto** o sistema irá carregar o Código de Receita em **Anexo Tributos do Produto.**
    -   Buscando alíquota em qualquer outra das opções existentes o código não será preenchido na linha do tributo.
-   **INSS:**
    -   Caso o Tipo de Movimento se encontre parametrizado para **Buscar Alíquota** em **Natureza**, **Produto**, **Tipo de Movimento**, **Tributo ou** **Código de Receita,** o sistema seguirá a seguinte ordem de hierarquia:
        1º - Anexo Cliente/Fornecedor do Produto;
        2º - Anexo **Default's de Cli/For** do cadastro do Cliente/Fornecedor.
    -   Caso o Tipo de Movimento se encontre parametrizado para **Buscar Alíquota** em **Serviço**, o sistema seguirá a seguinte ordem de hierarquia:
        1º - Tipo de Movimento;
        2º - Anexo Cliente/Fornecedor do Produto;
        3º - Default de Cli/For do Cadastro do Cliente/Fornecedor.
    -   Caso esteja parametrizado para Buscar Alíquota no Cliente a regra muda e passa a carregar o Código de Receita informado em **Anexos - Tributos Default de Fornecedores** no Cadastro do Cliente/Fornecedor apenas.
    -   Buscando alíquota em qualquer outra das opções existentes o código não será preenchido na linha do tributo.
-   **FUNRURAL:**
    -   Caso o Tipo de Movimento se encontre parametrizado para **Buscar Alíquota** em **Natureza**, **Produto**, **Tipo de Movimento**, **Tributo ou** **Código de Receita,** o sistema seguirá a seguinte ordem de hierarquia:
        1º - Anexo Cliente/Fornecedor do Produto;
        2º - Anexo **Default's de Cli/For** do cadastro do Cliente/Fornecedor.
    -   Caso esteja parametrizado para Buscar Alíquota no Cliente a regra muda e passa a carregar o Código de Receita informado em **Anexos - Tributos Default de Fornecedores** no Cadastro do Cliente/Fornecedor apenas.
    -   Buscando alíquota em qualquer outra das opções existentes o código não será preenchido na linha do tributo.

**Informações Adicionais
**O código que será preenchido na tela do movimento será o Código de receita cadastrado pelo usuário no sistema e não o código de Retenção Oficial da Receita. O código Oficial será considerado apenas para as Rotinas Fiscais para o RM Liber. Caso possua variações de código junto á Receita Federal deverá cadastrar um código para cada variação.

![screenshot_20190401_145508.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025222352/screenshot_20190401_145508.png)

Para o tributo **SENAR** o código de receita informado no movimento ficará em branco mas no momento da escrituração do movimento o lançamento fiscal irá buscar o código de receita existente no cadastro feito em **INSS\\PJ** campo **Código da Receita - SENAR.**

**
![screenshot_20190401_145708.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360025241471/screenshot_20190401_145708.png)
**

Para o tributo **GILRAT** o código de receita não será preenchido pois para as rotinas Fiscais o código a ser considerado para sua apuração será o mesmo código do tributo FUNRURAL.
