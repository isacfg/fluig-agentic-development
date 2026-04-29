# Usuário sem permissão para visualizar este documento

> **Fonte:** [https://fluiggers.com.br/t/usuario-sem-permissao-para-visualizar-este-documento/3081](https://fluiggers.com.br/t/usuario-sem-permissao-para-visualizar-este-documento/3081)
> **Categoria:** ECM / GED
> **Tags:** `ecm`, `soap`
> **Criado em:** 09/12/2024, 23:20
> **Visualizações:** 112 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Keven Teles** (@Keven) — 09/12/2024, 23:20

Estou utilizando o serviço SOAP ECMDocumentService para obter o Base64 de um anexo. Já realizei os seguintes passos:

1.  Adicionei o serviço necessário no ambiente;
2.  Configurei todas as permissões necessárias na área de permissões;
3.  Verifiquei cuidadosamente os dados utilizados na requisição. Apesar disso, continuo enfrentando o seguinte erro (Usuário sem permissão para visualizar este documento).
4.  Testei diretamente via soap com um user admin e mesmo assim não foi.
5.  já dei permissão na aba de documentos também

Gostaria de saber se alguém tem alguma sugestão ou solução para resolver essa questão.

---

## Resposta #1

**venturelli** (@venturelli) — 16/12/2024, 23:01

O usuário consegue acessar esse documento acessando pela interface gráfica normalmente? Pode ser algum erro de bloqueio da API Soap. Conferiu no cadastro de permissão dos serviços se está liberado esse webservice e este método?

Para o usuário admin não ter acesso ao documento, só se o documento estiver na pasta particular de outro usuário. Senão ele deveria conseguir ter acesso.

Conferiu se o userId passado na requisição é o do usuário admin também?

---
