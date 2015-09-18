# Simple-ImmutableHTTP-executor

Basic executor for [immutable-http](http://stremlenye.github.io/immutable-http/)

## Installation

```sh
npm i --save simple-immutablehttp-executor
```

```js
import exec from 'simple-immutablehttp-executor'

const api = new Http().executor(exec)
```

## Caveats
This executor was created just for test purpose and could have compatibility
problems. Be aware to use it in production.
