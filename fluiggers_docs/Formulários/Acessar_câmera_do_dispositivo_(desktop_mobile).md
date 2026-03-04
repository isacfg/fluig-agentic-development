# Acessar câmera do dispositivo (desktop/mobile)

> **Fonte:** [https://fluiggers.com.br/t/acessar-camera-do-dispositivo-desktop-mobile/2877](https://fluiggers.com.br/t/acessar-camera-do-dispositivo-desktop-mobile/2877)
> **Categoria:** Formulários
> **Tags:** `form`, `bpm`, `mobile`, `camera`
> **Criado em:** 04/07/2024, 09:11
> **Visualizações:** 98 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Victor Castro** (@victorcastro) — 04/07/2024, 09:11

Alguém já fez uma funcionalidade de habilitar a câmera e tirar uma foto no fluig? Preciso capturar uma foto e transformar em base64.

Tenho um código que usa o `navigator.mediaDevices.getUserMedia`, porém parece que tem algum tipo de restrição. No Fluig o `mediaDevices` retorna `undefined`. Um detalhe que eu acredito que seja relevante é que o Fluig aqui ainda não é https. Isso faz com que o navegador não deixe acessar o dispositivo?

---

## Resposta #1

**Daniel Sales** (@Daniel_Sales) — 04/07/2024, 10:41

Bom dia,
O input file ja faz isso pelo celular ele te pergunta se quer abrir a camera ou escolher da galeria.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 04/07/2024, 10:52

Mas e pelo desktop? A necessidade aqui teria que funcionar nos dois ambientes.

---

## Resposta #3

**Daniel Sales** (@Daniel_Sales) — 04/07/2024, 13:39

Para o desktop vai ter que partir para algum plugin de camera

---
