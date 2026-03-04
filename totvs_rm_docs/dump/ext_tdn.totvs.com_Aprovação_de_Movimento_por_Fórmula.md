# MOV0004_Aprovacao_de_Movimento_por_Formula

> **Fonte:** [https://tdn.totvs.com/display/public/LRM/MOV0004_Aprovacao_de_Movimento_por_Formula](https://tdn.totvs.com/display/public/LRM/MOV0004_Aprovacao_de_Movimento_por_Formula)
> **Domínio:** TDN (TOTVS Developer Network)

---

# Assunto

**Produto:**

TOTVS Gestão de Estoque, Compras e Faturamento

**Versões:**

12.1 e superiores

**Ocorrência:**

Aprovação de Movimento por Fórmula

**Ambiente:**

Aprovação de Movimento

**Passo a passo:**

# Como fazer

Como parametrizar o sistema para utilizar Aprovação de Movimentos por fórmula

# Parametrização

**Importante:** A partir da versão 12.1.17, torna-se obrigatório criar e associar uma fórmula para validação da aprovação no perfil do usuário. Em versões anteriores, o sistema não obrigava esta informação.



No Módulo Serviços Globais acesse o menu Administração | Fórmulas.

Deverá ser criada uma fórmula que retorne os valores **1** ou **0**, sendo 1 para considerar que o movimento poderá ser aprovado e 0 para negar.

Exemplo:

*Se TABMOV('VALORLIQUIDO','V') <= 1000*

*Entao 1*

*Senao 0*

*FimSe*

Após a criação da fórmula, será necessário vincular esta no cadastro de perfil do usuário que irá executar o processo, por tanto, em Serviços Globais, acesse o menu Segurança | Perfis.

Selecione o perfil do usuário e abra o Anexos | Aprovações por Tipo de Movimento. Neste anexo será informado o tipo de movimento, o processo para aprovação e a fórmula para consistência da aprovação.



O primeiro passo é informar qual o tipo de movimento será utilizado.

O segundo é informar para qual processo será utilizada a aprovação. Os processos disponíveis são:

-   Tolerância no Recebimento
-   Aprovação no Faturamento
-   Aprovação de Solicitação de Compras para Cotação
-   Aprovação por Item de Movimento no Faturamento
-   Aprovação por Item de Movimento para Cotação

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/315898004/image2017-11-17_9-49-11.png?version=1&modificationDate=1510929694000&api=v2)

O terceiro passo é informar a fórmula criada anteriormente.

**Importante:** Este cadastro pode ter mais de um registro por tipo de movimento! Caso queira que seu movimento passe por mais de um tipo de aprovação, o sistema estará preparado. Vale ressaltar que se aprovar o movimento para Faturar, ele não estará disponível na cotação e vice-versa. Cada aprovação respeita apenas seu Processo.



**Tipo de movimento**

Nos parâmetros do tipo de movimento será necessário parametrizar para usar a aprovação. Avance até a etapa Mov - Outros Dados e no campo Aprovação informe o valor USA.

# Processo de aprovação

Após a inclusão do movimento por parte do usuário, selecione este e vá até o menu Processos | Aprovação...

Será carregada a tela com os processos pré-definidos no cadastro do Perfil conforme mencionado no início deste documento:

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/315898004/image2017-11-17_11-26-16.png?version=1&modificationDate=1510929694000&api=v2)

Escolha a opção para qual quer realizar a aprovação e execute.

Após a aprovação do movimento, clicando com o botão direito do mouse sobre o movimento será apresentada a opção de Dados Aprovação.

![Imagem](https://centraldeatendimento.totvs.com/download/attachments/315898004/image2017-11-17_11-32-28.png?version=1&modificationDate=1510929694000&api=v2)

Clicando sobre essa opção, serão apresentados os dados da aprovação como Tipo da Aprovação, Data e Usuário.

![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/315898004/image2017-11-17_11-33-37.png?version=1&modificationDate=1510929694000&api=v2)

Para identificar quais os movimentos estão Aprovados ou Não, basta utilizar os ícones
![Imagem](https://centraldeatendimento.totvs.com/download/thumbnails/315898004/image2017-11-17_11-35-7.png?version=1&modificationDate=1510929694000&api=v2)
da tela de movimento, onde o ícone Verde são os movimentos aprovados e o vermelho, não aprovados.

# Informações Adicionais

As informações de aprovação são gravadas na tabela **TMOVAPROVA.**

As desaprovações também serão gravadas na TMOVAPROVA, onde serão preenchidas as colunas USUARIODESAPROVA e DATADESAPROVA do mesmo registro da aprovação.

Qualquer tipo de alteração no movimento aprovado irá caracterizar a desaprovação do movimento.

Qualquer usuário poderá alterar o movimento mesmo que aprovado por outro usuário.

Mesmo que o usuário seja supervisor este deverá possuir fórmula associada ao seu perfil que o permita aprovar movimentos.

Se um usuário aprovador faturar um movimento que não esteja aprovado automaticamente, caracterizará a aprovação do movimento sem que o processo de aprovação seja executado.

**Observações:**

Para mais informações: 



 [Consulte o WikiHelp TOTVS](http://wikihelp.totvs.com.br/WikiHelp/FIS/FIS.ECF.aspx)



   **![Imagem](https://tdn.totvs.com/download/thumbnails/63865769/Fluig.jpg?version=1&modificationDate=1407880160000&api=v2)
   COMUNIDADE**  [R@Materiais e Suprimentos](https://fluig.totvs.com/portal/p/10097/subject/rmateriais)



**Canais de Atendimento:**

**Abertura de Chamados** Através do Portal Totvs [www.suporte.totvs.com.br](http://www.suporte.totvs.com.br/)

**Telefônico:** 4003-0015 Escolhendo as opções 2 – (Software), 2 – (Suporte Técnico), 3 – (RM), 5 – (Materiais)
