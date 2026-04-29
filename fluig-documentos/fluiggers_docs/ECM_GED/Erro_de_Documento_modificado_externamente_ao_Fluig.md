# Erro de "Documento modificado externamente ao Fluig"

> **Fonte:** [https://fluiggers.com.br/t/erro-de-documento-modificado-externamente-ao-fluig/1441](https://fluiggers.com.br/t/erro-de-documento-modificado-externamente-ao-fluig/1441)
> **Categoria:** ECM / GED
> **Tags:** `ecm`
> **Criado em:** 31/10/2022, 15:18
> **Visualizações:** 660 | **Likes:** 2 | **Respostas:** 4

---

## Pergunta original

**Cesar Tomita** (@Cesar_Tomita) — 31/10/2022, 15:18

Olá,

Alguns arquivos meu do Fluig apresenta esse erro:

“Documento modificado externamente ao Fluig”

Porém o arquivo existe no servidor e não esta corrompido, consigo abrir normalmente caso eu veja direto do servidor.

![erro fluig documento](https://fluiggers.com.br/uploads/default/optimized/1X/c4e206c47a951cc6447baa3f44916b6fa3318502_2_690x148.png)

Alguém sabe o que pode ser?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 31/10/2022, 17:05 | ❤️ 1

Boa tarde isso ocorrew por que o arquivo foi modificado extrernamente ao fluig algum apps mexeu no conteudo e ele passa dar essa mensagem. Pode ser porque vc copiou o arqui de um lugar para o outro. eu ja vi isso acontecer quando usei um conversor de video para que quando um video fosse feito upload para o fluig passase por esse conversor. Como oconversor de video rodava fora do fluig eu tive que chamar uma api do fluig para ela modificar alguma informação do arquivo e gerar um novo check sum, ai o erro sumia.

---

## Resposta #2

**Cesar Tomita** (@Cesar_Tomita) — 31/10/2022, 17:30

esse check sum seria o NUM\_CRC da tabela documentos?

qual api do fluig vc utilizou para contornar esse erro?

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 31/10/2022, 17:44 | ❤️ 1

Isso mesmo
Procura meu post em node js aqui do conversor de vídeo. La eu explico e vai te ajudar o fonte é bem simples.

---

## Resposta #4

**Cesar Tomita** (@Cesar_Tomita) — 01/11/2022, 11:21

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > ra ela modificar alguma informação do arquivo e gerar um novo check sum, ai o erro sumia.

Entendi, vc teve que re-enviar para o fluig.

É possível eu conseguir calcular esse check sum e atualizar ele direto pelo banco?

---

## Resposta #5

**Daniel Sales** (@Daniel_Sales) — 01/11/2022, 11:51

Não reeviei o arquivo. O fluig recalculou apos eu editar as propriedades do arquivo.
Se vc verificar o meu fonte vai ver que ele subistitui o arquivo direto na pasta sem passar por nenhuma api do fluig ai da esse erro. dai eu rodo uma api que atualiza a info e o fluig resolve esse erro.

---

## Resposta #6

**Cesar Tomita** (@Cesar_Tomita) — 01/11/2022, 16:02

Entendi,

Bom, testei por aqui e não funcionou, fiz uma alteração na descrição do documento e mesmo assim ele não o encontra.

Percebi que o nome 'físico" do arquivo esta um pouco diferente…

Alguns arquivos com caractere especial está vindo como “inválido” do tipo, “declaração” vem “declaracC!@?o”…

No nome físico do arquivo contém um “?” a mais… Será que pode ser isso?

Possível eu dar um update no campo ‘phisicalFile’ via api?

---

## Resposta #7

**Daniel Sales** (@Daniel_Sales) — 01/11/2022, 16:16

Cara extamente isso o nome ta errado e não vai achar ai da o erro.
Tem como fazer um update via api:
/api/public/ecm/document/updateFile

![image](https://fluiggers.com.br/uploads/default/original/1X/6a57f7f8d8c6551ba861387bbb68eae823bd721d.png)

/api/public/2.0/documents/updateFile

![image](https://fluiggers.com.br/uploads/default/original/1X/85741dfe76a04d4ea7582bcfb50b967f0db915f9.png)

Faça teste com esses dois um deles deve te ajudar

---

## Resposta #8

**Cesar Tomita** (@Cesar_Tomita) — 01/11/2022, 16:53

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/daniel_sales/48/22_2.png) Daniel\_Sales:
>
> > /api/public/2.0/documents/updateFile

ao tentar, me retorna esse erro:

![fluig erro ecm](https://fluiggers.com.br/uploads/default/original/1X/6057baa8f0720b6b1581da33d01c35660a844cbf.png)

---
