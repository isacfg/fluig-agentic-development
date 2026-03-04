# Exportação de Widget

> **Fonte:** [https://fluiggers.com.br/t/exportacao-de-widget/2194](https://fluiggers.com.br/t/exportacao-de-widget/2194)
> **Categoria:** Widgets
> **Tags:** `widget`, `exportar`
> **Criado em:** 07/09/2023, 09:23
> **Visualizações:** 601 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Artur Alves** (@artur.alves) — 07/09/2023, 09:23

Estou tentando realizar a exportação de uma Widget para o servidor do FLUIG, porém, a mesma quando acessada, não carrega os dados.

Quando exporto a pasta por completo da widget, ele pede para aguardar o Deploy. Mas mesmo assim, não carrega a página.

Alguém já passou por isso? Ou conseguiria me explicar o passo a passo para realizar uma exportação correta?

---

## Resposta #1

**MAURO SIMOES** (@Mautresim) — 07/09/2023, 10:55 | ❤️ 1

[@artur.alves](/u/artur.alves) , seja bem-vindo.

Quando você diz que a widget “…não carrega os dados”, você quis dizer o que, exatamente? Não aparecem os elementos HTML?
E lá no server.log, no momento em que você exporta a widget, aparece algum erro?

---

## Resposta #2

**Artur Alves** (@artur.alves) — 07/09/2023, 11:06

Muito obrigado!

O “não carrega os dados” é basicamente não carregar nada da página, nem o HTML e nem a consulta SQL que fiz…

Antes estava funcionando corretamente, porém, fiz uma alteração apenas no arquivo de css da página, e quando fui exportar ela novamente, ao acessar a página, minha widget não carregou… Acredito que provavelmente tenha seguido alguma ordem de exportação errada.
Obs.: A última exportação foi feita por um dev. da própria TOTVS, que explicou como fazer uma exportação em caso de manutenção, porém, não funcionou.

No log, retorna aepnas isso:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/3/3dba4f61dab311ea293c19ac7d009b0e20848cc0_2_690x94.jpeg)

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Artur Alves** (@artur.alves) — 07/09/2023, 12:09

Consegui resolver!

Obrigado pelo retorno por tentar ajudar.

Após exportar a Widget do Eclipse para o servidor, é necessário acessar as configurações de “minha página”, selecionar a página que você quer e clicar em “Editar página”, lá dentro, você vai poder escolher a Widget que acabou de exportar e inserir ela.

---
