# Interface AlertService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface AlertService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface AlertService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de notificações.

    Since:

    1.5.8

    Author:

    luis.junior


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">countUnreadAlerts</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;receiverId)</code></th><td class="colLast"><div class="block">Método que conta os alertas não lidos de um usuário.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">countUnreadAlertsByModule</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;module, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&nbsp;receiverId)</code></th><td class="colLast"><div class="block">Método que conta os alertas de um modulo não lidos de um usuário</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">getTenantTotalOfNotification</a></span>()</code></th><td class="colLast"><div class="block">Get the number of notification in the tenant</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertVO.html" title="class in com.fluig.sdk.api.alert">AlertVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">listAlertsWithAction</a></span>​(int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast"><div class="block">Busca os alertas com ação vinculada, do usuário logado ordenado pela data de criação.</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertVO.html" title="class in com.fluig.sdk.api.alert">AlertVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">listAlertsWithNote</a></span>​(int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast"><div class="block">Busca os alertas com nota, do usuário logado ordenado pela data de criação.</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertVO.html" title="class in com.fluig.sdk.api.alert">AlertVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">listAllAlerts</a></span>​(int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast"><div class="block">Retorna todas as notificações do usuário logado ordenadas pela data de criação.</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertVO.html" title="class in com.fluig.sdk.api.alert">AlertVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">listAllAlertsByModule</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;module, int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast"><div class="block">Retorna todas as notificações de um usuário por um único módulo</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">markAlertAsRead</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;loginReceiver, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;alertsId)</code></th><td class="colLast"><div class="block">Método marca os alertas informados de um usuario tambem dado como lidos</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">markAllAlertsAsRead</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;loginReceiver)</code></th><td class="colLast"><div class="block">Método marca todos os alertas de um usuario como lidos.</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">removeAlerts</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;loginSender, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;alertsId)</code></th><td class="colLast"><div class="block">Método que remove os alertas informados de um usuario tambem dado, esse método também é responsável por remover os senders, places e objects relacionado aos alertas</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">saveConfiguration</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/alert/AlertConfigVO.html" title="class in com.fluig.sdk.api.alert">AlertConfigVO</a>&nbsp;alertConfig)</code></th><td class="colLast"><div class="block">Salva a configuração de um usuário para receber ou não alertas de um dado evento através de um dado aplicativo.</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/AlertService.html">sendNotification</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;eventKey, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;loginSender, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;loginReceiver, com.totvs.technology.foundation.alert.AlertObject&nbsp;object, com.totvs.technology.foundation.alert.AlertObject&nbsp;place, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.alert.AlertAction&gt;&nbsp;actions, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;metadata)</code></th><td class="colLast"><div class="block">Método que deve ser invocado por todos os módulos do sistema para enviar alertas.</div></td></tr></tbody></table>

        -   ### Methods inherited from interface com.fluig.sdk.service.[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")

            `[expand](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html), [generateOrderParam](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html)`


-   -   ### Field Detail

        -   #### JNDI\_NAME

            ```
            static final String JNDI_NAME
            ```

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


        -   #### JNDI\_REMOTE\_NAME

            ```
            static final String JNDI_REMOTE_NAME
            ```

            See Also:

            [Constant Field Values](https://api.fluig.com/old/sdk/constant-values.html)


    -   ### Method Detail

        -   #### getTenantTotalOfNotification

            ```
            Long getTenantTotalOfNotification()
                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Get the number of notification in the tenant

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listAllAlerts

            ```
            List<AlertVO> listAllAlerts​(int limit,
                                        int offset)
                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna todas as notificações do usuário logado ordenadas pela data de criação.

            Parameters:

            `limit` -

            `offset` -

            Returns:

            lista de notificações.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listAlertsWithNote

            ```
            List<AlertVO> listAlertsWithNote​(int limit,
                                             int offset)
                                      throws com.fluig.sdk.api.common.SDKException
            ```

            Busca os alertas com nota, do usuário logado ordenado pela data de criação.

            Parameters:

            `limit` - - limit de resultados

            `offset` - - offset

            Returns:

            lista de alertas

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listAlertsWithAction

            ```
            List<AlertVO> listAlertsWithAction​(int limit,
                                               int offset)
                                        throws com.fluig.sdk.api.common.SDKException
            ```

            Busca os alertas com ação vinculada, do usuário logado ordenado pela data de criação.

            Parameters:

            `limit` - - limit de resultados

            `offset` - - offset

            Returns:

            lista de alertas

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### listAllAlertsByModule

            ```
            List<AlertVO> listAllAlertsByModule​(String module,
                                                int limit,
                                                int offset)
                                         throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna todas as notificações de um usuário por um único módulo

            Parameters:

            `module` -

            `limit` -

            `offset` -

            Returns:

            lista de notificações.

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### sendNotification

            ```
            void sendNotification​(String eventKey,
                                  String loginSender,
                                  String loginReceiver,
                                  com.totvs.technology.foundation.alert.AlertObject object,
                                  com.totvs.technology.foundation.alert.AlertObject place,
                                  List<com.totvs.technology.foundation.alert.AlertAction> actions,
                                  Map<String,​String> metadata)
                           throws com.fluig.sdk.api.common.SDKException
            ```

            Método que deve ser invocado por todos os módulos do sistema para enviar alertas.

            Parameters:

            `eventKey` - - String única que representa o evento que gerou o alerta.

            `loginSender` - - Login(alias) do usuário que está enviando a notificação (tabela FDN\_USERTENANT) (opcional)

            `loginReceiver` - - Login(alias) do usuário que receberá a notificação (tabela FDN\_USERTENANT)

            `object` - - Objeto sobre o qual o evento foi gerado (opcional)

            `place` - - Lugar onde o evento foi gerado (opcional)

            `actions` - - Ações disponibilizadas pela notificação

            `metadata` - - Metadados para serem armazenados no alerta

            Throws:

            `com.fluig.sdk.api.common.SDKException` - - Indica falha no envio


        -   #### removeAlerts

            ```
            void removeAlerts​(String loginSender,
                              List<Long> alertsId)
                       throws com.fluig.sdk.api.common.SDKException
            ```

            Método que remove os alertas informados de um usuario tambem dado, esse método também é responsável por remover os senders, places e objects relacionado aos alertas

            Parameters:

            `loginSender` - - Login(alias) do usuário que está enviando a notificação (tabela FDN\_USERTENANT)

            `alertsId` - - Lista de id dos alertas

            Throws:

            `com.fluig.sdk.api.common.SDKException` - - Indica falha na remoção


        -   #### markAlertAsRead

            ```
            void markAlertAsRead​(String loginReceiver,
                                 List<Long> alertsId)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Método marca os alertas informados de um usuario tambem dado como lidos

            Parameters:

            `loginReceiver` - - Login(alias) do usuário que recebeu as notificações (tabela FDN\_USERTENANT)

            `alertsId` - - Lista de id dos alertas

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException` - - Indica falha na atualização

            `com.fluig.sdk.api.common.SDKException`


        -   #### markAllAlertsAsRead

            ```
            void markAllAlertsAsRead​(String loginReceiver)
                              throws com.fluig.sdk.api.common.SDKException
            ```

            Método marca todos os alertas de um usuario como lidos.

            Parameters:

            `loginReceiver` - - Login(alias) do usuário que recebeu a notificação (tabela FDN\_USERTENANT)

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException` - - Indica falha na atualização

            `com.fluig.sdk.api.common.SDKException`


        -   #### countUnreadAlerts

            ```
            Long countUnreadAlerts​(Long receiverId)
                            throws com.fluig.sdk.api.common.SDKException
            ```

            Método que conta os alertas não lidos de um usuário.

            Parameters:

            `receiverId` - - id do usuário.

            Returns:

            número de alertas não lidos

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException` - - Caso ocorra um erro na busca

            `com.fluig.sdk.api.common.SDKException`


        -   #### countUnreadAlertsByModule

            ```
            Long countUnreadAlertsByModule​(String module,
                                           Long receiverId)
                                    throws com.fluig.sdk.api.common.SDKException
            ```

            Método que conta os alertas de um modulo não lidos de um usuário

            Parameters:

            `receiverId` - - id do usuário.

            Returns:

            número de alertas não lidos

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException` - - Caso ocorra um erro na busca

            `com.fluig.sdk.api.common.SDKException`


        -   #### saveConfiguration

            ```
            void saveConfiguration​(AlertConfigVO alertConfig)
                            throws com.fluig.sdk.api.common.SDKException
            ```

            Salva a configuração de um usuário para receber ou não alertas de um dado evento através de um dado aplicativo.

            Parameters:

            `alertConfig` - - Configuração do alertas

            Throws:

            `com.totvs.technology.foundation.common.exception.FDNException` - - Indica falha ao salvar a configuração

            `com.fluig.sdk.api.common.SDKException`
