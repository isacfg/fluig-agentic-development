# Gráfico Doughnut Widget

> **Fonte:** [https://fluiggers.com.br/t/grafico-doughnut-widget/2870](https://fluiggers.com.br/t/grafico-doughnut-widget/2870)
> **Categoria:** Widgets
> **Tags:** `widget`
> **Criado em:** 01/07/2024, 08:59
> **Visualizações:** 125 | **Likes:** 0 | **Respostas:** 3

---

## Pergunta original

**Igor Davanço** (@igordavanco) — 01/07/2024, 08:59

Olá pessoal, bom dia!

Alguém pode me passar um exemplo prático de como colocar legendas em uma gráfico do tipo doughnut? Não achei nenhuma documentação do Fluig sobre como adicionar essas legendas.

Obrigado.

---

## Resposta #1

**Gabriel Borchardt** (@Gabriel_Borchardt) — 01/07/2024, 13:11

Boa tarde amigo, legendas vc diz datalabels (exibir o valor q o donut tem) ou um titulo para o chart?

---

## Resposta #2

**Igor Davanço** (@igordavanco) — 01/07/2024, 13:38

Boa tarde meu amigo!

Seria as legendas mesmo, igual ao chart abaixo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/9/9928aa87dd9dfbc9d7b011f5b12251af7e155a34_2_563x500.jpeg)

---

## Resposta #3

**Gabriel Borchardt** (@Gabriel_Borchardt) — 01/07/2024, 13:52

vc deve editar o bloco labels do seu chart

```auto
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
```

---

## Resposta #4 ✅ RESPOSTA ACEITA

**Igor Davanço** (@igordavanco) — 01/07/2024, 14:24

A estrutura de dados do gráfico tipo donut é diferente, consegui adicionar as legendas pela própria função do chart.js, exemplo abaixo:

```auto
var legendHolder = document.createElement('div');
legendHolder.innerHTML = doughnutChart.generateLegend();

document.getElementById('legend').appendChild(legendHolder.firstChild);
```

Obrigado pelo apoio.

---
