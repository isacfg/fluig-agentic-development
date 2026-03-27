# Class BPMProcessActivityVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html)

---

Package [com.fluig.sdk.api.workflow](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/package-summary.html)

## Class BPMProcessActivityVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.workflow.BPMProcessActivityVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class BPMProcessActivityVO
    extends Object
    implements Serializable
    ```

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">BPMProcessActivityVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getDeadlineDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMDeadlineSpecificationVO.html" title="class in com.fluig.sdk.api.workflow">BPMDeadlineSpecificationVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getDeadlineSpecification</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getEndDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormFieldVO.html" title="class in com.fluig.sdk.api.workflow">BPMFormFieldVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getFormFields</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getMovementSequence</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getProcessDescription</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getProcessId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getProcessInstanceId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getProcessVersion</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMUserVO.html" title="class in com.fluig.sdk.api.workflow">BPMUserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getRequester</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getSlaStatus</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getStartDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessStateVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getState</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityTaskInfoVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessActivityTaskInfoVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getTaskInfo</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessTaskVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getTasks</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code>int</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">getThreadSequence</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i16" class="altColor"><td class="colFirst"><code>boolean</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">isActive</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setActive</a></span>​(boolean&nbsp;active)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i18" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setDeadlineDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a>&nbsp;deadlineDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setDeadlineSpecification</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMDeadlineSpecificationVO.html" title="class in com.fluig.sdk.api.workflow">BPMDeadlineSpecificationVO</a>&nbsp;deadlineSpecification)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setEndDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a>&nbsp;endDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setFormFields</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormFieldVO.html" title="class in com.fluig.sdk.api.workflow">BPMFormFieldVO</a>&gt;&nbsp;formFields)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setMovementSequence</a></span>​(int&nbsp;movementSequence)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setProcessDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processDescription)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i24" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setProcessId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setProcessInstanceId</a></span>​(int&nbsp;processInstanceId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i26" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setProcessVersion</a></span>​(int&nbsp;processVersion)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setRequester</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMUserVO.html" title="class in com.fluig.sdk.api.workflow">BPMUserVO</a>&nbsp;requester)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i28" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setSlaStatus</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;slaStatus)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i29" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setStartDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a>&nbsp;startDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i30" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setState</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessStateVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessStateVO</a>&nbsp;state)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i31" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setTaskInfo</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityTaskInfoVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessActivityTaskInfoVO</a>&nbsp;taskInfo)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i32" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setTasks</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessTaskVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessTaskVO</a>&gt;&nbsp;tasks)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i33" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html">setThreadSequence</a></span>​(int&nbsp;threadSequence)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### BPMProcessActivityVO

            ```
            public BPMProcessActivityVO()
            ```


    -   ### Method Detail

        -   #### getProcessInstanceId

            ```
            public int getProcessInstanceId()
            ```


        -   #### setProcessInstanceId

            ```
            public void setProcessInstanceId​(int processInstanceId)
            ```


        -   #### getMovementSequence

            ```
            public int getMovementSequence()
            ```


        -   #### setMovementSequence

            ```
            public void setMovementSequence​(int movementSequence)
            ```


        -   #### isActive

            ```
            public boolean isActive()
            ```


        -   #### setActive

            ```
            public void setActive​(boolean active)
            ```


        -   #### getSlaStatus

            ```
            public String getSlaStatus()
            ```


        -   #### setSlaStatus

            ```
            public void setSlaStatus​(String slaStatus)
            ```


        -   #### getStartDate

            ```
            public ZonedDateTime getStartDate()
            ```


        -   #### setStartDate

            ```
            public void setStartDate​(ZonedDateTime startDate)
            ```


        -   #### getEndDate

            ```
            public ZonedDateTime getEndDate()
            ```


        -   #### setEndDate

            ```
            public void setEndDate​(ZonedDateTime endDate)
            ```


        -   #### getDeadlineDate

            ```
            public ZonedDateTime getDeadlineDate()
            ```


        -   #### setDeadlineDate

            ```
            public void setDeadlineDate​(ZonedDateTime deadlineDate)
            ```


        -   #### getProcessId

            ```
            public String getProcessId()
            ```


        -   #### setProcessId

            ```
            public void setProcessId​(String processId)
            ```


        -   #### getRequester

            ```
            public BPMUserVO getRequester()
            ```


        -   #### setRequester

            ```
            public void setRequester​(BPMUserVO requester)
            ```


        -   #### getProcessVersion

            ```
            public int getProcessVersion()
            ```


        -   #### setProcessVersion

            ```
            public void setProcessVersion​(int processVersion)
            ```


        -   #### getProcessDescription

            ```
            public String getProcessDescription()
            ```


        -   #### setProcessDescription

            ```
            public void setProcessDescription​(String processDescription)
            ```


        -   #### getState

            ```
            public BPMProcessStateVO getState()
            ```


        -   #### setState

            ```
            public void setState​(BPMProcessStateVO state)
            ```


        -   #### getTasks

            ```
            public List<BPMProcessTaskVO> getTasks()
            ```


        -   #### setTasks

            ```
            public void setTasks​(List<BPMProcessTaskVO> tasks)
            ```


        -   #### getThreadSequence

            ```
            public int getThreadSequence()
            ```


        -   #### setThreadSequence

            ```
            public void setThreadSequence​(int threadSequence)
            ```


        -   #### getFormFields

            ```
            public List<BPMFormFieldVO> getFormFields()
            ```


        -   #### setFormFields

            ```
            public void setFormFields​(List<BPMFormFieldVO> formFields)
            ```


        -   #### getDeadlineSpecification

            ```
            public BPMDeadlineSpecificationVO getDeadlineSpecification()
            ```


        -   #### setDeadlineSpecification

            ```
            public void setDeadlineSpecification​(BPMDeadlineSpecificationVO deadlineSpecification)
            ```


        -   #### getTaskInfo

            ```
            public BPMProcessActivityTaskInfoVO getTaskInfo()
            ```


        -   #### setTaskInfo

            ```
            public void setTaskInfo​(BPMProcessActivityTaskInfoVO taskInfo)
            ```
