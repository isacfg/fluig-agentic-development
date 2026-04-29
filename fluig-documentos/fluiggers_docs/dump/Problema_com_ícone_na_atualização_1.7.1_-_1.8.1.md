# Problema com ícone na atualização 1.7.1 -> 1.8.1

> **Fonte:** [https://fluiggers.com.br/t/problema-com-icone-na-atualizacao-1-7-1-1-8-1/2599](https://fluiggers.com.br/t/problema-com-icone-na-atualizacao-1-7-1-1-8-1/2599)
> **Categoria:** Ambiente Fluig
> **Tags:** `18`, `atualização`
> **Criado em:** 26/02/2024, 18:32
> **Visualizações:** 126 | **Likes:** 0 | **Respostas:** 1

---

## Pergunta original

**Daniel Cabral Santos** (@daniel.cabral) — 26/02/2024, 18:32

Nação, boa noite!

Estou fazendo o upgrade de 1.7.1 → 1.8.1 em um cliente. Durante a primeira inicialização tivemos problema com ícones em um dos volumes *secundários*:

```auto
2024-02-26 15:56:41,636 INFO  [stdout] (Thread-89) ***************************************
2024-02-26 15:56:41,673 INFO  [stdout] (Thread-89) Installing 1.7.1/10007...
2024-02-26 15:56:41,673 INFO  [stdout] (Thread-89) Copy Diagnostic Center icon to installed servers
2024-02-26 15:56:41,831 ERROR [stderr] (Thread-89) Update 10007 Failed
2024-02-26 15:56:41,832 ERROR [stderr] (Thread-89) ERROR EXECUTING UPDATES. EXECUTION FAIL.
2024-02-26 15:56:41,833 ERROR [stderr] (Thread-89) java.nio.file.NoSuchFileException: C:\fluig\icons\ECM\ecm_diagnosticcenter.png -> \\sotersrv38\fileserver\Financas\07 - Arquivo\01 - Soter e Scps\Banco de Dados\pageIcon\diagnosticscenter.ecm_diagnosticcenter.png
2024-02-26 15:56:41,833 ERROR [stderr] (Thread-89) 	at java.base/sun.nio.fs.WindowsException.translateToIOException(WindowsException.java:85)
2024-02-26 15:56:41,833 ERROR [stderr] (Thread-89) 	at java.base/sun.nio.fs.WindowsException.rethrowAsIOException(WindowsException.java:103)
2024-02-26 15:56:41,834 ERROR [stderr] (Thread-89) 	at java.base/sun.nio.fs.WindowsFileCopy.copy(WindowsFileCopy.java:202)
2024-02-26 15:56:41,834 ERROR [stderr] (Thread-89) 	at java.base/sun.nio.fs.WindowsFileSystemProvider.copy(WindowsFileSystemProvider.java:283)
2024-02-26 15:56:41,834 ERROR [stderr] (Thread-89) 	at java.base/java.nio.file.Files.copy(Files.java:1294)
2024-02-26 15:56:41,834 ERROR [stderr] (Thread-89) 	at com.fluig.update.updates.FluigUpdates_1_7_1.copyDiagnosisCenterIconToVolume(FluigUpdates_1_7_1.java:487)
2024-02-26 15:56:41,834 ERROR [stderr] (Thread-89) 	at com.fluig.update.updates.FluigUpdates_1_7_1.copyDiagnosticCenterIconToExistingVolume(FluigUpdates_1_7_1.java:115)
2024-02-26 15:56:41,835 ERROR [stderr] (Thread-89) 	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
2024-02-26 15:56:41,835 ERROR [stderr] (Thread-89) 	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
2024-02-26 15:56:41,835 ERROR [stderr] (Thread-89) 	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
2024-02-26 15:56:41,835 ERROR [stderr] (Thread-89) 	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
2024-02-26 15:56:41,836 ERROR [stderr] (Thread-89) 	at com.fluig.update.UpdateManager.executeUpdatesBefore(UpdateManager.java:247)
2024-02-26 15:56:41,836 ERROR [stderr] (Thread-89) 	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
2024-02-26 15:56:41,836 ERROR [stderr] (Thread-89) 	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
2024-02-26 15:56:41,836 ERROR [stderr] (Thread-89) 	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
2024-02-26 15:56:41,836 ERROR [stderr] (Thread-89) 	at java.base/java.lang.reflect.Method.invoke(Method.java:566)
2024-02-26 15:56:41,837 ERROR [stderr] (Thread-89) 	at com.totvs.technology.wcm//com.totvs.technology.wcm.WCMService.processFLuigUpdateBefore(WCMService.java:1608)
2024-02-26 15:56:41,837 ERROR [stderr] (Thread-89) 	at com.totvs.technology.wcm//com.totvs.technology.wcm.WCMService.doStartUp(WCMService.java:486)
2024-02-26 15:56:41,838 ERROR [stderr] (Thread-89) 	at com.totvs.technology.wcm//com.totvs.technology.wcm.WCMService.access$000(WCMService.java:112)
2024-02-26 15:56:41,838 ERROR [stderr] (Thread-89) 	at com.totvs.technology.wcm//com.totvs.technology.wcm.WCMService$StandAloneScanner.run(WCMService.java:1073)
2024-02-26 15:56:41,838 ERROR [stderr] (Thread-89) 	at java.base/java.lang.Thread.run(Thread.java:834)
2024-02-26 15:56:41,838 INFO  [stdout] (Thread-89) ***************************************
2024-02-26 15:56:41,838 INFO  [stdout] (Thread-89) Startup stoped.
2024-02-26 15:56:41,839 INFO  [stdout] (Thread-89) ***************************************
```

Verifiquei permissões nos volumes, se os volumes existem de fato. Palpito que o erro queria dizer que o arquivo não pode ser copiado com sucesso da origem para o destino, mas ele existe na origem.

Como recurso ‘alternativo’ pensei em desabilitar temporariamente estes volumes secundários = apagar das tabelas FDN\_VOLUME e FDN\_VOLUMESITE para depois do update recompor.

Alguma ideia?

Valeeeeeu!

---

## Resposta #1

**Allan Reichert** (@allan.reichert) — 27/02/2024, 15:42

nao lembro direito, mas se nao me engano tinha uma sequencia de instalação entre as versões, talvez instalar antes a versão 1.8.0.

---

## Resposta #2 ✅ RESPOSTA ACEITA

**Daniel Cabral Santos** (@daniel.cabral) — 28/02/2024, 15:50

Não funcionou, infelizmente…fomos com o recurso técnico “alternativo” (G A M B I A R R A). Removemos todos os volumes menos o primário, como comentei no primeiro post. Aí subiu sem problema.

1.7.1 → 1.8.1 = erro
1.7.1 → 1.8.0 = erro
1.7.1 → última 1.7.1 => 1.8.0 = erro

---
