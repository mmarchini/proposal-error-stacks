# Comparison of Error Stack Traces across engines

<!-- BEGIN -->
## test-stack-anonymous-assigned-function.js

### Source

```js
const fun = (function () {
  print((new Error()).stack);
})

fun()
```

### Results 

| Engine         | Results                                                                                                                                                                           |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JavaScriptCore | <pre>fun@/tmp/xYbOtfGXeWfC73GiXKRe/f-1587079124929-8803-1nrqox3.hzq3.js:2:19<br>global code@/tmp/xYbOtfGXeWfC73GiXKRe/f-1587079124929-8803-1nrqox3.hzq3.js:5:4</pre>              |
| SpiderMonkey   | <pre>fun@/tmp/Dmg5Ysnl2JVTGworvt76/f-1587079124929-8803-1hi831f.sjnf.js:2:10<br>@/tmp/Dmg5Ysnl2JVTGworvt76/f-1587079124929-8803-1hi831f.sjnf.js:5:1</pre>                         |
| V8             | <pre>Error<br>    at fun (/tmp/400h8QHzCljxRjk1f78k/f-1587079124928-8803-1iivcns.a2hp.js:2:10)<br>    at /tmp/400h8QHzCljxRjk1f78k/f-1587079124928-8803-1iivcns.a2hp.js:5:1</pre> |


## test-stack-anonymous-function.js

### Source

```js
(function () {
  print((new Error()).stack);
})()
```

### Results 

| Engine         | Results                                                                                                                                                                     |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JavaScriptCore | <pre>/tmp/kh4cYvDwBbeExDkN0WGQ/f-1587079125079-8838-1nsdiph.zewr.js:2:19<br>global code@/tmp/kh4cYvDwBbeExDkN0WGQ/f-1587079125079-8838-1nsdiph.zewr.js:3:3</pre>            |
| SpiderMonkey   | <pre>@/tmp/CblDsLs5rDmDdSvvdPmj/f-1587079125079-8838-1ww2f6m.i5xe.js:2:10<br>@/tmp/CblDsLs5rDmDdSvvdPmj/f-1587079125079-8838-1ww2f6m.i5xe.js:3:3</pre>                      |
| V8             | <pre>Error<br>    at /tmp/Jr7pKpVc1ASEjiDgfySj/f-1587079125079-8838-1n6pae0.gk3t.js:2:10<br>    at /tmp/Jr7pKpVc1ASEjiDgfySj/f-1587079125079-8838-1n6pae0.gk3t.js:3:3</pre> |


## test-stack-function.js

### Source

```js
(function fun() {
  print((new Error()).stack);
})()
```

### Results 

| Engine         | Results                                                                                                                                                                           |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JavaScriptCore | <pre>fun@/tmp/yhrFFIsCE8MOcwgvT7It/f-1587079125227-8873-m8bj5m.syy3.js:2:19<br>global code@/tmp/yhrFFIsCE8MOcwgvT7It/f-1587079125227-8873-m8bj5m.syy3.js:3:3</pre>                |
| SpiderMonkey   | <pre>fun@/tmp/f1e5Zxvmd6GNjCGqYsZt/f-1587079125227-8873-1km56qe.skuu.js:2:10<br>@/tmp/f1e5Zxvmd6GNjCGqYsZt/f-1587079125227-8873-1km56qe.skuu.js:3:3</pre>                         |
| V8             | <pre>Error<br>    at fun (/tmp/iBuNiUkdmorrL1AiL0Xx/f-1587079125226-8873-i0rzp0.kncre.js:2:10)<br>    at /tmp/iBuNiUkdmorrL1AiL0Xx/f-1587079125226-8873-i0rzp0.kncre.js:3:3</pre> |


## test-stack-imported-function.mjs

### Source

```js
import { fun } from './module.mjs'

fun()
```

### Results 

| Engine         | Results                                                                                                                                                                                                                                                                                                                                                         |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JavaScriptCore | <pre>fun@/tmp/UMq6XiBzBRTy4qmjJF9x/module.mjs:2:19<br>module code@/tmp/UMq6XiBzBRTy4qmjJF9x/test-stack-imported-function.mjs:3:4<br>evaluate@[native code]<br>moduleEvaluation@[native code]<br>[native code]<br>asyncFunctionResume@[native code]<br>[native code]<br>promiseReactionJobWithoutPromise@[native code]<br>promiseReactionJob@[native code]</pre> |
| SpiderMonkey   | <pre>fun@/tmp/5nVB22tPqg96bbCMBf02/./module.mjs:2:10<br>@/tmp/5nVB22tPqg96bbCMBf02/test-stack-imported-function.mjs:3:1<br>loadAndExecute@shell/ModuleLoader.js:102:23<br>importRoot@shell/ModuleLoader.js:105:21<br>@shell/ModuleLoader.js:131:43</pre>                                                                                                        |
| V8             | <pre>Error<br>    at fun (/tmp/r84U7VzlfhPvn2C5Ulw9/module.mjs:2:10)<br>    at /tmp/r84U7VzlfhPvn2C5Ulw9/test-stack-imported-function.mjs:3:1</pre>                                                                                                                                                                                                             |


## test-stack-top-level.js

### Source

```js
print((new Error()).stack);
```

### Results 

| Engine         | Results                                                                                      |
|----------------|----------------------------------------------------------------------------------------------|
| JavaScriptCore | <pre>global code@/tmp/nqMFqQeFl5jMpm0ECrlQ/f-1587079125521-8941-1fvmzze.gcjbh.js:1:17</pre>  |
| SpiderMonkey   | <pre>@/tmp/DP8eAo8PBx2vAZzMEw9s/f-1587079125521-8941-zlmnz6.atwzk.js:1:8</pre>               |
| V8             | <pre>Error<br>    at /tmp/TVDhAeEzJ6GFCoWI6L1e/f-1587079125520-8941-uj9rk7.ppyg.js:1:8</pre> |



<!-- END -->
