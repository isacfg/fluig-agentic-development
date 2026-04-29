# Alterar caminho de arquivo de logs

> **Fonte:** [https://fluiggers.com.br/t/alterar-caminho-de-arquivo-de-logs/2993](https://fluiggers.com.br/t/alterar-caminho-de-arquivo-de-logs/2993)
> **Categoria:** Ambiente Fluig
> **Criado em:** 30/09/2024, 10:46
> **Visualizações:** 221 | **Likes:** 5 | **Respostas:** 9

---

## Pergunta original

**Matheus Mósso** (@msmosso) — 30/09/2024, 10:46

Bom dia pessoal,

Alguém sabe informar se é possível alterar o caminho onde o fluig salva os arquivos de log?

Estamos com uma situação onde o Fluig foi instalado na unidade C:/, onde não conseguimos aumentar o espaço do disco, e foi criada uma unidade D:/ com esse objetivo, mas o processo de transferência está sendo manual.

Obrigado desde já,

Att.,

Matheus Mósso

---

## Resposta #1 ✅ RESPOSTA ACEITA

**venturelli** (@venturelli) — 30/09/2024, 12:20 | ❤️ 1

O caminho dos logs é definido pela propriedade `jboss.server.log.dir`.

Essa propriedade pode ser modificada pelo `domain.conf` adicionando a seguinte linha:

`JAVA_OPTS="$JAVA_OPTS -Djboss.server.log.dir=/novo/diretorio/logs/"`

Outra opção é adicionar no arquivo `domain.sh` mas não é uma boa prática.

Isso vai mudar **todos** os logs. Se quiser mudar apenas o server.log, você pode editar o domain.xml também:

Localize a tag:
`<file relative-to="jboss.server.log.dir" path="server.log"/>`

E altere para:
`<file path="/novo/diretorio/logs/server.log"/>`

---

## Resposta #2

**Bruno Gasparetto** (@Bruno_Gasparetto) — 30/09/2024, 12:53

Acho que vale também um gerenciamento melhor dos logs no sentido de não exibir os INFO, deixa exibir somente os erros, que são realmente o importante em produção.

Ao menos a fábrica que nos atendia colocava um monte de `log.info` espalhado no código (como forma de debug) e nunca removia isso ao enviar pra produção, deixando tudo sujo e fazendo o log ficar gigante. Além disso toda vez que salva um formulário ele vai inteiro pro log como INFO, deixando o log ainda maior (e muitas vezes nem seria interessante ter os dados do formulário no log devido a alguma segurança dos dados).

---

## Resposta #3

**Matheus Mósso** (@msmosso) — 30/09/2024, 14:18

Muito obrigado, [@venturelli](/u/venturelli)!

De qualquer forma, como o [@Bruno\_Gasparetto](/u/bruno_gasparetto) disse muito bem, não faz sentido ter tantos log.info em produção, vou discutir com o time sobre isso.

Abraço!

---

## Resposta #4

**Matheus Mósso** (@msmosso) — 01/10/2024, 08:52

Bom dia [@venturelli](/u/venturelli),

Uma dúvida: Usamos nosso Fluig em servidor Windows, como eu apontaria o log para ser salvo em D:/logs/server.log?

Pelo que percebi ele usa o caminho relativo.

Abraço!

---

## Resposta #5

**venturelli** (@venturelli) — 01/10/2024, 10:24 | ❤️ 1

Tanto o JAVA\_OPTS quanto a alteração no xml que eu passei são caminhos absolutos, mas eu uso linux. Para windows, eu não consigo testar, mas acredito que seja dessa forma:

Via domain.conf.bat (adicione após o label `:JAVA_OPTS_SET`):

```bash
:JAVA_OPTS_SET
set "JAVA_OPTS=%JAVA_OPTS% -Djboss.server.log.dir=D:\logs\"
```

Ou via domain.xml:

```xml
<file path="D:\logs\server.log"/>
```

> Note que no domain.xml foi removido o atributo “relative-to” que normalmente existe.

Lembrando que no domain.conf.bat vai alterar para todos os tipos de log e no xml apenas para o log principal.

---

## Resposta #6

**Matheus Mósso** (@msmosso) — 01/10/2024, 14:32

Funcionou perfeitamente, muito obrigado mais uma vez!

---

## Resposta #7

**Matheus Mósso** (@msmosso) — 14/10/2024, 13:30

[@venturelli](/u/venturelli) Boa tarde! Percebi que, ao alterar o caminho do log, a visualização do log pela Central de Diagnósticos parou de funcionar. Existe alguma outra configuração que necessite ser realizada ou o caminho do log fica “chapado” no código?

Obrigado desde já.

---

## Resposta #8

**venturelli** (@venturelli) — 14/10/2024, 22:44 | ❤️ 1

Parece um bug mesmo referente a retirada do `relative-to` acho que vale um pedido de correção.

Como paliativo, dá pra voltar o relative-to mas apontar para outra variável:

no arquivo `host.xml`, após a tag `extensions` adicionar a tag `paths`:

```auto
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<host xmlns="urn:jboss:domain:10.0" name="master">

    <extensions>
        <extension module="org.jboss.as.jmx"/>
        <extension module="org.wildfly.extension.core-management"/>
        <extension module="org.wildfly.extension.elytron"/>
    </extensions>

    <paths>
        <path name="jboss.server.other.log.dir" path="D:\logs\"/>
    </paths>

    <management>
        <!--- ... -->
    </management>
    <!--- ... -->
</host>
```

No arquivo domain.xml, voltar o relative-to

```auto
<file path="server.log" relative-to="jboss.server.other.log.dir"/>
```

E no domain.conf.bat (ou domain.conf se fosse linux):

```auto
set "JAVA_OPTS=%JAVA_OPTS% -Djboss.server.other.log.dir=D:\logs\"
```

Apenas uma correção, que vou ajustar no principal. Não deve ser adicionado no final do arquivo, mas antes da linha com o label `:JAVA_OPTS_SET`

---

## Resposta #9

**Matheus Mósso** (@msmosso) — 16/10/2024, 15:59

Excelente [@venturelli](/u/venturelli). Funcionou perfeitamente. Apenas mais uma dúvida: ao baixar o log pela opção ‘Baixar log do servidor completo’, na página Painel de Controle > Controle de Log, o arquivo é baixado contendo a data atual no nome, mas o arquivo compactado é um log de 02/10.

Existe alguma configuração para isso também?

Obrigado desde já.

![image](https://fluiggers.com.br/uploads/default/original/2X/c/c7e89aa25783231773777225c64c91b728a9ff44.png)

![image](https://fluiggers.com.br/uploads/default/original/2X/7/7f05cb983958b8e46879201516445f2a9871f393.png)

![image](https://fluiggers.com.br/uploads/default/original/2X/5/5e0e4800b5ee3d1c52c3c348d80055420e9ab72c.png)

---

## Resposta #10

**venturelli** (@venturelli) — 21/10/2024, 08:50 | ❤️ 1

Esse parece estar pegando diretamente da variável `jboss.server.log.dir`. Ou segue a linha de alterar essa variável e mudar todos os logs do sistema mesmo, ou só via chamado pedindo correção pra pegar do ponto certo.

---

## Resposta #11

**Allan Reichert** (@allan.reichert) — 21/10/2024, 16:33

Olá, sobre não conseguir aumentar a partição, vou compartilhar uma ideia, pois precisei em uma situação e fiquei quebrando a cabeça por dias. Caso não permita mover a partição seguinte, pode clonar o disco e redimensionar o novo conforme necessário. Talvez chegue num beco sem saída em algum momento com esse espaço em disco…

---

## Resposta #12

**Wasley Santos** (@Wasley_Santos) — 25/10/2024, 23:09 | ❤️ 1

Sofri com isso.
Para contornar e não ocorrer esquecimento, um parametro definido em um formulario (que criei como parametros diversos) onde defino se meus logs serão exibidos. Ai ao inves de eu chamar log.info direto no código, eu criei uma função que recebe a variavel que vai ser impressa, o tipo de log e no meu script eu chama o parametro para ver se ele ta ativo ou nao para imprimir ou nao.

---

## Resposta #13

**Pietro** (@pietro) — 03/09/2025, 12:46

Não acho que vá ajudar tanto após tanto tempo.

Mas caso alguém esteja com esse problema mencionado (produção ter muitos logs ativos), talvez seja interessante usar o IP do servidor, pelo menos aqui utilizamos 2 IP’s diferentes, basta chamar a fluigAPI para o back 'fluigAPI.getPageService().getServerURL() ’ ou ‘top.WCMAPI.serverURL’ para o front, e avaliar parcialmente com contains ou indexOF ou por o IP inteiro, deve ter outras formas de validar sem depender de um form nem dessa api também.

---
