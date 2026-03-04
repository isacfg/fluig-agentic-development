# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - CNT - Contrato 2.0 - Conversor 1.0 para 2.0

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/33144489978903-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Conversor-1-0-para-2-0](https://centraldeatendimento.totvs.com/hc/pt-br/articles/33144489978903-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-CNT-Contrato-2-0-Conversor-1-0-para-2-0)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Gestão De Contratos
> **Data:** 1 de agosto de 2025 às 16:21

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/33144468238359)
 Tempo aproximado para leitura: **00:02:00 min** 


**Dúvida**
Como converter um Contrato para a versão 2.0?

**Ambiente**
Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A Partir das Versões 12.1.2502.180, 12.1.2506.122 e superiores.

**Solução**

⚠️ O conversor é um facilitador no processo de transferência das informações, mas é necessário uma validação rigorosa dos valores convertidos.

O conversor tem como objetivo acelerar a transferência dos contratos cadastrados na versão 1.0 para a versão 2.0. Ambos os contratos utilizam as mesmas tabelas no banco de dados; desta forma, o conversor faz o ajuste dos campos que mudaram de localização e finalidade, além de solicitar os novos campos necessários para a geração das parcelas.

Para utilização do processo, deve ser liberado a permissão no perfil vinculado ao usuário através do caminho: **Módulo Serviços Globais > Segurança > Perfis > Sistema: Gestão de Estoque, Compras e Faturamento > Acesso a Menus > \[05\] Contratos > habilite a permissão Converte contrato 1.0 para 2.0:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33144468239127)

O processo ficará disponível no menu **Contratos > Manutenção de Contrato > Selecione o Contrato > Processos > Conversor contrato 1.0 para 2.0:**

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33144489969687)

Ao acessar o processo de conversão de contrato, será carregado alguns campos do contrato antigo (1.0). Estes campos possuem finalidade informativa e não podem ser alterados. Será apresentado também colunas que devem ser preenchidas para a correta conversão do contrato.
 

**Colunas do contrato antigo (1.0) — NÃO podem ser alteradas:**

-   **Id. Contrato:** Identificador do contrato.
-   **Código:** Código do contrato.
-   **NSeq. Item:** Número sequencial do item no contrato.
-   **Código do pagamento a prazo:** Aba Cabeçalho, do item de contrato.
-   **Código da condição de pagamento Pagamento:** Aba Condições Gerais, do item de contrato.
-   **Produto/Serviço:** Produto ou serviço do item de contrato.
-   **Natureza:** Informa se o contrato é de Compra ou Venda **(opção Ambos foi descontinuada).**
     

**Colunas do contrato novo (2.0) — Devem ser avaliadas e/ou preenchidas:**

-   **Tipo Faturamento:** Informar se o contrato será Periódico, Medição por valor ou Medição por quantidade.
-   **Periodicidade:** Informar a periodicidade do contrato: Semanal, Quinzenal, Mensal, Semestral ou Anual.
-   **Dia Vencimento:** Informar o dia do vencimento das parcelas.
-   **Dia Vencimento (2):** Informar o segundo dia de vencimento das parcelas, quando a periodicidade for Quinzenal.

![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/33144468239511)

**Preenchimento Padrão (Default):**

-   **Tipo Faturamento:** Sempre que o contrato antigo for do tipo Periódico ou Não periódico, o valor padrão será **Periódico**.
    Quando for do tipo **Medição**, o campo deverá ser preenchido **manualmente** com o tipo da medição: **Por valor ou Por quantidade.**
-   **Periodicidade:** Campo novo — deverá ser preenchido manualmente.
-   **Dia Vencimento:** Será preenchido com o campo Dia do Faturamento, que está no item Condições Gerais. Pode ser alterado, caso desejado.
-   **Dia Vencimento (2):** Campo novo — deverá ser preenchido manualmente.
     

**Consistência dos campos:**

-   **Tipo Faturamento:** Campo só pode ser alterado quando vier vazio, ou seja, quando o contrato de origem for de **Medição.**.
-   **Dia Vencimento:** Campo deve ser preenchido respeitando a Periodicidade. Quando a periodicidade for Semanal, deve ser preenchido com valores de 1 a 6, sendo:
    1 — Domingo;
    2 — Segunda;
    3 — Terça;
    4 — Quarta;
    5 — Quinta;
    6 — Sexta;
    7 — Sábado.
    Para as demais periodicidades, deve ser preenchido com valores de 1 a 31.
-   **Dia Vencimento (2):** Campo só pode ser preenchido quando a periodicidade for Quinzenal. Deve ser preenchido com valor **maior** que o Dia Vencimento.

**Observação**

-   O conversor é um facilitador no processo de transferência das informações, mas é necessário uma **validação rigorosa dos valores convertidos.** Os valores dos contratos após a conversão poderão apresentar diferenças entre as versões 1.0 e 2.0. Por isso, é **imprescindível realizar a validação após a conversão;**
-   É recomendado realizar simulações em base de dados de homologação com diferentes tipos de contratos para entendimento do processo;
-   Realizar **backup** antes de iniciar a conversão, pois após convertidos, os contratos **só serão visualizados na versão 2.0**;
-   Caso utilize previsões financeiras geradas pelo processo de contratos 1.0, estas deverão ser excluídas. Isso se faz necessário porque a regra do processo foi totalmente revisitada, não sendo possível aproveitar a anterior de forma satisfatória. O processo de exclusão de previsão financeira pode ser realizado para “n” contratos simultaneamente;
-   **Aditivos** convertidos não podem ser cancelados. Ao tentar, o sistema apresentará mensagem impeditiva;
-   **Reajustes** convertidos não podem ser cancelados. Tentativas serão impedidas pelo sistema;

**Saiba mais:** [**05\. Contratos 2.0 | Conversor contrato 1.0 para 2.0**](https://tdn.totvs.com/display/LRM/05.+Contratos+2.0+%7C+Conversor+contrato+1.0+para+2.0)
