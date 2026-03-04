# Erro ao exportar Widgets para o Fluig Server

> **Fonte:** [https://fluiggers.com.br/t/erro-ao-exportar-widgets-para-o-fluig-server/3502](https://fluiggers.com.br/t/erro-ao-exportar-widgets-para-o-fluig-server/3502)
> **Categoria:** Widgets
> **Criado em:** 17/11/2025, 14:14
> **Visualizações:** 42 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Iago Moysés** (@iagogmoyses) — 17/11/2025, 14:14

Boa tarde pessoal, tudo bem ?
Estou criando uma widget pelo Fluig Studio, porém ao exportar para o servidor, quando clico em “finish” simplesmente não acontece nada. No log do servidor, verifiquei o seguinte erro:
Acesso negado ao recurso: /portal/api/rest/wcmservice/rest/product/uploadfile/iago\_moyses/TWpAMTMxNDE3MThAQmk=. O queryParam ‘password’ está desabilitado por segurança, entre em contato com suporte Fluig.
Achei que pudesse ser incompatibilidade de versão entre o studio e o nosso Fluig, porém mesmo com ambos na mesma versão (1.8.2) o erro persiste.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/11/2025, 20:56

O plugin do Eclipse já tinha que estar funcionando, caso ele esteja na versão 1.8.2 (sei que tem uma atualização de patch pra ele, então talvez tenha que mandar atualizar pra ver se baixa uma corrigida, que se não me engano é 1.8.2.4).

Se mesmo assim não der certo siga esse [passo a passo](https://fluiggers.com.br/t/fluig-studio-x-ecplise/1417/11) que ensina a habilitar esse queryParam novamente.

Isso foi uma evolução de segurança pra não passar usuário e senha pela URL

---
