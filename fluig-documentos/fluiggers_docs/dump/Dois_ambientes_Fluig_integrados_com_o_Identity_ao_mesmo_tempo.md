# Dois ambientes Fluig integrados com o Identity ao mesmo tempo

> **Fonte:** [https://fluiggers.com.br/t/dois-ambientes-fluig-integrados-com-o-identity-ao-mesmo-tempo/833](https://fluiggers.com.br/t/dois-ambientes-fluig-integrados-com-o-identity-ao-mesmo-tempo/833)
> **Categoria:** Identity
> **Criado em:** 20/12/2021, 07:50
> **Visualizações:** 588 | **Likes:** 1 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 20/12/2021, 07:50

Temos um Fluig em produção que utiliza o recurso de LDAP do AD para autenticação via Identity.

Temos também uma instalação Fluig para teste em outro servidor, sem publicação para a internet, isto é, de homologação.

Causaria algum conflito se no Fluig de homologação usássemos as mesmas credenciais que estão sendo usadas no ambiente de Produção para que esta instalação de homologação aceite o login do AD no Identity?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Igor Rodrigues** (@fluigor.com.br) — 21/12/2021, 08:21 | ❤️ 1

Ola [@Mautresim](/u/mautresim)

Você pode ter 2 aplicativos do Fluig no mesmo contexto do Identity,
Basta utilizar a opção de clonar o APP, e realizar o clone do app principal do Fluig.
Porém terás de ajustar um número maior de URLS neste APP Clonado.
segue abaixo.

![image](https://fluiggers.com.br/uploads/default/original/1X/28e051cd0822946e3eb6b2973eaa94406f5bce4b.png)

![image](https://fluiggers.com.br/uploads/default/optimized/1X/c5ce69ff06978d2862ab819c51852e909273924e_2_306x500.png)

---
