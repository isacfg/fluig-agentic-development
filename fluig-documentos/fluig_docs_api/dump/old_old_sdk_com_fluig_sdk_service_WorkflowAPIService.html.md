# Interface WorkflowAPIService

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html](https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html)

---

Package [com.fluig.sdk.service](https://api.fluig.com/old/sdk/com/fluig/sdk/service/package-summary.html)

## Interface WorkflowAPIService

-   All Superinterfaces:

    `[BaseAPIService](https://api.fluig.com/old/sdk/com/fluig/sdk/service/BaseAPIService.html "interface in com.fluig.sdk.service")`

    * * *

    ```
    public interface WorkflowAPIService
    extends BaseAPIService
    ```

    Fornece acesso aos serviços de workflow.

    Since:

    1.5

    Author:

    vanei


-   -   ### Field Summary

        <table class="memberSummary"><caption><span>Fields</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Field</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">JNDI_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr><tr class="rowColor"><td class="colFirst"><code>static <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">JNDI_REMOTE_NAME</a></span></code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t3" class="tableTab"><span><a href="javascript:show(4);">Abstract Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">ProcessTaskVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">assumeProcessTask</a></span>​(long&nbsp;companyId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userId, int&nbsp;processInstanceId, int&nbsp;movementSequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;replacementId)</code></th><td class="colLast"><div class="block">Faz com que o usuário repassado assuma a tarefa.</div></td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskResultVO.html" title="class in com.fluig.sdk.api.workflow">AssumeProcessTaskResultVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">assumeProcessTask</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">AssumeProcessTaskVO</a>&nbsp;assumeProcessTaskVO)</code></th><td class="colLast"><div class="block">Faz com que o usuário repassado assuma a tarefa.</div></td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksResultVO.html" title="class in com.fluig.sdk.api.workflow">AssumeProcessTasksResultVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">assumeProcessTasks</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/AssumeProcessTasksVO.html" title="class in com.fluig.sdk.api.workflow">AssumeProcessTasksVO</a>&nbsp;assumeProcessTasksVO)</code></th><td class="colLast"><div class="block">Faz com que os usuários repassados assumam as tarefas vinculadas aos mesmos.</div></td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceResultVO.html" title="class in com.fluig.sdk.api.workflow">CancelInstanceResultVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">cancelInstance</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstanceVO.html" title="class in com.fluig.sdk.api.workflow">CancelInstanceVO</a>&nbsp;cancelInstanceVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesResultVO.html" title="class in com.fluig.sdk.api.workflow">CancelInstancesResultVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">cancelInstances</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/CancelInstancesVO.html" title="class in com.fluig.sdk.api.workflow">CancelInstancesVO</a>&nbsp;cancelInstanceVO)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">convertProcess</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&gt;&nbsp;processInstanceIds, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;newVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&gt;&nbsp;actualStates, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&gt;&nbsp;newStates)</code></th><td class="colLast"><div class="block">Converte as solicitaçõe de um processos para uma nova versão.</div></td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessObservationVO.html" title="class in com.fluig.sdk.api.workflow">ProcessObservationVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">createProcessObservation</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessObservationVO.html" title="class in com.fluig.sdk.api.workflow">ProcessObservationVO</a>&nbsp;processObservationVO)</code></th><td class="colLast"><div class="block">Insere um complemento em uma solicitação</div></td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessActivityVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findActivities</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion)</code></th><td class="colLast"><div class="block">Lista as atividades de uma versão de um processo</div></td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessActivityVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findActivities</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;active)</code></th><td class="colLast"><div class="block">Lista as atividades de uma versão de um processo</div></td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessActivityVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findActivities</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&gt;&nbsp;processInstanceId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;movementSequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;active, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;slaStatus, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialEndDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalEndDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;stateSequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;formFields, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;requesterLocal, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;assigneeLocal)</code></th><td class="colLast"><div class="block">Lista as atividades de uma versão de um processo</div></td></tr><tr id="i10" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">RequestProcessTaskVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findAssignedToMeTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusTypeTaskRequest, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">RequestProcessTaskVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findManagedByMeTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusTypeTaskRequest, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findMyRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.</div></td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">RequestProcessTaskVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findMyRequestsTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusTypeTaskRequest, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessObservationVO.html" title="class in com.fluig.sdk.api.workflow">ProcessObservationVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findObservations</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processInstanceId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;stateSequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;threadSequence)</code></th><td class="colLast"><div class="block">Retorna a lista de complementos em uma solicitação</div></td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessVersionVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessVersionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findProcessVersions</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version)</code></th><td class="colLast"><div class="block">Listagem de versões de um processo</div></td></tr><tr id="i16" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessVersionVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessVersionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findProcessVersions</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;formId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;formExistent, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;editing, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;active, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;blocked, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;requiresPassword, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;bpmnVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;inheritFormSecurity, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;mobileReady)</code></th><td class="colLast"><div class="block">Listagem de versões de um processo</div></td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessStateVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findProcessVersionsStates</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion)</code></th><td class="colLast"><div class="block">Listagem de estados de um processo</div></td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessStateVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findProcessVersionsStates</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;stateSequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;stateType, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;bpmnType, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;stateName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;stateDescription, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;interactives)</code></th><td class="colLast"><div class="block">Listagem de estados de um processo</div></td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessStateVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findProcessVersionsStates</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;bpmnType)</code></th><td class="colLast"><div class="block">Listagem de estados de um processo</div></td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html" title="class in com.fluig.sdk.api.workflow">BPMRequestVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequests</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion)</code></th><td class="colLast"><div class="block">Listagem de solicitações de uma determinada versão de um processo</div></td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html" title="class in com.fluig.sdk.api.workflow">BPMRequestVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequests</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;status)</code></th><td class="colLast"><div class="block">Listagem de solicitações de uma determinada versão de um processo</div></td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html" title="class in com.fluig.sdk.api.workflow">BPMRequestVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequests</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&gt;&nbsp;processInstanceId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;initialProcessInstanceId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;finalProcessInstanceId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;participants, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;completeColleagueIds, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;status, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;slaStatus, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assigneeName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterName, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialEndDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalEndDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;stateSequence, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Set.html?is-external=true" title="class or interface in java.util" class="externalLink">Set</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;formFields, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;requesterLocal, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Long.html?is-external=true" title="class or interface in java.lang" class="externalLink">Long</a>&gt;&nbsp;assigneeLocal)</code></th><td class="colLast"><div class="block">Listagem de solicitações de uma determinada versão de um processo</div></td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestSLAByProcessInstanceId</a></span>​(int&nbsp;processInstanceId, boolean&nbsp;populateCurrentTasks, boolean&nbsp;calculate, boolean&nbsp;populateCardFields, boolean&nbsp;populateLocals, boolean&nbsp;assigneeLocals)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.</div></td></tr><tr id="i24" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestSLAByProcessInstanceId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processInstanceId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.</div></td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLA</a></span>()</code></th><td class="colLast"><div class="block">Recupera uma lista das solicitações de SLA dos processos configurados.</div></td></tr><tr id="i26" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assigneeLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados.</div></td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes)</code></th><td class="colLast"><div class="block">Recupera uma lista das solicitações de SLA dos processos configurados.</div></td></tr><tr id="i28" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;statusRequiredList)</code></th><td class="colLast"><div class="block">Recupera uma lista das solicitações de SLA dos processos configurados.</div></td></tr><tr id="i29" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;statusRequiredList, boolean&nbsp;returnCurrentTasks)</code></th><td class="colLast"><div class="block">Recupera uma lista das solicitações de SLA dos processos configurados.</div></td></tr><tr id="i30" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;statusRequiredList, boolean&nbsp;returnCurrentTasks)</code></th><td class="colLast"><div class="block">Recupera uma lista das solicitações de SLA dos processos configurados.</div></td></tr><tr id="i31" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;statusRequiredList, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;finalWarningDate, boolean&nbsp;returnCurrentTasks, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;requesterLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;assigneeLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;com.totvs.technology.foundation.sdk.service.vo.common.OrderParam&gt;&nbsp;orderParams, boolean&nbsp;calculate, int&nbsp;page, int&nbsp;pageSize, boolean&nbsp;populateCardFields, boolean&nbsp;populateLocalsValue, boolean&nbsp;populateAssigneeLocalsValue)</code></th><td class="colLast"><div class="block">Recupera uma lista das solicitações de SLA dos processos configurados.</div></td></tr><tr id="i32" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLAAssignedToMe</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assigneeLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.</div></td></tr><tr id="i33" class="rowColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestSLAVO.html" title="class in com.fluig.sdk.api.workflow">RequestSLAVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findRequestsSLAManagedByMe</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assigneeLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;order, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.</div></td></tr><tr id="i34" class="altColor"><td class="colFirst"><code>com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/RequestProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">RequestProcessTaskVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">findSLATasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;page, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pageSize, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;statusTypeTaskRequest, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;calculate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;expand, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i35" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessInstanceInfoVO.html" title="class in com.fluig.sdk.api.workflow">ProcessInstanceInfoVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">getActiveTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processInstanceId)</code></th><td class="colLast"><div class="block">Retorna uma lista das atividades pendentes de um processo</div></td></tr><tr id="i36" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessVersionVO.html" title="class in com.fluig.sdk.api.workflow">ProcessVersionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">getAvailableProcess</a></span>​(long&nbsp;tenantId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;userId)</code></th><td class="colLast"><div class="block">Retorna uma lista de processos disponíveis para o usuário</div></td></tr><tr id="i37" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">getProcessVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId)</code></th><td class="colLast"><div class="block">Retorna a versão de um processo.</div></td></tr><tr id="i38" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">importProcess</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;xml, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;release)</code></th><td class="colLast"><div class="block">Importa um processo via XML</div></td></tr><tr id="i39" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">importProcess</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;xml, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;formId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;release)</code></th><td class="colLast"><div class="block">Importa um processo via XML</div></td></tr><tr id="i40" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVO.html" title="class in com.fluig.sdk.api.workflow">ProcessDefinitionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">listProcess</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;pattern, int&nbsp;limit, int&nbsp;offset)</code></th><td class="colLast"><div class="block">Retorna todos os processos da empresa.</div></td></tr><tr id="i41" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ProcessDefinitionVO.html" title="class in com.fluig.sdk.api.workflow">ProcessDefinitionVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">listSlaProcess</a></span>()</code></th><td class="colLast"><div class="block">Retorna todos os processos da empresa.</div></td></tr><tr id="i42" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">releaseLatestVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId)</code></th><td class="colLast"><div class="block">Libera a ultima versão do processo</div></td></tr><tr id="i43" class="rowColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">releaseVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;version)</code></th><td class="colLast"><div class="block">Libera uma versão do processo</div></td></tr><tr id="i44" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">ResumeProcessTaskVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeAssignedToMeTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;startDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;endDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i45" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">ResumeProcessTaskVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeManagedByMeTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;startDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;endDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i46" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeMyRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;countersRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.</div></td></tr><tr id="i47" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">ResumeProcessTaskVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeMyRequestsTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;startDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;endDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i48" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLA</a></span>()</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados.</div></td></tr><tr id="i49" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;countersRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assigneeLocals)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados.</div></td></tr><tr id="i50" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados.</div></td></tr><tr id="i51" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;cardFilters)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados.</div></td></tr><tr id="i52" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;countersRequiredList)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados.</div></td></tr><tr id="i53" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLA</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Map.html?is-external=true" title="class or interface in java.util" class="externalLink">Map</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>,​<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;countersRequiredList, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Date.html?is-external=true" title="class or interface in java.util" class="externalLink">Date</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;requesterLocalsList, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&gt;&nbsp;assigneeLocalsList)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados.</div></td></tr><tr id="i54" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLAAssignedToMe</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;countersRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assigneeLocals)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.</div></td></tr><tr id="i55" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeRequestsSLAVO.html" title="class in com.fluig.sdk.api.workflow">ResumeRequestsSLAVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeRequestsSLAManagedByMe</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processes, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;cardFilters, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;countersRequired, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalStartDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalDeadlineDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;initialWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;finalWarningDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requesterLocals, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assigneeLocals)</code></th><td class="colLast"><div class="block">Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.</div></td></tr><tr id="i56" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/ResumeProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">ResumeProcessTaskVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/service/WorkflowAPIService.html">resumeSLATasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;startDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;endDate, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;assignee, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;requester, <a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;manager)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

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

        -   #### listProcess

            ```
            List<ProcessDefinitionVO> listProcess​(String pattern,
                                                  int limit,
                                                  int offset)
                                           throws Exception
            ```

            Retorna todos os processos da empresa.

            Returns:

            lista de processos.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6


        -   #### getProcessVersion

            ```
            Integer getProcessVersion​(String processId)
                               throws com.fluig.sdk.api.common.SDKException
            ```

            Retorna a versão de um processo.

            Parameters:

            `processId` - ID do processo.

            Returns:

            Versão do processo.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5


        -   #### getAvailableProcess

            ```
            List<ProcessVersionVO> getAvailableProcess​(long tenantId,
                                                       String userId)
                                                throws Exception
            ```

            Retorna uma lista de processos disponíveis para o usuário

            Parameters:

            `tenantId` - - ID do tenant

            `userId` - - ID do usuário

            Returns:

            lista de processos disponíveis para o usuário.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.5.6


        -   #### getActiveTasks

            ```
            ProcessInstanceInfoVO getActiveTasks​(Integer processInstanceId)
                                          throws Exception
            ```

            Retorna uma lista das atividades pendentes de um processo

            Parameters:

            `processInstanceId` - - Numero da solicitação

            Returns:

            lista das atividades pendentes de um processo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.5.11


        -   #### createProcessObservation

            ```
            ProcessObservationVO createProcessObservation​(ProcessObservationVO processObservationVO)
                                                   throws com.fluig.sdk.api.common.SDKException
            ```

            Insere um complemento em uma solicitação

            Parameters:

            `processObservationVO` - - Objeto com as informações do complemento

            Returns:

            processObservationVO - Objeto com as informações do complemento incluindo Id criado.

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.8


        -   #### findObservations

            ```
            List<ProcessObservationVO> findObservations​(Integer processInstanceId,
                                                        Integer stateSequence,
                                                        Integer threadSequence)
            ```

            Retorna a lista de complementos em uma solicitação

            Parameters:

            `processInstanceId` - - Numero da solicitação

            `stateSequence` - - Código da atividade

            `threadSequence` - - Numero da thread

            Returns:

            processObservationVO - Lista com os complementos da solicitação.

            Since:

            1.5.8


        -   #### assumeProcessTask

            ```
            ProcessTaskVO assumeProcessTask​(long companyId,
                                            String userId,
                                            int processInstanceId,
                                            int movementSequence,
                                            String replacementId)
                                     throws com.fluig.sdk.api.common.SDKException
            ```

            Faz com que o usuário repassado assuma a tarefa.

            Parameters:

            `companyId` - - Código da empresa.

            `userId` - - Matrícula do usuário que assumirá a tarefa.

            `processInstanceId` - - Código da Solicitação a ser assumida.

            `movementSequence` - - Código do movimento da tarefa que será assumida.

            `replacementId` - - Código do usuário logado que está assumindo para seu substituído (se houver).

            Throws:

            `com.fluig.sdk.api.common.SDKException`

            Since:

            1.5.11


        -   #### assumeProcessTask

            ```
            AssumeProcessTaskResultVO assumeProcessTask​(AssumeProcessTaskVO assumeProcessTaskVO)
                                                 throws NamingException
            ```

            Faz com que o usuário repassado assuma a tarefa.

            Parameters:

            `assumeProcessTaskVO` - VO com os atributos para assumir a tarefa.

            Returns:

            Resultado do processo de assumir.

            Throws:

            `[NamingException](https://docs.oracle.com/en/java/javase/11/docs/api/java.naming/javax/naming/NamingException.html?is-external=true "class or interface in javax.naming")`

            Since:

            1.5.11


        -   #### assumeProcessTasks

            ```
            AssumeProcessTasksResultVO assumeProcessTasks​(AssumeProcessTasksVO assumeProcessTasksVO)
                                                   throws NamingException
            ```

            Faz com que os usuários repassados assumam as tarefas vinculadas aos mesmos.

            Parameters:

            `assumeProcessTasksVO` - VO com os atributos para assumir as tarefas.

            Returns:

            Resultado do processo de assumir.

            Throws:

            `[NamingException](https://docs.oracle.com/en/java/javase/11/docs/api/java.naming/javax/naming/NamingException.html?is-external=true "class or interface in javax.naming")`

            Since:

            1.5.11


        -   #### cancelInstance

            ```
            CancelInstanceResultVO cancelInstance​(CancelInstanceVO cancelInstanceVO)
                                           throws NamingException
            ```

            Throws:

            `[NamingException](https://docs.oracle.com/en/java/javase/11/docs/api/java.naming/javax/naming/NamingException.html?is-external=true "class or interface in javax.naming")`


        -   #### cancelInstances

            ```
            CancelInstancesResultVO cancelInstances​(CancelInstancesVO cancelInstanceVO)
                                             throws NamingException
            ```

            Throws:

            `[NamingException](https://docs.oracle.com/en/java/javase/11/docs/api/java.naming/javax/naming/NamingException.html?is-external=true "class or interface in javax.naming")`


        -   #### resumeRequestsSLA

            ```
            ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                                  Map<String,​String> cardFilters,
                                                  List<String> countersRequiredList)
                                           throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos.

            `countersRequiredList` - Lista dos tipos de contadores a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeRequestsSLA

            ```
            ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                                  Map<String,​String> cardFilters,
                                                  List<String> countersRequiredList,
                                                  Date initialStartDate,
                                                  Date finalStartDate,
                                                  Date initialDeadlineDate,
                                                  Date finalDeadlineDate,
                                                  Date initialWarningDate,
                                                  Date finalWarningDate,
                                                  String requester,
                                                  String assignee,
                                                  String manager,
                                                  List<String> requesterLocalsList,
                                                  List<String> assigneeLocalsList)
                                           throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos.

            `countersRequiredList` - Lista dos tipos de contadores a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa.

            `requester` - Requisitante da solicitação.

            `assignee` - Responsável da solicitação.

            `manager` - Gestor da solicitação.

            `requesterLocalsList` - Local em que a solicitação foi iniciada, separados por vírgula.

            `assigneeLocalsList` - Local do responsável pela atividade, separados por vírgula.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeRequestsSLA

            ```
            ResumeRequestsSLAVO resumeRequestsSLA()
                                           throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeRequestsSLA

            ```
            ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes)
                                           throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeRequestsSLA

            ```
            ResumeRequestsSLAVO resumeRequestsSLA​(List<String> processes,
                                                  Map<String,​String> cardFilters)
                                           throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeRequestsSLA

            ```
            ResumeRequestsSLAVO resumeRequestsSLA​(String processes,
                                                  String cardFilters,
                                                  String countersRequired,
                                                  String initialStartDate,
                                                  String finalStartDate,
                                                  String initialDeadlineDate,
                                                  String finalDeadlineDate,
                                                  String initialWarningDate,
                                                  String finalWarningDate,
                                                  String requester,
                                                  String assignee,
                                                  String manager,
                                                  String requesterLocals,
                                                  String assigneeLocals)
                                           throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `countersRequired` - Lista dos tipos de contadores a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `requester` - Requisitante da solicitação.

            `assignee` - Responsável de uma das tarefas correntes da solicitação.

            `manager` - Gestor da solicitação.

            `requesterLocals` - Local em que a solicitação foi iniciada, separados por vírgula.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(String processes,
                                                                                                                   String cardFilters,
                                                                                                                   String statusRequired,
                                                                                                                   String initialStartDate,
                                                                                                                   String finalStartDate,
                                                                                                                   String initialDeadlineDate,
                                                                                                                   String finalDeadlineDate,
                                                                                                                   String initialWarningDate,
                                                                                                                   String finalWarningDate,
                                                                                                                   String expand,
                                                                                                                   String requester,
                                                                                                                   String assignee,
                                                                                                                   String manager,
                                                                                                                   String requesterLocals,
                                                                                                                   String assigneeLocals,
                                                                                                                   String order,
                                                                                                                   String calculate,
                                                                                                                   String page,
                                                                                                                   String pageSize)
                                                                                                            throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `statusRequired` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `requester` - Requisitante da solicitação.

            `assignee` - Responsável de uma das tarefas correntes da solicitação.

            `manager` - Gestor da solicitação.

            `requesterLocals` - Local em que a solicitação foi iniciada, separados por vírgula.

            `expand` - Campos expansíveis, possíveis valores: actualTasks, cardFields

            `order` - Campos de ordenação, separados por vírgula, possíveis valores: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate. Para ordenação decrescente, colocar menos (-) antes do campo.

            `calculate` - Se calcula as variáveis de tempo e percentual.

            `page` - Página da consulta.

            `pageSize` - Tamanho de cada página.

            Returns:

            Um LinkedHashSet de RequestSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                                   Map<String,​String> cardFilters,
                                                                                                                   List<String> statusRequiredList,
                                                                                                                   Date initialStartDate,
                                                                                                                   Date finalStartDate,
                                                                                                                   Date initialDeadlineDate,
                                                                                                                   Date finalDeadlineDate,
                                                                                                                   Date initialWarningDate,
                                                                                                                   Date finalWarningDate,
                                                                                                                   boolean returnCurrentTasks,
                                                                                                                   String requester,
                                                                                                                   String assignee,
                                                                                                                   String manager,
                                                                                                                   List<String> requesterLocals,
                                                                                                                   List<String> assigneeLocals,
                                                                                                                   List<com.totvs.technology.foundation.sdk.service.vo.common.OrderParam> orderParams,
                                                                                                                   boolean calculate,
                                                                                                                   int page,
                                                                                                                   int pageSize,
                                                                                                                   boolean populateCardFields,
                                                                                                                   boolean populateLocalsValue,
                                                                                                                   boolean populateAssigneeLocalsValue)
                                                                                                            throws Exception
            ```

            Recupera uma lista das solicitações de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `statusRequiredList` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `requester` - Requisitante da solicitação.

            `assignee` - Responsável de uma das tarefas correntes da solicitação.

            `manager` - Gestor da solicitação.

            `locals` - Local em que a solicitação foi iniciada, separados por vírgula.

            `returnCurrentTasks` - Se a lista "actualTasks" será retornada no objeto de retorno.

            `orderParams` - Lista de OrderParam para campos de ordenação, possíveis valores no campo field: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate. Para ordenação decrescente, colocar menos (-) antes do campo.

            `calculate` - Se trará as variáveis calculadas de tempo e percentual.

            `page` - Página da consulta.

            `pageSize` - Tamanho de cada página.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA()
                                                                                                            throws Exception
            ```

            Recupera uma lista das solicitações de SLA dos processos configurados.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes)
                                                                                                            throws Exception
            ```

            Recupera uma lista das solicitações de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                                   List<String> statusRequiredList)
                                                                                                            throws Exception
            ```

            Recupera uma lista das solicitações de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `statusRequiredList` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                                   List<String> statusRequiredList,
                                                                                                                   boolean returnCurrentTasks)
                                                                                                            throws Exception
            ```

            Recupera uma lista das solicitações de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `statusRequiredList` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `returnCurrentTasks` - Se a lista "actualTasks" será retornada no objeto de retorno.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLA​(List<String> processes,
                                                                                                                   Map<String,​String> cardFilters,
                                                                                                                   List<String> statusRequiredList,
                                                                                                                   boolean returnCurrentTasks)
                                                                                                            throws Exception
            ```

            Recupera uma lista das solicitações de SLA dos processos configurados.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `statusRequiredList` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `returnCurrentTasks` - Se a lista "actualTasks" será retornada no objeto de retorno.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findMyRequestsSLA

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findMyRequestsSLA​(String processes,
                                                                                                                     String cardFilters,
                                                                                                                     String statusRequired,
                                                                                                                     String initialStartDate,
                                                                                                                     String finalStartDate,
                                                                                                                     String initialDeadlineDate,
                                                                                                                     String finalDeadlineDate,
                                                                                                                     String initialWarningDate,
                                                                                                                     String finalWarningDate,
                                                                                                                     String expand,
                                                                                                                     String assignee,
                                                                                                                     String manager,
                                                                                                                     String order,
                                                                                                                     String calculate,
                                                                                                                     String page,
                                                                                                                     String pageSize)
                                                                                                              throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `statusRequired` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `assignee` - Responsável de uma das tarefas correntes da solicitação.

            `expand` - Campos expansíveis, possíveis valores: actualTasks, cardFields

            `calculate` - Se calcula as variáveis de tempo e percentual.

            `order` - Campos de ordenação, separados por vírgula, possíveis valores: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate. Para ordenação decrescente, colocar menos (-) antes do campo.

            `page` - Página da consulta.

            `pageSize` - Tamanho de cada página.

            `manager` - Gestor da solicitação.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLAAssignedToMe

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLAAssignedToMe​(String processes,
                                                                                                                               String cardFilters,
                                                                                                                               String statusRequired,
                                                                                                                               String initialStartDate,
                                                                                                                               String finalStartDate,
                                                                                                                               String initialDeadlineDate,
                                                                                                                               String finalDeadlineDate,
                                                                                                                               String initialWarningDate,
                                                                                                                               String finalWarningDate,
                                                                                                                               String expand,
                                                                                                                               String requester,
                                                                                                                               String manager,
                                                                                                                               String requesterLocals,
                                                                                                                               String assigneeLocals,
                                                                                                                               String order,
                                                                                                                               String calculate,
                                                                                                                               String page,
                                                                                                                               String pageSize)
                                                                                                                        throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `statusRequired` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `expand` - Campos expansíveis, possíveis valores: actualTasks, cardFields

            `calculate` - Se calcula as variáveis de tempo e percentual.

            `order` - Campos de ordenação, separados por vírgula, possíveis valores: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate. Para ordenação decrescente, colocar menos (-) antes do campo.

            `page` - Página da consulta.

            `pageSize` - Tamanho de cada página.

            `requester` - Requisitante da solicitação.

            `manager` - Gestor da solicitação.

            `requesterLocals` - Local em que a solicitação foi iniciada, separados por vírgula.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeMyRequestsSLA

            ```
            ResumeRequestsSLAVO resumeMyRequestsSLA​(String processes,
                                                    String cardFilters,
                                                    String countersRequired,
                                                    String initialStartDate,
                                                    String finalStartDate,
                                                    String initialDeadlineDate,
                                                    String finalDeadlineDate,
                                                    String initialWarningDate,
                                                    String finalWarningDate,
                                                    String assignee,
                                                    String manager)
                                             throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como requisitante.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `countersRequired` - Lista dos tipos de contadores a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `assignee` - Responsável de uma das tarefas correntes da solicitação.

            `manager` - Gestor da solicitação.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeRequestsSLAAssignedToMe

            ```
            ResumeRequestsSLAVO resumeRequestsSLAAssignedToMe​(String processes,
                                                              String cardFilters,
                                                              String countersRequired,
                                                              String initialStartDate,
                                                              String finalStartDate,
                                                              String initialDeadlineDate,
                                                              String finalDeadlineDate,
                                                              String initialWarningDate,
                                                              String finalWarningDate,
                                                              String requester,
                                                              String manager,
                                                              String requesterLocals,
                                                              String assigneeLocals)
                                                       throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `countersRequired` - Lista dos tipos de contadores a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `requester` - Requisitante da solicitação.

            `manager` - Gestor da solicitação.

            `requesterLocals` - Local em que a solicitação foi iniciada, separados por vírgula.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestSLAByProcessInstanceId

            ```
            RequestSLAVO findRequestSLAByProcessInstanceId​(int processInstanceId,
                                                           boolean populateCurrentTasks,
                                                           boolean calculate,
                                                           boolean populateCardFields,
                                                           boolean populateLocals,
                                                           boolean assigneeLocals)
                                                    throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

            Parameters:

            `processInstanceId` - Código da solicitação.

            `populateCurrentTasks` - Se retorna as tarefas da solicitação.

            `populateCardFields` - Se retorna os campos de formulário.

            `populateLocals` - Se retorna o local do usuário solicitante.

            `assigneeLocals` - Se retorna o local do usuário responsável.

            `calculate` - Se calcula as variáveis de tempo e percentual.

            Returns:

            RequestSLAVO

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestSLAByProcessInstanceId

            ```
            RequestSLAVO findRequestSLAByProcessInstanceId​(String processInstanceId,
                                                           String expand,
                                                           String calculate)
                                                    throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como responsável.

            Parameters:

            `processInstanceId` - Código da solicitação.

            `expand` - Campos expansíveis

            `calculate` - Se calcula as variáveis de tempo e percentual.

            Returns:

            RequestSLAVO

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### findRequestsSLAManagedByMe

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestSLAVO> findRequestsSLAManagedByMe​(String processes,
                                                                                                                              String cardFilters,
                                                                                                                              String statusRequired,
                                                                                                                              String initialStartDate,
                                                                                                                              String finalStartDate,
                                                                                                                              String initialDeadlineDate,
                                                                                                                              String finalDeadlineDate,
                                                                                                                              String initialWarningDate,
                                                                                                                              String finalWarningDate,
                                                                                                                              String expand,
                                                                                                                              String requester,
                                                                                                                              String assignee,
                                                                                                                              String requesterLocals,
                                                                                                                              String assigneeLocals,
                                                                                                                              String order,
                                                                                                                              String calculate,
                                                                                                                              String page,
                                                                                                                              String pageSize)
                                                                                                                       throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `statusRequired` - Lista dos tipos de status a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `expand` - Campos expansíveis, possíveis valores: actualTasks, cardFields

            `calculate` - Se calcula as variáveis de tempo e percentual.

            `order` - Campos de ordenação, separados por vírgula, possíveis valores: processInstanceId, deadlineDate, processId, requesterCode, requesterName, startDate e endDate. Para ordenação decrescente, colocar menos (-) antes do campo.

            `page` - Página da consulta.

            `pageSize` - Tamanho de cada página.

            `requester` - Requisitante da solicitação.

            `assignee` - Responsável da solicitação.

            `requesterLocals` - Local em que a solicitação foi iniciada, separados por vírgula.

            Returns:

            Um ResponseEnvelopeVO, contendo uma lista de items, o total da pesquisa sem paginação e se há próxima página.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### resumeRequestsSLAManagedByMe

            ```
            ResumeRequestsSLAVO resumeRequestsSLAManagedByMe​(String processes,
                                                             String cardFilters,
                                                             String countersRequired,
                                                             String initialStartDate,
                                                             String finalStartDate,
                                                             String initialDeadlineDate,
                                                             String finalDeadlineDate,
                                                             String initialWarningDate,
                                                             String finalWarningDate,
                                                             String requester,
                                                             String assignee,
                                                             String requesterLocals,
                                                             String assigneeLocals)
                                                      throws Exception
            ```

            Recupera um resumo dos indicadores de SLA dos processos configurados considerando o usuário logado como gestor.

            Parameters:

            `processes` - Lista de processos a considerar na pesquisa. Separados por vírgula.

            `cardFilters` - Lista de filtros por campo de formulário para os processos específicos. Separados por vírgula, considerando o padrão chave:valor.

            `countersRequired` - Lista dos tipos de contadores a serem considerados, os demais virão nulos. Possíveis valores são: finishedRequests, finishedExpiredRequests, finishedOnTimeRequests, finishedWarningRequests, canceledRequests, canceledExpiredRequests, canceledOnTimeRequests, canceledWarningRequests, openRequests, openExpiredRequests, openOnTimeRequests, openWarningRequests. Separados por vírgula.

            `initialStartDate` - Data inicial de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalStartDate` - Data final de início da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialDeadlineDate` - Data inicial de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalDeadlineDate` - Data final de expiração da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `initialWarningDate` - Data inicial de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `finalWarningDate` - Data final de aviso da solicitação considerada para o alcance da pesquisa. Padrão yyyy-MM-dd.

            `requester` - Requisitante da solicitação.

            `assignee` - Responsável da solicitação.

            `requesterLocals` - Local em que a solicitação foi iniciada, separados por vírgula.

            Returns:

            ResumeRequestsSLAVO Objeto com os totalizadores em seu conteúdo.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.1


        -   #### listSlaProcess

            ```
            List<ProcessDefinitionVO> listSlaProcess()
                                              throws Exception
            ```

            Retorna todos os processos da empresa.

            Returns:

            lista de processos.

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6


        -   #### resumeMyRequestsTasks

            ```
            ResumeProcessTaskVO resumeMyRequestsTasks​(String processId,
                                                      String startDate,
                                                      String endDate,
                                                      String assignee,
                                                      String manager)
                                               throws Exception
            ```

            Parameters:

            `processId` -

            `startDate` -

            `endDate` -

            `assignee` -

            `manager` -

            Returns:

            ResumeProcessTaskVO objeto com o total de tarefas com base no processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### resumeAssignedToMeTasks

            ```
            ResumeProcessTaskVO resumeAssignedToMeTasks​(String processId,
                                                        String startDate,
                                                        String endDate,
                                                        String requester,
                                                        String manager)
                                                 throws Exception
            ```

            Parameters:

            `processId` -

            `startDate` -

            `endDate` -

            `requester` -

            `manager` -

            Returns:

            ResumeProcessTaskVO objeto com o total de tarefas com base no processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### resumeSLATasks

            ```
            ResumeProcessTaskVO resumeSLATasks​(String processId,
                                               String startDate,
                                               String endDate,
                                               String assignee,
                                               String requester,
                                               String manager)
                                        throws Exception
            ```

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### resumeManagedByMeTasks

            ```
            ResumeProcessTaskVO resumeManagedByMeTasks​(String processId,
                                                       String startDate,
                                                       String endDate,
                                                       String requester,
                                                       String assignee)
                                                throws Exception
            ```

            Parameters:

            `processId` -

            `startDate` -

            `endDate` -

            `requester` -

            `assignee` -

            Returns:

            ResumeProcessTaskVO objeto com o total de tarefas com base no processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### findMyRequestsTasks

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findMyRequestsTasks​(String processId,
                                                                                                                               String initialStartDate,
                                                                                                                               String finalStartDate,
                                                                                                                               String assignee,
                                                                                                                               String manager,
                                                                                                                               String page,
                                                                                                                               String pageSize,
                                                                                                                               String statusTypeTaskRequest,
                                                                                                                               String calculate,
                                                                                                                               String expand,
                                                                                                                               String cardFilters)
                                                                                                                        throws Exception
            ```

            Parameters:

            `processId` -

            `initialStartDate` -

            `finalStartDate` -

            `assignee` -

            `manager` -

            `page` -

            `pageSize` -

            `statusTypeTaskRequest` - 1 onTime; 2 warning, 3 Expired

            Returns:

            ResponseEnvelopeVO objeto com os dados do processo com base na tarefa

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### findAssignedToMeTasks

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findAssignedToMeTasks​(String processId,
                                                                                                                                 String initialStartDate,
                                                                                                                                 String finalStartDate,
                                                                                                                                 String requester,
                                                                                                                                 String manager,
                                                                                                                                 String page,
                                                                                                                                 String pageSize,
                                                                                                                                 String statusTypeTaskRequest,
                                                                                                                                 String calculate,
                                                                                                                                 String expand,
                                                                                                                                 String cardFilters)
                                                                                                                          throws Exception
            ```

            Parameters:

            `processId` -

            `initialStartDate` -

            `finalStartDate` -

            `requester` -

            `manager` -

            `page` -

            `pageSize` -

            `statusTypeTaskRequest` - 1 onTime; 2 warning, 3 Expired

            Returns:

            ResponseEnvelopeVO objeto com os dados do processo com base na tarefa

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### findSLATasks

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findSLATasks​(String processId,
                                                                                                                        String initialStartDate,
                                                                                                                        String finalStartDate,
                                                                                                                        String assignee,
                                                                                                                        String requester,
                                                                                                                        String manager,
                                                                                                                        String page,
                                                                                                                        String pageSize,
                                                                                                                        String statusTypeTaskRequest,
                                                                                                                        String calculate,
                                                                                                                        String expand,
                                                                                                                        String cardFilters)
                                                                                                                 throws Exception
            ```

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### findManagedByMeTasks

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<RequestProcessTaskVO> findManagedByMeTasks​(String processId,
                                                                                                                                String initialStartDate,
                                                                                                                                String finalStartDate,
                                                                                                                                String assignee,
                                                                                                                                String requester,
                                                                                                                                String page,
                                                                                                                                String pageSize,
                                                                                                                                String statusTypeTaskRequest,
                                                                                                                                String calculate,
                                                                                                                                String expand,
                                                                                                                                String cardFilters)
                                                                                                                         throws Exception
            ```

            Parameters:

            `processId` -

            `initialStartDate` -

            `finalStartDate` -

            `assignee` -

            `requester` -

            `page` -

            `pageSize` -

            `statusTypeTaskRequest` - 1 onTime; 2 warning, 3 Expired

            Returns:

            ResponseEnvelopeVO objeto com os dados do processo com base na tarefa

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`


        -   #### findProcessVersions

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO> findProcessVersions​(String processId,
                                                                                                                              Integer version)
                                                                                                                       throws Exception
            ```

            Listagem de versões de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `version` - Versão do processo (Obrigatório)

            Returns:

            ResponseEnvelopeVO objeto com os dados do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findProcessVersions

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessVersionVO> findProcessVersions​(String processId,
                                                                                                                              Integer page,
                                                                                                                              Integer pageSize,
                                                                                                                              List<String> order,
                                                                                                                              List<String> expand,
                                                                                                                              Integer version,
                                                                                                                              Integer formId,
                                                                                                                              Boolean formExistent,
                                                                                                                              Boolean editing,
                                                                                                                              Boolean active,
                                                                                                                              Boolean blocked,
                                                                                                                              Boolean requiresPassword,
                                                                                                                              Integer bpmnVersion,
                                                                                                                              Boolean inheritFormSecurity,
                                                                                                                              Boolean mobileReady)
                                                                                                                       throws Exception
            ```

            Listagem de versões de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `page` - numero da pagina

            `pageSize` - numero de registros por pagina

            `order` - lista de ordenação (java.util.ArrayList)

            `expand` - Campos expansíveis (java.util.ArrayList)

            `version` - Versão do processo (Obrigatório)

            `formId` - id do fomulário

            `formExistent` - caso exista formulários

            `editing` - somente em edição

            `active` - Atividades ativas (true ou false) default = true

            `blocked` - considerar versões bloqueadas

            `requiresPassword` - requer senha

            `bpmnVersion` - procurar pelo numero da verão bpmn

            `inheritFormSecurity` - progurar em versões com segurança de documento

            `mobileReady` - procurar versões que possam ser usadas no celular

            Returns:

            ResponseEnvelopeVO objeto com os dados do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findActivities

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(Set<Integer> processInstanceId,
                                                                                                                          Integer movementSequence,
                                                                                                                          Boolean active,
                                                                                                                          Set<String> slaStatus,
                                                                                                                          String processId,
                                                                                                                          String requester,
                                                                                                                          String requesterName,
                                                                                                                          String manager,
                                                                                                                          String initialDeadlineDate,
                                                                                                                          String finalDeadlineDate,
                                                                                                                          String initialStartDate,
                                                                                                                          String finalStartDate,
                                                                                                                          String initialWarningDate,
                                                                                                                          String finalWarningDate,
                                                                                                                          String initialEndDate,
                                                                                                                          String finalEndDate,
                                                                                                                          Integer processVersion,
                                                                                                                          Integer stateSequence,
                                                                                                                          Integer page,
                                                                                                                          Integer pageSize,
                                                                                                                          List<String> expand,
                                                                                                                          List<String> order,
                                                                                                                          Set<String> formFields,
                                                                                                                          List<Long> requesterLocal,
                                                                                                                          List<Long> assigneeLocal)
                                                                                                                   throws Exception
            ```

            Lista as atividades de uma versão de um processo

            Parameters:

            `processInstanceId` - Identificador da solicitação (java.util.HashSet)

            `movementSequence` - Identificador do movimento atrelado a tarefa

            `active` - Atividades ativas (true ou false) default = true

            `slaStatus` - Estado do prazo (ON\_TIME,WARNING,EXPIRED) (java.util.HashSet)

            `processId` - Identificador do processo (Obrigatório)

            `requester` - Matrícula do requisitante

            `requesterName` - Nome do requisitante

            `manager` - Matrícula do gestor do processo

            `initialDeadlineDate` - Prazo a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalDeadlineDate` - Prazo até (yyyy-MM-ddTHH:mm:ssZ")

            `initialStartDate` - Início a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalStartDate` - Início até (yyyy-MM-ddTHH:mm:ssZ")

            `initialWarningDate` - Aviso de expiração a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalWarningDate` - Aviso de expiração até (yyyy-MM-ddTHH:mm:ssZ")

            `initialEndDate` - Encerramento a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalEndDate` - Encerramento até (yyyy-MM-ddTHH:mm:ssZ")

            `processVersion` - Versão do processo (Obrigatório)

            `stateSequence` - Identificador de sequência do estado do processo

            `page` - numero da pagina

            `pageSize` - numero de registros por pagina

            `expand` - Campos expansíveis (java.util.ArrayList)

            `order` - lista de ordenação (java.util.ArrayList)

            `formFields` - Campos de formulário para pesquisa, seguindo o padrão Campo:Valor ((java.util.HashSet))

            `requesterLocal` - Identificador do local do requisitante (java.util.ArrayList)

            `assigneeLocal` - Identificador do local do responsável (java.util.ArrayList)

            Returns:

            ResponseEnvelopeVO objeto com os dados das atividades do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findActivities

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(String processId,
                                                                                                                          Integer processVersion)
                                                                                                                   throws Exception
            ```

            Lista as atividades de uma versão de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `processVersion` - Versão do processo (Obrigatório)

            Returns:

            ResponseEnvelopeVO objeto com os dados das atividades do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findActivities

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessActivityVO> findActivities​(String processId,
                                                                                                                          Integer processVersion,
                                                                                                                          Boolean active)
                                                                                                                   throws Exception
            ```

            Lista as atividades de uma versão de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `processVersion` - Versão do processo (Obrigatório)

            `active` - Atividades ativas (true ou false) default = true

            Returns:

            ResponseEnvelopeVO objeto com os dados das atividades do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findRequests

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(Set<Integer> processInstanceId,
                                                                                                                Integer initialProcessInstanceId,
                                                                                                                Integer finalProcessInstanceId,
                                                                                                                String assignee,
                                                                                                                Set<String> participants,
                                                                                                                Set<String> completeColleagueIds,
                                                                                                                Set<String> status,
                                                                                                                Set<String> slaStatus,
                                                                                                                String processId,
                                                                                                                String requester,
                                                                                                                String assigneeName,
                                                                                                                String requesterName,
                                                                                                                String manager,
                                                                                                                String initialDeadlineDate,
                                                                                                                String finalDeadlineDate,
                                                                                                                String initialStartDate,
                                                                                                                String finalStartDate,
                                                                                                                String initialWarningDate,
                                                                                                                String finalWarningDate,
                                                                                                                String initialEndDate,
                                                                                                                String finalEndDate,
                                                                                                                Integer processVersion,
                                                                                                                Integer stateSequence,
                                                                                                                Integer page,
                                                                                                                Integer pageSize,
                                                                                                                List<String> expand,
                                                                                                                List order,
                                                                                                                Set<String> formFields,
                                                                                                                List<Long> requesterLocal,
                                                                                                                List<Long> assigneeLocal)
                                                                                                         throws Exception
            ```

            Listagem de solicitações de uma determinada versão de um processo

            Parameters:

            `processInstanceId` - Identificador da solicitação (java.util.HashSet)

            `initialProcessInstanceId` - intervalo inicial do processo

            `finalProcessInstanceId` - intervalo final do processo

            `assignee` - Matrícula do responsável

            `participants` - participantes da tarefa (java.util.HashSet)

            `completeColleagueIds` - Tarefa concluída com gerente ou substituto (java.util.HashSet)

            `status` - status da tarefa (java.util.HashSet) OPEN,CANCELED,FINALIZED

            `slaStatus` - Estado do prazo (ON\_TIME,WARNING,EXPIRED) (java.util.HashSet)

            `processId` - Identificador do processo (Obrigatório)

            `requester` - Matrícula do requisitante

            `assigneeName` - Nome do responsável

            `requesterName` - Nome do requisitante

            `manager` - Matrícula do gestor do processo

            `initialDeadlineDate` - Prazo a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalDeadlineDate` - Prazo até (yyyy-MM-ddTHH:mm:ssZ")

            `initialStartDate` - Início a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalStartDate` - Início até (yyyy-MM-ddTHH:mm:ssZ")

            `initialWarningDate` - Aviso de expiração a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalWarningDate` - Aviso de expiração até (yyyy-MM-ddTHH:mm:ssZ")

            `initialEndDate` - Encerramento a partir de (yyyy-MM-ddTHH:mm:ssZ")

            `finalEndDate` - Encerramento até (yyyy-MM-ddTHH:mm:ssZ")

            `processVersion` - Versão do processo (Obrigatório)

            `stateSequence` - Identificador de sequência do estado do processo

            `page` - numero da pagina

            `pageSize` - numero de registros por pagina

            `expand` - Campos expansíveis (java.util.ArrayList)

            `order` - lista de ordenação (java.util.ArrayList)

            `formFields` - Campos de formulário para pesquisa, seguindo o padrão Campo:Valor ((java.util.HashSet))

            `requesterLocal` - Identificador do local do requisitante (java.util.ArrayList)

            `assigneeLocal` - Identificador do local do responsável (java.util.ArrayList)

            Returns:

            ResponseEnvelopeVO objeto com os dados da solicitações do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findRequests

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(String processId,
                                                                                                                Integer processVersion,
                                                                                                                Set<String> status)
                                                                                                         throws Exception
            ```

            Listagem de solicitações de uma determinada versão de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `processVersion` - Versão do processo (Obrigatório)

            `status` - status da tarefa (java.util.HashSet) OPEN,CANCELED,FINALIZED

            Returns:

            ResponseEnvelopeVO objeto com os dados da solicitações do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findRequests

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMRequestVO> findRequests​(String processId,
                                                                                                                Integer processVersion)
                                                                                                         throws Exception
            ```

            Listagem de solicitações de uma determinada versão de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `processVersion` - Versão do processo (Obrigatório)

            Returns:

            ResponseEnvelopeVO objeto com os dados da solicitações do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findProcessVersionsStates

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                                  Integer processVersion,
                                                                                                                                  Integer stateSequence,
                                                                                                                                  Integer page,
                                                                                                                                  Integer pageSize,
                                                                                                                                  String stateType,
                                                                                                                                  String bpmnType,
                                                                                                                                  String stateName,
                                                                                                                                  String stateDescription,
                                                                                                                                  Boolean interactives)
                                                                                                                           throws Exception
            ```

            Listagem de estados de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `processVersion` - Versão do processo (Obrigatório)

            `stateSequence` - Identificador de sequência do estado do processo

            `page` - numero da pagina

            `pageSize` - numero de registros por pagina

            `stateType` - tipo do estado SIMPLE,AUTOMATIC,SUBPROCESS,FORK,JOIN

            `bpmnType` - BPM tipo : START\_EVENT\_NORMAL START\_EVENT\_MESSAGE START\_EVENT\_TIMER START\_EVENT\_CONDITIONAL START\_EVENT\_SIGNAL START\_EVENT\_PARALLEL\_MULTIPLE START\_EVENT\_MULTIPLE INTERMEDIATE\_EVENT\_NORMAL INTERMEDIATE\_EVENT\_MESSAGE INTERMEDIATE\_EVENT\_TIMER INTERMEDIATE\_EVENT\_ESCALATION INTERMEDIATE\_EVENT\_COMPENSATE INTERMEDIATE\_EVENT\_CONDITIONAL INTERMEDIATE\_EVENT\_LINK INTERMEDIATE\_EVENT\_SIGNAL INTERMEDIATE\_EVENT\_PARALLEL\_MULTIPLE INTERMEDIATE\_EVENT\_MULTIPLE INTERMEDIATE\_EVENT\_MESSAGE\_RECEIVE INTERMEDIATE\_EVENT\_SIGNAL\_RECEIVE INTERMEDIATE\_EVENT\_LINK\_RECEIVE INTERMEDIATE\_EVENT\_ERROR END\_EVENT\_NORMAL END\_EVENT\_MESSAGE END\_EVENT\_ESCALATION END\_EVENT\_ERROR END\_EVENT\_SIGNAL END\_EVENT\_CANCEL END\_EVENT\_MULTIPLE END\_EVENT\_COMPENSATE END\_EVENT\_TERMINATE TASK\_NORMAL TASK\_USER TASK\_SERVICE TASK\_RECEIVE TASK\_MAIL TASK\_MANUAL TASK\_BUSINESS\_RULE TASK\_SCRIPT SUBPROCESS\_NORMAL SUBPROCESS\_ADHOC GATEWAY\_EXCLUSIVE GATEWAY\_INCLUSIVE GATEWAY\_EVENT GATEWAY\_EXCLUSIVE\_EVENT GATEWAY\_PARALLEL\_EVENT GATEWAY\_COMPLEX GATEWAY\_PARALLEL GATEWAY\_JOIN LOOP\_NONE LOOP\_DEFAULT LOOP\_MULTI\_THREAD"

            `stateName` - Nome do estado

            `stateDescription` - descrição do estado

            `interactives` - Retorna apenas estados interativos, aqueles que exigem interação do usuário

            Returns:

            ResponseEnvelopeVO objeto com os dados dos estados do processo

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findProcessVersionsStates

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                                  Integer processVersion,
                                                                                                                                  String bpmnType)
                                                                                                                           throws Exception
            ```

            Listagem de estados de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `processVersion` - Versão do processo (Obrigatório)

            `bpmnType` - BPM tipo : START\_EVENT\_NORMAL START\_EVENT\_MESSAGE START\_EVENT\_TIMER START\_EVENT\_CONDITIONAL START\_EVENT\_SIGNAL START\_EVENT\_PARALLEL\_MULTIPLE START\_EVENT\_MULTIPLE INTERMEDIATE\_EVENT\_NORMAL INTERMEDIATE\_EVENT\_MESSAGE INTERMEDIATE\_EVENT\_TIMER INTERMEDIATE\_EVENT\_ESCALATION INTERMEDIATE\_EVENT\_COMPENSATE INTERMEDIATE\_EVENT\_CONDITIONAL INTERMEDIATE\_EVENT\_LINK INTERMEDIATE\_EVENT\_SIGNAL INTERMEDIATE\_EVENT\_PARALLEL\_MULTIPLE INTERMEDIATE\_EVENT\_MULTIPLE INTERMEDIATE\_EVENT\_MESSAGE\_RECEIVE INTERMEDIATE\_EVENT\_SIGNAL\_RECEIVE INTERMEDIATE\_EVENT\_LINK\_RECEIVE INTERMEDIATE\_EVENT\_ERROR END\_EVENT\_NORMAL END\_EVENT\_MESSAGE END\_EVENT\_ESCALATION END\_EVENT\_ERROR END\_EVENT\_SIGNAL END\_EVENT\_CANCEL END\_EVENT\_MULTIPLE END\_EVENT\_COMPENSATE END\_EVENT\_TERMINATE TASK\_NORMAL TASK\_USER TASK\_SERVICE TASK\_RECEIVE TASK\_MAIL TASK\_MANUAL TASK\_BUSINESS\_RULE TASK\_SCRIPT SUBPROCESS\_NORMAL SUBPROCESS\_ADHOC GATEWAY\_EXCLUSIVE GATEWAY\_INCLUSIVE GATEWAY\_EVENT GATEWAY\_EXCLUSIVE\_EVENT GATEWAY\_PARALLEL\_EVENT GATEWAY\_COMPLEX GATEWAY\_PARALLEL GATEWAY\_JOIN LOOP\_NONE LOOP\_DEFAULT LOOP\_MULTI\_THREAD"

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### findProcessVersionsStates

            ```
            com.totvs.technology.foundation.sdk.service.vo.common.ResponseEnvelopeVO<BPMProcessStateVO> findProcessVersionsStates​(String processId,
                                                                                                                                  Integer processVersion)
                                                                                                                           throws Exception
            ```

            Listagem de estados de um processo

            Parameters:

            `processId` - Identificador do processo (Obrigatório)

            `processVersion` - Versão do processo (Obrigatório)

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### convertProcess

            ```
            List<String> convertProcess​(List<Integer> processInstanceIds,
                                        Integer newVersion,
                                        List<Integer> actualStates,
                                        List<Integer> newStates)
                                 throws Exception
            ```

            Converte as solicitaçõe de um processos para uma nova versão.

            Parameters:

            `processInstanceIds` - lista de processos a serem convertidos (java.util.ArrayList)

            `newVersion` - versão que os processos serão convertidos (Integer)

            `actualStates` - lista das atividades dos processos (java.util.ArrayList)

            `newStates` - lista das novas atividades após a conversão (java.util.ArrayList)

            Returns:

            Lista com as informações da socitações convertidas e não concertidas

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### releaseVersion

            ```
            boolean releaseVersion​(String processId,
                                   Integer version)
                            throws Exception
            ```

            Libera uma versão do processo

            Parameters:

            `processId` - nome do processo (\*obrigatório, String)

            `version` - versão do processo (\*obrigatório, Integer)

            Returns:

            Boolean true ou false;

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### releaseLatestVersion

            ```
            boolean releaseLatestVersion​(String processId)
                                  throws Exception
            ```

            Libera a ultima versão do processo

            Parameters:

            `processId` - nome do processo (\*obrigatório, String)

            Returns:

            Boolean true ou false;

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### importProcess

            ```
            boolean importProcess​(String xml,
                                  String processId,
                                  Integer formId,
                                  Boolean release)
                           throws Exception
            ```

            Importa um processo via XML

            Parameters:

            `xml` - aquivo xml com o processo (\* Obrigatório)

            `processId` - id (Nome) do processo (\* Obrigatório)

            `formId` - id do fomulário

            `release` - libera a versão (true ou false)

            Returns:

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5


        -   #### importProcess

            ```
            boolean importProcess​(String xml,
                                  String processId,
                                  Boolean release)
                           throws Exception
            ```

            Importa um processo via XML

            Parameters:

            `xml` - aquivo xml com o processo (\* Obrigatório)

            `processId` - id (Nome) do processo (\* Obrigatório)

            `release` - libera a versão (true ou false)

            Returns:

            Throws:

            `[Exception](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Exception.html?is-external=true "class or interface in java.lang")`

            Since:

            1.6.5
