# Caixa do Select some ao usar EnableFields

> **Fonte:** [https://fluiggers.com.br/t/caixa-do-select-some-ao-usar-enablefields/3284](https://fluiggers.com.br/t/caixa-do-select-some-ao-usar-enablefields/3284)
> **Categoria:** Formulários
> **Tags:** `form`
> **Criado em:** 15/05/2025, 10:17
> **Visualizações:** 44 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Henrique Maia Cardosa** (@HenriqueMCard) — 15/05/2025, 10:17

Estou com um problema em relação ao formulário, ao usar o enablefields nos campos que são select, ao avançar pra próxima atividade os campos precisam ser desabilitados, até ai tudo bem, porém além de eles serem desabilitados a caixinha do select some e fica e a opção fica “voando” no formulário.

![Captura de tela 2025-05-15 101516](https://fluiggers.com.br/uploads/default/optimized/2X/d/d850a0d5012e21937ad43388657616779d34e847_2_690x90.png)

![Captura de tela 2025-05-15 101703](https://fluiggers.com.br/uploads/default/original/2X/b/b734498116a96bc4347984b1d69322ff2f9ad32f.png)

![Captura de tela 2025-05-15 101638](https://fluiggers.com.br/uploads/default/original/2X/5/543931c26ade17a00f663e540d4174ee5f4b7a82.png)

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 16/05/2025, 23:18

Uma solução simples seria deixar o label da primeira opção em branco, ou ainda criar uma quarta opção em branco e deixá-la no topo da lista. Quando o select fica desabilitado, ele exibirá a opção selecionada - nenhuma neste caso, por padrão o componente pegou a primeira da lista. O que acha?

---

## Resposta #2

**Matheus Mósso** (@msmosso) — 17/05/2025, 17:48 | ❤️ 1

Boa tarde Henrique,

Utilize o seguinte código no displayFields e verifique se é isso que você precisa:

```auto
form.setShowDisabledFields(true)
```

---
