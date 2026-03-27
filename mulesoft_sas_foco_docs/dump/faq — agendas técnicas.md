# Mapeamento SAS X FOCO

**Fonte:** [https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/wu1-5ks/FAQ%20%E2%80%94%20Agendas%20T%C3%A9cnicas/](https://anypoint.mulesoft.com/exchange/portals/sebrae-2/a7bc5ec0-9afc-42bf-bc65-96a43cd68385/mapeamento-sas-x-foco/minor/1.0/pages/wu1-5ks/FAQ%20%E2%80%94%20Agendas%20T%C3%A9cnicas/)
**Subseções detectadas:** 0

---

**FAQ — Dúvidas da Reunião Técnica (FOCO / SAS / Salesforce / MuleSoft / LGPD / Contabilização)**

**1\. Camada de Abstração / Interface entre SAS e FOCO**

**1.1 Por que não criar uma camada de abstração para manter os mesmos métodos do SAS?**

**Resposta:**\\

Porque os métodos, atributos e regras do SAS não correspondem mais ao modelo do FOCO. Muitos atributos deixaram de existir, outros mudaram totalmente e o FOCO já possui APIs nativas com abstração superior (por exemplo, account concentra inúmeras consultas). Criar uma camada extra geraria retrabalho, mais pontos de falha, custo alto e manutenção contínua.

**1.2 Existe uma versão simplificada de interface para esconder a complexidade de métodos?**

**Resposta:**\\

O próprio FOCO já oferece isso via APIs nativas — conceito de _facets_ — impossibilitando a necessidade de uma segunda camada.

**2\. Versionamento e Governança das APIs**

**2.1 Se a Globant alterar a API nativa do FOCO, isso pode “quebrar” integrações já homologadas?**

**Resposta:**\\

Alterações não devem quebrar contratos existentes. Mudanças que exigirem parâmetros obrigatórios criam uma _nova versão_ (ex.: 0.63). O FOCO segue versionamento de mercado (diferentemente do SAS).

**2.2 Como será garantida a governança das APIs e o controle de mudanças?**

**Resposta:**\\

A área de negócio deve disponibilizar _roadmap_, _release notes_, datas de alterações e descontinuações. Foi solicitado procedimento formal à URC para gestão de configuração e mudança.

**3\. Regras de Negócio nas APIs**

**3.1 As regras de negócio estarão implementadas na API do FOCO?**

**Resposta:**\\

Sim. Algumas regras estavam apenas no front-end, mas o Nacional exigiu que fossem implementadas também no back-end. O fornecedor está corrigindo.

**4\. LGPD, Opt-In/Opt-Out, OneTrust e AMEI**

**4.1 Onde ficam armazenados os consentimentos de privacidade (opt-in/opt-out)?**

**Resposta:**\\

No **OneTrust**. O FOCO **não armazenará** essas informações.

**4.2 A integração entre AMEI e OneTrust já está funcionando?**

**Resposta:**\\

Sim, a integração foi construída. Se houver problemas, o estado deve acionar o Nacional para revisar.

**4.3 A API do FOCO vai retornar informações de consentimento do cliente?**

**Resposta:**\\

Não diretamente. Será necessário consultar a **API do OneTrust**. O FOCO apenas exibirá, mas não manterá o dado.

**4.4 O atendente pode registrar consentimento em nome do cliente via API do AMEI?**

**Resposta:**\\

O cliente precisa fornecer o opt-in por um canal válido (ex.: celular/WhatsApp). O sistema pode registrar isso, mas não é o atendente quem “aceita”; é o cliente — apenas registrado pelo sistema.

**4.5 Dados do AMEI vão sobrepor dados existentes no FOCO?**

**Resposta:**\\

Ainda não está definido. A tendência é **sobrepor**, pois o AMEI possui os dados mais atualizados. Um estudo específico será feito.

**5\. Integração entre Sistemas Satélites, SAS e FOCO**

**5.1 A rotina de qualidade de dados (ex.: CEP/CPE) continuará existindo no FOCO?**

**Resposta:**\\

Sim. O processo será reavaliado. A tendência é que tudo seja atualizado **em tempo real**, pois a arquitetura do FOCO é mais performática.

**5.2 Ainda existe retroalimentação FOCO → SAS?**

**Resposta:**\\

Alguns processos legados ainda fazem isso. Mas o objetivo da descontaminação é **eliminar dependências** do SAS.

**5.3 O que fazer com inconsistências de soluções (gratuita/paga, certificada etc.) entre SAS e FOCO?**

**Resposta:**\\

Isso será tratado na pauta de **descontaminação**. Pode haver falhas no motor de importação do FOCO. Será agendada reunião com Pernambuco.

**6\. Domínios, Códigos e DE-PARA**

**6.1 Os códigos de unidade organizacional, cidade e outros códigos do SAS serão mantidos?**

**Resposta:**\\

Provavelmente **não**. Será necessário **refazer integrações** com novos domínios do FOCO. Um DE-PARA está sendo construído.

**6.2 Haverá DE-PARA de códigos e domínios do SAS para o FOCO?**

**Resposta:**\\

Sim. Haverá OS específica de DE-PARA por domínio e, depois, por dados.

**7\. APIs Nativas (Consultas, Inclusões, Eventos, Consultoria)**

**7.1 Já é possível escrever (inserir) ações, inscrições e consultorias via API FOCO?**

**Resposta (Sandro):**\\

Alguns objetos já permitem inclusão (oportunidade de evento, consultoria, relacionamento). A equipe ainda vai detalhar se isso corresponde exatamente ao processo de inscrição. Eventos e inscrições serão mapeados a seguir.

**8\. Tokens, Homologação e Ativação das Fábricas**

**8.1 Quando os estados podem acionar suas fábricas de software?**

**Resposta:**\\

Assim que o DE-PARA de **conta e contato** for liberado (nos próximos dias).\\

Os tokens atuais **não podem ser usados em homologação**. Cada sistema satélite receberá seu **token exclusivo**.

**9\. Contabilização 2025 → 2026**

**9.1 Em 2025, quem contabiliza os atendimentos?**

**Resposta:**\\

**SME e SAS**, exatamente como hoje.\\

Integrações com FOCO serão paralelas, apenas em homologação.

**9.2 Quando o SAS será desligado?**

**Resposta:**\\

Somente após todos os estados virarem para FOCO, com previsão até **28/02/2026** (com exceções justificadas).

**9.3 Em 2026, quem faz a contabilização?**

**Resposta:**\\

O **Novo DW (UGE)**. O SME deixará de existir para contabilização.

**9.4 O estado poderá importar dados brutos do DW para soluções locais?**

**Resposta:**\\

Sim — a UGE está desenhando isso. A pergunta será levada ao Felipe Nodari.

**10\. Futuro da LGPD e OneTrust**

**10.1 O OneTrust será substituído?**

**Resposta:**\\

Existe essa possibilidade. Se ocorrer, nova integração terá de ser construída. Será acompanhado pelo DPO.

**11\. Diversas**

**11.1 O sistema satélite poderá consultar dados de consentimento diretamente via MuleSoft Gateway?**

**Resposta:**\\

Sim, desde que a API do OneTrust esteja disponível. O MuleSoft pode orquestrar.

**\=========================================================================**

**FAQ – Dúvidas da Reunião sobre Documentação DEPARA (Conta e Contato)**

**1\. Retorno das APIs (ID, Protocolo, Código Parceiro)**

**1.1 O retorno da API (inserir) trará apenas o ID?**

**Resposta:**\\

Sim. O retorno padrão das APIs nativas da Salesforce (FOCO) é o ID do registro criado/alterado, em padrão hash.\\

Esse ID substitui o antigo “código parceiro / protocolo do SAS”.

**1.2 O retorno poderia incluir outros campos, como código parceiro ou descrição?**

**Resposta:**\\

Não. As APIs nativas do FOCO não podem ser customizadas pela Global Red ou Globant.\\

Qualquer outra necessidade deve ser construída pelos sistemas satélites, via orquestração ou consultas adicionais.

**1.3 Esse ID pode ser entendido como substituto do protocolo do SAS?**

**Resposta:**\\

Sim. Cada criação de registro retorna um ID único, equivalente ao papel que o protocolo cumpria no SAS.

**1.4 Haverá retorno diferenciando o tipo de objeto (PF, PJ, Interação etc.)?**

**Resposta:\\**

**Não no retorno padrão.\\**

**O integrador deve guardar o ID junto ao tipo de entidade no próprio sistema satélite.**

**2\. Mapeamento DEPARA e Documentação**

**2.1 O DEPARA inclui apenas campos do SAS? E os novos campos do FOCO?**

**Resposta:**\\

A primeira entrega contém somente o mapeamento _SAS → FOCO_.\\

Os campos que existem somente no FOCO serão adicionados nas próximas versões.

**2.2 Por que alguns campos aparecem como “em desenvolvimento”?**

**Resposta:**\\

Significa que a Globant ainda está desenvolvendo esses campos no FOCO.\\

Assim que forem liberados, aparecerão nas APIs nativas e no DEPARA.

**2.3 Por que alguns itens aparecem escritos apenas como “lista”?**

**Resposta:**\\

Porque no SAS esses elementos eram listas separadas (ex.: lista de endereços, lista de contatos).\\

No FOCO, essas listas estão dentro do próprio objeto principal (ex.: Account) e não possuem objeto correspondente.

**2.4 O ID do registro deveria aparecer no DEPARA (ex.: na consulta PF)?**

**Resposta:**\\

Sim — o time reconheceu a necessidade e vai incluir nas próximas revisões.

_**3\. Erros, Validações e Regras Negociais**_

_**3.1 A lista de erros será a mesma do SAS?**_

**\*Resposta:**\\

Não.\*\\

O FOCO possui nova estrutura de erros:

-   errorCode
-   attribute
-   message

São mais genéricos e não correspondem 1:1 aos códigos do SAS.\\

Quem usa códigos do SAS para lógica interna terá que rever essa estratégia.

**3.2 O CPF é obrigatório no cadastro de pessoa física?**

**Resposta:**\\

Sim.\\

O tipo de registro “Pessoa Física” exige CPF. A documentação refletirá isso.

**3.3 Onde ficam visíveis as regras de validação usadas nas APIs?**

**Resposta:**\\

No Gerenciador de Objetos do Salesforce (FOCO), onde é possível consultar:

-   campos
-   regras de validação
-   obrigatoriedades
-   tipos de registro

Essas regras são aplicadas também na API.

**4\. Comportamento das APIs Salesforce / FOCO**

**4.1 Será incluído o retorno dos campos no INSERT na documentação?**

**Resposta:**\\

Ainda não está no escopo, mas será discutido e pode entrar nas próximas versões.

**4.2 As APIs podem retornar também o “nome do objeto” junto com o ID?**

**Resposta:**\\

Não.\\

A API nativa não permite esse tipo de customização.

**4.3 Inserções sempre retornam HTTP 200/201 com o ID?**

**Resposta:**\\

Sim.\\

Erros retornam errorCode, attribute e message.

**4.4 A lista de erros já está completa?**

**Resposta:**\\

Não.\\

Algumas regras negociais ainda estão sendo implementadas no backend da Globant.

**5\. Campos Descontinuados e Desenvolvimento do FOCO**

**5.1 Como interpretar campos que estão “descontinuados”?**

**Resposta:**\\

São campos que existiam no SAS e não existirão no FOCO.\\

Alguns ainda aparecem em serviços antigos, mas serão eliminados.

**5.2 Quando aparece “em desenvolvimento”, significa que o FOCO não tem esse campo ainda?**

**Resposta:**\\

Exatamente.\\

É algo que existia no SAS e está sendo criado agora na plataforma FOCO.

**5.3 A informação de contato está “em desenvolvimento”; isso significa que não existe no FOCO?**

**Resposta:**\\

Significa que o FOCO ainda está implementando as estruturas equivalentes ao SAS para essas informações.

**6\. CNPJ Alfanumérico (Nova Máscara 2026)**

**6.1 O FOCO já suporta o novo CNPJ alfanumérico previsto para 2026?**

**Resposta:**\\

A Globant já foi acionada, o item está no roadmap e será implementado antes da entrada em vigor.

**7\. Tokens de Acesso e Ambientes**

**7.1 Os tokens atuais podem ser usados para testes?**

**Resposta:**\\

Sim, mas somente para testes exploratórios em Stage.

**7.2 Para iniciar integração real no sistema satélite, preciso de outro token?**

**Resposta:**\\

Sim.\\

Cada sistema satélite terá seu token específico.

**7.3 Podemos usar um token único por UF durante homologação?**

**Resposta:**\\

Sim, foi sugerido e aceito como boa prática para facilitar gestão.\\

Mas em produção será token por sistema satélite.

**7.4 Como solicito tokens?**

**Resposta:**\\

Enviar e-mail para Patrícia e Grazi, informando qual sistema satélite começará os testes.

**8\. Collections, Postman, Consultas e Ferramentas**

**8.1 Preciso de login para acessar o portal/documentação?**

**Resposta:**\\

Não.\\

A documentação é pública.

**8.2 A Collection Postman precisa ser configurada?**

**Resposta:**\\

Sim — configurar variável \_endpoint com:

-   ambiente Stage
-   ambiente Homologação

Produção ainda não está liberada.

**9\. Comportamento de Consultas e Objetos**

**9.1 Campos de relacionamento no FOCO aparecem com sufixo \_r?**

**Resposta:**\\

Sim.

-   \_c → custom
-   \_r → relacionamento
-   sem sufixo → campo nativo

**9.2 Por que alguns objetos não aparecem?**

**Resposta:**\\

Porque algumas listas/estruturas do SAS não têm objeto direto no FOCO.

**10\. Início das Integrações e Testes**

**10.1 Podemos acionar as fábricas de software?**

**Resposta:**\\

Sim.\\

A partir da liberação desta primeira versão do DEPARA de conta e contato.

**10.2 O que deve ser mantido do SAS?**

**Resposta:**\\

Tudo.\\

A contabilização de 2025 será obrigatoriamente via SAS/SME.\\

As integrações FOCO são paralelas e novas.

**10.3 Quando começar a construir integrações reais?**

**Resposta:**\\

Após solicitar o token do sistema satélite e usar o DEPARA.

**11\. Acesso e Suporte**

**11.1 Quem fornece o token?**

**Resposta:**\\

A Globant, acionada via Patrícia e Grazi.

**11.2 Problemas com o link da documentação?**

**Resposta:**\\

O link não exige login; se houver erro, testar outro navegador.

**12\. Itens Levados ao Backlog**

Os seguintes itens foram encaminhados como _to-do_ para equipe FOCO/Globant:

-   Inclusão de ID de retorno na documentação DEPARA
-   Regras de validação explícitas no mapeamento
-   Campos “em desenvolvimento” aguardando liberação da Globant
-   Máscara alfanumérica de CNPJ
-   Avaliação sobre abstração adicional no retorno das APIs

**\========================================================================**

**FAQ – Dúvidas da Reunião Sobre Entrega DEPARA (Interações, Portfólio, Consultoria e Eventos)**

**1\. Escopo da Entrega e Disponibilidade das Documentações**

**1.1 Quais mapeamentos foram entregues nesta reunião?**

**Resposta:**

Foram entregues:

Interações

Portfólio

Portfólio instantâneo

Disponibilizações e ferramentas (dentro de Interações)

A parte de Eventos ainda não foi inserida, mas estará disponível até amanhã.

**1.2 O DEPARA de eventos aparece na documentação, mas ainda não está implementado. Isso é normal?**

**Resposta:**

Sim. Os serviços aparecem no índice, mas os campos só serão preenchidos quando a implementação estiver concluída (previsão: amanhã cedo).

**2\. Página de Documentação dos Objetos FOCO (Describe API)**

**2.1 Para que servem os novos endpoints “describe” incluídos na documentação?**

**Resposta:**

Eles permitem consultar todos os campos reais existentes nos objetos do FOCO, incluindo:

visibilidade do campo

tipo

se aceita nulos

se é picklist

se é customizado

se pode ser alterado via API

Isso complementa o DEPARA, que só mostra campos do SAS.

**2.2 Essa documentação mostra campos que só existem no FOCO e não no SAS?**

**Resposta:**

Sim. A página “Documentação Objetos FOCO” foi criada justamente para listar tudo que existe somente no FOCO, já que isso não aparece no DEPARA SAS→FOCO.

**3\. Códigos de Erro e Regras Negociais**

**3.1 Os códigos de erro do SAS serão implementados no FOCO?**

**Resposta:**

Sim. Ficou definido que o FOCO passará a implementar códigos semelhantes aos do SAS.

Isso já entrou no roadmap oficial.

**4\. Itens do Mapeamento (Interações, Portfólio, Consultoria)**

**4.1 Nem todos os campos aparecem no DEPARA (ex.: descrição faltando). Isso é correto?**

**Resposta:**

Sim. Muitos campos ainda não têm metadata completa no FOCO.

A Globant está preenchendo e isso será atualizado gradualmente.

**4.2 O que significam campos “descontinuados”?**

**Resposta:**

Significa que o campo existia no SAS, mas não existirá no FOCO.

**4.3 E os campos marcados como “em desenvolvimento”?**

**Resposta:**

Significa que o campo ainda está sendo implementado pela Globant na plataforma FOCO.

**4.4 Onde ficam os campos de listas (endereço, contato, qualificação etc)?**

**Resposta:**

No SAS eram listas separadas; no FOCO ficam dentro do objeto principal, como subestruturas do objeto (ex.: Account).

**5\. Consultoria (Disponibilização, Inscrição, Registro)**

**5.1 O DEPARA traz tudo sobre consultoria?**

**Resposta:**

Nem tudo.

A parte de consultoria produtizada será entregue na próxima entrega.

A reunião apresentou:

Disponibilização de consultoria

Consultorias não produtizadas (interação tipo consultoria → objeto Case)

**5.2 “Inserir inscrição de consultoria” não aparece na lista; está faltando?**

**Resposta:**

O time não encontrou esse endpoint na documentação original do SAS.

Se houver fluxo específico, o estado deve enviar o nome exato do serviço para investigação.

**5.3 Consultoria não produtizada vai para qual objeto no FOCO?**

**Resposta:**

Tudo vira Case.

É simplesmente uma interação com o instrumento “consultoria”.

**5.4 Consultoria produtizada será igual ao SAS?**

**Resposta:**

Sim.

Haverá:

disponibilização

inscrição

vínculo do consultor

registro da consultoria

A diferença é que no FOCO tudo será mais simples porque:

não haverá múltiplos endpoints

quase tudo converge para Case ou Solution

**5.5 O portfólio instantâneo existe no FOCO?**

**Resposta:**

Sim, mas não como APIs separadas.

No FOCO o objeto é Solution, e o campo temporário/permanente substitui o antigo “instantâneo”.

**6\. Interações (Case) e Simplificação do Modelo**

**6.1 O que exatamente é um Case no FOCO?**

**Resposta:**

O objeto Case agora representa:

atendimento

OT

consultoria não produtizada

instrumentos de ferramentas

agendamentos

registros de consultoria

interações gerais

Tudo converge para Case.

**6.2 Isso substitui dezenas de serviços do SAS?**

**Resposta:**

Sim.

Onde o SAS tinha múltiplos métodos de inserir interações, agora o FOCO utiliza um único objeto.

**7\. Portfólio / Soluções**

**7.1 O portfólio instantâneo virou o quê no FOCO?**

**Resposta:**

O objeto Solution com o atributo:

temporário (equivale ao instantâneo)

permanente (equivale ao não-instantâneo)

**7.2 A relação de produto na consultoria é mantida?**

**Resposta:**

Sim.

Consultorias produtizadas continuam vinculadas a Solutions.

**8\. Endpoints e Homologação**

**8.1 Os endpoints já estão prontos para testes?**

**Resposta:**

Sim, em Stage (Homologação).

**8.2 O que fazer se eu encontrar problemas ao testar?**

**Resposta:**

Reportar no grupo de integração.

Erros encontrados serão enviados para a Globant para correção.

**8.3 Onde pego os tokens de acesso?**

**Resposta:**

Pedir para Patrícia e Grazi.

Os tokens atuais servem para testes exploratórios.

**8.4 A lógica de habilitação de usuários via webservice é igual ao SAS?**

**Resposta:**

Ainda não está definido.

Essa parte depende de discussão com a URC e Globant.

Uma reunião específica será marcada sobre isso.

**9\. Endpoint de CEP (Consultar Endereço por CEP)**

**9.1 Esse endpoint já existe no DEPARA?**

**Resposta:**

Ainda não.

O item não está mapeado e será analisado conforme prioridade e roadmap.

**10\. Origem das Interações (Registro por FOCO, SAS ou API)**

**10.1 Como identificar se uma consultoria veio de endpoint API, FOCO direto ou SAS?**

**Resposta:**

Pelo campo Created By no objeto Case.

Quando for criado por aplicação/API, aparecerá a aplicação (quando tokens estiverem integrados).

Quando for criado pelo usuário, aparecerá o usuário.

**11\. Entendimento Geral da Transição SAS → FOCO**

**11.1 A lógica SAS (inserir agendamento → inserir interação → registrar atendimento etc.) continua?**

**Resposta:**

Sim em essência, mas muito mais simplificada:

No FOCO:

tudo é Case

inserções são centralizadas

não há dezenas de endpoints diferentes

**11.2 A integração via sistema satélite (como o Lean) continuará funcionando com lógica semelhante?**

**Resposta:**

Sim.

Os mesmos passos (disponibilizar, inscrever, registrar atendimento) existirão, mas com endpoints bem mais simples.

**12\. Canal de Suporte**

**12.1 Onde tirar dúvidas técnicas?**

**Resposta:**

No grupo de integração do projeto.

**12.2 Há vídeos e tutoriais de uso dos endpoints?**

**Resposta:**

Sim.

Estão disponíveis no repositório de integrações (postado no chat da reunião).

**13\. Priorização das Próximas Entregas**

**13.1 Como é definida a ordem dos próximos mapeamentos?**

**Resposta:**

Por volumetria de uso.

Os endpoints mais utilizados pelos estados são mapeados primeiro.

\\========================================================================

**FAQ – Reunião de Dúvidas e Erros (FOCO / Eventos / Interações / Endereços / Integrações)**

* * *

**1\. Restrições de Conta e Interações**

**1.1 A mensagem “Não é possível criar nova interação devido à restrição da conta” impede apenas interações ou também eventos?**

**Resposta:**\\

A restrição impede **somente a criação de interações de atendimento**.\\

Eventos e outras atividades **não são bloqueados**.

* * *

**1.2 Onde vejo quais restrições a conta possui?**

**Resposta:**\\

No campo **“Restrições da Conta”**, dentro do próprio Account.\\

Lá aparecem todos os motivos (ex.: canal preferencial não preenchido, telefone obrigatório, e-mail, inscrição estadual inativa etc.).

* * *

**1.3 Uma conta pode ter várias restrições listadas ao mesmo tempo?**

**Resposta:**\\

Sim.\\

Todas as restrições aparecem **listadas simultaneamente**.

* * *

**1.4 Como cadastrar uma conta sem restrições?**

**Resposta:**\\

É necessário preencher corretamente os campos relacionados ao canal preferencial e aos dados complementares.\\

Ex.:

-   Canal preferencial = WhatsApp → precisa ter telefone
-   Canal preferencial = E-mail → precisa ter e-mail válido

* * *

**2\. Eventos – Anexos e Tipos de Documento**

**2.1 Como enviar anexos para eventos via API?**

**Resposta:**\\

Um anexo pode ser enviado utilizando o objeto **ContentVersion**, informando VersionData (base64) e firstPublishLocationId apontando para o evento.

* * *

**2.2 Como definir o tipo de documento (ex.: “comprovante de presença”)?**

**Resposta:**\\

A equipe da Globant analisará o caso.\\

O tipo do arquivo não está claro no objeto nativo.\\

Douglas e Matheus estão tratando isso e orientaram a abrir chamado caso a análise demore.

* * *

**2.3 O tipo de documento aparece no Describe?**

**Resposta:**\\

Não.\\

As opções “Anexo Geral” e “Comprovante de Presença” **não aparecem** no Describe dos objetos pesquisados.\\

A análise continua via atendimento técnico.

* * *

**3\. Interações – Datas Futuras, Prioritários, Owners e Payloads**

**3.1 É permitido criar interações com data futura?**

**Resposta:**\\

Sim.\\

O FOCO aceita interações com datas futuras e também retroativas (para atendimentos porta-a-porta, offline etc.).\\

Não há restrição atualmente.

* * *

**3.2 Ao buscar vínculos CNPJ ↔ CPF, essa query está correta?**

**Resposta:**\\

Sim.\\

A consulta via AccountContactRelation é o método certo para descobrir contas vinculadas a um contato.

* * *

**3.3 O campo “prioritário” interfere na criação do atendimento?**

**Resposta:**\\

Não deve impedir nada.\\

É apenas uma marcação.\\

Caso gere erro, deve-se reportar (abrir chamado).

* * *

**3.4 O campo “OwnerId” deve ser buscado via Service Appointment?**

**Resposta:**\\

Não.\\

Ainda está em análise.\\

O correto é usar o **User** como Owner.\\

O payload enviado será avaliado via chamado.

* * *

**3.5 Posso criar interações usando CPF/CNPJ ao invés de ID Salesforce?**

**Resposta:**\\

Atualmente **não**.\\

Só é possível usar **ID Salesforce** como chave.\\

Mas a equipe avaliará permitir inserções por CPF/CNPJ no futuro.

* * *

**4\. Participação de Fornecedores e Acesso às Agendas**

**4.1 Fornecedores (ex.: BRU, equipes de portais, parceiros) podem participar da agenda?**

**Resposta:**\\

Sim.\\

Esta agenda **é aberta** a todas as equipes envolvidas nas integrações.

* * *

**4.2 A BRU encontrou processos do SAS não existentes no FOCO. Isso é normal?**

**Resposta:**\\

Sim.\\

O FOCO utiliza APIs nativas, não serão criadas APIs novas para replicar processos antigos do SAS.\\

A recomendação é fazer o **banho de loja** com as documentações e vídeos antes de avançar.

* * *

**5\. Fluxo de Eventos (Disponibilização, Comercialização, Inscrição)**

**5.1 Qual é a sequência correta para inscrições de eventos?**

**Resposta:**\\

A ordem é:

1.  **Disponibilização**
2.  **Evento**
3.  **Configurações/comercialização**
4.  **Inscrição do participante**

O FOCO exige essa ordem, conforme o documento de fluxo de eventos.

* * *

**5.2 Onde verifico os campos obrigatórios de cada objeto?**

**Resposta:**\\

Via **Describe**, que mostra restrições e obrigatoriedade.\\

Patrícia abriu chamado para que seja enviada uma instrução padronizada a todos.

* * *

**6\. Endereços – Códigos, Correios e Estrutura**

**6.1 O FOCO possui “código de bairro”, “código de cidade”, “código IBGE” etc.?**

**Resposta:**\\

**Não.**\\

Esses códigos são **proprietários do SAS**.\\

O FOCO hoje trabalha apenas com **descrições**.

* * *

**6.2 A API de endereços do Mulesoft já existe?**

**Resposta:**\\

A base está pronta.\\

A API entrará no barramento Mulesoft dentro de **~2 semanas** (estimativa da Global Red).

* * *

**6.3 O FOCO vai consumir a API dos Correios via barramento?**

**Resposta:**\\

Sim.\\

Assim que estiver pronta, será feita manutenção no FOCO para consumir essa API.

* * *

**6.4 Por que os códigos do SAS são necessários?**

**Resposta:**\\

Estados como o Paraná utilizam enriquecimento de endereços com base própria que retorna códigos SAS.\\

Foi recomendado avaliar no futuro uma **V2** da API considerando o modelo de enriquecimento já existente no PR.

* * *

**7\. Integração via Banco (SQL Server)**

**7.1 Alguém já integrou diretamente via SQL Server (funções/procedures)?**

**Resposta:**\\

Não.\\

Nenhum estado relatou ter feito integração direta via SQL.\\

Recomendação:

-   marcar agenda com time do Medeiros se desejarem validar arquitetura
-   integração padrão usa barramento Mulesoft ou aplicações externas

* * *

**8\. Tokens e Ambientes (STG vs PRD)**

**8.1 Estamos usando produção?**

**Resposta:**\\

Não.\\

Tudo ocorre em **STG (homologação)**.

* * *

**8.2 Consultas em produção já estão liberadas?**

**Resposta:**\\

Sim — consultas já podem ser liberadas por UF conforme maturidade.

* * *

**8.3 Criação de conta/contato será liberada em produção?**

**Resposta:**\\

Sim, mas apenas para UFs mais maduras após avanço das integrações.

* * *

**9\. Rate Limit, Cache e Políticas de API**

**9.1 Quando as políticas de Rate Limit e Cache estarão configuradas no Mulesoft?**

**Resposta:**\\

Está na fila da Globant.\\

Sem prazo exato, mas mapeado.

* * *

**9.2 Existe painel de performance para acompanhar consumo por UF?**

**Resposta:**\\

Não nativamente.\\

Será avaliado no **AppExchange** da Salesforce.\\

Patrícia abrirá chamado para verificar opções de APM.

* * *

**10\. Outras Dúvidas Gerais**

**10.1 Como consultar rapidamente se um campo é obrigatório?**

**Resposta:**\\

Via Describe (API nativa Salesforce).\\

Chamado será aberto para padronizar instrução de como consultar.

* * *

**10.2 A base de endereços do SAS é de quem? É IBGE?**

**Resposta:**\\

Não.\\

A estrutura de códigos é **proprietária do SAS**.

* * *

**10.3 Posso enviar anexos via API para consolidar eventos?**

**Resposta:**\\

Sim, já é possível.\\

A dúvida atual é apenas como definir o “tipo de arquivo”.

\\=================================================================================

**FAQ – Reunião sobre Origem, Unidade Organizacional, Integrações, Analytics e Endereços**

**1\. ORIGEM / TIPO DE REALIZAÇÃO → “APLICAÇÃO”**

**1.1 O Integra terá origem própria no FOCO?**

**Resposta:**\\

Não.\\

O _Integra_ continuará sendo tratado como um conjunto de atendimentos **genéricos dos estados**, semelhante ao que ocorre hoje com o tipo de realização **ATN**.\\

Ele **não** terá origem (aplicação) individualizada.

**1.2 Então a “origem” (tipo de realização) não será mais enviada via payload?**

**Resposta:**\\

Correto.\\

A origem **não será mais enviada pelo integrador**.\\

Ela será determinada automaticamente pelo **usuário de serviço** (token) vinculado à aplicação.\\

➡ Ou seja: a origem continua existindo, mas **não será mais informada pelo estado**.

**1.3 A origem deixará de existir?**

**Resposta:**\\

Não.\\

A origem apenas **muda de lugar**.\\

Agora será definida na **parametrização do usuário de serviço**, e não mais no payload da integração.

**1.4 Estados que antes enviavam origem explícita (ex.: Portal UF, Serviços Digitais) continuam enviando?**

**Resposta:**\\

Não manualmente.\\

Essas aplicações continuarão existindo, mas serão vinculadas ao **token** do usuário do estado.\\

O estado não enviará mais origem no payload.

**1.5 A Celeste está travada porque o FOCO está exigindo origem. Isso será removido?**

**Resposta:**\\

Sim.\\

A exigência será removida para não travar integrações, **desde que** o usuário de serviço esteja corretamente configurado com sua aplicação correspondente.

**1.6 O usuário de serviço terá várias “aplicações” configuradas?**

**Resposta:**\\

Sim.\\

Cada token terá as aplicações (antigas origens) que está autorizado a enviar.

**2\. UNIDADE ORGANIZACIONAL (UO)**

**2.1 A unidade organizacional é obrigatória em todos os atendimentos?**

**Resposta:**\\

Sim.\\

A UO é **obrigatória**, pois é essencial para rastreabilidade, estratégia de relacionamento, identificação de canal e ponto de contato.

**2.2 No SAS alguns atendimentos não tinham unidade organizacional. Como ficará isso no FOCO?**

**Resposta:**\\

No FOCO todos precisarão ter UO.\\

Para os estados que ainda não enviam, será necessário um **cronograma de adaptação**.\\

A proposta é liberar para homologação agora, mas definir prazo para obrigatoriedade na produção.

**2.3 É possível adiar a obrigatoriedade da UO?**

**Resposta:**\\

Sim — para homologação.\\

Para produção haverá cronograma obrigatório, pois impacta metas, indicadores e estratégia nacional.

**3\. TOKEN / USUÁRIO DE SERVIÇO**

**3.1 Como o FOCO saberá qual aplicação está mandando o atendimento?**

**Resposta:**\\

Pelo **usuário de serviço** (token).\\

Cada token terá vinculado:

-   aplicações permitidas
-   instrumentos permitidos
-   necessidade ou não de “momento digital”
-   UO vinculada

**3.2 O estado precisará verificar qual usuário usar para cada integração?**

**Resposta:**\\

Sim.\\

O documento final orientará que equipe de integração verifique se o token escolhido corresponde aos tipos de atendimento que poderão ser enviados.

**4\. PROBLEMA ATUAL – PENDÊNCIAS DOS ESTADOS**

**4.1 Estados que não conseguem enviar devido à exigência de origem e UO – solução?**

**Resposta:**\\

A sugestão acordada:

1.  **Retirar obrigatoriedade de origem imediatamente** (porque será derivada do token).
2.  **Parametrizar aplicações no usuário da integração.**
3.  **Definir cronograma nacional para obrigatoriedade da UO.**

**4.2 Isso trava testes da Celeste (Minas)?**

**Resposta:**\\

Não mais.\\

A obrigatoriedade será removida temporariamente para homologação.

**5\. POLÍTICA ESTRATÉGICA DE APLICAÇÕES (ORIGENS)**

**5.1 Como ficará a lista de “tipos de realização/origens”?**

**Resposta:**\\

Serão convertidos para “Aplicações”, como:

-   APP
-   Portal UF
-   EAD
-   Evento de Educação
-   Evento de Terceiros
-   Agência / Atendimento assistido
-   Aplicações nacionais (ex.: Nota Fiscal Eletrônica)

Cada uma terá instrumentos e regras próprias.

**5.2 O ATN continuará existindo?**

**Resposta:**\\

Sim.\\

Será a “Aplicação genérica” usada quando o atendimento não se encaixar em outra categoria.

**6\. ANALYTICS / CRMA / RELATÓRIOS**

**6.1 O FOCO terá apenas os relatórios simples da plataforma?**

**Resposta:**\\

Não.\\

Existem **3 níveis de ferramentas**:

1.  **Relatórios e dashboards nativos do FOCO** (já disponíveis)
2.  **CRMA / Tableau** – 36 licenças adquiridas
3.  **Ferramentas externas**: CLIC, Power BI

**6.2 Para que casos usar cada ferramenta?**

**Resposta:**\\

Ainda será publicado documento de orientação, mas a lógica geral:

<table><thead><tr><th style="text-align:left"><strong>Tipo</strong></th><th style="text-align:left"><strong>Uso Típico</strong></th></tr></thead><tbody><tr><td style="text-align:left"><strong>Relatórios nativos</strong></td><td style="text-align:left">consumo do FOCO / painéis simples</td></tr><tr><td style="text-align:left"><strong>CRMA / Tableau</strong></td><td style="text-align:left">combinações com bases externas, análises avançadas</td></tr><tr><td style="text-align:left"><strong>Power BI / Qlik</strong></td><td style="text-align:left">necessidades locais específicas</td></tr></tbody></table>

**6.3 A equipe de BI dos estados já pode começar?**

**Resposta:**\\

Sim, principalmente com relatórios nativos.\\

Para CRMA, haverá documento e comunicação oficial.

**7\. ENDEREÇOS / CÓDIGOS / API DE CEP**

**7.1 O FOCO possui “código de bairro, cidade, UF, setor”, como no SAS?**

**Resposta:**\\

Não.\\

Esses códigos eram **proprietários do SAS** e não existem no FOCO.

**7.2 A API de Endereços/Correios do Mulesoft já está pronta?**

**Resposta:**\\

A base está pronta.\\

A API deve ser disponibilizada no barramento Mulesoft em **~2 semanas** (estimativa Global Red).

**7.3 O FOCO passará a buscar dados da API dos Correios?**

**Resposta:**\\

Sim.\\

Quando o barramento estiver pronto, haverá manutenção no FOCO para consumir os dados.

**7.4 Haverá integração futura com bases enriquecidas (ex.: Paraná)?**

**Resposta:**\\

Sim — sugerido para uma **V2** futura.

**8\. INTEGRAÇÕES / ENRIQUECIMENTO / PROCESSOS ESPECIAIS**

**8.1 Estados que usavam SEAC e não SAS terão problemas?**

**Resposta:**\\

Sim — precisarão se adaptar ao padrão do FOCO.\\

A flexibilidade antiga **não será mais mantida**.

**8.2 Como resolver a falta de UO, portfólio, tema/subtema etc. nos processos antigos?**

**Resposta:**\\

Será necessário um **planejamento de migração**.\\

O nacional propôs um **cronograma de faseamento**, mas os estados deverão ajustar seus processos.

**9\. GESTÃO DO CRONOGRAMA**

**9.1 Será possível enviar sem UO para homologação?**

**Resposta:**\\

Sim.

**9.2 E para produção?**

**Resposta:**\\

Não.\\

Haverá **prazo definido** para que todos os estados se adequem à obrigatoriedade.

**10\. OUTRAS DÚVIDAS**

**10.1 Ferramentas de monitoramento/APM existem no FOCO?**

**Resposta:**\\

Não nativamente.\\

A Globant avaliará soluções no AppExchange.

**10.2 Quando os estados têm dúvidas técnicas específicas, para onde mandar?**

**Resposta:**

-   Abrir **chamados** para casos que exigem análise técnica
-   Trazer dúvidas gerais para as **reuniões diárias**
-   Se for questão de negócio, envolver URC / time da Damasco

**10.3 O que acontece com estados que têm processos não alinhados ao padrão?**

**Resposta:**\\

Precisarão adaptar.\\

A padronização é mandatória para:

-   SMR
-   DW de atendimentos
-   Estratégia de relacionamento
-   Metas mobilizadoras (Engajamento)

\\===================================================================

**FAQ – Reunião de Dúvidas (Integrações, Record Types, Eventos, Consultorias, Queries, Performance, Stage, Dashboards, Governança, Market Cloud)**

* * *

**1\. Exclusão de Atendimentos (DELETE) via Integração**

**1.1 É possível excluir interações/atendimentos via integração?**

**Resposta:**\\

Não por padrão.\\

Somente usuários com um **conjunto específico de permissões** podem excluir interações.\\

A Globant analisará se esse conjunto pode ser atribuído ao **perfil de integração**.\\

Pode virar HU caso necessário.

* * *

**1.2 Então não é um problema do meu usuário especificamente?**

**Resposta:**\\

Correto.\\

É uma questão de **perfil e permissões**, não um problema isolado.

* * *

**2\. Problemas em Registrar Atendimentos (Record Types, Regras, PF/PJ, UO)**

**2.1 Preciso de documentação oficial dos RecordTypes?**

**Resposta:**\\

Sim — será necessário.\\

A falta desta documentação está causando erros recorrentes.\\

Ainda não existe, e será construída.

* * *

**2.2 Não consigo enviar atendimento SEM atendente. É permitido?**

**Resposta:**\\

No SAS era possível; no FOCO depende do **RecordType** e das regras aplicadas.\\

A Globant precisa analisar o payload (via chamado).

* * *

**2.3 Não consigo enviar atendimento sem pessoa jurídica. É obrigatório agora?**

**Resposta:**\\

Não deveria ser obrigatório para casos PF.\\

Precisa abrir **chamado** com payload para análise.

* * *

**2.4 Não está claro qual RecordType usar em cada tipo de atendimento. O que fazer?**

**Resposta:**\\

Abrir chamados com exemplos concretos.\\

A Globant vai montar um **documento consolidado por fluxo**, com payloads corretos e exemplos (similar ao material de Eventos).

* * *

**2.5 Posso registrar atendimento sem unidade organizacional?**

**Resposta:**\\

Hoje **não**.\\

UO é **obrigatória**, pois é fundamental para estratégia de relacionamento e rastreabilidade.\\

Estados que não enviavam precisarão se adaptar (cronograma será criado).

* * *

**3\. Consolidação de Consultoria via Integração**

**3.1 A integração pode consolidar consultorias (via API), assim como o botão na UI?**

**Resposta:**\\

Sim — deve ser possível.\\

Como deu erro, Globant pediu:

-   enviar **print + payload**
-   abrir **chamado**\\Isso será analisado junto com o caso dos eventos (consolidação via API).

* * *

**4\. Documentação, Base de Conhecimento e Chamados**

**4.1 Repetimos muitas perguntas na reunião. Podemos ter uma base de conhecimento central?**

**Resposta:**\\

Sim — será criada.\\

Ideia:

-   Documento central (Drive) com todas as soluções
-   Inclusão automática dos resultados dos chamados
-   Links, payloads, exemplos de erros e correções

* * *

**4.2 A melhor forma de tratar problemas é via chamado ou pela reunião?**

**Resposta:**\\

Para problemas complexos → **abrir chamado**.\\

Para dúvidas rápidas → trazer para a reunião.\\

Chamados permitirão documentar e reutilizar soluções.

* * *

**5\. Market Cloud (Questões de Integração)**

**5.1 Onde tirar dúvidas sobre integração com Marketing Cloud?**

**Resposta:**\\

Uma agenda com **Pedro (URC)** será marcada para tratar exclusivamente das integrações Marketing Cloud ↔ FOCO.

* * *

**6\. Problemas com Endereços, UF, CEP e Validações**

**6.1 Erro com UF (ISO) ao enviar PF/PJ. É normal?**

**Resposta:**\\

Sim.\\

Ocorria erro de ISO quando a UF era informada com acento ou grafia incorreta.\\

Correção: **não enviar UF no payload** nesse caso → funcionou.

* * *

**6.2 Validações UF x Cidade estão diferentes entre PF e PJ. Por quê?**

**Resposta:**\\

Porque a regra de PF **está desenvolvida, mas marcada como “não subir”**.\\

A única validação vigente é a de PJ.

* * *

**6.3 Por que a validação de UF/cidade existe para PJ mas não para PF?**

**Resposta:**\\

Precisa ser discutido.\\

É tema de governança, pois pode gerar inconsistência de dados.\\

Será levado para decisão URC.

* * *

**6.4 O CEP não está sendo validado no STG. É bug?**

**Resposta:**\\

Não.\\

As regras de qualidade do SAS estão **80% implementadas**, mas **não foram liberadas no Stage** para não atrapalhar testes.\\

Logo, STG ainda não reflete todas as regras.

* * *

**7\. Queries, Describe, Busca de Dados, Vínculos PF-PJ**

**7.1 Existe documentação com queries prontas?**

**Resposta:**\\

Não.\\

O FOCO fornece apenas:

-   endpoint **Describe**
-   manual de uso
-   exemplos de queries básicas

Queries específicas devem ser criadas pelos integradores.

* * *

**7.2 Não achei o campo “Empresa prioritária” (prioritário). Ele existe?**

**Resposta:**\\

Não encontrado no Describe.\\

A equipe pediu:

-   Nome do campo no SAS
-   Serviço em que o campo aparece no SAS\\Após isso será investigado.

* * *

**7.3 Como encontrar atributos quando não aparecem no Describe?**

**Resposta:**\\

Consultar:

-   Describe
-   Dicionário de Dados (Globant)
-   DEPARA (SAS → FOCO)\\Se mesmo assim não aparecer → abrir chamado.

* * *

**8\. Performance de Queries (SOQL), Limites, Padrões**

**8.1 Por que recebia erro 504 ao fazer queries grandes?**

**Resposta:**\\

Motivo: **Excesso de retorno**.\\

O Salesforce nunca retorna a base inteira — há limites.

* * *

**8.2 O que significa o campo done = false nas respostas?**

**Resposta:**\\

Que **a consulta não terminou**.\\

É necessário chamar o **nextRecordsUrl** para buscar o restante da paginação.

* * *

**8.3 Qual o limite de registros retornados por query?**

**Resposta:**\\

Aproximadamente **30.000 registros por página** (varia).\\

Inner queries também contam no limite.

* * *

**8.4 Como paginar resultados?**

**Resposta:**\\

Usando o campo:

nextRecordsUrl

Realizando nova requisição até done = true.

* * *

**8.5 Existe limite de chamadas por minuto?**

**Resposta:**\\

Não explícito, mas é recomendado evitar picos.\\

Limite que importa é **diário**.

* * *

**8.6 Qual o limite diário de uso de APIs do FOCO?**

**Resposta:**\\

Entre **70 e 100 milhões** de requisições diárias por organização.\\

Atualmente a média em produção está em **~8 milhões**, bem abaixo do limite.

* * *

**8.7 O limite é compartilhado entre todos os estados?**

**Resposta:**\\

Sim.\\

A mesma instância do FOCO é usada por todas as UFs.

* * *

**8.8 Não é arriscado esperar chegar perto do limite para agir?**

**Resposta:**\\

Sim — será criado um **fórum próprio de governança** para acompanhar limites e consumo.

* * *

**9\. Dashboards, Relatórios e BI (CRMA, Power BI, Qlik)**

**9.1 É possível montar painéis completos dentro do FOCO?**

**Resposta:**\\

Sim.\\

O módulo nativo de relatórios/painéis é **poderoso**, porém burocrático.

* * *

**9.2 O que diferencia o CRMA (Tableau / Analytics Salesforce)?**

**Resposta:**\\

CRMA permite:

-   grande volume
-   múltiplas fontes externas
-   dashboards avançados
-   mais camadas de relacionamento

Existem **36 licenças** adquiridas.

* * *

**9.3 O Power BI conecta nativamente ao Salesforce?**

**Resposta:**\\

Sim.\\

É uma opção válida e recomendada.

* * *

**9.4 Vamos perder os dashboards que hoje usam dados do SAS?**

**Resposta:**\\

Não.\\

Os dados do FOCO poderão ser consumidos via:

-   Power BI
-   CRMA
-   Qlik
-   DW do novo SME (2026)

* * *

**9.5 Precisamos entender o que vale construir no FOCO vs. BI externo. Terá documento?**

**Resposta:**\\

Sim.\\

A URC + Globant farão documento orientando:

-   quando usar painel nativo
-   quando usar CRMA
-   quando usar Power BI / Qlik
-   quando consultar DW

* * *

**10\. Governança de Releases / Subidas / Stage / Validações**

**10.1 Releases sobem direto para Stage e Produção simultaneamente?**

**Resposta:**\\

Sim — hoje o processo é simultâneo.

* * *

**10.2 Quem valida releases? Somente área de negócio?**

**Resposta:**\\

Atualmente sim, mas isso vai mudar.\\

Será criado um **Comitê de Governança** para:

-   validar impacto técnico
-   validar impacto de integração
-   aprovar desenvolvimento
-   aprovar liberação

* * *

**10.3 É crítico envolver integradores na validação?**

**Resposta:**\\

Sim — urgência destacada pelos estados e Globant.\\

Será implementado nas próximas 2 semanas.

* * *

**11\. Dicionário de Dados / DEPARA / Campos Faltantes**

**11.1 Existe dicionário de dados completo?**

**Resposta:**\\

Sim, fornecido pela Globant.\\

Mas ainda não cobre todas as necessidades.

* * *

**11.2 O DEPARA contém tudo que existe no FOCO?**

**Resposta:**\\

Não.\\

Ele mostra somente o mapeamento SAS → FOCO.

* * *

**11.3 Campos exclusivos do FOCO (ex.: vínculos prioritários) não aparecem no DEPARA. O que fazer?**

**Resposta:**\\

Consultar:

-   Describe
-   Dicionário de Dados
-   Chamado (se não aparecer)

* * *

**12\. Ambiente STG / Homologação**

**12.1 O STG está atualizado com todas as regras de qualidade?**

**Resposta:**\\

Não.\\

Por decisão estratégica, várias regras **não foram liberadas** no Stage para não bloquear integrações.

* * *

**12.2 Quando STG será atualizado com todas as regras?**

**Resposta:**\\

Após estabilização das integrações.\\

Ainda sem data, mas está em andamento.

* * *

**13\. SebraeTec**

**13.1 Quando as correções do SebraeTec ficam prontas?**

**Resposta:**\\

Na próxima release — previsão **dia 18**, após validação de negócio.

* * *

**14\. Dashboard de Consumo / Performance das APIs**

**14.1 Existe dashboard no Mulesoft para consumo/performance das APIs?**

**Resposta:**\\

Sim, mas é genérico.\\

Possível disponibilizar futuramente em ferramenta APM nacional.

* * *

**15\. Outras Dúvidas**

**15.1 Existe query pronta para buscar CPF/PJ?**

**Resposta:**\\

Não.\\

Usar Describe + SOQL.\\

A documentação apenas orienta como montar queries.

* * *

**15.2 Campo de “vínculo prioritário” não existe no objeto Contact/Account. E agora?**

**Resposta:**\\

Campo não localizado — estado deve enviar:

-   nome exato
-   serviço SAS onde aparece

Para que a Globant faça o diagnóstico.

\\=========================================================================

**FAQ – Reunião de Dúvidas (Instrumento, Record Types, Consultorias, Eventos, Performance, BI, Governança, APIs Auxiliares)**

* * *

**1\. Instrumento (Interação de Atendimento)**

**1.1 O campo** _**instrumento**_ **será mantido como objeto ou convertido em picklist?**

**Resposta:**\\

Será **padronizado como picklist**, tanto no objeto _Case (Interação)_ quanto no objeto do portfólio.\\

Isso evita duplicidade e inconsistência.

* * *

**1.2 Qual a data da mudança para picklist?**

**Resposta:**\\

Não definida.\\

O Júnior criará a OS, que será priorizada nas próximas sprints.

* * *

**2\. Documentação de Record Types e Payloads**

**2.1 Existe documentação dos Record Types dos atendimentos?**

**Resposta:**\\

Ainda **não**.\\

A falta dessa documentação está afetando envios de interações e consultorias.\\

A Globant irá produzir material de apoio com payloads exemplificados.

* * *

**2.2 Como proceder enquanto a documentação não é entregue?**

**Resposta:**\\

Abrir **chamados** com payloads completos e descrição do fluxo.\\

A Globant está priorizando este formato para diagnosticar.

* * *

**3\. Consultorias – Problemas, Consolidação, Regras e Confusão Geral**

**3.1 O que explica as dificuldades em registrar consultorias (balcão, pontual, estruturada)?**

**Resposta:**\\

A área de negócio confirmou que o **regramento de consultorias é complexo**, envolvendo:

-   balcão
-   pontual
-   estruturada
-   consultorias de produtos (produtizadas)
-   SebraeTec
-   agentes (“Sebrae na sua empresa”)

Muito do que hoje é chamado “consultoria” deveria ser “assessoramento”.

* * *

**3.2 A consolidação de consultoria pode ser feita via API?**

**Resposta:**\\

Ainda não.\\

Hoje a consolidação funciona apenas via **botão na tela**.\\

A Globant irá analisar via chamado (caso Celeste) e generalizar a solução.

* * *

**3.3 Existem inconsistências de nomenclatura como Product2 no lugar de “disponibilização”?**

**Resposta:**\\

Sim.\\

É porque Product2 é **objeto nativo** do Salesforce, não pode ser renomeado via API.\\

O rótulo exibido na tela foi alterado, mas o _API Name_ é fixo.

* * *

**3.4 Será criado documento oficial sobre fluxos de consultoria?**

**Resposta:**\\

Sim.\\

A área de Soluções (Carol, Natália, UGS) irá produzir o documento de **regras e fluxos**, incluindo:

-   como identificar cada tipo
-   quais campos enviar
-   regramento por tipo
-   relação com disponibilização
-   integração conforme metodologia\\Depois a Global Red fará o **de-para técnico**.

* * *

**4\. Uso do “Setor/Segmento” na Atividade Econômica (CNAE)**

**4.1 Ao consultar atividade econômica (CNAE), o setor/segmento não aparece. É esperado?**

**Resposta:**\\

No FOCO, realmente não aparece na consulta.\\

Mas a informação **existe em tela**.\\

Esse campo precisa ser adicionado na API — foi anotado e será tratado.

* * *

**4.2 Existe API para buscar setor/segmento via Mulesoft?**

**Resposta:**\\

Sim — **API nova** disponibilizada pela UTIC via Mulesoft.\\

Permite consultar:

-   CNAE
-   setor
-   segmento\\Documentação e credenciais serão divulgadas oficialmente.

* * *

**4.3 A API de projetos e ações do LEME também foi disponibilizada?**

**Resposta:**\\

Sim.\\

A UTIC também disponibilizou **API para consulta de Projetos/Ações**, usando o mesmo modelo do SAS.\\

O FOCO usa essa API internamente.

* * *

**5\. Inscrição em Eventos e Dependências com SAS**

**5.1 Recebo erro: “Usuário não sincronizado com SAS”. Isso é bug?**

**Resposta:**\\

Não é bug.\\

É uma **regra herdada do SAS**:

-   para inscrever participante no evento, a conta precisa estar sincronizada com SAS.

Em 2026 a regra **deixará de existir**.\\

Para testes, pode haver “bypass” controlado em ambientes específicos — mas não em STG ou PROD.

* * *

**5.2 Qual alternativa usar durante testes?**

**Resposta:**\\

Utilizar **contas já sincronizadas** com SAS.

* * *

**6\. Dicionário de Dados, DEPARA, Documentação e FAQ**

**6.1 Há documentação de queries prontas para CPF, PJ, vínculos etc.?**

**Resposta:**\\

Não.\\

A orientação oficial é:

-   usar **Describe**
-   consultar dicionário de dados Globant
-   usar DEPARA SAS → FOCO

* * *

**6.2 Haverá um FAQ oficial centralizado?**

**Resposta:**\\

Sim — já está em construção (Global Red + UTIC).\\

Incluirá:

-   erros
-   respostas
-   boas práticas
-   payloads
-   exceções
-   pré-requisitos
-   massa de dados necessária

* * *

**6.3 A base de conhecimento incluirá também chamados resolvidos?**

**Resposta:**\\

Sim.\\

Será montado para evitar repetição de dúvidas.

* * *

**7\. Notificações Automáticas (CDC / Streaming API)**

**7.1 Existe como FOCO notificar o Mulesoft quando um dado é alterado?**

**Resposta:**\\

Sim.\\

Funciona via:

1.  **Change Data Capture (CDC)** – captura mudanças de:
    1.  Account
    2.  Contact
    3.  Case
    4.  Outras entidades
2.  **Streaming API** – permite filtrar eventos por regras, possivelmente por UF.
3.  **Platform Events** – eventos customizados publicados na plataforma.

* * *

**7.2 O CDC pode notificar apenas registros de Minas Gerais?**

**Resposta:**\\

Não diretamente.\\

CDC envia **tudo**.\\

Para filtro por UF, seria preciso usar **Streaming API ou Platform Events**.

* * *

**8\. Performance, Limites de API e Escalabilidade**

**8.1 Painéis internos do Salesforce aumentam o consumo de API?**

**Resposta:**\\

Não.\\

Dashboards criados **dentro do Salesforce** **não consomem API**.

* * *

**8.2 Consumo de API do FOCO é compartilhado entre todas as UFs?**

**Resposta:**\\

Sim.\\

Limite diário da org é ~70 milhões chamadas/dia.\\

Atualmente o uso real está em **~3–8 milhões/dia**.

* * *

**8.3 Consultas API do FOCO aumentarão muito com as novas integrações?**

**Resposta:**\\

Sim — principalmente:

-   consultas de evento
-   consultas de case
-   consultas de portfólio
-   validações
-   consumo por dashboards externos

A preocupação dos estados foi registrada para governança.

* * *

**8.4 Query grande retorna erro. É esperado?**

**Resposta:**\\

Sim:

-   Salesforce nunca retorna a base completa
-   Usa nextRecordsUrl com paginação
-   done=false indica mais páginas

* * *

**8.5 Como descobrir limites e boas práticas?**

**Resposta:**\\

Será realizada uma agenda específica (URC + Globant + UTIC + Estados) para definir governança de:

-   volume
-   limites
-   callbacks
-   ETLs
-   dashboards
-   requisitos de DW 2026

* * *

**9\. Dashboards e BI (Power BI, CRMA, Painéis nativos, DW)**

**9.1 Onde construir painéis oficiais do SEBRAE?**

**Resposta:**\\

A URC definirá documento oficial, mas hoje temos 4 caminhos:

1.  **Painéis nativos FOCO** – para visão operacional
2.  **CRMA (Tableau/Analytics Salesforce)** – visão avançada cruzando bases
3.  **Power BI (conexão nativa)** – comum nos estados
4.  **Data Lake UGE + DW Atendimento** – visão estratégica 2026

* * *

**9.2 Todos os painéis internos podem ser migrados para FOCO?**

**Resposta:**\\

Possível, mas:

-   não é trivial
-   muitos estados têm milhares de dashboards SAS/CLIC
-   é preciso governança
-   UGE e URC montarão documento orientador

* * *

**9.3 A conexão Power BI ↔ Salesforce está funcionando?**

**Resposta:**\\

Sim, existe conector nativo.\\

Alguns estados reportaram dificuldades; serão tratadas via agenda específica.

* * *

**9.4 O consumo via Power BI conta no limite de APIs?**

**Resposta:**\\

Sim.\\

Chamada **externa** conta.\\

Painel **nativo FOCO** não conta.

* * *

**10\. Governança de Releases e Integrações**

**10.1 Atualizações podem ir direto para produção sem validação técnica?**

**Resposta:**\\

**Não pode.**\\

Sob risco crítico para integrações.\\

Foi identificado um caso (SebraeTec) que exigiu alerta reforçado.

A governança a ser implantada:

-   validação de negócio
-   validação de integração
-   validação técnica
-   comitê de aprovação de releases

* * *

**10.2 Como será o processo daqui em diante?**

**Resposta:**\\

Governança será formalizada, evitando:

-   subir regra somente em tela
-   criar regressões em APIs
-   quebrar integrações em produção
-   mudança sem OS e validação dupla

* * *

**11\. APIs Auxiliares (Mulesoft)**

**11.1 Está disponível API de CNAE/Setor/Segmento via Mulesoft?**

**Resposta:**\\

Sim.\\

Nova API UTIC (replicando SAS).\\

Será documentada e divulgada oficialmente.

* * *

**11.2 E API de Projetos/Ações (LEME)?**

**Resposta:**\\

Sim.\\

Disponível, aprovada e publicada.

* * *

**12\. Chamados e Pendências**

**12.1 Chamados abertos pela Celeste cobrem todos os problemas?**

**Resposta:**\\

Sim — chamados 63 e 64:

-   interação
-   consultoria
-   UO
-   consolidação
-   payloads completos\\Serão analisados.

* * *

**13\. Regras SAS vs Regras FOCO (Qualidade)**

**13.1 A regra de qualidade do SAS está ativa no Stage?**

**Resposta:**\\

Não.\\

A implementação está em **80%**, mas não foi liberada no STG.\\

Será confirmada após homologação.

* * *

**14\. CDC / Streaming: Notificações automáticas**

**14.1 FOCO pode notificar Mulesoft quando registro muda?**

**Resposta:**\\

Sim – via:

-   Change Data Capture
-   Streaming API
-   Platform Events

Demonstração foi feita na reunião.

* * *

**15\. Recesso UTIC / URC**

**15.1 O Nacional entrará em recesso? Isso afeta o suporte?**

**Resposta:**\\

A UTIC/URC manterá **escala ativa**.\\

Datas informadas:

-   Recesso inicia **22/12**
-   Retorno Nacional **05/01**
-   Equipes estarão de plantão (escala será divulgada)

\\=============================================================
