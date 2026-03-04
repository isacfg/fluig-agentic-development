# Baixar html a partir de link externo

> **Fonte:** [https://fluiggers.com.br/t/baixar-html-a-partir-de-link-externo/3015](https://fluiggers.com.br/t/baixar-html-a-partir-de-link-externo/3015)
> **Categoria:** Ambiente Fluig
> **Criado em:** 10/10/2024, 10:54
> **Visualizações:** 66 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Eduardo Guimarães** (@Eduardo_Guimaraes) — 10/10/2024, 10:54

Bom dia pessoal.

Tenho um dataset que faz uma consulta em um sistema externo e ele já funciona corretamente. Um dos campos que essa api retorna é justamente um link .html com o conteúdo da requisição como se a pessoa tivesse feito a consulta manualmente. Esse link fica disponível para consulta apenas por 7 dias. O que eu gostaria era de salvar o conteúdo dessa página do link como anexo, independente do formato. Alguém sabe alguma ferramenta que possa me auxiliar para colocar no dataset ou mesmo no front end para fazer download desse html que é retornado?

---

## Resposta #1

**Leonardo Fioretti** (@leonardo.fioretti) — 23/10/2024, 23:58

Boa noite, Eduardo! Tudo bem?

Não sei se você chegou a solucionar esse problema já, mas…
Se você fizer uma requisição GET para a URL ele vai retornar o HTML da página (porque você estará simulando como se estivesse acessando pelo navegador), mas vale ressaltar que nesse caso você perde boa parte dos estilos e formatações.

Exemplo:

![image](https://fluiggers.com.br/uploads/default/optimized/2X/2/282e5067b3ce30387a5b1f55105644e6b8213f24_2_690x222.png)

Qualquer dúvida chama aí!

---
