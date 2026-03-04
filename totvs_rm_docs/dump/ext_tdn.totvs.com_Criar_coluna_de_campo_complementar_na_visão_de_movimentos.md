# Criar coluna de campo complementar na visão de movimentos - TOTVS Gestão de Estoque, Compras e Faturamento

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=196811606](https://tdn.totvs.com/pages/releaseview.action?pageId=196811606)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Linha**

RM

**Produto**

TOTVS Gestão de Estoque, Compra e Faturamento

**Versões**

A partir da 11.40

**Processo**

Fórmula visual

**Subprocesso**

Criar coluna de campo complementar na visão de movimentos

**Data da publicação**

04/08/2015



-   ***Como Fazer***

Como parametrizar para o sistema retornar um campo complementar de movimento na visão dos registros



-   ***Descrição do Processo***

Criar uma coluna na visão de movimentos para retornar o conteúdo de um campo complementar



-   -   ***Parametrizações Necessárias***



1 - Criação de Consulta SQL que retorne o campo

\- Acessar o menu **| Utilitários | Consulta SQL |** **Incluir |** e cadastrar a Consulta SQL que será considerada quando a Fórmula visual for executada:



Ex.:

**SELECT** REAL
**FROM** ***TMOVCOMPL** (**NOLOCK**)
***WHERE** TMOVCOMPL.CODCOLIGADA = :CODCOLIGADA
**AND** TMOVCOMPL.IDMOV = :IDMOV

2 - Importação e Alteração da fórmula visual

\- Acessar o Menu | Gestão | Fórmula visual | Fórmula visual
\- Processos | Importação de Fórmula Visual
\- Adicionar Objetos | inserir o Objeto Gerencial ([arquivo disponibilizado](/download/attachments/196811606/Campo%20complementar%20na%20vis%C3%A3o%20de%20Movimento.zip?version=1&modificationDate=1529591129000&api=v2))
\- Acessar a Guia | Parâmetros | inserir uma Categoria da Fórmula Visual
\- Marcar a opção "Importar Gatilho" | Executar
\- Após o fim do processo, dê um duplo clique na fórmula para abrir a edição do workflow

3 - Alterar o nome da Coluna que será apresentada na visão

\- Clicar na atividade "rmsCreateColumnActivity1" | Clicar na aba "Propriedades"
\- Alterar a propriedade "Nome da Coluna" para o valor desejado
\- Alterar a propriedade "Tipo" para o tipo de retorno esperado no campo (String, Decimal, Inteiro, etc...)

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/196811606/image2018-6-21_11-9-27.png?version=1&modificationDate=1529590167000&api=v2)

4 - Alterar a consulta sql utilizada para retornar o campo

\- Clicar com o botão direito do mouse sobre a atividade "rmsConsSQLActivity1" | opção "Selecionar Consulta SQL", pesquise e selecione a consulta criada no passo 1.
\- Nos parâmetros que serão habilitados na aba propriedades, passe os valores:

CODCOLIGADA:   **Activity=rmsForEachActivity1, Path=Fields\["CODCOLIGADA"\].AsShort
**IDMOV:    **Activity=rmsForEachActivity1, Path=Fields\["IDMOV"\].AsInteger**

**
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/196811606/image2018-6-21_11-1-52.png?version=1&modificationDate=1529589712000&api=v2)

**

5 - Alterar o campo a ser apresentado e a coluna da visão criada

\- Clicar na atividade "rmsExpressionActivity1" | Clicar na aba "Propriedades"
\- Altear a propriedade "Expressões" para que retorne a coluna da consulta SQL
\- Alterar a propriedade "Valor Calculado" substituindo o texto "COLUNAVISAO" pelo nome da coluna dado no passo 3

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/196811606/image2018-6-21_11-16-27.png?version=1&modificationDate=1529590587000&api=v2)

6 - Salvar a Fórmula Visual.

7 - Associação da Fórmula à Visão do movimento

\- Acessar o Menu de movimentos
\- Clique em Processos | Fórmula visual  | Gerenciar
\- Selecionar o Gatilho Após a Leitura da Visão  |  Clique no ícone  "Gatilhos - Adicionar Fórmula Visual"  |  Selecionar a Fórmula Visual Criada

*Obs.: Se durante a importação selecionar a opção "Importar Gatilho" esta opção será automaticamente preenchida*

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/196811606/image2018-6-21_11-20-12.png?version=1&modificationDate=1529590812000&api=v2)



8 - Feche a visão do movimento e abra-a novamente

\- Selecionar o botão Configurar Colunas na visão de movimento | Selecionar a coluna criada para o campo complementar.



Com essas parametrizações, a Coluna referente ao Campo Complementar do Movimento estará disponível na visão de movimentos, onde será possível visualizar o conteúdo informado dentro do movimento gravado.



Para maiores informações:



 **[
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/61934230/image2013-6-10%2015%3A3%3A33.png?version=1&modificationDate=1370887580000&api=v2)
](https://www.byyou.com/static/resources/hotsite/index.html) COMUNIDADE  **[R@Materiais e Finanças](https://totvs.byyou.com/?space=rmateriais)****

**Canais de Atendimento:
**

**Chamado:** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015
