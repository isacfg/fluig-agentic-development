# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MOV - Como exibir o campo Chave de Acesso em Movimento de Entrada

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008349147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-o-campo-Chave-de-Acesso-em-Movimento-de-Entrada](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115008349147-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MOV-Como-exibir-o-campo-Chave-de-Acesso-em-Movimento-de-Entrada)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Parametrização
> **Data:** 2 de dezembro de 2021 às 17:03

---

**
![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
**Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Como fazer para exibir o campo Chave de Acesso em Movimento de entrada?

![image2017-4-20 15:39:41.png](https://tdn.totvs.com/download/attachments/273313358/image2017-4-20%2015%3A39%3A41.png?version=1&modificationDate=1492717033000&api=v2)

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento – A partir da 11.82.

**Solução
**

1.  Acessar o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | localizar o tipo de movimento que irá aplicar a parametrização e Avançar**.
    Caso encontre dificuldades para localizar o tipo de movimento, [clique aqui](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360003051691-RM-MOV-Como-descobrir-a-classifica%C3%A7%C3%A3o-e-menu-do-Tipo-de-Movimento).

    **Etapa Mov - Emitente/Destinatário** 

    ![Imagem](https://tdn.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A37%3A0.png?version=1&modificationDate=1492717033000&api=v2)

    Emitente deverá ser = Fornecedor

    Destinatário deverá ser = Empresa


2.  **Etapa Fis - Escrituração 1/2
    **Nesta Etapa deverá ser marcada a opção **Gerar Escrituração** e no campo **Tipo Documento Escrituração** deverá ser selecionado o tipo de documento de **NF-e, CT-e ou NFC-e:**

![Imagem](https://tdn.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A39%3A49.png?version=1&modificationDate=1492717033000&api=v2)

**Observação:** O código do modelo documento que o sistema verifica é esse:

![Imagem](https://tdn.totvs.com/download/attachments/273313358/image2017-4-20%2014%3A44%3A54.png?version=1&modificationDate=1492717033000&api=v2)

Para as demais parametrizações, verifique o documento: [Exibição do campo Chave de Acesso.](https://tdn.totvs.com/display/public/LRM/MOV0005_Exibicao_do_campo_Chave_de_Acesso)
