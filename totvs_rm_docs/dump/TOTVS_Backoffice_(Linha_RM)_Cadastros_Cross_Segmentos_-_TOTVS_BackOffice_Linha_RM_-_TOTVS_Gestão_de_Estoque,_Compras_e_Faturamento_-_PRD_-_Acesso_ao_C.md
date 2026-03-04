# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - PRD - Acesso ao Cadastro de Produtos - Você não está autorizado a utilizar essa funcionalidade do sistema!

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/31740859612311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Acesso-ao-Cadastro-de-Produtos-Voc%C3%AA-n%C3%A3o-est%C3%A1-autorizado-a-utilizar-essa-funcionalidade-do-sistema](https://centraldeatendimento.totvs.com/hc/pt-br/articles/31740859612311-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-PRD-Acesso-ao-Cadastro-de-Produtos-Voc%C3%AA-n%C3%A3o-est%C3%A1-autorizado-a-utilizar-essa-funcionalidade-do-sistema)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Cadastros
> **Data:** 8 de maio de 2025 às 17:07

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/31740859575831)
 Tempo aproximado para leitura: **00:03:00 min

****Ocorrência**

Ao tentar acessar o menu Cadastros > Produtos e Serviço é apresentado a mensagem: **Você não está autorizado a utilizar essa funcionalidade do sistema!**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31740855721111)

 

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Todas as versões.

**Causa
**

O usuário logado possui vínculos com perfis que não possuem permissão ao Cadastro de Produtos.

**Solução**

O usuário precisa estar associado apenas aos perfis que possuem acesso ao Cadastro de Produto.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31969314297751)

Juntamente com o **T = Módulo Gestão de Estoque, Compras e Faturamento**, essa permissão faz integração com os módulos abaixo:

**M = Módulo de Obras e Projetos (Solum)**
**O = Módulo de Saúde**
**D = Módulo Fiscal (Líber)**

Acesse o módulo Serviços Globais > Segurança > Usuários > Sistema ( Altere para os mencionados acima ) > Acesse o cadastro do Usuário e verifique no menu Segurança quais são os perfis vinculados a ele em cada módulo:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31740859578007)

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31740855722263)


Verifique pelas consultas abaixo os acessos e as permissões de cada perfil:

1.  Primeiro execute a consulta abaixo para verificar quais os perfis do sistema possuem acesso ao Cadastro de Produto:
    **SELECT \* FROM GAUTZMENU WHERE TAGMENU = '809002000'

    **
2.  Em seguida realize a sentença abaixo para identificar a quais dos perfis acima o usuário está associado:
    **SELECT \* FROM GUSRPERFIL WHERE CODUSUARIO = 'X' AND CODCOLIGADA = 'Y' AND CODSISTEMA in ('T', 'D', 'M', 'O')

    **Troque X pelo usuário logado;
    Troque Y pela coligada utilizada.

**
Observação**

-   Após realizar as consultas é necessário que faça o comparativo = Perfis que o usuário está associado X Perfis que possuem permissão, e **remover** os perfis que **não possuem permissão**, ou **vincular** algum dos perfis de outros módulos que **possui a** **permissão mas não está associado ao usuário;**
-   Caso identifique que o usuário possui vinculo com mais de um perfil em algum dos módulos da primeira sentença acesse cada módulo e retire deixando apenas 1 perfil;
-   É possível que o perfil vinculado possua permissão apenas ao Cadastro do Produto, mas não a todos os sub cadastros e processos relacionados, sendo necessário avaliar pontualmente as permissões atribuídas ao perfil para identificar um possível causador da mensagem.

A consulta abaixo ajuda na identificação do código do sistema:
**SELECT \* FROM GSISTEMA WHERE CODSISTEMA = 'T'**

**Exemplo de Validação**

No exemplo abaixo está sendo comparada as duas consultas:

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31741151262359)

-   Destacado em **Vermelho** são os Perfis que **possuem permissão** e também **estão vinculados ao usuário;**
-   Em **Verde** é demonstrado que o usuário está vinculado em dois perfis do módulo Saúde ( O ) que possuem permissão;
-   E destacado em **Azul**, o usuário está associado em mais perfis do Saúde, porém estes **não estão** **sendo apresentados na primeira consulta**, logo **não possuem permissão** ao Cadastro de Produto.


Após a validação ser realizada, encontraremos a solução desse exemplo:

1.  Removendo os perfis vinculados ao usuário que não possuem acesso ( exemplificados em Azul );
2.  Removendo algum dos dois perfis o módulo do Saúde, deixando apenas um que possua a permissão. ( É recomendado que o usuário não esteja vinculado a mais de um perfil para evitar divergências de permissão ).

Assim então ficando conforme exemplo abaixo: Vinculado ao usuário apenas perfis com a permissão.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/31970623511063)
