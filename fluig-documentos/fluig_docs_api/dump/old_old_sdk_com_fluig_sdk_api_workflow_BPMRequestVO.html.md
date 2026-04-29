# Class BPMRequestVO

> **Fonte:** [https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html)

---

Package [com.fluig.sdk.api.workflow](https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/package-summary.html)

## Class BPMRequestVO

-   [java.lang.Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")
-   -   com.fluig.sdk.api.workflow.BPMRequestVO

-   All Implemented Interfaces:

    `[Serializable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/io/Serializable.html?is-external=true "class or interface in java.io")`

    * * *

    ```
    public class BPMRequestVO
    extends Object
    implements Serializable
    ```

    See Also:

    [Serialized Form](https://api.fluig.com/old/sdk/serialized-form.html)


-   -   ### Constructor Summary

        <table class="memberSummary"><caption><span>Constructors</span><span class="tabEnd">&nbsp;</span></caption><tbody><tr><th class="colFirst" scope="col">Constructor</th><th class="colLast" scope="col">Description</th></tr><tr class="altColor"><th class="colConstructorName" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">BPMRequestVO</a></span>()</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>


    -   ### Method Summary

        <table class="memberSummary"><caption><span id="t0" class="activeTableTab"><span>All Methods</span><span class="tabEnd">&nbsp;</span></span><span id="t2" class="tableTab"><span><a href="javascript:show(2);">Instance Methods</a></span><span class="tabEnd">&nbsp;</span></span><span id="t4" class="tableTab"><span><a href="javascript:show(8);">Concrete Methods</a></span><span class="tabEnd">&nbsp;</span></span></caption><tbody><tr><th class="colFirst" scope="col">Modifier and Type</th><th class="colSecond" scope="col">Method</th><th class="colLast" scope="col">Description</th></tr><tr id="i0" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getActive</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i1" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessActivityVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getActivities</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i2" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getDeadlineDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i3" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMDeadlineSpecificationVO.html" title="class in com.fluig.sdk.api.workflow">BPMDeadlineSpecificationVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getDeadlineSpecification</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i4" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getEndDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i5" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormFieldVO.html" title="class in com.fluig.sdk.api.workflow">BPMFormFieldVO</a>&gt;</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getFormFields</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i6" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getFormId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i7" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormRecordVO.html" title="class in com.fluig.sdk.api.workflow">BPMFormRecordVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getFormRecord</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i8" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getFormRecordId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i9" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getParentRequestId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i10" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getPeriodId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i11" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getProcessDescription</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i12" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getProcessId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i13" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getProcessInstanceId</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i14" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getProcessVersion</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i15" class="rowColor"><td class="colFirst"><code><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMUserVO.html" title="class in com.fluig.sdk.api.workflow">BPMUserVO</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getRequester</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i16" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getSlaStatus</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i17" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getStartDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i18" class="altColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getStatus</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i19" class="rowColor"><td class="colFirst"><code><a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a></code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">getWarningDate</a></span>()</code></th><td class="colLast">&nbsp;</td></tr><tr id="i20" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setActive</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Boolean.html?is-external=true" title="class or interface in java.lang" class="externalLink">Boolean</a>&nbsp;active)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i21" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setActivities</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMProcessActivityVO.html" title="class in com.fluig.sdk.api.workflow">BPMProcessActivityVO</a>&gt;&nbsp;activities)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i22" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setDeadlineDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a>&nbsp;deadlineDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i23" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setDeadlineSpecification</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMDeadlineSpecificationVO.html" title="class in com.fluig.sdk.api.workflow">BPMDeadlineSpecificationVO</a>&nbsp;deadlineSpecification)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i24" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setEndDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a>&nbsp;endDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i25" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setFormFields</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html?is-external=true" title="class or interface in java.util" class="externalLink">List</a>&lt;<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormFieldVO.html" title="class in com.fluig.sdk.api.workflow">BPMFormFieldVO</a>&gt;&nbsp;formFields)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i26" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setFormId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;formId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i27" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setFormRecord</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMFormRecordVO.html" title="class in com.fluig.sdk.api.workflow">BPMFormRecordVO</a>&nbsp;formRecord)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i28" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setFormRecordId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;formRecordId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i29" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setParentRequestId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;parentRequestId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i30" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setPeriodId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;periodId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i31" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setProcessDescription</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processDescription)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i32" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setProcessId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;processId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i33" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setProcessInstanceId</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processInstanceId)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i34" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setProcessVersion</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Integer.html?is-external=true" title="class or interface in java.lang" class="externalLink">Integer</a>&nbsp;processVersion)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i35" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setRequester</a></span>​(<a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMUserVO.html" title="class in com.fluig.sdk.api.workflow">BPMUserVO</a>&nbsp;requester)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i36" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setSlaStatus</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;slaStatus)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i37" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setStartDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a>&nbsp;startDate)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i38" class="altColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setStatus</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html?is-external=true" title="class or interface in java.lang" class="externalLink">String</a>&nbsp;status)</code></th><td class="colLast">&nbsp;</td></tr><tr id="i39" class="rowColor"><td class="colFirst"><code>void</code></td><th class="colSecond" scope="row"><code><span class="memberNameLink"><a href="https://api.fluig.com/old/sdk/com/fluig/sdk/api/workflow/BPMRequestVO.html">setWarningDate</a></span>​(<a href="https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/time/ZonedDateTime.html?is-external=true" title="class or interface in java.time" class="externalLink">ZonedDateTime</a>&nbsp;warningDate)</code></th><td class="colLast">&nbsp;</td></tr></tbody></table>

        -   ### Methods inherited from class java.lang.[Object](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true "class or interface in java.lang")

            `[clone](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#clone\(\) "class or interface in java.lang"), [equals](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#equals\(java.lang.Object\) "class or interface in java.lang"), [finalize](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#finalize\(\) "class or interface in java.lang"), [getClass](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#getClass\(\) "class or interface in java.lang"), [hashCode](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#hashCode\(\) "class or interface in java.lang"), [notify](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notify\(\) "class or interface in java.lang"), [notifyAll](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#notifyAll\(\) "class or interface in java.lang"), [toString](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#toString\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long\) "class or interface in java.lang"), [wait](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Object.html?is-external=true#wait\(long,int\) "class or interface in java.lang")`


-   -   ### Constructor Detail

        -   #### BPMRequestVO

            ```
            public BPMRequestVO()
            ```


    -   ### Method Detail

        -   #### getProcessInstanceId

            ```
            public Integer getProcessInstanceId()
            ```


        -   #### setProcessInstanceId

            ```
            public void setProcessInstanceId​(Integer processInstanceId)
            ```


        -   #### getProcessId

            ```
            public String getProcessId()
            ```


        -   #### setProcessId

            ```
            public void setProcessId​(String processId)
            ```


        -   #### getProcessVersion

            ```
            public Integer getProcessVersion()
            ```


        -   #### setProcessVersion

            ```
            public void setProcessVersion​(Integer processVersion)
            ```


        -   #### getActive

            ```
            public Boolean getActive()
            ```


        -   #### setActive

            ```
            public void setActive​(Boolean active)
            ```


        -   #### getRequester

            ```
            public BPMUserVO getRequester()
            ```


        -   #### setRequester

            ```
            public void setRequester​(BPMUserVO requester)
            ```


        -   #### getFormRecordId

            ```
            public Integer getFormRecordId()
            ```


        -   #### setFormRecordId

            ```
            public void setFormRecordId​(Integer formRecordId)
            ```


        -   #### getFormId

            ```
            public Integer getFormId()
            ```


        -   #### setFormId

            ```
            public void setFormId​(Integer formId)
            ```


        -   #### getParentRequestId

            ```
            public Integer getParentRequestId()
            ```


        -   #### setParentRequestId

            ```
            public void setParentRequestId​(Integer parentRequestId)
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


        -   #### getWarningDate

            ```
            public ZonedDateTime getWarningDate()
            ```


        -   #### setWarningDate

            ```
            public void setWarningDate​(ZonedDateTime warningDate)
            ```


        -   #### getDeadlineDate

            ```
            public ZonedDateTime getDeadlineDate()
            ```


        -   #### setDeadlineDate

            ```
            public void setDeadlineDate​(ZonedDateTime deadlineDate)
            ```


        -   #### getPeriodId

            ```
            public String getPeriodId()
            ```


        -   #### setPeriodId

            ```
            public void setPeriodId​(String periodId)
            ```


        -   #### getActivities

            ```
            public List<BPMProcessActivityVO> getActivities()
            ```


        -   #### setActivities

            ```
            public void setActivities​(List<BPMProcessActivityVO> activities)
            ```


        -   #### getFormRecord

            ```
            public BPMFormRecordVO getFormRecord()
            ```


        -   #### setFormRecord

            ```
            public void setFormRecord​(BPMFormRecordVO formRecord)
            ```


        -   #### getFormFields

            ```
            public List<BPMFormFieldVO> getFormFields()
            ```


        -   #### setFormFields

            ```
            public void setFormFields​(List<BPMFormFieldVO> formFields)
            ```


        -   #### getSlaStatus

            ```
            public String getSlaStatus()
            ```


        -   #### setSlaStatus

            ```
            public void setSlaStatus​(String slaStatus)
            ```


        -   #### getStatus

            ```
            public String getStatus()
            ```


        -   #### setStatus

            ```
            public void setStatus​(String status)
            ```


        -   #### getProcessDescription

            ```
            public String getProcessDescription()
            ```


        -   #### setProcessDescription

            ```
            public void setProcessDescription​(String processDescription)
            ```


        -   #### getDeadlineSpecification

            ```
            public BPMDeadlineSpecificationVO getDeadlineSpecification()
            ```


        -   #### setDeadlineSpecification

            ```
            public void setDeadlineSpecification​(BPMDeadlineSpecificationVO deadlineSpecification)
            ```
