# Consultar informações de solicitações de um processo

> **Fonte:** [https://fluiggers.com.br/t/consultar-informacoes-de-solicitacoes-de-um-processo/3263](https://fluiggers.com.br/t/consultar-informacoes-de-solicitacoes-de-um-processo/3263)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `banco-de-dados`, `sql`, `query`
> **Criado em:** 28/04/2025, 10:53
> **Visualizações:** 82 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Victor Castro** (@victorcastro) — 28/04/2025, 10:53

Alguém tem algumas consultas prontas pra pesquisar informações de solicitações?

Por exemplo, estou precisando de uma consulta que retorne algumas informações do formulário, quem foi o aprovador (usuário ou grupo responsável da atividade X) e quem foi o executor (usuário ou grupo responsável da atividade Y), tal como o dia de execução da aprovação e da execução. Caso não tenha sido executada ainda, sob qual responsabilidade está a atividade.

Mas estou agarrando demais nisso. Não está dando muito certo. Alguém poderia dar uma luz?

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 28/04/2025, 16:37

[Select\_oracle.txt](https://fluiggers.com.br/uploads/short-url/wjj37grXebCAlJOxJ792FmbsKah.txt) (1,8,KB)

Olá,

Segue um select que retorna basicamente a “consulta de solicitações”, a partir desse da pra ter uma referencia no banco. Apartir disso da pra utilizar o Birt repports e montar relatórios dentro do fluig.

Segue o link para o curso do birt para Fluig:

![](https://academy.fluig.com/theme/image.php/totvs_fluig_academy/theme/1740483152/favicon) [TOTVS Fluig Academy | Relatórios BIRT | TOTVS Fluig Academy](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=49)

![](https://academy.fluig.com/pluginfile.php/1/theme_totvs_fluig_academy/imagem_compartilhamento_link/1740483152/SEO%20%281%29.png)

### [TOTVS Fluig Academy | Relatórios BIRT | TOTVS Fluig Academy](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=49)

Aprenda a criar os seus próprios relatórios e gráficos a partir das informações do Excel, serviços SOAP, datasets do TOTVS Fluig e muito mais!

espero ter ajudado

---
