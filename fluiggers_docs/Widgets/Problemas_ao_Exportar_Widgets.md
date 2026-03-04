# Problemas ao Exportar Widgets

> **Fonte:** [https://fluiggers.com.br/t/problemas-ao-exportar-widgets/3348](https://fluiggers.com.br/t/problemas-ao-exportar-widgets/3348)
> **Categoria:** Widgets
> **Criado em:** 22/07/2025, 11:50
> **Visualizações:** 89 | **Likes:** 1 | **Respostas:** 7

---

## Pergunta original

**Leonidas** (@leonidas) — 22/07/2025, 11:50

apos selecionar a pasta do widget que sera exportado, eu seleciono o servidor, e entao coloco minha senha, apos apertar em OK, ele fecha a janela e nada acontece, as vezes eu faço o processo e funciona e o widget é exportado e recebo a mensagem de sucesso, mas não entendo porque isso, meu eclipse neon esta na versao 1.82 e o fluig 1.72 lake

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2025, 12:05

A versão do Plugin do Eclipse tem que ser a mesma versão do seu Fluig.

Principalmente a partir do Fluig 1.8.2 houveram várias mudanças na parte de autenticação e com isso o plugin do Eclipse não funciona mesmo.

---

## Resposta #2

**Leonidas** (@leonidas) — 22/07/2025, 12:16

eu encontrei a versao FLUIG-1.8.0-240723-WIN64 para download e nao achei a versao 1.82 do fluig, essa funcionara?

---

## Resposta #3

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2025, 12:22

Você vai atualizar o Fluig?

O correto é ir em etapas mesmo:

-   Atualiza pra última versão do 1.7.
-   Atualiza pra última versão do 1.8.1
-   Atualiza pra última versão do 1.8.2

Mas recomendo ir fazendo isso no servidor de testes/homologação, pois pode quebrar algumas coisas do seu Fluig.

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2025, 12:24 | ❤️ 1

Mas se é só porque precisa enviar a widget pra um Fluig mais antigo você pode, simplesmente, instalar um plugin mais antigo no Eclipse.

![image](https://fluiggers.com.br/uploads/default/original/2X/7/7a676d3e8bd6f13edd8626ca2da6de09bbbe7b71.png)

Na hora de instalar é só criar uma entrada com a versão do Plugin. Ali onde eu coloquei 181 você pode trocar por 172 pra instalar a versão 1.7.2 do Plugin Fluig no Eclipse.

Depois é só desinstalar o plugin antigo e voltar pro plugin mais recente.

---

## Resposta #5

**Leonidas** (@leonidas) — 22/07/2025, 12:37

qual o caminho no eclipse para chegar nessa opção de voltar a versao ?

---

## Resposta #6

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2025, 13:19

Só seguir as documentações

[https://tdn.totvs.com/pages/releaseview.action?pageId=240298991#removendo-872616689](https://tdn.totvs.com/pages/releaseview.action?pageId=240298991#removendo-872616689)

e

[https://tdn.totvs.com/pages/releaseview.action?pageId=73078179](https://tdn.totvs.com/pages/releaseview.action?pageId=73078179)

---

## Resposta #7

**Leonidas** (@leonidas) — 22/07/2025, 15:44

fiz o procedimento e mesmo assim meus widgets não são exportados, então estou tentando atualizar o fluig, os 3 serviços ja estão parados, reiniciei o computador, os serviços continuam desativados, então apaguei as pastas C:\\fluig\\appserver\\domain data, log, servers, tmp, e tentei instalar mas veja

![Screenshot_30](https://fluiggers.com.br/uploads/default/original/2X/b/b96339af3d18059fe2b09ebd7edbe4ee7f711f7d.png)

![Screenshot_29](https://fluiggers.com.br/uploads/default/optimized/2X/c/c904012136d7c6fd35d5ac85806655071c202ada_2_690x489.png)

---

## Resposta #8

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/07/2025, 17:35

Você está atualizando uma versão de testes no seu computador?

Se for atualizar em Produção é bom ter feito backup, tanto dos arquivos quanto do banco de dados.

Eu já tive esse erro. Tive que desabilitar os serviços do Fluig e reiniciar o computador. Aí funcionou.

---

## Resposta #9

**Leonidas** (@leonidas) — 23/07/2025, 00:21

sim, consegui obrigado pela ajuda, sabe me dizer por que nao consigo criar uma tarefa? não aparece nada na lista, mesmo exportando os formularios

![Screenshot_32](https://fluiggers.com.br/uploads/default/optimized/2X/a/af725f1daf4960a0ed3a3b6caef92c1776d29210_2_690x498.png)

![Screenshot_31](https://fluiggers.com.br/uploads/default/optimized/2X/9/93a274f9b28cb11ea6e12e1d3396c8ffcb6c31c2_2_690x266.png)

---

## Resposta #10

**Bruno Gasparetto** (@Bruno_Gasparetto) — 23/07/2025, 18:43

Vi que deixou marcada a opção “Favoritos”. Se não favoritou nenhum processo aí aparece em branco mesmo.

Outra coisa, formulário é diferente de processo. Nos processos a gente usa os formulários pra salvar os dados, mas não significa que os formulários vão aparecer como processo.

Se está começando com o Fluig eu recomendo dar uma assistida nas aulas gratuitas do [Fluig Academy](https://academy.fluig.com/).

---
