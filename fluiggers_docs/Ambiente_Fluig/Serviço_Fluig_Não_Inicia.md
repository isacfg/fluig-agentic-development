# Serviço Fluig Não Inicia

> **Fonte:** [https://fluiggers.com.br/t/servico-fluig-nao-inicia/3399](https://fluiggers.com.br/t/servico-fluig-nao-inicia/3399)
> **Categoria:** Ambiente Fluig
> **Criado em:** 02/09/2025, 09:53
> **Visualizações:** 111 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Fabinho** (@Fabinho) — 02/09/2025, 09:53

Olá pessoal bom dia, sou novo por aqui comecei agora a aprender o fluig, estava funcionando normalmente, hoje quando eu fui iniciar o serviço fluig não sobe ele começa a subir e não sobe, já tentei recriar o serviço e modificar os arquivo domain e host, mas sem sucesso, conseguem me ajudar.

att,

---

## Resposta #1

**Pietro** (@pietro) — 02/09/2025, 10:38

Opa cara, bom dia.

No log não retorna erro algum? tenta mandar mais informações também, facilita para ajudar você.

é em linux/windows?
qual versão?
foi alterado algo?
pode ser problema de acesso a porta/ip também, tem varios motivos, abre o log e acompanha ao iniciar, se for linux tem o journalctl também que pode auxiliar.

---

## Resposta #2

**Fabinho** (@Fabinho) — 02/09/2025, 15:06

Boa Tarde Pietro,

Vamos lá:

SO: Windows
Versão 1.8.2
Não houve nenhuma alteração, é uma versao na minha maquina local
Log do Service:
[host-controller.log](https://fluiggers.com.br/uploads/short-url/nCzUkeoI0eDSSKvgyiCADNodRuL.log) (3,7,KB)
[service.2025-09-02.log](https://fluiggers.com.br/uploads/short-url/yZW4kHKVhQ75zkgxd6Mx98AGLaX.log) (10,7,KB)

---

## Resposta #3

**Pietro** (@pietro) — 02/09/2025, 15:57

Boa tarde,

Isso é um chute meu, mas parece estar com configuração errada no host.xml, no address-management.

Pode que alguma porta já está sendo usada por outro serviço, experimenta reiniciar a sua maquina nesse caso, como você falou que estava funcionando já, provável que é resquício de outro serviço aberto e que não fechou corretamente.

Procura testar a porta 9990, e outras que o fluig em si usa, caso não consiga, recomendo abrir chamado direto com a TOTVS, ou aguardar outra alma responder, o que eu faria é jogar no google e ir catando coisa próxima até achar e resolver.

---

## Resposta #4

**Fabinho** (@Fabinho) — 03/09/2025, 13:54

Pietro obrigado pela ajuda, eu consegui aqui, mas tive que reinstalar até pq saiu uma nova versão 1.8 ontem, ai aproveitei, não faço ideia do que era, mas está no ar o serviço agora.

Estou com um outro problema agora nessa versão é que mesmo eu usando a senha padrao do Admin ou meu usuário ele nao conecta mais.

---

## Resposta #5

**Pietro** (@pietro) — 03/09/2025, 14:16

Confere se no log devolve algum erro ao tentar entrar, tenta por alguma senha direto no banco se você ter acesso, é criptografado em md5 se não me engano.

Se não, Provavelmente é erro de IP, vê se não tá desconfigurado o host.xml ou se no banco tá como HTTPS e teu domain/host estão como HTTP, entre outras configurações parecidas.

---

## Resposta #6

**Fabinho** (@Fabinho) — 03/09/2025, 14:28 | ❤️ 1

Deu certo Pietro, cara muito obrigado pela sua disponibilidade, eu falei com o suporte da totvs e eles identificou que não havia criado a pasta do fluig\_volumes, ai ele nao conseguia chegar no login, agora deu tudo certo. vlw mesmo.

---
