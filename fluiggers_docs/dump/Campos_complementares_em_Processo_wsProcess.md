# Campos complementares em Processo wsProcess

> **Fonte:** [https://fluiggers.com.br/t/campos-complementares-em-processo-wsprocess/644](https://fluiggers.com.br/t/campos-complementares-em-processo-wsprocess/644)
> **Categoria:** API`s Fluig
> **Criado em:** 08/09/2021, 23:44
> **Visualizações:** 1380 | **Likes:** 4 | **Respostas:** 4

---

## Pergunta original

**Mauricio Freitas** (@mauriciolanner) — 08/09/2021, 23:44 | ❤️ 1

Boa noite pessoal, alguém aqui que já tenha feito aprovação de compra pelo Fluig usando o wsProcess. Eu estou usando essa documentação para criar a integração [https://tdn.totvs.com/display/public/LRM/TTVHEA\_DT\_Faturamento\_Parcial\_Automatico](https://tdn.totvs.com/display/public/LRM/TTVHEA_DT_Faturamento_Parcial_Automatico). Porém o cliente quer alguns campos complementares no processo, então eu criei os campos no Rm e tentei enviar da seguinte forma:

```auto
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tot="http://www.totvs.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <tot:ExecuteWithParams>
         <!--Optional:-->
         <tot:ProcessServerName>MovFaturamentoProc</tot:ProcessServerName>
         <!--Optional:-->
         <tot:strXmlParams><![CDATA[<MovFaturamentoProcParams>
    <movCopiaFatPar>
        <CodColigada>1</CodColigada>
        <CodSistema>T</CodSistema>
        <CodTmvDestino>1.1.06</CodTmvDestino>
        <CodTmvOrigem>1.1.10</CodTmvOrigem>
        <CodUsuario>mestre</CodUsuario>
        <GrupoFaturamento></GrupoFaturamento>
        <IdExercicioFiscal>1</IdExercicioFiscal>
        <IdMov>
            <int>37741</int>
        </IdMov>
        <TipoFaturamento>0</TipoFaturamento>
        <dataBase>2019-09-19</dataBase>
        <dataEmissao />
        <dataSaida />
        <efeitoPedidoFatAutomatico>2</efeitoPedidoFatAutomatico>
        <listaMovItemFatAutomatico>
            <MovItemFatAutomatico>
                <CodColigada>1</CodColigada>
                <Checked>1</Checked>
                <IdMov>37741</IdMov>
                <NSeqItmMov>undefined</NSeqItmMov>
                <Quantidade>undefined</Quantidade>
            </MovItemFatAutomatico>
        </listaMovItemFatAutomatico>
        <numeroMov></numeroMov>
        <realizaBaixaPedido>false</realizaBaixaPedido>
    </movCopiaFatPar>
    <TMOVCOMPL>
        <CODCOLIGADA>1</CODCOLIGADA>
        <IDMOV>-1</IDMOV>
        <APROVADOR_1>admin</APROVADOR_1>
        <APROVADOR_2>admin</APROVADOR_2>
        <APROVADOR_3>admin</APROVADOR_3>
        <APROVADOR_4>admin</APROVADOR_4>
    </TMOVCOMPL>
</MovFaturamentoProcParams>]]></tot:strXmlParams>
      </tot:ExecuteWithParams>
   </soapenv:Body>
</soapenv:Envelope>
```

O que acontece é que o campos não chegam no RM, alguém tem uma ideia pra fazer esse processo?

---

## Resposta #1

**Mauricio Freitas** (@mauriciolanner) — 10/09/2021, 09:38 | ❤️ 3

Em contato com o suporte da Totvs, não é possível gravar campos em um processo de movimentação. Então, não é possível. A solução é pegar o IDMOV que retorna e fazer um editView do processo logo na sequencia.

---

## Resposta #2

**Victor Castro** (@victorcastro) — 16/09/2021, 11:30

Bom dia Maurício.

Poderia me dar um exemplo de como você fez esse editView?

Acho que já precisei fazer isso em algum momento e não consegui rs

---

## Resposta #3

**Mauricio Freitas** (@mauriciolanner) — 16/09/2021, 16:58

Opa, eu ainda não fiz esse código, assim que eu tiver eu posto aqui

---

## Resposta #4

**Leticia Ingrid** (@Leticia_Ingrid) — 15/01/2025, 16:28

Boa tarde! você teve que alterar algum parâmetro para receber o IDMOV como retorno do ExecuteWithParams? eu só recebo retorno 1 como resultado

---

## Resposta #5

**Mauricio Freitas** (@mauriciolanner) — 01/04/2025, 14:17

Fazia tempo que não andava por aqui, espero que tenha solucionado seu problema.

---

## Resposta #6

**Eduardo Wallace** (@Eduardo_Wallace) — 26/04/2025, 12:17

Pessoal, uma ótima tarde.

Tudo na paz?

Alguém poderia me disponibilizar um exemplo de uso do webservice wsProcess do RM no Fluig em JS?

Fiz os testes no SOAP UI e já entendemos como devo passar, mas estou tendo dificuldades em como fazer meu javascript no Fluig para usar ele.

Atualmente usamos somente o wsDataserver.

Obrigado!

---

## Resposta #7

**Mauricio Freitas** (@mauriciolanner) — 09/05/2025, 16:45

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/eduardo_wallace/48/1630_2.png) Eduardo\_Wallace:
>
> > wsProcess

Você precisa cadastrar o serviço no painel de controle do fluig

Nesse link tem diversos exemplos de uso no fluig

[https://apitotvslegado.z15.web.core.windows.net/#/rm-lista-servicos](https://apitotvslegado.z15.web.core.windows.net/#/rm-lista-servicos)

---
