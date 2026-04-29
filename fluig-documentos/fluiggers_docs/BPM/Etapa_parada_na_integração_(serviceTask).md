# Etapa parada na integração (serviceTask)

> **Fonte:** [https://fluiggers.com.br/t/etapa-parada-na-integracao-servicetask/3537](https://fluiggers.com.br/t/etapa-parada-na-integracao-servicetask/3537)
> **Categoria:** BPM
> **Tags:** `processo`, `bpm`, `servicetask`
> **Criado em:** 09/01/2026, 15:19
> **Visualizações:** 23 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Artur** (@Artur) — 09/01/2026, 15:19

Boa tarde, Pessoal, espero que estejam bem;

Estou enfrentando um problema com meu script de serviceTask do fluig, sempre que ele executa, ele trava na etapa e não sai;

```auto
function servicetask64(attempt, message) {

    log.info("recebimento_pre_entrada_nf serviceTask21 INICIO");

    if (hAPI.getCardValue("TPCHV") == 'registra_pix' && hAPI.getCardValue("CHVPIX") == 'registra_pix') {

        GravaPixFornecedorProtheus();

    }

    log.info("recebimento_pre_entrada_nf serviceTask21 FINAL");

    return true;

}
```

Tenho esse código e mesmo ele não caindo na função de gravar o pix, ou seja, passando direto do if, ele ainda continua travando;

O que eu percebi foi que no log ele registra o seguinte:

`INFO 14:40:44 - [com.datasul.technology.webdesk.customization.ScriptingLog] (pool-547-thread-1) recebimento_pre_entrada_nf serviceTask21 INICIO INFO 14:40:44 - [com.datasul.technology.webdesk.customization.ScriptingLog] (pool-547-thread-1) recebimento_pre_entrada_nf serviceTask21 FINAL INFO 14:40:44 - [com.fluig.foundation.lock.FDNLockServiceBean] (pool-547-thread-1) Verificando se já lock para o registro FDNLockPK{tenantId=1, featureType=0, itemId=3558} INFO 14:40:44 - [com.fluig.foundation.lock.FDNLockServiceBean] (pool-547-thread-1) Criado lock FDNLock{fdnLockPK=FDNLockPK{tenantId=1, featureType=0, itemId=3558}, uuid='b1251be8-3a66-47c1-9133-8c78baeb9cb2'}`

Parece que após executar o servicetask, ele realiza o lock da solicitação e já libera logo em seguida, porém, acho que o ideal seria abrir o lock, executar o servicetask e finalizar o lock;

E quando ele passa pela função, ele registra os dados no protheus, ou seja, realiza a integração, porém, ainda assim, continua travado na etapa;

---
