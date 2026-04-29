# Mecanismo de Atribuição Customizado não lista Eclipse

> **Fonte:** [https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado-nao-lista-eclipse/774](https://fluiggers.com.br/t/mecanismo-de-atribuicao-customizado-nao-lista-eclipse/774)
> **Categoria:** BPM
> **Tags:** `bpm`
> **Criado em:** 12/11/2021, 14:37
> **Visualizações:** 740 | **Likes:** 5 | **Respostas:** 1

---

## Pergunta original

**Karina Pinheiro** (@Kapinheiro) — 12/11/2021, 14:37

Boa tarde,

Estamos na Versão 1.7.1 e ao importar o processo, o mesmo perde a referência de Mecanismos Customizados. Quando tentamos seleciona-los novamente, o Eclipse simplesmente não lista os mecanismos existentes na plataforma.

![mecanismo](https://fluiggers.com.br/uploads/default/optimized/1X/bbc83165da817597ef5201e244caccad27825f19_2_690x354.jpeg)

Alguém já passou por isso? tem alguma solução?

---

## Resposta #1

**Daniel Cabral Santos** (@daniel.cabral) — 18/11/2021, 08:51

Bom dia!

Dá uma olhada no log do fluig no exato momento em que vc puxa a lista de mecanismos…aparece algum erro?

---

## Resposta #2

**Karina Pinheiro** (@Kapinheiro) — 18/11/2021, 09:14

Não é apresentado nenhum erro no Log. Quando consultamos via SOAP, ele retorna certinho os mecanismos cadastrados. Mas não exibe de forma alguma no Eclipse.

![image](https://fluiggers.com.br/uploads/default/original/1X/f4cc5e482c8fac0ee2b1d4061ec0f57266de3cd8.png)

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Karina Pinheiro** (@Kapinheiro) — 23/11/2021, 13:51 | ❤️ 3

Encontramos o erro!

Quando consultado os mecanismos pelo SOAP, encontramos um caractere especial na Descrição do Mecanismo Customizado, o que não pode acontecer.

**O erro só é exibido na consulta via SOAP.**

**OBS: O Mecanismo não foi enviado com caracteres especiais, isso gerou após atualização do Fluig para 1.7.0**

**Solução:** Remover o mecanismo e enviar novamente.

Caso tenha acesso ao banco de dados, segue o update:

```auto
update mecan_atribuic set DES_MECAN_ATRIBUIC = 'seuMecanismo' where COD_MECAN_ATRIBUIC 'seuMecanismo';
```

Erro exibido no SOAP:
![image](https://fluiggers.com.br/uploads/default/original/1X/a0de7edc407bef7e66b619dc309a21fbefdbc59a.png)

---

## Resposta #4

**Daniel Cabral Santos** (@daniel.cabral) — 07/12/2021, 22:07

Caraca [@Kapinheiro](/u/kapinheiro) !!!

---

## Resposta #5

**Angelo Batista** (@Angelo_Batista) — 03/12/2024, 17:51 | ❤️ 2

Eu estava com um problema exatamente igual e acabei encontrando esse tópico. O que resolveu foi ir no arquivo em que está o diagrama BPMN e dar um “update” como mostra o print.

![image](https://fluiggers.com.br/uploads/default/original/2X/2/2b577222680b196475f5825be0d176ff11bb03e2.png)

---
