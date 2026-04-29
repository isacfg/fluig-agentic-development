# Extensão VS Code

> **Fonte:** [https://fluiggers.com.br/t/extensao-vs-code/3124](https://fluiggers.com.br/t/extensao-vs-code/3124)
> **Categoria:** IDEs (Ferramentas de Desenvolvimento)
> **Tags:** `vscode`
> **Criado em:** 17/01/2025, 00:42
> **Visualizações:** 227 | **Likes:** 1 | **Respostas:** 4

---

## Pergunta original

**Eduardo Vantini Neto** (@eduardo.vantini) — 17/01/2025, 00:42

Olá, instalei a extensão no vscode para a integração com o Fluig. Porém ao preencher os dados do servidor, sempre recebo o retorno de falha no login - erro UT010031 - estou preenchendo com os mesmo dados do Eclipse e lá funciona. Alguém tem alguma ideia do que possa ser?

Estou usando essa extensão: [Fluig - Extensão para Desenvolvimento - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Fluiggers.fluiggers-fluig-vscode-extension)

Obrigado
Abs

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/01/2025, 09:13

Olá.

Qual é a versão do seu Fluig?

O Fluig 1.8.2 mudou várias coisas com relação a autenticação, o que nos obrigou a mudar também na extensão.

Então, se o seu Fluig ainda é 1.8.1 ou anterior precisa instalar a versão 1.28.1 da extensão, que é a última versão a dar suporte ao Fluig 1.8.1, conforme o [Changelog](https://marketplace.visualstudio.com/items/Fluiggers.fluiggers-fluig-vscode-extension/changelog)

---

## Resposta #2

**Eduardo Vantini Neto** (@eduardo.vantini) — 17/01/2025, 11:57

Olá [@Bruno\_Gasparetto](/u/bruno_gasparetto). Estou usando a versão 1.8.2-241217 do Fluig e a 2.0.0 da extensão. É alguma configuração que eu deixei de fazer?

Obrigado

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 17/01/2025, 12:30

Não sei te falar exatamente.

Como não estou usando o Fluig 1.8.2 diariamente acabei não participando muito bem dos testes da extensão. Só conferi o código-fonte pra ver se não haviam problemas e atualizei. Até tentei testar um pouco mais usando docker, mas não lembro bem o motivo de não ter conseguido (acho que foi problema dele não deixar rodar direito os 7 dias do modo demosntração).

O Jhonatan que acabou fazendo todo o serviço de atualizar o fonte da extensão pra aceitar o novo formato da 1.8.2.

Como não lembro se o Jhonatan é muito presente aqui no fórum pode ser uma boa abrir uma issue lá no GitHub detalhando todo o problema e talvez até citar ele ( jhonnytuba ).

Vou tentar instalar o Fluig 1.8.2 numa VM pra fazer mais testes, já que no trabalho ainda não tive coragem de sair da 1.8.1.

---

## Resposta #4

**Eduardo Vantini Neto** (@eduardo.vantini) — 17/01/2025, 13:14

Obrigado [@Bruno\_Gasparetto](/u/bruno_gasparetto)… Abraço!

---

## Resposta #5

**Bruno Gasparetto** (@Bruno_Gasparetto) — 18/01/2025, 10:07 | ❤️ 1

[@eduardo.vantini](/u/eduardo.vantini) , agora lembrei o motivo de não ter testado muito a extensão pra versão 1.8.2.

O fluig lab, da própria TOTVS, ainda não está na versão 1.8.2 (e se eles não arriscam atualizar eu me abstenho de subir minha produção pra essa versão, hehehe).

E tentando testar localmente, em casa, o Fluig 1.8.2 é muito chato com o modo demonstração. Praticamente toda chamada a algum service dele precisa ser feita duas vezes, sendo que na primeira é pra aceitar o modo demonstração. E em casa eu não tenho servidor de licença pros projetos pessoais, e por ser projeto pessoal não usaria licenças do local de trabalho pra isso.

Porém, a parte de login, eu consegui executar corretamente localmente. Não tive esse erro que você relatou.

![image](https://fluiggers.com.br/uploads/default/optimized/2X/0/00b7cfcb27756a2c1d898285a1490598cc0efee7_2_690x395.png)

---
