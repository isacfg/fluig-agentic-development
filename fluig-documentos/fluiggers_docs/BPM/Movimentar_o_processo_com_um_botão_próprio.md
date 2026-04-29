# Movimentar o processo com um botão próprio

> **Fonte:** [https://fluiggers.com.br/t/movimentar-o-processo-com-um-botao-proprio/295](https://fluiggers.com.br/t/movimentar-o-processo-com-um-botao-proprio/295)
> **Categoria:** BPM
> **Criado em:** 06/04/2021, 09:55
> **Visualizações:** 763 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Vagner Duarte** (@vagner_duarte) — 06/04/2021, 09:55

Pessoal bom dia,

Existe alguma forma de eu movimentar o processo, como um botão próprio ao invés de utilizar o “enviar” do fluig? Gostaria de colocar um botão dentro do próprio formulário, e ao ser clicado, o processo fosse movimentado, e não precisar clicar no enviar para movimentar.

---

## Resposta #1

**Victor Castro** (@victorcastro) — 06/04/2021, 10:00 | ❤️ 1

Bom dia [@vagner\_duarte](/u/vagner_duarte).

Dá uma olhada nesse tópico, acho que vai te ajudar.

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/victorcastro/48/12_2.png) [Customizar Botão Salvar e Enviar](https://fluiggers.com.br/t/customizar-botao-salvar-e-enviar/260/2) [Formulários](https://fluiggers.com.br/c/form-fluig-html/15)
>
> > Pra enviar function customEnviar(){ //código window.parent.$('button\[data-send\]').first().click(); } Pra salvar function customSalvar(){ //código window.parent.$('button\[data-save\]').first().click(); }

---
