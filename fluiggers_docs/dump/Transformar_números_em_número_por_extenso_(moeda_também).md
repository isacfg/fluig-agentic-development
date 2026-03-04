# Transformar números em número por extenso (moeda também)

> **Fonte:** [https://fluiggers.com.br/t/transformar-numeros-em-numero-por-extenso-moeda-tambem/296](https://fluiggers.com.br/t/transformar-numeros-em-numero-por-extenso-moeda-tambem/296)
> **Categoria:** Formulários
> **Tags:** `form`, `javascript`, `js`, `função`, `jquery`
> **Criado em:** 06/04/2021, 11:23
> **Visualizações:** 2978 | **Likes:** 7 | **Respostas:** 0

---

## Pergunta original

**Victor Castro** (@victorcastro) — 06/04/2021, 11:23 | ❤️ 6

Uma vez precisei dessa função e vou deixar aqui pra caso alguém um dia também precise.

```javascript
String.prototype.extenso = function(c){ // Função para converter número no formato string para número por extenso.
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for(a = -1, l = v.length; ++a < l; t = ""){
            if(!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
            ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}
```

---

## Resposta #1 ✅ RESPOSTA ACEITA

**Victor Castro** (@victorcastro) — 09/04/2021, 10:33 | ❤️ 1

Chamada

```javascript
"123".extenso();
//cento e vinte e três

"123,20".extenso(true);
//cento e vinte e três reais e vinte centavos
```

---

## Resposta #2

**system** (@system) — 10/04/2021, 02:34

Este tópico foi fechado automaticamente 16 horas depois da úlima resposta. Novas respostas não são mais permitidas.

---
