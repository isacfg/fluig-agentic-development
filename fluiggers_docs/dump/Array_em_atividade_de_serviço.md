# Array em atividade de serviço

> **Fonte:** [https://fluiggers.com.br/t/array-em-atividade-de-servico/2840](https://fluiggers.com.br/t/array-em-atividade-de-servico/2840)
> **Categoria:** API`s Fluig
> **Criado em:** 06/06/2024, 18:10
> **Visualizações:** 78 | **Likes:** 0 | **Respostas:** 3

---

## Pergunta original

**Wanderley Junior** (@gomeswjunior) — 06/06/2024, 18:10

Fala galera, em uma atividade de serviço estou recuperando o retorno e adicionando os campos que preciso em um array. Ao processar a rotina, exatamente na linha onde o array é transformado em string para que eu possa salva-lo em um hidden, o fluig me retorna o seguinte erro:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/c/ca297e0d01b5d42a635efe172a6aae7499639d54_2_690x40.png)

Não sei se no backend eu deveria converter de uma forma diferente. Alguém tem ideia se há uma tratativa diferente?
![image](https://fluiggers.com.br/uploads/default/original/2X/8/863dd461cc57ccbfd09f2122cee82cfe4b0f84ad.png)

---

## Resposta #1

**venturelli** (@venturelli) — 07/06/2024, 10:00

Como a variável arrayProdutoCadastrado foi criada?

---

## Resposta #2

**Wanderley Junior** (@gomeswjunior) — 07/06/2024, 10:03

Tentei de duas formas

var arrayProdutoCadastrado = new Array();
var arrayProdutoCadastrado = ;

---

## Resposta #3 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 07/06/2024, 10:08

Então o problema deve estar com o conteúdo que está sendo adicionado. Esse RET\_CODIGO, RET\_DESCRICAO, RET\_MSG e RET\_STATUS são todos strings simples? Tente adicionar umas aspas na frente pra forçar uma conversão em todas as variáveis:

`'CCODIGO': "" + RET_CODIGO,..`

Podes fazer também antes do stringfy um `log.dir(arrayProdutoCadastrado)` pra verificar o que tem de conteúdo nesse array

---

## Resposta #4

**Wanderley Junior** (@gomeswjunior) — 07/06/2024, 10:46

Resolvido com as aspas. Valeu
![image](https://fluiggers.com.br/uploads/default/original/2X/8/8e6c38dffd21da76e50317d0d8349c10a2edca3f.png)

---
