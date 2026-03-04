# Inconsistência Exportação Formulário/Processo

> **Fonte:** [https://fluiggers.com.br/t/inconsistencia-exportacao-formulario-processo/3471](https://fluiggers.com.br/t/inconsistencia-exportacao-formulario-processo/3471)
> **Categoria:** Formulários
> **Criado em:** 13/10/2025, 16:30
> **Visualizações:** 24 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Igor Davanço** (@igordavanco) — 13/10/2025, 16:30

Pessoal, boa tarde! Tudo bem?

Estou com um problema no Fluig. Recentemente, fiz algumas alterações em um processo que tenho na plataforma, o que gerou a versão “27000” do formulário e a versão “35” do processo. Essa nova versão está funcionando corretamente, porém, depois que exportei essa atualização, as solicitações que estavam na versão anterior deixaram de apresentar o comportamento normal, e estou enfrentando diversos problemas.

Por exemplo, no meu código há uma validação que identifica em qual atividade o processo está e bloqueia as demais, impedindo que o usuário as altere. No entanto, essa lógica não está funcionando, quando estou na atividade X, ela está sendo bloqueada, enquanto a atividade anterior é liberada. As solicitações funcionavam normalmente antes dessa exportação e, como foi criada uma nova versão do documento, isso não deveria afetar as versões anteriores.

Se altero a versão do documento diretamente no banco de dados para essa nova versão, o código volta a funcionar corretamente. Porém, há algumas divergências entre as versões, e isso faz com que o processo não funcione da forma esperada. Se retorno para a versão anterior, o problema volta a ocorrer.

Obs.: Estou em ambiente Cloud e a versão do Fluig é a 1.8.2-241105.

Vocês já tiveram esse problema e conseguiram resolver?

Já abri um chamado na TOTVS sobre esse problema.

---
