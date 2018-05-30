# graphql API boilerplate

Technology stack and languages used:

* typescript
* babel
* graphql
* hapi

It creates
* Endpoint for graphql queries: http://localhost:8099/graphql
* Endpoint for graphql testing/documentation: http://localhost:8099/graphiql

## CONFIG

In `./config` there are 3 files: a base json and 2 environment-specific json

## INSTALL

```
npm i
```

## DEV

```
npm run build
npm run dev
```

## BUILD

```
npm run build
```

## START

```
node dist
```

## ISSUES

* `npm run babel-node` doesn't work: it seems that it does not read .babelrc
* `npm run dev_babel-node` doesn't work for the same reason
*

## TODO

*