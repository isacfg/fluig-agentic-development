# Dataset Sincronizado com filtro interno para mais de um campo

> **Fonte:** [https://fluiggers.com.br/t/dataset-sincronizado-com-filtro-interno-para-mais-de-um-campo/1912](https://fluiggers.com.br/t/dataset-sincronizado-com-filtro-interno-para-mais-de-um-campo/1912)
> **Categoria:** Formulários
> **Tags:** `dataset`
> **Criado em:** 10/05/2023, 10:09
> **Visualizações:** 378 | **Likes:** 1 | **Respostas:** 2

---

## Pergunta original

**Edgard** (@EDNC) — 10/05/2023, 10:09

Tenho um campo zoom em um formulário que faz uso de um dataset sincronizado, ocorre que o dataset só aceita a pesquisa pelo campo de código do cliente e precisaria que pesquisasse também pelo nome do cliente. Normalmente, em casos assim, com datasets comuns, eu capturo a sentença digitada e faço o filtro, porém por não haver a passagem de parâmetro de contraints no método onsync, fica a dúvida como capturar esse dado digitado. Já pesquisei no forum e na documentação da Totvs e não identifiquei uma maneira de fazer isso. Peço ajuda e agradeço desde já a atenção.

---

## Resposta #1

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/05/2023, 11:08

Nesses casos eu crio um campo novo no Dataset e nele eu concateno as informações que devem aparecer na pesquisa.

Mas aí no formulário eu crio o Zoom pra pesquisar o dataset e vários outros campos, readonly, com os dados que o dataset retornou.

Por exemplo, meu dataset com os centros de custos:
![image](https://fluiggers.com.br/uploads/default/original/1X/95d9f6c090de4ce9ba64eb8aa74de2f812ddf7a1.png)

Aí no formulário e tenho o zoom pra fazer a pesquisa e tenho os outros campos que vão conter os dados completos:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/750a6fc30e4905367fb643bb53246c2b2eb812ac_2_568x500.png)

---

## Resposta #2

**Edgard** (@EDNC) — 10/05/2023, 11:32

Poderia por gentileza mostrar como definiu seu defineStructure também ?

---

## Resposta #3 ✅ RESPOSTA ACEITA

**Bruno Gasparetto** (@Bruno_Gasparetto) — 10/05/2023, 12:26 | ❤️ 1

a estrutura ficou assim:

![image](https://fluiggers.com.br/uploads/default/original/1X/406702c2b6213f3865968a7cc68d08f5df962d56.png)

No formulário eu oculto esse zoom de pesquisa quando está em atividades que não precisa da pesquisa.

---
