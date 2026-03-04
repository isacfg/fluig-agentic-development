# Visualização de Datasets

> **Fonte:** [https://tdn.totvs.com/pages/viewpage.action?pageId=239021220](https://tdn.totvs.com/pages/viewpage.action?pageId=239021220)

---

# Índice



# Objetivo

Este guia tem o objetivo de apresentar uma visão geral da consulta e desenvolvimento de datasets com o fluig Studio.



# Pré-requisitos

Para que se tenha uma compreensão completa destas informações, alguns conhecimentos são considerados pré-requisitos, entre eles:

-   Visão geral sobre o fluig e sobre o [Desenvolvimento de Datasets](https://tdn.totvs.com/display/fluig/Desenvolvimento+de+Datasets).



Atenção

Para que um usuário que não é administrador da empresa possa criar e visualizar datasets via fluig Studio é necessário que ele possua a permissão "Configurar Datasets". Esta permissão pode ser concedida pelo administrador através do item [Permissões](https://tdn.totvs.com/pages/viewpage.action?pageId=234455792) disponível no agrupador "Pessoas" do Painel de Controle do TOTVS Fluig Plataforma.



# Consultando Datasets

Pelo fluig Studio, através da visão Visualização de Dataset, é possível consultar os Datasets disponíveis bem como visualizar o seu conteúdo. Com isto é possível verificar quais os campos disponíveis, tanto para filtros quanto para acesso, bem como fazer testes sobre Datasets avançados.

Os passos para consultar os dados do dataset são apresentados abaixo:

Na perspectiva Fluig, acessa a aba **Visualização de Dataset**, e clique em **Consultar Dataset**.



Na janela aberta, selecione o servidor fluig e escolha o dataset que deseja consultar. O usuário também pode escolher em quantos registros a busca será limitada.

Após clicar em finalizar aguarde o procedimento de consulta ser concluído. A tabela será preenchida com as colunas e os respectivos registros salvos no dataset.

Neste exemplo, é possível visualizar os campos disponíveis (conta, título, natureza e tipo) e os registros retornados pelo Dataset. Note que estas informações são essenciais para o uso dos Datasets, principalmente quando há necessidade de restringir os dados que queremos acessar.





Veja a seguir o vídeo *how to* que demonstra a consulta de dados de um Dataset interno pelo fluig Studio.

# Desenvolvimento de Datasets sobre a Plataforma

Datasets desenvolvidos sobre a plataforma são criados utilizando a linguagem JavaScript, sendo possível criar o dataset a partir de valores fixos ou realizar chamadas a outros datasets e serviços externos.

Para desenvolver um dataset, selecione um projeto fluig, clique com o botão direito do *mouse* e escolha a opção **New** → **Dataset Customizado**.

Preencha dados como o nome do dataset e descrição e clique em **Finish**.

Um arquivo com extensão .js será criado e aberto para edição imediatamente. Neste arquivo deverá ser desenvolvido o dataset.


Veja a seguir o vídeo How To que demonstra a criação de um dataset avançado com dados fixos.



Vídeos How To

Veja mais vídeos how to sobre datasets em: [Datasets - Consulta, criação e registros](https://tdn.totvs.com/pages/viewpage.action?pageId=270925461).
