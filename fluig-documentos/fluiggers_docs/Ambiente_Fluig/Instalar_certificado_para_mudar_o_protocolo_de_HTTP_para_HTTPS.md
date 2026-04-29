# Instalar certificado para mudar o protocolo de HTTP para HTTPS

> **Fonte:** [https://fluiggers.com.br/t/instalar-certificado-para-mudar-o-protocolo-de-http-para-https/1429](https://fluiggers.com.br/t/instalar-certificado-para-mudar-o-protocolo-de-http-para-https/1429)
> **Categoria:** Ambiente Fluig
> **Criado em:** 24/10/2022, 16:14
> **Visualizações:** 1940 | **Likes:** 5 | **Respostas:** 2

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 24/10/2022, 16:14

Preciso trocar o protocolo para acesso da página Fluig. Hoje estamos com HTTP e temos de mudar para HTTPS.

De posse do certificado digital, basta seguir mesmo as instruções do link [Configuração HTTPS da plataforma - TOTVS Fluig - TDN](https://tdn.totvs.com/pages/releaseview.action?pageId=354472893) ou há alguma pegadinha?

Não usamos proxy reverso e nem balanceamento de carga.

Alguém já teve essa experiência?

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/10/2022, 11:42 | ❤️ 1

Quando colocamos https na versão 1.6.5 foi muito complicado.

Hoje na 1.7 já tive que atualizar algumas vezes e só segui a orientação do manual.

Tendo o cuidado de fazer um certificado com toda a cadeia certificadora pra rodar no mobile.

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 25/10/2022, 15:22

Obrigado, Caro [@Bruno\_Gasparetto](/u/bruno_gasparetto) Como sempre assertivo.

Uma pergunta a mais: eu não comecei o procedimento e, de preguiça, já vou te explorando aqui. Há instruções lá no documento da Totvs que fala para ter cuidado com a cadeia no caso do Mobile, ou isto foi uma descoberta sua?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 25/10/2022, 16:45 | ❤️ 2

na documentação recomenda colocar a cadeia completa e senti isso na pele porque quando me entregaram o certificado não estava completo e o mobile não funcionava.

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 29/10/2022, 15:24

Eu li na documentação que

*Clientes cloud precisam entrar em contato com o time de Cloud para que eles realizem esse procedimento.*

Nosso Fluig está instalado num servidor na nuvem da Oracle. Será o meu caso?
E, sendo, quem é o ‘time de cloud’ para eu delegar a eles a instalação? É gente da Totvs mesmo, ou os técnicos que instalaram os servidores virtuais na nuvem, ou gente da Oracle?

---

## Resposta #5

**Daniel Cabral Santos** (@daniel.cabral) — 31/10/2022, 08:35 | ❤️ 2

Reforçando: instale sim o certificado com cadeia completa…você pode validar aqui, por exemplo: [SSL Checker](https://www.sslshopper.com/ssl-checker.html)

---
