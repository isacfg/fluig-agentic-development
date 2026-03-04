# Cópia de contrato entre coligadas

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=744466761](https://tdn.totvs.com/pages/releaseview.action?pageId=744466761)
> **Domínio:** TDN (TOTVS Developer Network)

---

Importante

Recurso disponível a partir da release 12.1.2306

## **CONTEÚDO**

1.  **Visão Geral**
2.  **Premissas**
3.  **Exemplo de utilização**

## **01. VISÃO GERAL**

O processo de "**Cópia de contrato entre coligadas**" permite que um contrato seja copiado para sua própria coligada ou para outras coligadas. Ao realizar a cópia, um novo contrato será gerado e todos os campos de cadastro serão copiados.

Apesar do nome do processo, o destino é definido por coligada e filial, logo é possível copiar o contrato da coligada: 1, filial: 1 para a coligada: 1, filial: 1, 2, 3 e etc. de uma única vez, assim como para qualquer outra coligada e filial que estejam ativas.

O novo contrato é uma cópia do original e conta apenas com as seguintes diferenças

-   O identificador de contrato que é novo é único por contrato.
-   O nome do contrato recebe o prefixo **<<Cópia>>** para indicar que foi copiado e precisa ser verificado e ter seu nome ajustado.
-   O código do contrato recebe o prefixo "**\# + filial de destino**" 

Após a realização com sucesso da cópia, ao acessar o contrato copiado é feito uma sinalização visual em vermelho, evidenciando os campos que o usuário precisa ajustar manualmente

A cor vermelha é mantida enquanto houver "<<Cópia>>" no nome do contrato e enquanto o código do contrato não for alterado e salvo.

 
![Imagem](https://centraldeatendimento.totvs.com/download/attachments/744466761/image2023-3-17_11-24-6.png?version=1&modificationDate=1679063046463&api=v2)

## **02. PREMISSAS**

**Permissões**:

O processo de "**Cópia de contrato entre coligadas**", conta com recurso de segurança e seu acesso precisa ser liberado através de permissão no perfil associado ao usuário.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/744466761/image-2023-10-31_16-39-10.png?version=1&modificationDate=1698781150397&api=v2)

**IMPORTANTE**: É necessário que o perfil do usuário também tenha permissão para Incluir contrato

## **03. EXEMPLO DE UTILIZAÇÃO**

Após a liberação do processo, selecione os contratos que deseja copiar e acesse o processo. O processo de "**Cópia de contrato entre coligadas**" é acessível no menu de processos da visão dos contratos.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/744466761/image2023-3-17_11-36-2.png?version=1&modificationDate=1679063763263&api=v2)

Os contratos selecionados para cópia são exibidos para verificação

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/744466761/image2023-3-17_11-37-3.png?version=1&modificationDate=1679063823950&api=v2)

Após validar os contratos que se deseja copiar deve-se escolher para quais "coligadas|filiais" a cópia será feita, marque os desejados e clique em OK

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/744466761/image2023-3-17_11-38-5.png?version=1&modificationDate=1679063885447&api=v2)



**ALERTA 01**

Observe o **ALERTA** nessa etapa, a cópia do contrato não verifica se as parametrizações de cada entidade são equivalentes entre a origem e o destino, cabe ao usuário garantir que o novo contrato é compatível com as necessidades da empresa. 

Esse alerta é especialmente importante quando a cópia é feita para coligadas diferentes, no caso de copiar para a mesma coligada apenas os cadastros com controle por filial precisam ser validados.

**Exemplo 01**: Na origem o cliente/fornecedor: C000001 possui o CNPJ: 00.000.000/0000-00 enquanto o cliente/fornecedor C000001 possui o CNPJ: 11.111.111/0001-11. Situação pode ocorrer quando o cliente/fornecedor não é global.

**Exemplo 02**: Na origem a condição de pagamento 001 pode ser "a vista" enquanto 001 no destino é "30/60/90".

**Exemplo 03**: O tipo de movimento da origem 2.2.59 pode estar configurado com regras diferentes do 2.2.59 da coligada de destino. 

**IMPORTANTE:** A cópia é feita com base no código dos cadastros que serão copiados, ou seja, será validado se o código do parâmetro existe no destino e não se representam a mesma entidade.

**Cadastro Global:** Quando o cadastro é global, ambas as coligadas devem estar parametrizadas para utilização do cadastro como global. Caso a coligada de origem esteja global e a coligada de destino não, ou vice e versa, o campo não será copiado, gerando inconsistência na cópia.

**Exemplo:** Na origem, a natureza de orçamento: código: 01, descrição: Teste, não esta parametrizado como global. No destino, a natureza de orçamento código: 01, descrição: Teste, esta parametrizado como Global. Desta forma, o código da coligada na origem é 1 e no destino é 0. Ao realizar a cópia, será apresentado mensagem de erro informando que não existe a natureza orçamentaria no destino, apesar de possuírem o mesmo código. Para gerar a copia, ambas as coligadas devem estar como global ou ambas como não global.

**ALERTA 02**

Os campos complementares associados ao contrato e ao item de contrato devem ser equivalentes inclusive em relação ao tipo e tamanho do campo para que a cópia seja realizada com sucesso!

Após a conclusão do processo será exibido um LOG constando cada contrato copiado com sucesso assim como informação detalha do motivo da falha ao copiar

Se todos foram feitos com sucesso teremos um ícone sinalizando sucesso total da execução do processo.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/744466761/image2023-3-17_12-4-48.png?version=1&modificationDate=1679065489123&api=v2)

Se algum falhou, teremos no log a informação dos realizados com sucesso e os que falharam. Para os que falharam é indicado cada campo que impediu realização da cópia.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/744466761/image2023-3-17_12-7-36.png?version=1&modificationDate=1679065657157&api=v2)



**Exemplo do Log:**

**Em um caso de sucesso, é exibido a origem e o destino da cópia**


\-----------------------------------------------------------------------
Cópia de contrato realizada com sucesso 
    Origem \[Coligada: 1 - Id. Contrato: 2 - Código do contrato: 012021\] 
    Destino \[Coligada: 1 - Filial: 2 - Id. Contrato: 20 - Código do contrato: #1012021\]

**Em caso de falha o LOG vai direcionar os motivos**

**Exemplo 1 -** Neste caso a cópia não foi possível pois no destino o tipo do contrato afeta orçamento, como apenas dados de cadastro são copiados um contrato que depende de orçamento não pode ser copiado.

\-----------------------------------------------------------------------
Falha ao copiar contrato
   Origem \[Coligada: 1 - Id. Contrato: 155 - Código do contrato: 464564\] 
   Destino \[Coligada: 1 -Filial: 1 - Id. Contrato: -1 - Código do contrato: #464564\]

'TCNT.AFETAORCAMENTO - Um contrato com tipo parametrizado para afetar orçamento não pode ser copiado'



**Exemplo 2 -** Neste caso a coligada de destino (7) tem vários campos não configurados, é exibido a informação da **tabela, campo além da descrição e valor**, isso facilita entender o motivo de uma cópia não ser realizada

\-----------------------------------------------------------------------
Falha ao copiar contrato
   Origem \[Coligada: 1 - Id. Contrato: 157 - Código do contrato: 345345\] 
   Destino \[Coligada: 7 - Filial: 1 - Id. Contrato: -1 - Código do contrato: #345345\]

Campo 'TCNT.IDNAT - Id. da natureza fiscal' valor 625 não existe na coligada de destino
Campo 'TCNT.CODCCUSTO - Centro de Custo' valor 01.1 não existe na coligada de destino
Campo 'TCNT.CODTCN - Código do Tipo de Contrato' valor 04 não existe na coligada de destino
Campo 'TCNT.CODVEN - Código do Vendedor' valor 00001 não existe na coligada de destino
Campo 'TCNT.CODVEN3 - CÓDIGO DO FUNCIONÁRIO 3' valor 00003 não existe na coligada de destino
Campo 'TCNT.CODVEN4 - CÓDIGO DO FUNCIONÁRIO 4' valor 00004 não existe na coligada de destino
'TCNT.AFETAORCAMENTO - Um contrato com tipo parametrizado para afetar orçamento não pode ser copiado'

Campo 'TITMCNT.IDNAT - Id. da natureza fiscal' valor 626 não existe na coligada de destino
Campo 'TITMCNT.CODCFO - Código do Cliente' valor C00000 não existe na coligada de destino
Campo 'TITMCNT.CODCFODEST - Código do Destinatário - Cli./Fornecedor' valor C00102 não existe na coligada de destino
Campo 'TITMCNT.CODCCUSTO - Centro de Custo' valor 01.1 não existe na coligada de destino
Campo 'TITMCNT.CODFILIALFAT - Código da Filial para Faturamento' valor 1 não existe na coligada de destino
Campo 'TITMCNT.CODLOCFATURAM - Código Local do Faturamento' valor 01 não existe na coligada de destino
Campo 'TITMCNT.CODTBORCAMENTO - Cód. da Tabela de natureza do Orçamento' valor 001.001 não existe na coligada de destino
Campo 'TITMCNT.CODTMV - Código do Tipo de Movimento' valor 1.2.19 não existe na coligada de destino



**Exemplo 03**

Falha ao copiar contrato
   Origem \[Coligada: 1 - Id. Contrato: 2 - Código do contrato: 012021\] 
   Destino \[Coligada: 2 - Filial: 1 - Id. Contrato: -1 - Código do contrato: #1012021\]

Campo 'TITMCNT.IDPRD - Identificador do Produto' valor 26 não existe na coligada de destino
Campo 'TPRDFIL.IDPRD - Identificador do Produto' valor 26 não existe na coligada de destino



Importante:

-   Campos complementares também são copiados no entanto diferenças de nome e configuração do tipo do campo podem gerar erros ao realizar a cópia, ao copiar entre coligas garanta que os campos complementares são idênticos. 
-   Após a cópia do contrato para a coligada de destino, deverá editar o contrato para acerto do código do contrato, conforme a máscara parametrizada.
-   Após a cópia do contrato para a coligada de destino, deverá editar o nome do contrato.
-   Todos o contrato copiado deverá ser revisado, principalmente quando não se trabalha com cliente\\fornecedor global.
-   Não é possível realizar a cópia de contratos "Cancelados".
