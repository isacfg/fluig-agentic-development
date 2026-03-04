# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Invalid column name ao escriturar movimentos

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003456231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Invalid-column-name-ao-escriturar-movimentos](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003456231-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Invalid-column-name-ao-escriturar-movimentos)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Integração Fiscal
> **Data:** 14 de fevereiro de 2022 às 08:50

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:04:00 min**

**Ocorrência**Ao realizar a Escrituração de Movimento através do TOTVS Gestão de Estoque, Compras e Faturamento o processo é interrompido e apresentado o erro abaixo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360004452312/mceclip0.png)

**Ambiente**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da versão 11.80.

**Causa
**A mensagem de **Invalid column name** ocorre pois o campo destacado entre aspas simples, neste caso denominado como **LOCALMOV** é um campo complementar que foi excluído da base porém permaneceu habilitado em um tipo de movimento.

**Solução**Para poder contornar essa situação deverá primeiramente verificar a existência do campo complementar na base de dados através da consulta abaixo:

\--CAMPO COMPLEMENTAR:
SELECT \* FROM GDEFCOMPL
WHERE APLICACAO = 'T'
AND TABDADOS IN ('TMOVCOMPL', 'TITMMOVCOMPL')
AND NOMECOLUNA = 'LOCALMOV'

Se **não** houver retorno para esta consulta quer dizer que o campo **não existe na base de dados** ou foi **desativado** através da exclusão padrão do RM.

Após esta verificação, deverá verificar se nos parâmetros dos tipos de movimentos, o campo complementar destacado na mensagem está associado. Para esta verificação, deverá executar as duas consultas abaixo:

\--CAMPOS COMPLEMENTARES NO MOVIMENTO:
SELECT CODCOLIGADA, CODTMV, CAMPOSCOMPLMOVVISIVEIS, CAMPOSCOMPLITMMOVVISIVEIS
FROM TTMVEXT
WHERE CAMPOSCOMPLMOVVISIVEIS LIKE '%LOCALMOV%'

Os movimentos apresentados nesta consulta possui o campo complementar “**LOCALMOV**” no movimento e deve ser retirado.

\--CAMPOS COMPLEMENTARES NO ITEM DE MOVIMENTO:
SELECT CODCOLIGADA, CODTMV, CAMPOSCOMPLMOVVISIVEIS, CAMPOSCOMPLITMMOVVISIVEIS
FROM TTMVEXT
WHERE CAMPOSCOMPLITMMOVVISIVEIS LIKE '%LOCALMOV%'

Os movimentos apresentados nesta consulta possui o campo complementar “**LOCALMOV**” no item de movimento e deve ser retirado.

Por tanto, para solução, deverá verificar se o campo foi desativado ou se foi feita exclusão via banco de dados.

No caso de desativação, acesse o menu de **Cadastros** | Opção **Mais**... | Campos Complementares - Escolha entre Movimentos ou Item de Movimento. Ao carregar a tela, veja se existe um registro com a nomenclatura "**LOCALMOV**". Caso sim, basta editar e clicar para Ativar o campo. Após a ativação, nos parâmetros do tipo de movimento na etapa Mov - Campos Complementares ou Item - Campos Complementares, o campo estará disponível da lista de Campos Complementares Visíveis.

No caso de exclusão, ao acessar o menu de Campos Complementares, o campo não estará listado e por tanto podemos concluir que foi feita a intervenção via banco de dados. Com este cenário, a solução a ser aplicada deverá ser através de nova intervenção via banco para retirar da tabela TTMVEXT o campo complementar de visível.

**Importante**

-   O valor **LOCALMOV** deverá ser substituído pelo nome do campo apresentado na mensagem de erro de cada ambiente. Caso tenha mais de um, deverá executar a consulta uma vez para cada campo e substituir os valores;
-   Caso detectado que o campo foi excluído via banco, a empresa será responsável pela criação do script de correção. Também pode ser solicitado à TOTVS, porém, pelo serviço de consultoria.
