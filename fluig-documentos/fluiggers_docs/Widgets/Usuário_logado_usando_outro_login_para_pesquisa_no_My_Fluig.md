# Usuário logado usando outro login para pesquisa no "My Fluig"

> **Fonte:** [https://fluiggers.com.br/t/usuario-logado-usando-outro-login-para-pesquisa-no-my-fluig/3509](https://fluiggers.com.br/t/usuario-logado-usando-outro-login-para-pesquisa-no-my-fluig/3509)
> **Categoria:** Widgets
> **Tags:** `dataset`
> **Criado em:** 26/11/2025, 08:49
> **Visualizações:** 23 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Pietro** (@pietro) — 26/11/2025, 08:49

Bom dia a Todos.

Estou com um problema no minimo bizarro aqui….

Tenho 2 contas logadas em um tablet, no aplicativo “My Fluig”, o objetivo de ambas as contas é diferir acesso a máquinas diferentes, sendo elas regradas pelo sufixo “interna” e “externa”:

mov\_pintura\_interna
mov\_pintura\_externa

Ambas contas estão logadas e funcionam normalmente.

Tenho, na minha widget, uma pesquisa por grupo, onde eu pesquiso dentro da groups para ver quais máquinas precisam aparecer para esses usuários em questão, e então salvo esses grupos em uma var global para não precisar pesquisar novamente toda hora.

Essa var global eu limpo dentro do INIT.

Porém, ao trocar algumas vezes de usuário, cai em algum problema bizarro de cache, onde não importa o usuário que eu estiver usando, sempre vai usar apenas UM login para pesquisar pelos grupos, no log nem aparece nada sobre acessar outro login, parece que o aplicativo guarda tudo em memória mesmo, até o JWT do login…..

No log pega apenas que foi feita uma pesquisa com o user ‘….interna’ sempre, ou vice-versa, ocorre com ambos usuários.

Dito isso, teria alguma saída? limpar o cache manualmente resolve as vezes, mas fica imprático instruir o usuário a fazer isso toda hora.

No fim do fim acho que vou precisar de um usuário único pra ambos (o que pra mim nem faz sentido deixar separado, mas não é de mim que veio a necessidade), mas venho questionar ver se alguém já teve o problema e conseguiu resolver…..

edit: Versão 1.8.2-250916 412

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/11/2025, 14:49

Estranho persistir o usuário no cache do navegador.

Como você tá pegando o usuário logado? Como tá fazendo a pesquisa?

---

## Resposta #2

**Pietro** (@pietro) — 26/11/2025, 15:34

Não é no navegador, é no Aplicativo no My Fluig, no celular….

Eu usava esse, simples mas com oq eu podia pra ter certeza q pegava da WCMAPI

```javascript
getUserId: function () {
        try {
            if (window.WCMAPI && WCMAPI.userCode) return String(WCMAPI.userCode);
        } catch (e) { }
        try {
            if (window.parent && parent.WCMAPI && parent.WCMAPI.userCode) {
                return String(parent.WCMAPI.userCode);
            }
        } catch (e2) { }
        return '';
    },
```

E então fui catar e fiz essa gambiarra imensa aqui pra ver se era por algum motivo proveniente daqui:

```javascript
getUserContext: function () {
        const ctx = { id: '', login: '', name: '' };
        try {
            let w = window;
            if (w.WCMAPI) {
                ctx.login = String(w.WCMAPI.userLogin || '').trim();
                ctx.id = String(w.WCMAPI.userCode || '').trim();
            }
            if ((!ctx.login || !ctx.id) && window.parent && parent.WCMAPI) {
                ctx.login = ctx.login || String(parent.WCMAPI.userLogin || '').trim();
                ctx.id = ctx.id || String(parent.WCMAPI.userCode || '').trim();
            }

            if (ctx.login) {
                const ds = DatasetFactory.getDataset('colleague', null, [
                    DatasetFactory.createConstraint('login', ctx.login, ctx.login, ConstraintType.MUST)
                ], null);

                if (ds && ds.values && ds.values.length) {
                    const r = ds.values[0] || {};
                    ctx.id = String(r['colleaguePK.colleagueId'] || ctx.id || '').trim();
                    ctx.name = String(r['colleagueName'] || r['colleagueName'] || '').trim();
                }
            }
        } catch (e) {
            console.warn('[contagem_producao] Falha ao montar userContext:', e);
        }
        return ctx;
    },
```

Mas o problema é ao chamar um dataset, quando chamo ele pega o usuário logado, eu não especifico usuário né, de lá que vem os grupos errados:

```javascript
const ds = DatasetFactory.getDataset('colleagueGroup', null,
                [
                    DatasetFactory.createConstraint('colleagueGroupPK.colleagueId', String(userId), String(userId), ConstraintType.MUST)
                ], null);
```

---
