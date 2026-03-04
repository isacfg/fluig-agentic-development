# RMPAT00003_Integração com o RM Nucleus

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=144408904](https://tdn.totvs.com/pages/releaseview.action?pageId=144408904)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Produto**

:

TOTVS Gestão Patrimonial – **Versão:** 11.52

**Processo**

:

Integração com o RM Nucleus

**Subprocesso**

:

Integração com o RM Nucleus

**Data da publicação**

:

07/05/2014



**Introdução**

Para realizar a Integração entre o TOTVS Gestão de Estoques, Compras e Faturamento e o TOTVS Gestão Patrimonial é necessário que o TOTVS Gestão de Estoques esteja com seu movimento parametrizado para esta integração, dentre outros cadastrados. Assim o TOTVS Gestão Patrimonial, somente irá buscar estes dados para a criação de Patrimônios no mesmo.



**Procedimento (Parametrização “TOTVS Gestão de Estoques”)**

Deve ser realizado o preenchimento obrigatório dos Grupos de Contas e dos Grupos de Bens no cadastro do Produto.

Disponível em: **Cadastro / Produto / aba Integração**, preencher os campos **Grupo de Contas e Grupo de Bens** (este cadastro já deve ser sido previamente realizado no “TOTVS Gestão Patrimonial”).



A parametrização do movimento não exige que a Fórmula do Bem seja utilizada, porém no momento da Integração dos dados se o usuário marcar a opção “Fórmula no Bem” e a informação não tiver sido referenciado no “TOTVS Gestão de Estoques” o valor será apresentado zerado e a importação não será realizada.

Disponível em: **Cadastro / Fórmula**, e incluir fórmula que será utilizada na composição do valor do bem. É necessário que a mesma possua variáveis de itens, visto que, seu conteúdo será preenchido na tabela **TITMMOV** na inclusão do item de movimento, podendo ser considerado na importação dos dados no TOTVS Gestão Patrimonial.



Após estas configurações iniciais devemos parametrizar o Movimento.

Disponível em: **Opções / Parâmetros / RMNucleus / 04.09 / Avançar**, e editar o tipo de movimento de “entrada” a ser parametrizado para este fim, etapa ‘**Patrimônio**’.



Integrar com RM Bonum: Compra de Imobilizado.



Localização (Compra Ativo Imobilizado): Se desejar informar a localização do Patrimônio deverá preencher com a opção “Edita”, caso contrário, o campo deve ser preenchido como “Não Edita” de forma que o campo não será apresentado na inclusão do item de movimento.



Fórmula valor do bem: Esta informação deve ser preenchida quando o usuário optar em fazer a integração no “TOTVS Gestão Patrimonial” considerando que o valor do Patrimônio no Bonum deve ser o valor de retorno desta fórmula.



**Procedimento (Inclusão do Movimento)**

Inclusão do Movimento seguirá conforme a NF de entrada, entretanto o usuário deve estar atento, pois para que a integração seja realizada, a Data de Emissão da NF deverá compreender o período de Cálculo aberto no TOTVS Gestão Patrimonial.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem1.jpg?version=1&modificationDate=1399475059000&api=v2&effects=drop-shadow)



A quantidade também terá influência no momento da importação.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem2.jpg?version=1&modificationDate=1399475075000&api=v2&effects=drop-shadow)



A Localização poderá ser preenchida na aba Integrações / Patrimonial. 

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem3.jpg?version=1&modificationDate=1399475090000&api=v2&effects=drop-shadow)



**Procedimento (Bonum - Integração com o RM Nucleus)**

A integração é feita através do módulo TOTVS Gestão Patrimonial.

Disponível no menu: **Utilitários / Integrações de sistemas / Integração com o RM Nucleus / Integrar aquisições Compras.**

Deve – se atentar pois somente serão apresentadas as NF que estiverem com a data compreendida no mês/ano de Cálculo do Bonum.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem4.jpg?version=1&modificationDate=1399475106000&api=v2&effects=drop-shadow)



Caso a empresa tenha um volume grande de informações, poderá ser selecionado a(s) Filial (is), o Tipo de Movimento e o Cli/For.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem5.jpg?version=1&modificationDate=1399475122000&api=v2&effects=drop-shadow)



Para selecionar a NF do RM Nucleus, o usuário deverá clicar no ícone “Incluir”, para o filtro, deverá aplicar a característica desejada, ou para retornar todos colocar o símbolo “%”, clicar em ‘Filtrar’. Selecione a NF, e clique em OK.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem6.jpg?version=1&modificationDate=1399475139000&api=v2&effects=drop-shadow)



Ao avançar será apresentada a aba ‘Tipos de Campos’, onde será possível escolher a forma que a Descrição do Patrimônio será composta.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem7.jpg?version=1&modificationDate=1399475153000&api=v2&effects=drop-shadow)



**Preço unitário:** o sistema vai considerar o “preço unitário” preenchido no item de movimento da nota fiscal inclusa no RM Nucleus. Esta informação está disponível em: **Cadastro / Bens / Valor de Aquisição em R$.**



**Valor unitário:** o sistema vai considerar o “valor unitário” do item de movimento da nota fiscal inclusa no RM Nucleus obtido através da fórmula de valor financeiro (Disponível nos Parâmetros / Estoque / Estoque 2|2: quantidade do item de movimento). Esta informação está disponível em: **Cadastro / Bens / Valor de Aquisição em R$.**



**Valor Financeiro:** o sistema vai considerar o “valor financeiro” do item de movimento da nota fiscal inclusa no RM Nucleus obtido através do conteúdo da fórmula de valor financeiro

(Disponível nos Parâmetros / Estoque / Estoque 2|2: quantidade do item de movimento). Se o tipo de movimento não estiver parametrizado para utilizar “fórmula de valor financeiro” o campo não será preenchido. Esta informação está disponível em: **Cadastro / Bens / Valor de Aquisição em R$.**



**Fórmula de Valor do Bem:** o sistema vai considerar o conteúdo da “fórmula de valor do bem” parametrizada no tipo de movimento (Disponível em: **Patrimônio / Fórmula de Valor do Bem**).

Se o parâmetro for habilitado depois de inclusa movimentação o item tem que ser regravado para que o cálculo seja feito.



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem8.jpg?version=1&modificationDate=1399475170000&api=v2&effects=drop-shadow)

**Incluir Patrimônio mantendo as quantidades informadas nos Itens da Nota:** Ativando esta opção ao realizar a integração com o RM Nucleus o sistema manterá os Patrimônios agrupados, e o campo ‘Quantidade’ será exatamente igual à quantidade informada para o item na NF.

Não ativando esta opção o sistema desmembrará as quantidades dos itens da nota, criando um cadastro para cada unidade do item e, neste caso, o valor da quantidade de cada item será sempre arredondado, gerando sempre bens com quantidade inteira, observando a seguinte regra: para quantidades menores que 0,50 será gerado no mínimo 1 Patrimônio com quantidade igual a 1 unidade, de maneira que cada item da nota gere pelo menos 1 Patrimônio correspondente no RM Bonum.



**Gerar código do Patrimônio e número do patrimônio automaticamente:** Marcando esta opção o sistema irá gerar o código de patrimônio e o número do patrimônio automaticamente respeitando sempre o grupo Default cadastrado no Grupo de Contas do bem, caso contrário os Patrimônios ficaram com a ‘Aquisição Pendente’ (ver manual de Aquisição Pendente).

**Observação:**

O sistema respeitará a preferência "Geração do código do patrimônio = código do bem", caso esta opção esteja marcada. Para que não haja problemas na geração do código do bem automático é aconselhável que os códigos dos bens estejam cadastrados sequencialmente e que esteja utilizando a preferência "Inclusão de código sequencial nos bens". Se ao final da integração, o arquivo de LOG apresentar a mensagem "Os códigos desse título já estão completos, é impossível gerar esse código sequencial" a integração deverá ser feita posteriormente através da opção ‘Aquisição Pendente’.



**Considera a falta do grupo de Patrimônio como erro:** Esta opção funciona como uma segurança para realização da integração sem erros. Ao marcá-la o sistema irá conferir se todos os produtos da NF integrada estão com os grupos de contas cadastrados. Caso algum bem não esteja com o grupo de contas cadastrado o sistema NÃO integrará **NENHUM** bem desta nota.

Caso o usuário opte por não marcá-la o sistema fará a integração dos Patrimônios da NF que esteja com o Grupo preenchido, e os demais Patrimônios (que não possuírem o grupo preenchido) não serão integrados.



**Não integrar Patrimônios com valor mínimo exigido por lei (394,13 UFIR’s):** Ao marcar esta opção no momento da integração com o RM Nucleus, o sistema não irá integrar bens com valor inferior ao exigido por lei.



**Gerar o código do Patrimônio a partir do título do Patrimônio definido no produto:** Esta opção irá Gerar o código do Patrimônio a partir do grupo definido no produto na integração com o RM Nucleus.

Com esta opção o RM Bonum vai pegar o default de Grupo de Patrimônios preenchido no RM Nucleus (Disponível em: **Cadastro / Produto / Integração / Grupo de Bens**).



![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem9.jpg?version=1&modificationDate=1399475411000&api=v2&effects=drop-shadow)

Marque as opções acima caso deseje transportar alguns destes itens preenchidos na NF do RM Nucleus para o cadastro do Patrimônio no Bonum. Executar.



Verifique o Log de Execução do processo:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem10.jpg?version=1&modificationDate=1399475432000&api=v2&effects=drop-shadow)



Assim o Patrimônio será integrado corretamente:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/144408904/imagem11.jpg?version=1&modificationDate=1399475445000&api=v2&effects=drop-shadow)





**ATENÇÃO:**

Todas as opções marcadas nesta manual são apenas em nível de demonstração do processo. Os dados corretos deverão ser informados pelo usuário.











**Data de produção do documento:** 01/11/2012







Para maiores informações:

[Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/default.aspx)

 [**![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/144408904/by%20you.png?version=1&modificationDate=1399475986000&api=v2)**](https://www.byyou.com/static/resources/hotsite/index.html)**COMUNIDADE** [**R@Contábil**](https://totvs.byyou.com/?space=rcontabil)

**Canais** **de Atendimento:**

**Chamado:** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 2 – (Controladoria e Finanças), 2 – (Ativo Fixo).
