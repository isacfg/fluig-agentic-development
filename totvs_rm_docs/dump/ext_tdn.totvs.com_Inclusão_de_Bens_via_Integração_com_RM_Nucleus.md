# Inclusão de Bens via Integração com RM Nucleus

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=4811188](https://tdn.totvs.com/pages/releaseview.action?pageId=4811188)
> **Domínio:** TDN (TOTVS Developer Network)

---





FAQ: **Inclusão de Bens via Integração com RM Nucleus**

Produto:

Unspecified

Ambiente:

Unspecified

Versão:

11.0.0

Solução

  **Introdução**

 Este módulo permite realizar a integração dos bens cadastrados no RM NUCLEUS com o RM BONUM.

  **Pré-requisitos:**

Para que o processo de integração seja executado corretamente, no TOTVS Gestão de Estoques, Compras e Faturamento (RM Nucleus), algumas informações devem estar previamente parametrizadas:

\- Nos parâmetros do Tipo de Movimento utilizado nas aquisições de Ativo Imobilizado, os campos da **Etapa – Patrimônio**, devem está corretamente preenchidos.

[
![clip_image004](https://lh3.ggpht.com/_G7KXZLoZDsY/TNK8JzYBd-I/AAAAAAAACqY/ZhyJyHdjnMg/clip_image004_thumb%5B1%5D.jpg?imgmax=800)
](https://lh6.ggpht.com/_G7KXZLoZDsY/TNK8JUa21YI/AAAAAAAACqU/SFbL3Fn-Q4s/s1600-h/clip_image004%5B4%5D.jpg)

\- No Cadastro do Produto verificar o preenchimento dos campos: Grupo de Contas e o Grupo de Bens como mostra a imagem abaixo:

[
![clip_image006](https://lh5.ggpht.com/_G7KXZLoZDsY/TNK8LNTW1jI/AAAAAAAACqg/gx1mjmb4O9s/clip_image006_thumb%5B1%5D.jpg?imgmax=800)
](https://lh6.ggpht.com/_G7KXZLoZDsY/TNK8K5ncoTI/AAAAAAAACqc/JZBE78fZ-4I/s1600-h/clip_image006%5B4%5D.jpg)

 **Desenvolvimento/Procedimento**

 Para realizar a integração do BONUM com o NUCLEUS, acessar o menu Utilitários/Integrações de Sistemas/ Integração com o RM Nucleus.

**\- Primeiramente será apresentada a tela abaixo de Opções de Seleção:**

[
![clip_image002](https://lh5.ggpht.com/_G7KXZLoZDsY/TNK8MLCO8dI/AAAAAAAACq4/-6EleAQGUQI/clip_image002_thumb%5B2%5D.jpg?imgmax=800)
](https://lh5.ggpht.com/_G7KXZLoZDsY/TNK8LjTwlpI/AAAAAAAACqw/U_LD8GPC1G4/s1600-h/clip_image002%5B5%5D.jpg)

Nesta aba serão definidas quais informações servirão como filtro para processo de integração, tais como, **Data Inicial** e **Final da Nota**. Ou seja, o intervalo de data das notas, ou uma data apenas se preferir, neste ultimo caso repetir a data nos dois campos.

O **Número Inicial** e **Final da Nota**. Ou seja, intervalo de notas ou com uma nota apenas se preferir, no ultimo caso repetir a nota nos dois campos.

O sistema permite também selecionar **Filiais,** cujos dados serão apresentados.

O **Fornecedor** que deseja buscar as informações e o **Tipo de Movimento** que permite determinar apenas os tipos de movimentos que são referentes à integração do RM Nucleus com o RM Bonum.

**\- Na segunda aba do processo de integração como RM Nucleus são definidas as Opções de Integração de acordo com a necessidade de cada empresa. Como:**

Incluir bem mantendo as quantidades informadas no Item do movimento

Ativando esta opção ao realizar a integração com o RM Nucleus o sistema manterá os bens agrupados, realizando apenas um único cadastro para o bem no RM Bonum. Os bens gerados no RM Bonum terão a quantidade exatamente igual à quantidade informada para o item na nota fiscal.

Emitir mensagem a cada nota do modo de inclusão dos bens

Esta opção permite que você faça a integração de parte dos bens utilizando a opção acima e outra parte sem utilizar. Para isto marque esta opção e ao fazer a integração o sistema te perguntará a cada nota, se você quer alterar o modo de integração escolhido no item anterior a este.

Gerar código do bem e do patrimônio automaticamente

Marcando esta opção o sistema irá gerar o código de patrimônio e o código do bem automaticamente respeitando sempre o grupo Default cadastrado no Grupo de Contas do bem, caso contrário você deverá informar um código de patrimônio e um código de bem para todos os bens que forem integrados. Neste último caso, o sistema abrirá uma janela com dois campos para você informar os códigos onde você verá as iniciais do grupo a que o bem pertence.

Considera a falta do grupo de contas como erro

Esta opção funciona como uma segurança para você realizar sua integração sem erros. Ao marcá-la o sistema irá conferir se todos os produtos da nota fiscal que você está integrando estão com seus grupos de contas cadastrados.

Não integrar bem com o valor mínimo exigido por lei(394,13 UFIR’s)

Habilitando esta opção, os bens que se enquadram neste valor, serão descartados do processo de integração.

Gerar o código do bem a partir do grupo de bens definido no produto

Com esta opção o RM Bonum vai pegar o default de Grupo de bens direto do Cadastro/ Produto/ Outros Dados(Nucleus) e não mais o default informado em "Cadastros Grupo de Contas Contábeis" do RM Bonum.

**\- Na terceira aba serão informados os tipos de campos, para data, valor e descrição do bem.**

**Tipo de data:** pode ser de acordo com a data de emissão da nota ou a data de saída da nota.

**Tipo de valor:** pode ser definido pelo preço unitário, valor unitário, valor financeiro ou pela fórmula valor.

**Descrição do bem:** poderá ser definida de acordo com o Nome Fantasia do Produto, pela Descrição do Produto, Histórico do Item, Nome Fantasia do Produto + Histórico do Item ou pela Descrição do Produto + Histórico do Item.

**\- Na ultima aba, serão informados outros dados necessário para o processo de integração:**

Trazer o centro de custo do item de movimento para o bem

Para que estes dados sejam trazidos o Tipo de Movimento no RM Nucleus deve ser parametrizado da seguinte forma.

Em OPÇÕES/ PARÂMETROS/ TIPOS DE MOVIMENTO, na pasta TABELA, no campo EDITAR CENTRO DE CUSTO, escolha a opção EDITA. Logo em baixo informe um Centro de Custo Default, que será usado em todos os bens integrados, ou marque a opção COPIAR DO MOVIMENTO.

Trazer o tipo do documento para o bem

Obs.: Para que estes dados sejam trazidos o Tipo de Movimento no RM Nucleus deve ser parametrizado da seguinte forma.

Em OPÇÕES/ PARÂMETROS/ TIPOS DE MOVIMENTO, na pasta IDENTIFICAÇÃO, na subpasta DADOS FISCAIS, no campo ESCRITURAÇÃO FISCAL / CÓD. DOC. FISCAL - informe o n.º do código do modelo do documento fiscal que você desejará utilizar na integração. O código que você escolher estará amarrado a um código de documento fiscal que será utilizado no campo tipo de documento do cadastro de bens do RM Bonum.

Trazer o rateio do centro de custo do item de movimento para o rateio gerencial

Ao marcar esta opção, o sistema irá trazer a conta gerencial amarrada ao centro de custo do item de movimento, que está no RM Nucleus, para a pasta de Contas, no campo Rateio Gerencial, no cadastro do bem do RM Bonum.

Adicionar histórico do item no campo observação do bem

Se a habilitado o valor do campo histórico do movimento será copiado para campo observação do bem.

Trazer o departamento do item de movimento para o bem

Ao marcar esta opção, o sistema irá trazer o departamento do item de movimento, que está no RM Nucleus, sendo inserido no campo departamento do bem.
