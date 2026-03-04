# Integração RM x GED identificar os centavos do campo no formulário

> **Fonte:** [https://fluiggers.com.br/t/integracao-rm-x-ged-identificar-os-centavos-do-campo-no-formulario/1277](https://fluiggers.com.br/t/integracao-rm-x-ged-identificar-os-centavos-do-campo-no-formulario/1277)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`, `dataset`, `rm`
> **Criado em:** 29/08/2022, 16:35
> **Visualizações:** 332 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Lucas** (@LucasRocha) — 29/08/2022, 16:35

Estou tentando fazer uma integração GED x RM porém o RM não entende a formatação que eu coloco

O campo vem do formulário da seguinte maneira
“12.000,00”

Para adaptar a integração eu faço a seguinte tratativa no back-end

var pPRECOUNITARIO=hAPI.getCardValue(“PRECO\_\_\_”+indexes\[i\]).replaceAll(“.”,“”).replaceAll(“,”,“.”);

pPRECOUNITARIO = parseFloat(pPRECOUNITARIO).toFixed(2);

Porém no RM ele coloca os dois zeros para frente e fica da seguinte forma

“1200000.0000”

Alguém sabe como fazer para o RM entender que o que tem depois da virgula são os centavos?

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/08/2022, 08:32

Tem que ver como o seu RM está configurado para WS.

Aqui enviamos com a vírgula sendo o separador para centavos.

Pela descrição do seu problema parece que o seu RM também está configurado pra receber vírgula como separador de centavos.

---

## Resposta #2

**Everton Alves** (@everton) — 30/08/2022, 11:59 | ❤️ 1

Olá,

Essa conversão você está fazendo no fluig?
O método replaceAll não funciona no Javascript do fluig do lado do servidor.
Tente o seguinte:

```javascript
var pPRECOUNITARIO=hAPI.getCardValue(“PRECO___”+indexes[i]).replace(/\./g, '').replace(/,/g, '.'));
```

Apanhei bastante com isso, sem contar métodos Javascript que dão conflito com métodos de classes Java.

---

## Resposta #3

**Everton Alves** (@everton) — 30/08/2022, 12:02

Mais uma coisa:

```javascript
pPRECOUNITARIO = parseFloat(pPRECOUNITARIO).toFixed(2);
```

Nesse trecho você está convertendo novamente para string, é isso mesmo que você quer fazer?

---

## Resposta #4

**Lucas** (@LucasRocha) — 30/08/2022, 12:22

Na verdade o que eu queria com isso era converter para float

---

## Resposta #5

**Everton Alves** (@everton) — 30/08/2022, 14:02

Você chegou a tentar conforme eu falei?
Eu ainda forçaria a conversão para string concatenando com uma string vazia conforme abaixo:

```javascript
var pPRECOUNITARIO = (hAPI.getCardValue("PRECO___" + indexes[i]) + '').replace(/\./g, '').replace(/,/g, '.'));

pPRECOUNITARIO = parseFloat(pPRECOUNITARIO);
```

---

## Resposta #6

**Lucas** (@LucasRocha) — 30/08/2022, 14:15

Sim sim, e funcionou certinho. Muito obrigado!

---
