# Recursos Humanos (Parâmetro de Integração)

> **Fonte:** [https://tdn.totvs.com/pages/releaseview.action?pageId=423938854](https://tdn.totvs.com/pages/releaseview.action?pageId=423938854)
> **Domínio:** TDN (TOTVS Developer Network)

---

**Movimento gera controles de EPI no TOTVS Gestão de Pessoas:**

-   Não Integrado: Não utilizará a integração.
-   Compras: Realizar acréscimo em estoque.
-   Empréstimos: Realiza empréstimos EPI (Apenas efetuado pelo TOTVS Gestão de Pessoas).
-   Devoluções de empréstimos: Realiza devoluções EPI (Apenas efetuado pelo TOTVS Gestão de Pessoas).
-   Baixa de EPI: Baixa o estoque.

***Observações**:*

-   Quando o usuário configurar o tipo de movimento para realizar a integração, automaticamente o TOTVS Gestão de Estoques, Compras e Faturamento fará as devidas consistências em alguns parâmetros do tipo de movimento, para garantir a compatibilidade.
-   Após configurar um movimento para integrar com EPI, será disponibilizada uma pasta em Itens/Integração/Equipamentos de proteção individual, onde serão apresentados os itens de EPI relacionados aos itens do movimento.
-   Ao criar um movimento pelo TOTVS Gestão de Estoques, Compras e Faturamento (Compra), o sistema criará automaticamente os itens de EPI no TOTVS Gestão de Pessoas, sendo que estes estarão disponíveis na pasta citada no tópico acima.
-   Ao realizar a exclusão de movimentos e ou itens o sistema realizará as consistências necessárias.
-   Ao alterar a quantidade de um item, se for para menos, será verificado no TOTVS Gestão de Pessoas se há EPI disponíveis para o estorno. Serão verificados os itens de EPI relacionados a este movimento.
-   Ao alterar a quantidade para um valor a maior, o sistema automaticamente acrescentará a quantidade (diferença) de EPI no TOTVS Gestão de Pessoas.
