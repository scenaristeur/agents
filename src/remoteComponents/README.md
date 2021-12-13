#
https://markus.oberlehner.net/blog/distributed-vue-applications-loading-components-via-http/


```
npx vue-cli-service build --target lib --formats umd-min --no-clean --dest server/components/Hello --name "Hello.[chunkhash]" src/remoteComponents/Hello.vue```
