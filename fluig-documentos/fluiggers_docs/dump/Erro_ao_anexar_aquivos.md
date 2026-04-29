# Erro ao anexar aquivos

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-anexar-aquivos/3541](https://fluiggers.com.br/t/erro-ao-anexar-aquivos/3541)
> **Categoria:** BPM
> **Tags:** `processo`, `anexo`
> **Criado em:** 16/01/2026, 11:43
> **Visualizações:** 39 | **Likes:** 4 | **Respostas:** 2

---

## Pergunta original

**Junio Ramalho** (@JunioRamalho) — 16/01/2026, 11:43 | ❤️ 1

Olá, bom dia!

Hoje (16/01/2026) meu FLUIG iniciou com um layout diferente do padrão (Dentro de formulários de processo, a atualização não partiu de nenhum dos admins do sistema). Essa alteração de layout trouxe com ela um erro ao tentar anexar arquivos, onde carregam até 50% e depois o seguinte erro é apresentado no console do navegador:

VM428:1 Uncaught ReferenceError: that is not defined
at Object.startPublishingDocument (:1:20867)
at Object. (:1:24597)
at E.each (jquery-3.6.3.min.js?v=1.8.2-250617:2:3003)
at HTMLFormElement. (:1:23973)
at HTMLFormElement.dispatch (jquery-3.6.3.min.js?v=1.8.2-250617:2:43336)
at y.handle (jquery-3.6.3.min.js?v=1.8.2-250617:2:41320)
at Object.trigger (jquery-3.6.3.min.js?v=1.8.2-250617:2:71942)
at HTMLFormElement. (jquery-3.6.3.min.js?v=1.8.2-250617:2:72537)
at E.each (jquery-3.6.3.min.js?v=1.8.2-250617:2:3003)
at E.fn.init.each (jquery-3.6.3.min.js?v=1.8.2-250617:2:1481)
startPublishingDocument @ VM428:1
(anônimo) @ VM428:1
each @ jquery-3.6.3.min.js?v=1.8.2-250617:2
(anônimo) @ VM428:1
dispatch @ jquery-3.6.3.min.js?v=1.8.2-250617:2
y.handle @ jquery-3.6.3.min.js?v=1.8.2-250617:2
trigger @ jquery-3.6.3.min.js?v=1.8.2-250617:2
(anônimo) @ jquery-3.6.3.min.js?v=1.8.2-250617:2
each @ jquery-3.6.3.min.js?v=1.8.2-250617:2
each @ jquery-3.6.3.min.js?v=1.8.2-250617:2
trigger @ jquery-3.6.3.min.js?v=1.8.2-250617:2
\_trigger @ jquery-ui.min.js?v=1.8.2-250617:6
\_onDone @ ecm-plugins\_pt\_BR.js?v=1.8.2-250617:1
a. @ jquery-ui.min.js?v=1.8.2-250617:6
(anônimo) @ ecm-plugins\_pt\_BR.js?v=1.8.2-250617:1
c @ jquery-3.6.3.min.js?v=1.8.2-250617:2
fireWith @ jquery-3.6.3.min.js?v=1.8.2-250617:2
l @ jquery-3.6.3.min.js?v=1.8.2-250617:2
(anônimo) @ jquery-3.6.3.min.js?v=1.8.2-250617:2
pageworkflowview?pro…D=Ordem\_Pagamento:1 Uncaught (in promise) Error: Could not establish connection. Receiving end does not exist.

Alguém já passou por isso? Conseguem me apoiar?

Alteração de layout (retornou a algum layout antigo, desrespeitando totalmente as configurações em nosso painel de controle) e carregamento até 50%

![Fluig Erro](https://fluiggers.com.br/uploads/default/optimized/2X/c/c9201a31da58e09bf0062ca9c42aa80664a2f2d2_2_690x333.png)

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 22/01/2026, 00:44

Olá, você tem algum servidor de proxy na frente da sua configuração do fluig? se tiver, verifique o mod\_security.
e verifique o volume!

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 22/01/2026, 00:51 | ❤️ 2

[@JunioRamalho](/u/junioramalho)
Tu comentou que seu layout amanheceu diferente sem nenhuma atualização?
Seu layout anterior ao problema e a imagem apresentada era similar a este abaixo?

![image](https://fluiggers.com.br/uploads/default/optimized/2X/b/be5dffda85f48e3705e6b26f8427613b4e47fed7_2_690x200.png)

Se caso seu LAYOUT era assim, e passou a aparecer como na sua imagem com 3 abas centralizadas!
Foi realizada uma possivel alteração em dados adicionais da EMPRESA CADASTRADA no Fluig através do acesso pelo usuário wcmadmin.

Acesse seu fluig com o usuario wcmadmin (administrador empresas)
acesse o menu painel de controle>Empresas>Selecione e edite a empresa> Acesse a opção dados adicionais.
e verifique se possui a chave, se não tiver crie ela!

![image](https://fluiggers.com.br/uploads/default/original/2X/a/a083b9d15e15d0dc90934a3084f7606c0600c112.png)

---

## Resposta #3

**Junio Ramalho** (@JunioRamalho) — 22/01/2026, 08:40

Bom dia!

Temos sim, vou verificar.

---

## Resposta #4

**Junio Ramalho** (@JunioRamalho) — 22/01/2026, 08:41 | ❤️ 1

Bom dia!

Tanto o checkMessageOldExperienceBPM quanto o oldExperienceBPM estavam preenchidos de forma incorreta.

checkMessageOldExperienceBPM estava “false“
oldExperienceBPM estava “true“

Alterando os parâmetros, o sistema voltou ao normal.

Muito obrigado!

---
