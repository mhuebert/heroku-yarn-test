Temp app for testing Heroku yarn buildpack.

I can reproduce the error via the following:

```
git clone git@github.com:mhuebert/heroku-yarn-test.git;
cd heroku-yarn-test;
heroku create;
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#yarn;
git push heroku master; // should work 
yarn add left-pad;
git commit -am "add left-pad dependency";
git push heroku master;
heroku logs; // should show error
```

The error:

```

2016-10-20T12:32:03.428625+00:00 app[web.1]: > hello-world@1.0.0 start /app
2016-10-20T12:32:03.428625+00:00 app[web.1]: > node index.js
2016-10-20T12:32:03.428626+00:00 app[web.1]:
2016-10-20T12:32:03.596882+00:00 app[web.1]:   throw err
2016-10-20T12:32:03.596879+00:00 app[web.1]: /app/node_modules/bindings/bindings.js:91
2016-10-20T12:32:03.596883+00:00 app[web.1]:   ^
2016-10-20T12:32:03.596883+00:00 app[web.1]:
2016-10-20T12:32:03.596884+00:00 app[web.1]: Error: Could not locate the bindings file. Tried:
2016-10-20T12:32:03.596884+00:00 app[web.1]:  → /app/node_modules/bcrypt/build/Debug/bcrypt_lib.node
2016-10-20T12:32:03.596884+00:00 app[web.1]:  → /app/node_modules/bcrypt/build/bcrypt_lib.node
2016-10-20T12:32:03.596885+00:00 app[web.1]:  → /app/node_modules/bcrypt/build/Release/bcrypt_lib.node
2016-10-20T12:32:03.596885+00:00 app[web.1]:  → /app/node_modules/bcrypt/out/Debug/bcrypt_lib.node
2016-10-20T12:32:03.596886+00:00 app[web.1]:  → /app/node_modules/bcrypt/Debug/bcrypt_lib.node
2016-10-20T12:32:03.596886+00:00 app[web.1]:  → /app/node_modules/bcrypt/out/Release/bcrypt_lib.node
2016-10-20T12:32:03.596886+00:00 app[web.1]:  → /app/node_modules/bcrypt/Release/bcrypt_lib.node
2016-10-20T12:32:03.596887+00:00 app[web.1]:  → /app/node_modules/bcrypt/build/default/bcrypt_lib.node
2016-10-20T12:32:03.596907+00:00 app[web.1]:  → /app/node_modules/bcrypt/compiled/5.11.1/linux/x64/bcrypt_lib.node
2016-10-20T12:32:03.596908+00:00 app[web.1]:     at bindings (/app/node_modules/bindings/bindings.js:88:9)
2016-10-20T12:32:03.596909+00:00 app[web.1]:     at Object.<anonymous> (/app/node_modules/bcrypt/bcrypt.js:3:35)
2016-10-20T12:32:03.596910+00:00 app[web.1]:     at Module._compile (module.js:413:34)
2016-10-20T12:32:03.596910+00:00 app[web.1]:     at Object.Module._extensions..js (module.js:422:10)
2016-10-20T12:32:03.596911+00:00 app[web.1]:     at Module.load (module.js:357:32)
2016-10-20T12:32:03.596911+00:00 app[web.1]:     at Function.Module._load (module.js:314:12)
2016-10-20T12:32:03.596912+00:00 app[web.1]:     at Module.require (module.js:367:17)
2016-10-20T12:32:03.596912+00:00 app[web.1]:     at require (internal/module.js:20:19)
2016-10-20T12:32:03.596913+00:00 app[web.1]:     at Object.<anonymous> (/app/index.js:2:14)
2016-10-20T12:32:03.596919+00:00 app[web.1]:     at Module._compile (module.js:413:34)
2016-10-20T12:32:03.604517+00:00 app[web.1]:
2016-10-20T12:32:03.613570+00:00 app[web.1]: npm ERR! Linux 3.13.0-95-generic
2016-10-20T12:32:03.613931+00:00 app[web.1]: npm ERR! argv "/app/.heroku/node/bin/node" "/app/.heroku/node/bin/npm" "start"
2016-10-20T12:32:03.614159+00:00 app[web.1]: npm ERR! node v5.11.1
2016-10-20T12:32:03.614573+00:00 app[web.1]: npm ERR! npm  v3.8.6
2016-10-20T12:32:03.614950+00:00 app[web.1]: npm ERR! code ELIFECYCLE
2016-10-20T12:32:03.615114+00:00 app[web.1]: npm ERR! hello-world@1.0.0 start: `node index.js`
2016-10-20T12:32:03.615264+00:00 app[web.1]: npm ERR! Exit status 1
```