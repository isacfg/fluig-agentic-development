# Criar mais de uma página na mesma widget

> **Fonte:** [https://fluiggers.com.br/t/criar-mais-de-uma-pagina-na-mesma-widget/2590](https://fluiggers.com.br/t/criar-mais-de-uma-pagina-na-mesma-widget/2590)
> **Categoria:** Widgets
> **Criado em:** 23/02/2024, 09:03
> **Visualizações:** 198 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**Matheus Loreto** (@matheusl) — 23/02/2024, 09:03

Bom dia Pessoal,

Tenho uma situação onde pretendo criar uma página pública para que fornecedores possam enviar solicitações.

Gostaria de saber se tem como criar algum tipo de navegação usando outros arquivos HTML junto à pasta da widget(ou layout)?

A ideia é ter um menu que pudesse direcionar para o formulário de envio, ou de consulta, ou qualquer outra página que venha a precisar.

Alguém sabe se é possível? Sei que seria possível criar tudo dentro do view.ftl e mostrar e ocultar conforme demanda, mas isso não parece muito adequado.

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 26/02/2024, 11:46 | ❤️ 1

Já vi um projeto, compartilhado aqui no fórum, de uma widget com vários .ftl sendo importados. Justamente pra ter uma organização das coisas. Dá uma olhada no projeto [GitHub - sergiomachadosilva/wgtCadastroPessoas: Widget com CRUD completo com tabelas Pai e Filho](https://github.com/sergiomachadosilva/wgtCadastroPessoas)

Mas a TOTVS sempre faz vários vídeos falando de fazer Widgets com Angular e assim você consegue fazer algo realmente robusto e com carregamentos em etapas conforme necessidade, afinal é todo o poder do Angular ali (ou outra biblioteca robusta assim, como React ou VueJs).

---
