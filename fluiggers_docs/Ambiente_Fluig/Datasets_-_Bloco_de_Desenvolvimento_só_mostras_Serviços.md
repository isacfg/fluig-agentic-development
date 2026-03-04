# Datasets - Bloco de Desenvolvimento só mostras Serviços

> **Fonte:** [https://fluiggers.com.br/t/datasets-bloco-de-desenvolvimento-so-mostras-servicos/2785](https://fluiggers.com.br/t/datasets-bloco-de-desenvolvimento-so-mostras-servicos/2785)
> **Categoria:** Ambiente Fluig
> **Criado em:** 15/05/2024, 09:49
> **Visualizações:** 90 | **Likes:** 0 | **Respostas:** 3

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 15/05/2024, 09:49

Prezado, eu instalei um Fluig para teste do jeito que sempre fiz.
Entretanto, essa instalação, no Painel de Controle, em Desenvolvimento, só enxergo uma entrada, que é a de Serviços.
O que será que aconteceu para desaparecer ‘Adapters’, ‘Operações’, ‘Datasets’, ‘Servidores’ e ‘Temas de Formulários’?
Será alguma novidade com relação à permissão?

A versão que estou usando é a Mist 1.8.0-230829 596

![image](https://fluiggers.com.br/uploads/default/original/2X/9/91ebe33e2f4a4a1f5b2d2d678f7681440b1003cb.png)

---

## Resposta #1

**venturelli** (@venturelli) — 15/05/2024, 10:29

Você é o admin e não mexeu nas permissões? Então provavelmente aconteceu algum erro na criação das páginas. Chegou a consultar o log pra verificar se ocorreu algum erro durante a criação da empresa?

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 15/05/2024, 10:48

Caro [@venturelli](/u/venturelli) , esta instalação tá rodando há muitos meses, de modo que vi isto hoje.
Achei estranho funcionar sem isto.
Ou seja, se o log tivesse erro, não seria durante a instalação?

---

## Resposta #3

**venturelli** (@venturelli) — 15/05/2024, 11:18

Existe duas possibilidades para o teu caso. O primeiro é que as permissões ao recurso tenham sido removidas (mas sinceramente não sei se causaria esse efeito para o admin) ou o “recurso” em si não foi criado.

Quando eu digo “recurso”, não quer dizer que o dataset não vai funcionar. Mas cada página, cada widget no Fluig é um recurso. E quando uma empresa é criada, é criado para essa empresa todos os recursos do Fluig. Isso é por empresa porque páginas podem ser personalizadas e as permissões são vinculadas a estes recursos. Por isso que PROVAVELMENTE, caso as permissões não tenham sido manipuladas, houve uma falha durante a criação dos recursos para esta empresa.

O jeito mais fácil de saber isso é tentar achar, nas permissões, a página do dataset. Eu não testei, mas se não encontrar lá o item Dataset do tipo Página ou caso não seja possível editar as permissões dele, é mais certo que foi isso mesmo que aconteceu.

Se for uma empresa de testes ou sem importância, é mais fácil criar uma empresa nova. Senão, o canal indicado é o suporte mesmo para recriar as páginas.

---

## Resposta #4

**MAURO SIMOES** (@Mautresim) — 15/05/2024, 11:22

O problema é que não há mesmo o recurso Dataset.

Se eu tento, por exemplo, listar diretamente os datasets, dá página não encontrada, tal como em
[http://172.16.0.10:8080/portal/p/adm/wcmdatasetpage](http://172.16.0.10:8080/portal/p/adm/wcmdatasetpage)

Eu estou achando que o usuário que eu penso ser administrador, não é.

Vou verificar, ou vou é reinstalar o Fluig todo.

---
