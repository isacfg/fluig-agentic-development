# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - Mov - Violação FXLANOLDPRIM na inclusão de movimento

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/115012431627-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Viola%C3%A7%C3%A3o-FXLANOLDPRIM-na-inclus%C3%A3o-de-movimento](https://centraldeatendimento.totvs.com/hc/pt-br/articles/115012431627-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-Mov-Viola%C3%A7%C3%A3o-FXLANOLDPRIM-na-inclus%C3%A3o-de-movimento)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 18 de outubro de 2021 às 14:35

---

 **![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)**Tempo aproximado para leitura: **00:05:00 min****Ocorrência**

Devido ao índice único **FXLANOLDPRIM** da tabela de lançamentos, não foi possível realizar a inserção pois já existe na base de dados o lançamento \[IDLAN\] com os mesmos dados para os campos abaixo, favor verificar:
Num. Documento: \[Número do movimento\]
Cliente/Fornecedor: \[CodCFO\]
Tipo de Documento: \[Tipo Documento\] 
Filial: \[CodFilial\]
Série do Documento: \[Serie\]
Coligada do Cliente/Fornecedor: \[ColigadaCFO\]
Coligada: \[CodColigada\]
Reutilização: \[Reutilização\] 
Pagar ou Receber: \[pag/rec\]


**
![Imagem](https://centraldeatendimento.totvs.com/hc/article_attachments/360022788172/mceclip0.png)
**

**Ambiente**

Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.8X.


**Causa**

Esta mensagem ocorre pois a máscara do seu movimento possui um número de dígitos que ao gerar a numeração do lançamento Financeiro \[**Numeração do movimento** + **Sequencial do Tipo de documento** + **Separador do tipo de documento**\] ultrapassa o tamanho da numeração aceita pelo financeiro (tamanho do documento).
Outra possibilidade é a movimentação gerar mais que 100 parcelas e o tipo de documento não trabalhar com Sequencial em Letras a mensagem ocorrerá pois temos numeração matemática de 0 a 99 e o sequencial 100 não será gerado pelo sistema causando a violação da chave.

**Solução**

Para corrigir o problema de violação da chave FXLANOLDPRIM, veja o exemplo abaixo para melhor entendimento de como o sistema se comporta:

1.  A máscara do movimento possui 8 dígitos 
2.  O tipo de documento gera sequencial de letras (AA - ZZ) usando 2 casas para isso (+ o separador)
3.  O tamanho do Documento do financeiro possui 8 dígitos
4.  Numero do Movimento = 01234567
5.  Condição de pagamento = 30+60 Dias (Duas parcelas)

Ao salvar o movimento será feito:

-   Lançamento 1 = 01234567 -> Faltam dois dígitos do sequencial + o separador (/AA) pois o correto seria 01234567/AA mas como não tem espaço suficiente no tamanho do documento do financeiro ele trunca e "Salva" (em memória) o lançamento financeiro a numeração truncada
-   Lançamento 2 = 01234567 -> Faltam dois dígitos do sequencial + o separador (/AB) pois o correto seria 01234567/AB mas como não tem espaço suficiente no tamanho do documento do financeiro ele trunca. Contudo, ao tenta "Salvar" o segundo lançamento ocorre a violação da chave **FXLANOLDPRIN**, pois ele tem a mesma numeração da parcela anterior.

Existem duas formas de corrigir o problema:
**Opção 1** -  Na etapa **Mov-Identificação** deste tipo de movimento deverá alterar a máscara atual para uma que seja adequada à configuração do Financeiro

**Opção 2** - Neste caso, será necessário alterar o tamanho do documento nos parâmetros.
Acesse o menu **Ambiente | Parâmetros | Gestão de Estoque, Compras e Faturamento | Integrações | Financeira | Contas a pagar | Inclusão | "Tamanho do Número"**.

**Observação:** O valor deverá ser o somatório da quantidade de dígitos do movimento (Mascara do movimento) mais a quantidade de dígitos do sequencial (2) mais a quantidade de dígitos do separador(1). Portando, para este exemplo, marcado este campo (Tamanho do Número) para 11 (8 da numeração do movimento + 2 do Sequencial + 1 do separador) e salvo o movimento irá funcionar.


![Imagem](https://totvssuporte.zendesk.com/attachments/token/6wHukZFLPy17yqVco1lIlF1To/?name=inline795966997.png)



Outra opção de solução é: Trabalhar com sequencial de letras caso a empresa trabalhe com número alto de parcelas.

![Screenshot_42.png](https://centraldeatendimento.totvs.com/hc/article_attachments/4410946618135/Screenshot_42.png)


**Importante
**Se a Condição de pagamento for "A vista", pode ser que a inconsistência não ocorra, pois a numeração será gerada apenas uma vez, sem os sequenciais e não haverá um "segundo" lançamento para duplicar a base, mas ainda assim pode ser que o problema ocorra caso a própria numeração do movimento seja truncada devido ao seu tamanho.

Caso este documento não funcione, então deverá ser verificado o link : [DICAS - FXLANOLDPRIM](http://tdn.totvs.com/display/rm/2012/12/06/DICAS+-+FXLANOLDPRIM)
