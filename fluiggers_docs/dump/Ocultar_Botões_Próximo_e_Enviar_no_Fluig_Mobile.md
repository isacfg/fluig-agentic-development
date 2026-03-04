# Ocultar Botões Próximo e Enviar no Fluig Mobile

> **Fonte:** [https://fluiggers.com.br/t/ocultar-botoes-proximo-e-enviar-no-fluig-mobile/2296](https://fluiggers.com.br/t/ocultar-botoes-proximo-e-enviar-no-fluig-mobile/2296)
> **Categoria:** Formulários
> **Criado em:** 20/10/2023, 08:09
> **Visualizações:** 400 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Thales Franco** (@thalescomiz) — 20/10/2023, 08:09

Bom dia,

vocês sabem como oculto os botões “Próximo” e “Enviar” em um formulário no Fluig Mobile?
Para a web utilizo window.parent.$(“#workflowActions”).hide(); e funciona perfeitamente, tem algum comando semelhante para o mobile?

Obrigado.

---

## Resposta #1

**Nicolas Alves** (@NicolasAlves) — 01/07/2024, 16:23

Opa Thales, tudo bom?

você conseguiu resolver seu problema? Estou com o mesmo problema de esconder os botões

---

## Resposta #2

**venturelli** (@venturelli) — 05/07/2024, 10:02

Não tem como mudar a estrutura do app. E mesmo para a web, é preciso tomar cuidado e ficar ligado em eventuais mudanças de layout para que o código continue funcionando.

Uma ação na web seria um botão que muda um campo do formulário e faça o envio. Isso incapacitaria o enviar da aplicação ainda que ele “voltasse a vida” e também incapacita o do mobile. Eu só não sei como forçar o envio manual via mobile com este botão dai.

---
