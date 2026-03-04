# Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - MAT - Faturar/Receber Movimento Via WebService

> **Fonte:** [https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345707-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturar-Receber-Movimento-Via-WebService](https://centraldeatendimento.totvs.com/hc/pt-br/articles/360000345707-Cross-Segmentos-TOTVS-BackOffice-Linha-RM-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-MAT-Faturar-Receber-Movimento-Via-WebService)
> **Caminho:** Cross Segmentos > TOTVS Backoffice (Linha RM) > TOTVS Gestão de Estoque, Compras e Faturamento (NUCLEUS) > Movimento
> **Data:** 15 de dezembro de 2021 às 09:44

---

![time.png](https://centraldeatendimento.totvs.com/hc/article_attachments/360023589592/time.png)
 Tempo aproximado para leitura: **00:03:00min**

**Dúvida
**Este artigo tem por finalidade ensinar como realizar o Faturamento/Recebimento de movimento via WebService. Será utilizado o aplicativo SoapUI para consumo do WebService do RM.

**Ambiente
**Cross Segmentos - TOTVS BackOffice Linha RM - TOTVS Gestão de Estoque, Compras e Faturamento - A partir da versão 11.80.

**Solução**

-   Apenas movimentos configurados para faturamento/recebimento **automático** podem ser utilizados;
-   Apenas os campos apresentados no SCHEMA podem ser informados para o consumo.

**XML do Processo**

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

`<``MovFaturamentoProcParams``>`

            `<``movCopiaFatPar``>`

                `<``CodColigada``>1</``CodColigada``>`

                `<``CodSistema``>T</``CodSistema``>`

                `<``CodTmvDestino``>1.1.71</``CodTmvDestino``>`

                `<``CodTmvOrigem``>1.1.11</``CodTmvOrigem``>`

                `<``CodUsuario``>mestre</``CodUsuario``>`

                `<``GrupoFaturamento``></``GrupoFaturamento``>`

                `<``IdExercicioFiscal``>22</``IdExercicioFiscal``>`

                `<``IdMov``>`

                    `<``int``>9993</``int``>`

                `</``IdMov``>`

                `<``TipoFaturamento``>0</``TipoFaturamento``>`

                `<``dataBase``>2017-11-21</``dataBase``>`

                `<``dataEmissao``/>`

                `<``dataSaida``/>`

                `<``efeitoPedidoFatAutomatico``>2</``efeitoPedidoFatAutomatico``>`

                `<``listaMovItemFatAutomatico``>`

            `<``MovItemFatAutomatico``>`

                `<``CodColigada``>1</``CodColigada``>`

                `<``Checked``>1</``Checked``>`

                `<``IdMov``>9993</``IdMov``>`

                `<``NSeqItmMov``>1</``NSeqItmMov``>`

                `<``Quantidade``>1,0000</``Quantidade``>`

            `</``MovItemFatAutomatico``>`               

                `</``listaMovItemFatAutomatico``>`

                `<``numeroMov``></``numeroMov``>`

                `<``realizaBaixaPedido``>true</``realizaBaixaPedido``>`

            `</``movCopiaFatPar``>`                                                         

        `</``MovFaturamentoProcParams``>`

[Clique aqui](https://tdn.totvs.com/display/public/LRM/WSN0002_Faturar_Receber_Movimento_Via_WebService#PassoaPasso--1101890723) para conferir os demais processos a serem realizados.
