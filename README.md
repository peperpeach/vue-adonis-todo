# vue-adonis-todo
1. Create Git Repo & Close[server]
    $ npm i -g @adonisjs/cli
    $ npm install -g @vue/cli
2. cd to folder & install AdonisJs [server]
    $ adonis new server --api-only
    $ [optional] adonis key:generate
    $ npm install sqlite3 --save
    $ adonis serve --dev
3. install VueJS [client]
    $ vue create client
4. Load VueJS for some package [client]
    $ yarn add axios loadash vuetify vuex-persistedstate vuex-router-sync
5. Run VueJS Client [client]
    $ npm run serve

$ npm run serve [client]  
$ adonis serve --dev [server]  