# Integração Protheus x Fluig

> **Fonte:** [https://fluiggers.com.br/t/integracao-protheus-x-fluig/2108](https://fluiggers.com.br/t/integracao-protheus-x-fluig/2108)
> **Categoria:** Formulários
> **Tags:** `form`, `processo`, `bpm`, `fluigapi`
> **Criado em:** 07/08/2023, 17:36
> **Visualizações:** 709 | **Likes:** 4 | **Respostas:** 9

---

## Pergunta original

**joaopretti** (@joaopretti) — 07/08/2023, 17:36

Olá galera, tudo bem? Procurei no Totvs academy e outros lugares pelas redes sociais e paginas relacionadas ao fluig mas não tive excito em encontrar uma maneira de integrar o Fluig com o Protheus. Alguém já fez isso e poderia me ajudar?

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/278b2371c732c765f5cd147296e8b371b44d18af_2_690x246.png)

A minha meta é ao checkar este checkbox no fluig ele automaticamente aprovaria um pedido dentro do Totvs Protheus, alguém sabe se isso é possível e quais métodos e exemplos eu poderia fazer?

---

## Resposta #1

**Everton Alves** (@everton) — 09/08/2023, 17:00 | ❤️ 1

Olá, você já possui uma API para aprovação funcionando no Protheus?
Se possuir, o primeiro passo é criar o serviço no fluig.

---

## Resposta #2

**joaopretti** (@joaopretti) — 09/08/2023, 20:12

Boa noite, não temos API e infelizmente o tempo é curto para eu conseguir desenvolver uma para fazer essa atualização no pedido. Eu estou tentando fazer por meio de Update no banco, sabe me dizer algo que daria certo?

---

## Resposta #3

**Everton Alves** (@everton) — 10/08/2023, 07:55 | ❤️ 1

Acho que seria interessante desenvolver um webservice para fazer isso. Via update no banco de dados acho que ficaria muito complexo.
Eu tenho um webservice que desenvolvi há algum tempo para esse fim, se interessar que avise que eu te envio o fonte. Com alguma adaptação deve funcionar para o seu caso também.

---

## Resposta #4

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/08/2023, 07:57 | ❤️ 1

Isso de não ter prazo é complicado. Às vezes compensa brigar um pouco pra fazer do jeito certo.

O Fluig pode acessar bancos de dados externos. Só seguir a documentação [Datasets acessando banco de dados externo - TOTVS Fluig - TDN](https://tdn.totvs.com/display/public/fluig/Datasets+acessando+banco+de+dados+externo)

Mas precisa de coragem e muito conhecimento pra fazer alterações direto no banco de dados de um ERP.

---

## Resposta #5

**joaopretti** (@joaopretti) — 10/08/2023, 09:17

Everton se puder me mandar, eu ficaria imensamente agradecido, pq ta foda… KKKKK

---

## Resposta #6

**joaopretti** (@joaopretti) — 10/08/2023, 09:19

O tempo é inimigo do programador… HAHAHAH, estou usando os datasets mas como se trata de update fluig > banco de dado externo é outra historia, estamos fazendo esses testes em banco de homologação então eu acho que se der algum BO vai ser tranquilo de arrumar.

---

## Resposta #7

**Everton Alves** (@everton) — 10/08/2023, 10:03 | ❤️ 1

[LibPedCom.prw](https://fluiggers.com.br/uploads/short-url/1qTqjOAFe4kKACS5OY8dy1p6FuV.prw) (11,4,KB)
Anexei um código de exemplo, tente adapta-lo para a sua necessidade.

---

## Resposta #8

**joaopretti** (@joaopretti) — 10/08/2023, 10:55

Obrigado Everton, estou com outra duvida. Sabe me dizer como eu faço para armazenar o valor de um campo que eu criei em um formulário em uma campo da tabela do banco?

---

## Resposta #9

**Everton Alves** (@everton) — 10/08/2023, 12:29

Acho que a melhor forma seria criar um dataset para isso, o [@Bruno\_Gasparetto](/u/bruno_gasparetto) postou o link da documentação. Basicamente você precisa fazer um update da tabela que você quer alterar.

---

## Resposta #10

**joaopretti** (@joaopretti) — 10/08/2023, 13:15

Eu criei um formulário novo para gerar um ML no banco, porem não esta gerando nenhuma ML nova

---

## Resposta #11

**Allan Reichert** (@allan.reichert) — 10/08/2023, 17:27

Olá,

Fiz uma integração direta no banco de dados Oracle me baseando nestes Scripts pois nosso ERP não possui API.

![](https://github.githubassets.com/favicons/favicon.svg) [GitHub](https://github.com/nicolauale/fluig-custom-dataset)

![](https://opengraph.githubassets.com/523617dd88f07006f5bfb5d37988800b1ed8f4dbf08835b5d40f452aaa4f21db/nicolauale/fluig-custom-dataset)

### [GitHub - nicolauale/fluig-custom-dataset: Execute queries diretamente em sua...](https://github.com/nicolauale/fluig-custom-dataset)

Execute queries diretamente em sua base do ERP através do Fluig - GitHub - nicolauale/fluig-custom-dataset: Execute queries diretamente em sua base do ERP através do Fluig

por eles consegue enviar um update direto nas tabelas do banco.(Mas tome muito cuidado)

---
