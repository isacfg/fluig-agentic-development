# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento  - MAT - Como fazer teste de fórmula

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409688488343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-fazer-teste-de-f%C3%B3rmula](https://centraldeatendimento.totvs.com/hc/pt-br/articles/4409688488343-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Como-fazer-teste-de-f%C3%B3rmula)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 29 de setembro de 2021 às 14:16

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:06:00 min

****Dúvida**
Como testar execução de fórmula e seu resultado?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões

**Solução**
O cadastro de Fórmulas continuará sendo feito como de costume, onde para testá-la o usuário deverá executar os seguintes passos:

**1\. Inclusão de Movimento**Incluir um movimento como feito de costume, lembrando-se sempre de que o movimento a ser testado deve respeitar as configurações que se encaixam no processo a ser executado em questão.

Exemplo: Usuário deseja testar se determinada fórmula utilizada para cálculo de valor Liquido do Movimento está retornando o valor corretamente quando a mesma verifica se existe ou não valor calculado para tributo ICMS. Neste caso o usuário deverá incluir um movimento que esteja parametrizado para informar o tributo ICMS no item de movimento.

**2\. Inclusão de Sentença SQL
**Acessar **Utilitários |** **Consultas SQL** e incluir uma nova consulta buscando o movimento incluso para teste da fórmula informando seu identificador.

**Importante**
Se a fórmula utiliza variáveis de movimento a sentença SQL deverá ser aplicada à tabela TMOV.
Se a fórmula utiliza variáveis de item de movimento a sentença SQL deverá ser aplicada à tabela TITMMOV.

Exemplo: Sentença utilizada para teste da fórmula referente a situação exemplificada anteriormente:

SELECT \* FROM TITMMOV WHERE IDMOV = XXXX

**3\. Testando a fórmula**

Feito a inclusão do movimento e o cadastro da sentença SQL acessar **Cadastros** **| Fórmulas** editar a Fórmula a ser testada, clicar no botão **Contexto:**

**
![Screenshot_25.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409688666391/Screenshot_25.png)
**

**3.1.** Na nova tela exibida selecionar para o campo **Sentença SQL** a sentença cadastrada no passo 2. Será exibido na grid abaixo, os Itens/Movimento, selecionar um dos itens ou o movimento e clicar em OK.

![Screenshot_26.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409688746647/Screenshot_26.png)

**3.2.** Marcar a opção **Acompanhar Execução e salvar no arquivo:**

**
![Screenshot_27.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409694439447/Screenshot_27.png)
**

**3.3.** Clicar no botão **Resultado** será exibido um arquivo .txt onde será possível acompanhar calculo executado pelo sistema através da fórmula testada.

**
![Screenshot_28.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4409688841111/Screenshot_28.png)
**

Para maiores informações sobre como ler o log gerado [clique aqui](https://tdn.totvs.com/pages/viewpage.action?pageId=42043624).
