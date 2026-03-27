# Interface TasksService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface TasksService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface TasksService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de Tasks.

    Since:

    1.5.2

    Author:

    marcelo.pereira


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findApprovalDocumentsByUser</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Busca todos os Documentos em aprovação por usuário</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentTaskVO.html" title="class in com.fluig.sdk.api.document">DocumentTaskVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findDocsInAgreement</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Procura por documentos em consenso</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentTaskVO.html" title="class in com.fluig.sdk.api.document">DocumentTaskVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findDocsInCheckout</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Procura documentos em checkout</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findDocumentsToApprove</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Busca os documentos para aprovação</div></td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/WorkflowVO.html" title="class in com.fluig.sdk.api.workflow">WorkflowVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findExpiredWorkflowTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Solicitações Atrasadas</div></td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentVO.html" title="class in com.fluig.sdk.api.document">DocumentVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findMyDocuments</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Busca os Documentos em aprovação</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/WorkflowVO.html" title="class in com.fluig.sdk.api.workflow">WorkflowVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findMyRequests</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Minhas solicitações abertas</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/WorkflowVO.html" title="class in com.fluig.sdk.api.workflow">WorkflowVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findTasksInAgreement</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Tarefas em consenso</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/WorkflowVO.html" title="class in com.fluig.sdk.api.workflow">WorkflowVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">findWorkflowTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Solicitações Pendentes</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">getCountMyActiveRequests</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes)</code></th><td class="colLast"><div class="block">Count all my requests for the specified user</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">getCountMyDocuments</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId)</code></th><td class="colLast"><div class="block">Find and count all pending documents</div></td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">getCountOpenTasksByKind</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskKindEnum.html" title="enum in com.fluig.sdk.api.task">TaskKindEnum</a>&nbsp;kind)</code></th><td class="colLast"><div class="block">Count all open tasks that matches with kind and status</div></td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">getCountOpenTasksByKind</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskKindEnum.html" title="enum in com.fluig.sdk.api.task">TaskKindEnum</a>&nbsp;kind, <a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskStatusEnum.html" title="enum in com.fluig.sdk.api.task">TaskStatusEnum</a>&nbsp;status, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes)</code></th><td class="colLast"><div class="block">Count all open tasks that matches with kind and status</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">getOpenWorkflowTasksInPool</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;colleagueId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes)</code></th><td class="colLast"><div class="block">Gets all groups and roles which contains tasks in pool</div></td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/document/DocumentApproverVO.html" title="class in com.fluig.sdk.api.document">DocumentApproverVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">getPendentApprovals</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;documentId)</code></th><td class="colLast"><div class="block">Return users pendent to approve a document</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/ResumedTasksVO.html" title="class in com.fluig.sdk.api.task">ResumedTasksVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">getResumedTasksForPool</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;openInPool)</code></th><td class="colLast"><div class="block">Gets and mount the entire VO with related groups or roles inside the object</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">transferTasks</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/task/TaskTransferVO.html" title="class in com.fluig.sdk.api.task">TaskTransferVO</a>&nbsp;tasksTransfer)</code></th><td class="colLast"><div class="block">Transfer tasks from one user to another</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/TasksService.html">transferTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;transferOptions)</code></th><td class="colLast"><div class="block">Transfer tasks from one user to another</div></td></tr></tbody></table>

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

        -   #### findDocumentsToApprove

            ```
            List<DocumentVO> findDocumentsToApprove​(String colleagueId)
                                             throws com.fluig.sdk.api.common.SDKException
            ```

            Busca os documentos para aprovação

            Parameters:

            `colleagueId` -

            Returns:

            Documentos para aprovação

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os documentos para aprovação


        -   #### findMyDocuments

            ```
            List<DocumentVO> findMyDocuments​(String colleagueId)
                                      throws com.fluig.sdk.api.common.SDKException
            ```

            Busca os Documentos em aprovação

            Parameters:

            `colleagueId` -

            Returns:

            Documentos em aprovação

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os Documentos em aprovação


        -   #### findApprovalDocumentsByUser

            ```
            List<DocumentVO> findApprovalDocumentsByUser​(String colleagueId)
                                                  throws com.fluig.sdk.api.common.SDKException
            ```

            Busca todos os Documentos em aprovação por usuário

            Parameters:

            `colleagueId` -

            Returns:

            Documentos em aprovação

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar os Documentos em aprovação


        -   #### findWorkflowTasks

            ```
            List<WorkflowVO> findWorkflowTasks​(String colleagueId)
                                        throws com.fluig.sdk.api.common.SDKException
            ```

            Solicitações Pendentes

            Parameters:

            `colleagueId` -

            Returns:

            Solicitações Pendentes

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as solicitações Pendentes


        -   #### findExpiredWorkflowTasks

            ```
            List<WorkflowVO> findExpiredWorkflowTasks​(String colleagueId)
                                               throws com.fluig.sdk.api.common.SDKException
            ```

            Solicitações Atrasadas

            Parameters:

            `colleagueId` -

            Returns:

            Solicitações Atrasadas

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as solicitações atrasadas


        -   #### findMyRequests

            ```
            List<WorkflowVO> findMyRequests​(String colleagueId)
                                     throws com.fluig.sdk.api.common.SDKException
            ```

            Minhas solicitações abertas

            Parameters:

            `colleagueId` -

            Returns:

            Minhas solicitações abertas

            Throws:

            `com.fluig.sdk.api.common.SDKException` - Não foi possivel encontrar as Minhas solicitações abertas


        -   #### findTasksInAgreement

            ```
            List<WorkflowVO> findTasksInAgreement​(String colleagueId)
                                           throws com.fluig.sdk.api.common.SDKException
            ```

            Tarefas em consenso

            Parameters:

            `colleagueId` -

            Returns:

            Tarefas em consenso

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findDocsInAgreement

            ```
            List<DocumentTaskVO> findDocsInAgreement​(String colleagueId)
                                              throws com.fluig.sdk.api.common.SDKException
            ```

            Procura por documentos em consenso

            Parameters:

            `colleagueId` -

            Returns:

            List

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### findDocsInCheckout

            ```
            List<DocumentTaskVO> findDocsInCheckout​(String colleagueId)
                                             throws com.fluig.sdk.api.common.SDKException
            ```

            Procura documentos em checkout

            Parameters:

            `colleagueId` -

            Returns:

            List

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCountOpenTasksByKind

            ```
            int getCountOpenTasksByKind​(String colleagueId,
                                        TaskKindEnum kind)
                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Count all open tasks that matches with kind and status

            Parameters:

            `colleagueId` -

            `kind` -

            Returns:

            total of open tasks

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCountOpenTasksByKind

            ```
            int getCountOpenTasksByKind​(String colleagueId,
                                        TaskKindEnum kind,
                                        TaskStatusEnum status,
                                        List<String> processes)
                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Count all open tasks that matches with kind and status

            Parameters:

            `colleagueId` -

            `kind` -

            `status` -

            `processes` -

            Returns:

            total of open tasks

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCountMyActiveRequests

            ```
            int getCountMyActiveRequests​(String colleagueId,
                                         List<String> processes)
                                  throws com.fluig.sdk.api.common.SDKException
            ```

            Count all my requests for the specified user

            Parameters:

            `colleagueId` -

            `processes` -

            Returns:

            total of tasks

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getOpenWorkflowTasksInPool

            ```
            Map<String,​Long> getOpenWorkflowTasksInPool​(String colleagueId,
                                                              List<String> processes)
                                                       throws com.fluig.sdk.api.common.SDKException
            ```

            Gets all groups and roles which contains tasks in pool

            Parameters:

            `colleagueId` -

            `processes` -

            Returns:

            Map

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getCountMyDocuments

            ```
            int getCountMyDocuments​(String colleagueId)
                             throws com.fluig.sdk.api.common.SDKException
            ```

            Find and count all pending documents

            Parameters:

            `colleagueId` -

            Returns:

            total of documents

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getResumedTasksForPool

            ```
            List<ResumedTasksVO> getResumedTasksForPool​(Map<String,​Long> openInPool)
                                                 throws com.fluig.sdk.api.common.SDKException
            ```

            Gets and mount the entire VO with related groups or roles inside the object

            Parameters:

            `openInPool` -

            Returns:

            List contains tasks resume for group and roles

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### transferTasks

            ```
            String transferTasks​(Map<String,​String> transferOptions)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Transfer tasks from one user to another

            Returns:

            transfer log

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### transferTasks

            ```
            String transferTasks​(TaskTransferVO tasksTransfer)
                          throws com.fluig.sdk.api.common.SDKException
            ```

            Transfer tasks from one user to another

            Returns:

            transfer log

            Throws:

            `com.fluig.sdk.api.common.SDKException`


        -   #### getPendentApprovals

            ```
            List<DocumentApproverVO> getPendentApprovals​(Integer documentId)
                                                  throws com.fluig.sdk.api.common.SDKException
            ```

            Return users pendent to approve a document

            Parameters:

            `documentId` -

            Returns:

            Throws:

            `com.fluig.sdk.api.common.SDKException`
