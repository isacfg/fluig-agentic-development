# Lentidão Após Atualizar para 2.0 Voyager

> **Fonte:** [https://fluiggers.com.br/t/lentidao-apos-atualizar-para-2-0-voyager/3536](https://fluiggers.com.br/t/lentidao-apos-atualizar-para-2-0-voyager/3536)
> **Categoria:** Ambiente Fluig
> **Criado em:** 08/01/2026, 20:09
> **Visualizações:** 71 | **Likes:** 2 | **Respostas:** 7

---

## Pergunta original

**Bruno Henrique** (@Bruno_Henrique) — 08/01/2026, 20:09

Pessoal,

Boa noite, aqui na empresa temos o Fluig a mais de 2 anos e no ultimo ano implementamos o load balance, hoje temos dois servidores de aplicação e um servidor para o banco. Até a versão 1.8.2 nosso ambiente esta estável (sem lentidão alguma), porém após atualizar para o 2.0 nosso ambiente esta ficando “pesado/lento” praticamente todo o dia, sendo necessário reiniciar ambos os servidores de aplicação. Estou achando muito estranho pois foi feita somente a atualização, as configurações do ambiente e do servidor ainda são as mesmas que estava estável na 1.8.2. Já abri chamado na TOTVS porém a resposta deles é que o problema é local. Alguém está passando por esses problemas na 2.0 que pode me dar uma luz?

---

## Resposta #1

**Igor Rodrigues** (@fluigor.com.br) — 09/01/2026, 12:27 | ❤️ 1

Olá mestre,
como é de conhecimento houve uma troca no modo de operaração do wildfly! até a versão 1.8.2 o back-end operava em DOMAIN, ja ná versão 2.0 passou a operar em modo STANDALONE, aonde durante a atualização é feito uma conversão de toda a configuração que antes era realizada nos arquivos domain.xml e host.xml para diversos arquivos standalone.xml standalon-ha.xml

Considero que seja necessário rever toda a parametrização.
Caso tenha interesse em marcar uma reunião, posso tentar apoiar, tenho experiencia de mais de 10 anos com infraestrutura FLUIG e atualmente gerencio clientes com ambientes que possuem mais de 5 servidores em LOAD BALANCE.
Segue link de agendamento

[AGENDAMENTO COM ESPECIALISTA](https://calendar.app.google/7jLaQoz4PbHxFGaR7)

---

## Resposta #2

**Bruno Henrique** (@Bruno_Henrique) — 09/01/2026, 13:25

Mas segundo o checklist da TOTVS esse mudança de arquivo de configuração é feita de forma automática durante a atualização. Acha que ela não foi feita corretamente ou que mesmo pegando mas mesmas da versão 1.8.2 seja necessário ajustar alguma coisa 2.0 “trabalhar melhor”

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 09/01/2026, 14:28

Revisa toda a parametrização!
Talvez refaz ela todinha, Talvez opte por fazer uma instalação limpa da 2.0 conectando ao seu banco, em vez da atualização!
E depois reconfigurar! mais a lentidão pode ser outra coisa!
acabei de validar um ambiente que eu atualizei para a 2.0 e os parametros de memoria que agora ficam no arquivo /appserver/bin/standalone.conf voltaram ao padrão! 2gb start e 4gb max
Esse ajuste foi validado pelo ticket ?

---

## Resposta #4

**Bruno Henrique** (@Bruno_Henrique) — 09/01/2026, 14:58

O atendente do ticket pediu pra mim alterar no /appserver/bin/standalone.conf.bat ai aumentei pra 8gb max e agora o serviço do Fluig lá no gerenciador de tarefa fica entre 8~9gb.

---

## Resposta #5

**Igor Rodrigues** (@fluigor.com.br) — 09/01/2026, 16:29

a LENTIDÃO acontece em quais telas mais especificamente ?

---

## Resposta #6

**Bruno Henrique** (@Bruno_Henrique) — 09/01/2026, 16:48 | ❤️ 1

No ambiente inteiro, por exemplo reiniciamos ele na terça quando foi quinta por volta de 14h precisamos reiniciar novamente. Ao utilizar a tela de consultar solicitação, ao utilizar a biblioteca, os processos ao clicar no enviar custa a enviar… tudo fica lento

---

## Resposta #7

**Igor Rodrigues** (@fluigor.com.br) — 09/01/2026, 17:12

Agenda um bate papo comigo ali pelo link! e tenta levar alguem de infra junto! Vou tentar de ajudar!

---

## Resposta #8

**Bruno Henrique** (@Bruno_Henrique) — 13/01/2026, 17:21

Mandei la. Obrigado pelo apoio ate o momento.

---
