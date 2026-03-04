# Salvar e-mail enviado no WorkFlow

> **Fonte:** [https://fluiggers.com.br/t/salvar-e-mail-enviado-no-workflow/726](https://fluiggers.com.br/t/salvar-e-mail-enviado-no-workflow/726)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 19/10/2021, 09:33
> **Visualizações:** 397 | **Likes:** 1 | **Respostas:** 1

---

## Pergunta original

**Ricardo Andrade** (@rca0261) — 19/10/2021, 09:33

Bom dia.
Tenho a seguinte situação.

Meu processo envia e-mail personalizado e funcionando perfeitamente. Agora o setor de auditoria interna quer que o e-mail enviado seja anexado ao processo.

Alguém tem ideia de como posso fazer para recuperar o e-mail enviado para poder anexar ao WF assim que o mesmo é disparado?

Desde já obrigado.

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 20/10/2021, 15:41

Eu to precisando fazer algo bem parecido, mas no meu caso estamos usando uma API para onde enviamos o codigo HTML e ela retorna um PDF desse código. Então anexamos ele no processo por API.

---

## Resposta #2

**Ricardo Andrade** (@rca0261) — 18/11/2021, 17:32 | ❤️ 1

Oi [@mauriciolanner](/u/mauriciolanner) , fizemos de uma forma diferente.
Pegamos o relatório e criamos ele em formato de HTML e preenchemos ele diretamente no template do Fluig.
O cliente adorou pq fica tudo no corpo do e-mail.
Valeu pela dica
abs

---
