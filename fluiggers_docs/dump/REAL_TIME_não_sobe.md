# REAL_TIME não sobe

> **Fonte:** [https://fluiggers.com.br/t/real-time-nao-sobe/1543](https://fluiggers.com.br/t/real-time-nao-sobe/1543)
> **Categoria:** Widgets
> **Criado em:** 14/12/2022, 13:56
> **Visualizações:** 906 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**MAURO SIMOES** (@Mautresim) — 14/12/2022, 13:56

Eu tentei fazer a instalação de um certificado no meu Fluig para ‘https’ via WCMADMIN.

No entanto, na hora de subir os serviços, me deu

![erroservico](https://fluiggers.com.br/uploads/default/optimized/1X/6068a1f3ed3d251b784fdc886726f6de26bc26b4_2_690x452.png)

conforme arquivo anexo.

Fiz a desinstação do serviço conforme a Totvs ensina, não adianta.

---

## Resposta #1

**Luiz Ferreira** (@luiz.ferreira) — 15/12/2022, 07:51

Talvez seja a configuração do certificado no arquivo package.json do Fluig RealTime.
Veja se essa documentação te ajuda:
[https://centraldeatendimento.fluig.com/hc/pt-br/articles/4416286032023-Fluig-Plataforma-CON-Erro-ao-tentar-iniciar-o-serviço-do-RealTime-no-Windows](https://centraldeatendimento.fluig.com/hc/pt-br/articles/4416286032023-Fluig-Plataforma-CON-Erro-ao-tentar-iniciar-o-servi%C3%A7o-do-RealTime-no-Windows)

---

## Resposta #2

**MAURO SIMOES** (@Mautresim) — 16/12/2022, 09:43

Caro [@luiz.ferreira](/u/luiz.ferreira) obrigado por sua dica.
Ainda não pude ver o link porque o problema ‘foi resolvido magicamente’.
Certamente, o certificado deve estar com algum problema em relação ao que realmente eu precisava. Pode ser que seja inadequado.

De qualquer modo, após a aplicação desastrosa, eu fui ao SQL SERVER onde o Fluig está com todas as suas configurações e editei duas tabelas FDN\_PARAMGERAL e WCM\_CONFIGURATION.

Em ambas, mudei o protocolo de ‘https’ para ‘http’ de volta, mas o serviço REAL\_TIME ficava em ‘pause’.
Como era o segundo serviço na ordem certa a subir, eu não prossegui, não levantei o do Fluig.

Deletei, recriei os serviços, dei boot no Windows Server e continuava com o problema do ‘paused’ no Real\_time.

Não sei se foi a ação de levantar o serviço do Fluig mesmo sem ter subido o do ‘Real\_time’, mas após algumas tentativas tudo funcionou.
Aí parei os serviços novamente e levantei-os na ordem certa, Fluig\_Indexer, Fluig\_Realtime e Fluig.

Eu abri, nesse espaço de tempo em que estava com problema, um chamado na Totvs, mas o técnico só me fez pergunta, pediu logs, etc mas não me deu (ainda) uma resposta sobre o verdadeiro problema de não me deixar aplicar o certificado.

Assim que tiver a solução posto aqui. Obrigado.

(Update: vi seu link agora. Acho que tem tudo a ver com o problema sim. Muito obrigado, mas ainda quero testar novamente, após a resposta da Totvs)

---
