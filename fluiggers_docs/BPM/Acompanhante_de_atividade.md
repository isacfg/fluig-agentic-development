# Acompanhante de atividade

> **Fonte:** [https://fluiggers.com.br/t/acompanhante-de-atividade/3109](https://fluiggers.com.br/t/acompanhante-de-atividade/3109)
> **Categoria:** BPM
> **Criado em:** 02/01/2025, 10:41
> **Visualizações:** 69 | **Likes:** 0 | **Respostas:** 0

---

## Pergunta original

**Angelo Batista** (@Angelo_Batista) — 02/01/2025, 10:41

Preciso desenvolver um processo em que envolve 3 pessoas. A primeira atribui a atividade, a segunda executa e a terceira acompanha a execução (mas não movimenta a atividade, somente acompanha mesmo).
Existe alguma forma de configurar isso? sem que eu coloque o usuário como gestor do processo? Pois quero que acompanhe especificamente a atividade atribuída.

---

## Resposta #1

**Newton Negri** (@Newton_Negri) — 02/01/2025, 10:50

Uma ideia bacana é utilizar e-mails personalizados para notificar as pessoas que você precisa que acompanhe as atividades do processo;

Utilizo muito aqui na empresa.

Segue:

```auto
function afterStateLeave(sequenceId) {
   // Recuperando o usuário atual
   var currentUser = fluigAPI.getUserService().getCurrent();

   // Criando um mapa para armazenar os parâmetros do email
   var parameters = new java.util.HashMap();
   parameters.put("subject", "Fluig - Solicitação n°" + String(getValue("WKNumProces")).replace(".", ""));
   parameters.put("SERVER_URL", fluigAPI.getPageService().getServerURL());
   parameters.put("TENANT_ID", getValue("WKCompany"));
   parameters.put("PROCESS_ID", String(getValue("WKNumProces")).replace(".", ""));
   parameters.put("REQUESTER", hAPI.getCardValue("requesterName"));
   parameters.put("FLEET", hAPI.getCardValue("codFrota"));
   parameters.put("PLATE", hAPI.getCardValue("placaVeiculo"));
   parameters.put("MODEL", hAPI.getCardValue("modeloVeiculo"));
   parameters.put("DATA_CONCLUSAO", hAPI.getCardValue("dataAprovacaoPlanejamento"));

   if (sequenceId == D_VEICULOS) {
      // Criando uma lista de destinatários
      var users = new java.util.ArrayList();
      users.add(hAPI.getCardValue("requesterEmail"));

      parameters.put("APPROVER", hAPI.getCardValue("nomeAprovadordVeiculos"));

      var template;
      if (hAPI.getCardValue("aprovacaodVeiculos") == "Reprovado") {
         // Adicionando a justificativa aos parâmetros
         parameters.put("JUSTIFICATION", hAPI.getCardValue("justificativadVeiculos"));
         template = "emailTemplate001";
      } else {
         template = "emailTemplate002";
      }

      // Enviando o email
      try {
         notifier.notify(currentUser.getLogin(), template, parameters, users, "text/html");
      } catch (error) {
         log.info(error);
      }
   }

   if (sequenceId == AP_GES_LIBERACAO) {
      // Criando uma lista de destinatários
      var users = new java.util.ArrayList();
      users.add(hAPI.getCardValue("requesterEmail"));

      parameters.put("APPROVER", hAPI.getCardValue("nomeAprovadorGestorLib"));

      var template;
      if (hAPI.getCardValue("aprovacaoGestorLib") == "Reprovado") {
         // Adicionando a justificativa aos parâmetros
         parameters.put("JUSTIFICATION", hAPI.getCardValue("justificativaGestorLib"));
         template = "emailTemplate001";
      } else {
         template = "emailTemplate002";
      }

      // Enviando o email
      try {
         notifier.notify(currentUser.getLogin(), template, parameters, users, "text/html");
      } catch (error) {
         log.info(error);
      }
   }

   if (sequenceId == AP_GES_RECEBIMENTO) {
      // Criando uma lista de destinatários
      var users = new java.util.ArrayList();
      users.add(hAPI.getCardValue("requesterEmail"));

      parameters.put("APPROVER", hAPI.getCardValue("nomeAprovadorGestorRec"));

      var template;
      if (hAPI.getCardValue("aprovacaoGestorRec") == "Reprovado") {
         // Adicionando a justificativa aos parâmetros
         parameters.put("JUSTIFICATION", hAPI.getCardValue("justificativaGestorRec"));
         template = "emailTemplate001";
      } else {
         template = "emailTemplate002";
      }

      // Enviando o email
      try {
         notifier.notify(currentUser.getLogin(), template, parameters, users, "text/html");
      } catch (error) {
         log.info(error);
      }
   }

   if (sequenceId == AP_DIR_FROTAS) {
      // Criando uma lista de destinatários
      var users = new java.util.ArrayList();
      users.add(hAPI.getCardValue("requesterEmail"));

      parameters.put("APPROVER", hAPI.getCardValue("nomeAprovadorDiretorFrotas"));

      var template;
      if (hAPI.getCardValue("aprovacaoDiretorFrotas") == "Reprovado") {
         // Adicionando a justificativa aos parâmetros
         parameters.put("JUSTIFICATION", hAPI.getCardValue("justificativaDiretorFrotas"));
         template = "emailTemplate001";
      } else {
         template = "emailTemplate002";
      }

      // Enviando o email
      try {
         notifier.notify(currentUser.getLogin(), template, parameters, users, "text/html");
      } catch (error) {
         log.info(error);
      }
   }

   if (sequenceId == ENCERRADO) {
      // Criando uma lista de destinatários
      var users = new java.util.ArrayList();
      users.add(hAPI.getCardValue("requesterEmail"));
      users.add(hAPI.getCardValue("emailAprovadordVeiculos"));
      users.add(hAPI.getCardValue("emailAprovadorGestorLib"));
      users.add(hAPI.getCardValue("emailAprovadorGestorRec"));
      users.add(hAPI.getCardValue("emailAprovadorDiretorFrotas"));
      users.add(hAPI.getCardValue("emailAprovadorPlanejamento"));

      if (hAPI.getCardValue("substituiFilial") == "NAO") {
         parameters.put("FILIAL", hAPI.getCardValue("filialAtual"));
      } else {
         parameters.put("FILIAL", hAPI.getCardValue("filialDestino"));
      }
      if (hAPI.getCardValue("substituiCentroCusto") == "NAO") {
         parameters.put("CC", hAPI.getCardValue("centroCustoAtual"));
      } else {
         parameters.put("CC", hAPI.getCardValue("centroCustoDestino"));
      }

      try {
         notifier.notify(currentUser.getLogin(), "emailTemplate003", parameters, users, "text/html");
      } catch (error) {
         log.info(error);
      }
   }

   if (sequenceId == JOIN_ENCERRADO) {
      // Criando uma lista de destinatários
      var users = new java.util.ArrayList();
      users.add(hAPI.getCardValue("requesterEmail"));
      users.add(hAPI.getCardValue("emailAprovadordVeiculos"));
      users.add(hAPI.getCardValue("emailAprovadorGestorLib"));
      users.add(hAPI.getCardValue("emailAprovadorGestorRec"));
      users.add(hAPI.getCardValue("emailAprovadorDiretorFrotas"));
      users.add(hAPI.getCardValue("emailAprovadorPlanejamento"));

      if (hAPI.getCardValue("substituiFilial") == "NAO") {
         parameters.put("FILIAL", hAPI.getCardValue("filialAtual"));
      } else {
         parameters.put("FILIAL", hAPI.getCardValue("filialDestino"));
      }
      if (hAPI.getCardValue("substituiCentroCusto") == "NAO") {
         parameters.put("CC", hAPI.getCardValue("centroCustoAtual"));
      } else {
         parameters.put("CC", hAPI.getCardValue("centroCustoDestino"));
      }

      try {
         notifier.notify(currentUser.getLogin(), "emailTemplate003", parameters, users, "text/html");
      } catch (error) {
         log.info(error);
      }
   }

   if (sequenceId == FINANCEIRO) {
      var ativAprovStatusDveiculosEx = hAPI.getCardValue("ativAprovStatusDveiculosEx");
      if (ativAprovStatusDveiculosEx == "AJUSTAR") {
         // Se for "AJUSTAR", limpa o campo
         hAPI.setCardValue("ativAprovStatusDveiculosEx", "");
      }
   }
}
```

[https://tdn.totvs.com/pages/releaseview.action?pageId=852915615](https://tdn.totvs.com/pages/releaseview.action?pageId=852915615)

---

## Resposta #2

**Marco Comassetto** (@marcommas) — 03/01/2025, 10:34

Você pode criar um grupo e inserir este usuário neste grupo.
Depois, você acessa o menu Processos > Configurar Processos, existe um botão chamado ‘Permissões’, ali você irá adicionar este grupo criado.
Nessa situação, se o usuário estiver no grupo, poderá visualizar a solicitação que é privada.

---
