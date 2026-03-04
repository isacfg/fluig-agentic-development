# Habilitando Monitoring Java Melody

> **Fonte:** [https://fluiggers.com.br/t/habilitando-monitoring-java-melody/112](https://fluiggers.com.br/t/habilitando-monitoring-java-melody/112)
> **Categoria:** Ambiente Fluig
> **Tags:** `java`, `monitoring`, `melody`
> **Criado em:** 15/03/2021, 10:05
> **Visualizações:** 1975 | **Likes:** 7 | **Respostas:** 4

---

## Pergunta original

**Igor Rodrigues** (@fluigor.com.br) — 15/03/2021, 10:05 | ❤️ 6

Você pode habilitar o monitoramento do JAVA MELODY em seu ambiente fluig, com este monitoramento é possível analisar transações, execução de Querys, performance de rede ,memória, conexão de banco e etc.

Para habilitar em seu ambiente Fluig, se direcione ao diretório de instalação e navegue até a estrutura **appserver\\domain\\configuration** edite o arquivo **Host.xml**

Procure pelo trecho de código abaixo.

```
<server auto-start="true" group="fluig" name="fluig1">
        <jvm name="default">
            <heap max-size="4g" size="2g"/>
            <jvm-options>
                <option value="-Dfile.encoding=utf8"/>
                <option value="-XX:MaxMetaspaceSize=1024m"/>
                <option value="-Djavamelody.disabled=true"/>


                <!-- Debug
                    <option value="-Xdebug"/>
                    <option value="-Xrunjdwp:transport=dt_socket,address=8787,server=y,suspend=n"/>
                -->
            </jvm-options>
        </jvm>
    </server> "
```

Altere o Valor da linha <option value=’’-Djavamelody.disabled=true’’/> para false.

Reinicie o Fluig, para acessar o monitoramento do JAVA Melody, digite após a http://servidor:porta/monitoring

![image](https://fluiggers.com.br/uploads/default/optimized/1X/b5cc5acde9ef1c16aa34c4edee5afebb2f33a0e6_2_690x460.jpeg)

---

## Resposta #1

**Lucas Lemuel** (@lucaslemuel_f) — 05/04/2021, 10:39 | ❤️ 1

Bom dia [@fluigor.com.br](/u/fluigor.com.br), tudo certo ?

Realizei a alteração alterando o valor de “true” para “false” e reiniciado os serviços do fluig.
Ao tentar acessar, retorna a mensagem “Forbidden” na tela. No error log, não sobe informação a respeito.
“Failed to load resource: the server responded with a status of 403 (Forbidden)”

O XML se encontra desta forma:
![image](https://fluiggers.com.br/uploads/default/original/1X/a21ed3c584b8160dcb28c6e1e12c43f83c213c1b.png)

Mensagem ao tentar acessar:

![image](https://fluiggers.com.br/uploads/default/optimized/1X/28158d902399d9ed8b72c80ffb5cb47ce217cd4d_2_690x381.png)

Sabe me informar se possui algo a mais para liberar ? Firewall ? Permissões ?
Efetuei tentativa de acesso após logar na plataforma e também não obtive êxito.

Versão: Lake 1.7.0-210330

---

## Resposta #2

**Daniel Cabral Santos** (@daniel.cabral) — 06/04/2021, 09:51

Same here! :frowning: Tem algum outro truque, [@fluigor.com.br](/u/fluigor.com.br) ?

---

## Resposta #3

**Igor Rodrigues** (@fluigor.com.br) — 06/04/2021, 14:52

Ambiente Linux ou Windows [@lucaslemuel\_f](/u/lucaslemuel_f) ?

---

## Resposta #4

**Romulo Pereira** (@romuloccomp) — 06/04/2021, 15:48

Aqui também.

Ambiente Windows :expressionless:

---

## Resposta #5

**Lucas Lemuel** (@lucaslemuel_f) — 07/04/2021, 15:11

[@fluigor.com.br](/u/fluigor.com.br)
Windows Server 2012 R2

---

## Resposta #6

**Igor Rodrigues** (@fluigor.com.br) — 08/04/2021, 11:03

Pessoal,

no arquivo de HOST.xml existe uma TAG

```auto
<interfaces>
        <interface name="management">
            <inet-address value="192.168.1.10"/>
        </interface>
        <interface name="public">
            <inet-address value="192.168.110"/>
        </interface>
    </interfaces>
```

O acesso ao Monitoring so pode ser feito por estes IPS, ou seja local.

Importante verificar no arquivo de Domain.xml a tag abaixo deve conter apenas o essencial.

COMO ELA GERALMENTE É

```auto
<property name="NETWORK_IP_ADDRESSES" value="127.0.0.1,127.0.0.1,0:0:0:0:0:0:0:1,192.168.1.10,fe80:0:0:0:d42f:eeec:42e:64e4%eth3,fe80:0:0:0:0:5efe:c0a8:1e29%net3,fe80:0:0:0:0:100:7f:fffe%net4"/>
```

COMO DEVE FICAR

```auto
<property name="NETWORK_IP_ADDRESSES" value="127.0.0.1,192.168.1.10"/>
```

abraços

---

## Resposta #7

**Lucas Lemuel** (@lucaslemuel_f) — 12/04/2021, 15:15

> ![](https://fluiggers.com.br/user_avatar/fluiggers.com.br/fluigor.com.br/48/1817_2.png) fluigor.com.br:
>
> > abaixo deve conter apenas o essencial.
> >
> > COMO ELA GERALMENTE É

Boa tarde,

Realizado tentativa de acesso através dos endereços IPs da TAG informada, tive o mesmo retorno anterior, “Forbidden”.

Acessando pelo endereço que possui na tag da base local,

> ```
> <property name="NETWORK_IP_ADDRESSES" value="127.0.0.1,127.0.0.1,0:0:0:0:0:0:0:1,192.168.50.18,fe80:0:0:0:2931:803b:5b36:19ab%eth4,fe80:0:0:0:0:5efe:c0a8:3212%net4"/>
> ```

Testei acesso através dos endereços IPs da seguinte forma:
[http://192.168.50.18:8080/monitoring](http://192.168.50.18:8080/monitoring)
[http://127.0.0.1:8080/monitoring](http://127.0.0.1:8080/monitoring)

Estive verificando a documentação [Monitoramento de serviços da plataforma - fluig Developer - TDN (totvs.com)](https://tdn.totvs.com/pages/releaseview.action?pageId=284881802#AcessoREST-600735331) para verificar se era algo relacionado a alguma configuração, mas não encontrei algo relacionado apenas ao “/monitoring” na url.
Sabe informar se possui documentação do fluig relacionado a este tema ou algum outro arquivo que devo verificar outros valores ?

Tenho retorno através das API da documentação acima, apenas ao http://:/monitoring que me retorna “Forbidden”

Obrigado.

---

## Resposta #8

**Felipe Braz** (@felipe.braz) — 30/10/2023, 12:59

Alguém conseguiu usar? O meu tentei de tudo aqui e continua mortinho

---

## Resposta #9

**Matheus Mósso** (@msmosso) — 29/10/2024, 23:11

Subindo a thread. Alguém consegue acessar?

---
