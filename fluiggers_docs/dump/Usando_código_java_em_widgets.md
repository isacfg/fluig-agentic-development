# Usando código java em widgets

> **Fonte:** [https://fluiggers.com.br/t/usando-codigo-java-em-widgets/502](https://fluiggers.com.br/t/usando-codigo-java-em-widgets/502)
> **Categoria:** Widgets
> **Criado em:** 09/06/2021, 09:28
> **Visualizações:** 2107 | **Likes:** 19 | **Respostas:** 13

---

## Pergunta original

**Daniel Sales** (@Daniel_Sales) — 09/06/2021, 09:28 | ❤️ 1

Alguém sabe como usar java e arquivos jar dentro de uma widget.
Sei que o kit\_intranet usa mas não sei como foi feito.

---

## Resposta #1

**Willian Laynes** (@Willian_Laynes) — 09/06/2021, 10:29 | ❤️ 1

Bom dia,

As widgets que utilizei eram em Maven(Java), você define no pom.xml as bibliotecas que irá utilizar, com elas declaradas você terá que buildar o pom.xml. Irá gerar um arquivo .war na pasta “target” e é esse arquivo que exporta para o fluig via Central de Componentes no Painel de Controle.

![image](https://fluiggers.com.br/uploads/default/original/1X/163ed838cce22e0bcdd22400ba817551cf17d290.png)

---

## Resposta #2

**Daniel Sales** (@Daniel_Sales) — 09/06/2021, 10:32 | ❤️ 1

Tem algum fonte de exemplo?
ou documentação explicando o passo a passo?
nunca mexi com esse tal de maven.

---

## Resposta #3

**Willian Laynes** (@Willian_Laynes) — 09/06/2021, 10:58 | ❤️ 1

Pior que não tem uma documentação para isso a TOTVS não explica muito bem como usar.

Tem a documentação do próprio site do Maven
[https://maven.apache.org/](https://maven.apache.org/)

E tem o Git do Fluig que tem um exemplo.
[https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth](https://git.fluig.com/projects/SAMPLES/repos/widgets/browse/rest-oauth)

Ele cria uma API Rest para consumo.

Sei que se você pegar bem isso aqui e souber desenvolver em Java você pode criar API pra tudo por trás rodando no Fluig.

---

## Resposta #4

**Sérgio Machado** (@sergio.machado) — 09/06/2021, 11:38 | ❤️ 1

Muito massa, vou começar a estudar essa parada, as possibilidades são inúmeras.

Sempre que preciso realizar algo mais avançado como por exemplo enviar email com anexos eu preciso desenvolver uma aplicação externa e consumir dentro do Fluig. Com componentes fica bem melhor, pois fica tudo centralizado.

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 09/06/2021, 11:41

eu tenho esse fonte mas não soube usar kkkk.
Valeu vou estudar

---

## Resposta #6

**Willian Laynes** (@Willian_Laynes) — 09/06/2021, 11:56 | ❤️ 1

Sim, Bem isso Sergio.
Estou aprendendo também ainda. Mas com uma ajuda de um colega conseguimos desenvolver um envio de e-mail com Cópia e Cópia Oculta.
\*\*Pela ferramenta padrão do Notifier não é possivel.

---

## Resposta #7

**Willian Laynes** (@Willian_Laynes) — 09/06/2021, 11:59 | ❤️ 1

Pelo que vi se a pessoa entender de Java Maven fica fácil…mas os Fluiggers a maioria não tem esse conhecimento e eu me incluo na maioria…tentando sair dela.

---

## Resposta #8

**Daniel Sales** (@Daniel_Sales) — 09/06/2021, 14:30 | ❤️ 1

Opa somos dois
Java ate vai mas mavenoxi e um alien para min kkkkkk.
Mas sua diaca ja me deu um norte dos grandes. Vou aprender e posto um topico so sobre isso aqui.

---

## Resposta #9

**Bruno Gasparetto** (@Bruno_Gasparetto) — 09/06/2021, 16:24 | ❤️ 1

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/willian_laynes/48/196_2.png) Willian\_Laynes:
>
> > Pelo que vi se a pessoa entender de Java Maven fica fácil…mas os Fluiggers a maioria não tem esse conhecimento e eu me incluo na maioria…tentando sair dela.

Vejo uma carência grande até com JS, hehehe.

Eu nem conhecia essa opção de fazer Widgets direto em Java, se não teria comentado que falta isso na documentação do Fluig quando foram no Fórum oficial perguntar o que achávamos da documentação.

---

## Resposta #10

**Willian Laynes** (@Willian_Laynes) — 09/06/2021, 17:23

Verdade, o Fórum oficial deixei de lado nem sei como anda rs

---

## Resposta #11

**Daniel Cabral Santos** (@daniel.cabral) — 09/06/2021, 18:20

[@leferso](/u/leferso) olha isso aqui

---

## Resposta #12 ✅ RESPOSTA ACEITA

**Leonardo Soares** (@leferso) — 09/06/2021, 18:43

Eita, widget java nunca criei não.

O que criei junto com o [@daniel.cabral](/u/daniel.cabral) foi um webservice em java para comunicação com o ERP SAP e exportamos ele para .WAR e adicionamos a pasta de Apps do Fluig.

Funcionou 100%.

---

## Resposta #13

**Daniel Sales** (@Daniel_Sales) — 10/06/2021, 08:53

[@leferso](/u/leferso) é bem isso a ideia aqui gerar um war e subir para o servidor.
Aproveitando sua deixa disponibiliza para nos esse fonte. que montar um doc sobre o assunto.

---

## Resposta #14

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/06/2021, 10:05

[@leferso](/u/leferso) , mas isso não é exatamente uma widget? hehehe.

Ao menos o que entendi é que as Widgets são os arquivos .war que estão na pasta Apps do Fluig. De acordo com a configuração (os xml do Maven) o Fluig libera as rotas de acesso a ela.

---

## Resposta #15

**Leonardo Soares** (@leferso) — 17/06/2021, 16:01

Opa, fala Daniel. Então, não consigo disponibilizado pois contem regras de negocio da empresa.

Mas o que fizemos foi criar uma API REST em Java e depois geramos o WAR dela e adicionamos dentro da pasta apps do Fluig.

---

## Resposta #16

**Leonardo Soares** (@leferso) — 17/06/2021, 16:10 | ❤️ 1

Fala [@Bruno\_Gasparetto](/u/bruno_gasparetto), sobre o widget eu quis dizer que não fiz pelo widget do WCM e sim exportando um projeto java e colocando dentro da pasta apps do Fluig.

---

## Resposta #17

**Daniel Sales** (@Daniel_Sales) — 30/03/2022, 21:59

[@Willian\_Laynes](/u/willian_laynes) Boa noite estou retomando esse assunto e vi que você passou um link rest-oauth. por acaso vc conseguiu utilizar ele?
Teria como ajudar na hora da chamada do ws?
Da para testar com o postman?
Agradeço muito a ajuda desde já.

---

## Resposta #18

**jonathas araujo** (@jonathas_araujo) — 19/10/2022, 09:56

Legal saber que tem como usar Java

---

## Resposta #19

**Wasley Santos** (@Wasley_Santos) — 12/12/2023, 08:12

Oi [@leferso](/u/leferso) na criação do projeto maven eu preciso transportar o .war para dentro de um widget por causa do application.info ? Pergunto porque criei um projeto java e na hora de fazer o deploy na central de componentes ele questiona a existencia e não permite ser carregado, ou você simplesmente adicionou a pasta de apps via repositorio?

---

## Resposta #20

**Sérgio Machado** (@sergio.machado) — 04/11/2024, 07:33 | ❤️ 7

Olá, pessoal!

Estou subindo este tópico antigo caso alguém tenha interesse em saber como criar APIs REST no Fluig usando Java.

Passei um bom tempo estudando e testando várias possibilidades e resolvi criar uma série de vídeos ensinando passo a passo como funciona.

Clique no link abaixo para conferir mais detalhes.

[https://youtu.be/kLBPq5kUhRc](https://youtu.be/kLBPq5kUhRc)

---

## Resposta #21

**Daniel Sales** (@Daniel_Sales) — 12/11/2024, 17:09 | ❤️ 1

Eu uso um código que você me ajudou a resolver funciona muito bem por sinal

---

## Resposta #22

**Wasley Santos** (@Wasley_Santos) — 22/11/2024, 15:20

Vai demonstrar criando componentes .jar e .war ?

---

## Resposta #23

**Sérgio Machado** (@sergio.machado) — 22/11/2024, 15:44

Opa [@Wasley\_Santos](/u/wasley_santos), somente .war

---

## Resposta #24

**Bruno Gasparetto** (@Bruno_Gasparetto) — 24/04/2025, 11:16 | ❤️ 1

Enquanto esperava o [@sergio.machado](/u/sergio.machado) continuar o curso percebi que o Academy fez um curso sobre adaptar um componente pra inserir na TOTVS Store.

No curso eles pegam muito mais pesado do que só fazer o .war da widget. Vi que até cria página e usuário oauth meio que automático (ao menos pareceu isso, já que não assisti muitas aulas ainda).

Nele já dá pra ter uma noção de algumas coisas.

![](https://academy.fluig.com/theme/image.php/totvs_fluig_academy/theme/1740483152/favicon) [TOTVS Fluig Academy | Adaptando seu componente para a TOTVS Store | TOTVS Fluig...](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=52)

![](https://academy.fluig.com/pluginfile.php/1/theme_totvs_fluig_academy/imagem_compartilhamento_link/1740483152/SEO%20%281%29.png)

### [TOTVS Fluig Academy | Adaptando seu componente para a TOTVS Store | TOTVS...](https://academy.fluig.com/theme/totvs_fluig_academy/landpage.php?course=52)

Você aprenderá padrões como: criação e permissionamento de APIS, provisionamento de usuário OAuth, organização do projeto do maven e suas dependências, criar layouts, páginas widgets e muito mais!

Porém eles não pegam desde o início igual ao Sérgio, que tá mostrando desde a instalação do Eclipse e Maven, configuração etc.

---
