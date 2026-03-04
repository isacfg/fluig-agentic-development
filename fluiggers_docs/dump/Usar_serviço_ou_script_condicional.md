# Usar serviço ou script condicional?

> **Fonte:** [https://fluiggers.com.br/t/usar-servico-ou-script-condicional/167](https://fluiggers.com.br/t/usar-servico-ou-script-condicional/167)
> **Categoria:** BPM
> **Criado em:** 17/03/2021, 22:05
> **Visualizações:** 2276 | **Likes:** 28 | **Respostas:** 22

---

## Pergunta original

**Wasley Santos** (@Wasley_Santos) — 17/03/2021, 22:05

Galera tô com uma dúvida e gostaria de ouvir sugestões

Tenho um processo onde em determinado momento preciso consultar um dataset, esse dataset pode retornar algo ou vazio.

Se retornar vazio, deverá seguir para caminho A, se retornar algo, deverá seguir para caminho B.

O q vc sugerem. Uso um serviço para consultar e se der vazio retorno throw e mando para caminho A ou se achar retorno True e mando para o caminho B?

Ou então, um script condicional para gravar um campo e retorno True para as duas opções e uso um gateway pra consultar esse campo.
Pergunto isso, pq nao é mais recomendado usar o hapi.setautomaticdecision

O que recomendariam?

---

## Resposta #1

**Cassius** (@Cassius) — 18/03/2021, 03:36 | ❤️ 2

Wasley bom dia.

Vou te responder o que eu faria, não por ser a melhor opção, mas porque é a que tenho maior familiaridade.
Eu gravaria um campo e utilizaria um “gateway”. A vantagem de gravar um campo é que você saberia que naquele momento da decisão no processo, o retorno do seu “dataset” tinha aquela informação específica. Não sei como está estruturado seu processo, mas se de repente a informação de retorno do seu “dataset” em um outro momento fosse modificada, você teria um, vamos dizer assim, histórico do que estava no momento da decisão do caminho A ou caminho B.
Não sei se consegui ser claro na minha explicação.
Espero ter de alguma forma ajudado.

---

## Resposta #2

**Alef Vinicius** (@alefvinicius) — 18/03/2021, 05:23 | ❤️ 2

Wasley, bom dia, ambas as soluções atendem perfeitamente, é necessário uma atividade automática. Acho que para definir qual dos componentes deve utilizar você deve responder a seguinte pergunta: a informação que vem do dataset é referente ao entendimento do processo (diagrama)? Se sim, acredito que deve utilizar um gateway, ou seja, *se estamos falando de tomar decisão o componente mais indicado é o **gateway*** já que ele confere esse sentido ao processo. *Se o intuito é processar alguma informação, chamar integrações, alterar algum registro ou qualquer outra coisa que seja fora do processo, aí deve utilizar uma atividade de **serviço***. É sempre necessário lembrar que ao desenvolver um fluxo não estamos simplesmente fazendo algo que funcione, o diagrama também precisa conferir sentido, lógica e intuitividade ao processo, já que essa é a proposta do BPMN.

Espero ter contribuído, Wasley!

---

## Resposta #3

**Victor Castro** (@victorcastro) — 18/03/2021, 08:20 | ❤️ 8

Essa ideia do [@Cassius](/u/cassius) de gravar em um campo pra ver o histórico de modificações do retorno do dataset é muito válida. Mas se você estiver usando essa verificação somente uma vez durante o workflow eu acho desnecessário. Eu já utilizei essa solução várias vezes. No **beforeTaskSave** antes do **gateway** eu fazia o cálculo e salvava em um campo qual a atividade de destino que o gateway precisava assumir e fazia o gateway consultar esse campo pra tomar a decisão.

Agora eu faço diferente. Eu não preciso criar um campo só pra guardar uma informação que eu vou usar só uma vez. Eu crio um **script de evento workflow** e dou um nome pra função. Custei a descobrir que eu posso fazer dessa forma :joy:

![image](https://fluiggers.com.br/uploads/default/original/1X/ec193f31db03287ebd2d35cec7f3a39ff195a44a.png)
![image](https://fluiggers.com.br/uploads/default/original/1X/80f5bbc968cd85532485f9972ce3f193bc9e1bdc.png)

Essa função retorna **true** ou **false**. E no gateway eu só chamo a função e decido o caminho a ser tomado.

![image](https://fluiggers.com.br/uploads/default/original/1X/c20930f7c8952a8d11e59a5c5c1fd31eba2ef7db.png)

Espero ter ajudado.

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 18/03/2021, 10:43 | ❤️ 1

M O D U L A R I Z A R :smiley:

---

## Resposta #5

**Wasley Santos** (@Wasley_Santos) — 18/03/2021, 12:40 | ❤️ 1

Nossa cara, também não imaginava que seria possível isso. Acho que isso claramente vai expressar o que eu quero fazer. Eu aprendi recentemente que posso fazer essa modularização mas nunca pensei que ela funcionava dentro do gateway.

---

## Resposta #6

**Cassius** (@Cassius) — 18/03/2021, 15:12 | ❤️ 1

Muito boa essa sua solução.
Já tinha usado esses eventos de processo em **gateway**, mas não dessa forma.
Muito bom!
Mais uma pra biblioteca de ideias :smiley:

---

## Resposta #7

**Igor Rodrigues** (@fluigor.com.br) — 19/03/2021, 15:01 | ❤️ 1

:ok_hand:

google ta em dia!

---

## Resposta #8

**Igor Rodrigues** (@fluigor.com.br) — 19/03/2021, 15:03 | ❤️ 1

[@victorcastro](/u/victorcastro)

Essa era a minha resposta e era assim que fazíamos a maioria das funções de processo no by you ECM 3.0

TOP!

---

## Resposta #9

**Sérgio Machado** (@sergio.machado) — 19/03/2021, 15:36 | ❤️ 1

Genial cara, não imaginava que também dava pra fazer dessa forma. Agora não precisarei mais percorrer uma tabela Pai e Filho e guardar o total em um campo apenas para usar no **gateway**

---

## Resposta #10

**Alef Vinicius** (@alefvinicius) — 19/03/2021, 17:40 | ❤️ 1

Wikipedia, parceiro! Kkkkkkk mentira, autor: minha própria cabeça!

---

## Resposta #11

**Bruno Gasparetto** (@Bruno_Gasparetto) — 20/03/2021, 11:00 | ❤️ 2

Eu descobri que dava pra fazer assim, de criar um arquivo compartilhado no processo, só porque fui estudar um processo que uma “filial” tinha isso nele.

Na documentação não tem falando isso e nos cursos (nem da academia fluig nem o presencial da totvs) sequer comentaram essa possibilidade.

---

## Resposta #12

**Sérgio Machado** (@sergio.machado) — 22/03/2021, 18:47

Pois é Bruno, eu sempre fico imaginando a quantidade de coisas que a gente não sabe, exatamente por não ter em lugar algum.

---

## Resposta #13

**Cassius** (@Cassius) — 22/03/2021, 19:05

[@Bruno\_Gasparetto](/u/bruno_gasparetto) como é esse lance de “arquivo compartilhado”?

---

## Resposta #14

**Bruno Gasparetto** (@Bruno_Gasparetto) — 22/03/2021, 20:31 | ❤️ 2

[@Cassius](/u/cassius) , é um arquivo “compartilhado”, mas na verdade é mais pra ter uma função comum a todo um processo.

Se você olhar o post do VictorCastro vai ver no print que ele tem um processo chamado “SESMT02”. Aí ele criou um “evento” chamado validateNumIncidente pra esse processo.

O que o Eclipse/Fluig faz é criar um arquivo chamado SESMT02.validateNumIncidente.js e dentro desse arquivo tem a função validateNumIncidente.

Essa função você pode chamar em qualquer evento do processo e também utilizá-la numa expressão dentro dos Gateways BPM.

Então dá pra reaproveitar ao menos as funções dentro do mesmo processo.

---

## Resposta #15

**Daniel Cabral Santos** (@daniel.cabral) — 23/03/2021, 08:39 | ❤️ 1

Existe um outro jeito de compartilhar funções entre processos, mas é um pouco menos elegante - armazená-las em datasets e fazer um eval() no resgate da função - nunca usei e me soa pouco prático…mas acredito que funcione perfeitamente!

O ideal era ter a possibilidade de ter um repositório comum no backend, não acham?

---

## Resposta #16 ✅ RESPOSTA ACEITA

**Daniel Sales** (@Daniel_Sales) — 10/03/2022, 08:54 | ❤️ 2

[@daniel.cabral](/u/daniel.cabral) eu uso pacotes em forma de widgets com js dentro dele.
Fica comum a todos os formulários pelo menos.

---

## Resposta #17

**joaopretti** (@joaopretti) — 26/07/2023, 09:59

Victor, deste modo que você fez, poderia me explicar melhor por favor oque você escreveu de função? estou com este mesmo problema, mas estou com muita duvida sobre isso

---

## Resposta #18

**Victor Castro** (@victorcastro) — 26/07/2023, 10:49

Fala [@joaopretti](/u/joaopretti), beleza?

Então, a função basicamente executa um script e retorna TRUE ou FALSE. E na hora de colocar no gateway eu simplesmente testo o retorno dela: se **validateNumIncidente() == false** então vai pra um caminho. Se **validateNumIncidente() == true** vai pra outro.

Você pode fazer uma função retornar qualquer coisa, e na hora de configurar o gateway, definir o caminho de acordo com o que a função vai retornar.

Se ainda estiver com dúvidas, pode perguntar.

---

## Resposta #19

**joaopretti** (@joaopretti) — 26/07/2023, 12:14

Estou fazendo desta maneira:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/23448d50fcc49557233f9e1c443cdc8e5f520bd3_2_683x500.jpeg)

---

## Resposta #20

**joaopretti** (@joaopretti) — 26/07/2023, 12:15

E usando esse js:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/c/c792e43806b3494941558737b489c664f98619bb_2_690x301.jpeg)

Porem mesmo assim ele pergunta se eu quero passar por ajuste de solicitação, mesmo o checkbox marcado.

---

## Resposta #21

**Victor Castro** (@victorcastro) — 26/07/2023, 13:05

Testa colocar na função o seguinte código:

```auto
var check = hAPI.getCardValue('chkAprovacao') == 'on' ? true : false;
return check;
```

E chama a função no gateway, definindo o caminho se for **true** ou **false**.

---

## Resposta #22

**joaopretti** (@joaopretti) — 26/07/2023, 13:19

[@victorcastro](/u/victorcastro) Eu tentei colocar está função, tambem não funcionou. Ele ja esta sendo chamado no gateway como aqueles parametros que eu coloquei, não?

Pode me dizer onde que eu devo criar o arquivo JS, e como devo chama-lo? o nome do arquivo influencia em algo?

Mesmo assim quando eu ativo o checkbox com o user do gerente, ele pede validação para o usuario novamente, e não termina o processo.

Consegue me dar uma luz nisso, por favor?

![MicrosoftTeams-image](https://fluiggers.com.br/uploads/default/original/2X/a/a4c7ac33a511b1260b76c675074897cd61f016a1.png)

O mecanismo não influencia nada neste quesito, né?

---

## Resposta #23

**joaopretti** (@joaopretti) — 26/07/2023, 13:24

Estou atribuindo a função nos eventos, não sei se é correto tambem.

![MicrosoftTeams-image (1)](https://fluiggers.com.br/uploads/default/optimized/2X/0/0e3f9e1ecdfb1f894ba2c7ccb5d4cce38509fadc_2_690x362.png)

---

## Resposta #24

**Victor Castro** (@victorcastro) — 26/07/2023, 13:41

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/joaopretti/48/1018_2.png) joaopretti:
>
> > Ele ja esta sendo chamado no gateway como aqueles parametros que eu coloquei, não?

Não. No campo “Expressão” do gateway, você tá chamando diretamente o campo. Se você quiser usar uma função, tem que chamar a função ali. Mas a função deve ser um script de evento workflow.


> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/joaopretti/48/1018_2.png) joaopretti:
>
> > Pode me dizer onde que eu devo criar o arquivo JS, e como devo chama-lo? o nome do arquivo influencia em algo?

Pra você criar a função, se estiver no eclipse, clica com o botão direito em cima do arquivo do diagrama, depois clica em “novo”, depois “script fluig”. Escolhe a opção “Script Evento Workflow”. Vai abrir uma janela onde você vai colocar o nome da função no campo “Nome do Evento”. E escolhe a qual diagrama ele se refere e finaliza.

Um arquivo com o nome da função vai ser criado dentro da pasta “scripts”. Aí é só você colocar o nome da função dentro do campo “Expressão” no gateway, conforme eu ilustrei no print lá em cima.

---

## Resposta #25

**joaopretti** (@joaopretti) — 26/07/2023, 14:18

Victor, deu perfeito!

retornei a função ==true
retornei a função ==false

Muito obrigado de verdade!!! não encontro nada na internet parecido, só conversando com a galera mesmo.

Teria algum meio de comunicação pra gente bater um papo sobre o Fluig em geral? discord, email, etc…?

---

## Resposta #26

**Victor Castro** (@victorcastro) — 26/07/2023, 17:24

Por nada [@joaopretti](/u/joaopretti). Que bom que funcionou.

Tem sim, tem o canal no telegram ([Telegram: Contact @fluig](https://t.me/fluig))

E tem no skype também ([Join conversation](https://join.skype.com/xpgjhtnAQ7jc))

---

## Resposta #27

**Bruno Gasparetto** (@Bruno_Gasparetto) — 27/07/2023, 10:00 | ❤️ 1

Se na condição você só quer comparar o valor de um campo do formulário não precisa usar o editar Avançado e chamar função pra isso. Basta adicionar a comparação:

![image](https://fluiggers.com.br/uploads/default/original/2X/4/4a9442a6bbba5c93e9da2f2bfaa2f40010057910.png)

Quando um checkbox é selecionado o valor atribuído a ele é o que você colocou no `value` dele. Aí basta fazer a comparação.

E na atividade você pode misturar as condições. Lembrando que a ordem das condições importa, pois a primeira que der Verdadeiro é pra onde o Exclusivo seguirá no fluxo.

![image](https://fluiggers.com.br/uploads/default/original/2X/f/f58ddf59cf37e521fc8347fec4ba130049b2935f.png)

Outra coisa é que a `FLUIGC` é uma lib pra rodar no FrontEnd do Fluig e você tentou utilizar dentro de um evento de BackEnd.

Se tá começando no mundo Fluig dá uma olhada nesse vídeo que fala um pouco sobre a diferença entre back e front do Fluig: [TOTVS Fluig - Diferença entre o JS do Front-end e Back-end - YouTube](https://www.youtube.com/watch?v=BCSKBV3_TZw)

---

## Resposta #28

**Daniel Sales** (@Daniel_Sales) — 28/07/2023, 09:10 | ❤️ 1

Outra dica evite usar checkbox da uma dor de cabeça.
O provlema do check box e que se vc não colocar um valoe assim que clicar ele recebe on no value e quando vc desmarcar ele continua on.
Eu customizei um radiogroup para funcionar como botoes onde eu deixo o botão selecionado marcado e os outro desmarcados
funciona melhor que o checkbox.

---
