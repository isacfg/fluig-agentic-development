# Impressão

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938010](https://tdn.totvs.com/pages/releaseview.action?pageId=423938010)
> **Domínio:** TDN (TOTVS Developer Network)

---

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938010/image_preview.png?version=1&modificationDate=1551273207953&api=v2)
Impressão 1/2**

**Formato do Relatório:** Informe qual será o relatório default para Imprimir Movimentos, do tipo Genérico,Tipo Fatura ou Tipo Duplicata.

**Formato de Relatório .Net:** Informe qual será o relatório .Net default para Imprimir Movimentos, do tipo Genérico, Tipo Fatura ou Tipo Duplicata.

**Ao Cadastrar o Movimento:**

-   Não imprime: O relatório não será impresso no momento da inclusão de movimento.
-   Imprime Automático com edição: O relatório será impresso no momento da inclusão do movimento e será possível mudar o formato do relatório escolhido como default.
-   Imprime Automático sem edição: O relatório será impresso no formato default indicado no campo anterior e não poderá alterar o formato. Ao selecionar essa opção, será visualizado somente o relatório informado no campo 'Do Movimento', não sendo possível alterar o relatório para impressão.
-   Imprime manual sem edição: Habilita o botão de impressão de relatório, mas não abre a janela de impressão no movimento no momento do faturamento.
-   Imprime manual com edição: Habilita o botão de impressão de relatório, permitindo a seleção de relatório para impressão.

***Observações**:* Ao imprimir o movimento pela visão, será possível selecionar o relatório se o parâmetro para impressão de movimentos, duplicatas ou faturas possibilitar a seleção dos relatórios. A impressão dos relatórios através da visão dos movimentos somente poderá ser efetuada se o usuário possuir permissão de impressão no movimento e se o parâmetro de impressão do movimento estiver marcado como "Imprime Automático com Edição" ou "Imprime Automático sem Edição". Para imprimir movimentos pela visão usando um relatório .Net, o campo Gerado .Net deve estar marcado.

**
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/423938010/image_preview.png?version=1&modificationDate=1551273207953&api=v2)
Impressão 2/2**

**Imprime Boleto:** Este campo só estará habilitado se os movimentos deste tipo geram lançamentos para o TOTVS Gestão Financeira, ou seja, se na pasta Faturamento, o campo "fatura o movimento" estiver marcado. Deste modo, ao imprimir um documento de um movimento, se estes parâmetros estiverem habilitados, e no layout do documento tiver também o layout do boleto, este será impresso juntamente com a nota fiscal. Portanto, para imprimir o boleto é necessário que o layout esteja montado e a habilitação deste campo tem como maior finalidade o incremento do campo "nosso número" e a criação do código de barras e do IPTE para emissão, a emissão poderá ser feita também sem vínculo com a nota fiscal. Se existir o layout montado no gerador, este deverá ser do tipo Documento e não será impresso após a inclusão do movimento, só selecionando o movimento e imprimindo pela visão.
***Observações**:*Para imprimir boletos de cobrança para um determinado banco, siga os seguintes passos:

-   Parâmetro Imprime Boleto deve estar habilitado;
-   Deve existir pelo menos uma remessa de cobrança para o banco em questão, gerada através do Fluxus;
-   Deve existir um layout pré-determinado com a nota e os boletos a serem impressos;
-   Todos os lançamentos devem ser gerados para o banco em questão. Para que um lançamento de um cliente possa ser gerado para um determinado banco, devem-se preencher os campos Banco de Cobrança e Carteira, no cadastro de clientes/fornecedores do TOTVS Gestão Financeira, bem como o campo Comando Inclusão de Cobrança referente ao banco, no cadastro de Dados de Retorno do banco, também no TOTVS Gestão Financeira.
-   Na composição do código de barras o valor utilizado será definido a partir do que foi setado no TOTVS Gestão Financeira no Cadastro de Bancos/Layouts campo "valor original". As opções para este campo são: Valor Líquido (o sistema irá utilizar o valor líquido do lançamento); Valor Original (o sistema irá utilizar o valor original do lançamento. Por default este campo virá preenchido com o Valor Original do lançamento).

**Gerar Índice para NCM na impressão da Nota:** No caso de produtos com NCM's iguais vai ser gerado um índice no momento da impressão, cada índice corresponderá a um NCM.

**Envia e-mail:**

-   Marcando este parâmetro, aparecerá um botão de envio de e-mail na visão de movimento.
-   Encontraremos os relatórios de envio de e-mail: E-mail Movimento, Venda e Compra.
-   Os e-mails enviados pelo módulo de cotação (Envio de e-mail de ordem de compra) "enxergam" os relatórios do tipo: E-mail de Movimento e E-mail de Compra.
-   E-mails enviados pelo movimento "enxergam" relatórios do tipo: E-mail Movimento e E-mail Compra se movimento for de compra e e-mail movimento e e-mail venda se movimento for de venda.

**Usar contato do fornecedor no envio de e-mail:** Com esse parâmetro selecionado, o envio de e-mail será encaminhado para Fornecedor e para os contatos deste.
***Observação**:* Ao enviar o e-mail, será apresentada uma janela onde poderá informar para quais contatos serão encaminhado o e-mail.

**Renumeração na Impressão:**

-   Não Permitir: Para que no momento da impressão não seja permitido a alteração do número do documento.
-   Permitir: No momento da impressão do documento será permitido a alteração do número e série.
-   Permitir sem alterar a série: Será permitida a alteração do número, porém, não será da série do documento.

**Impressão de documentos fora de ordem:**

-   Avisar: Avisa o usuário que os movimentos estão fora de ordem e o usuário irá decidir se continua ou não a impressão.
-   Bloquear: Bloqueia caso a numeração esteja fora de ordem e aborta a impressão.
-   Não bloquear: imprime mesmo fora de ordem.
