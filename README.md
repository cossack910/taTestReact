# tsTestReact

## 環境構築

### create vite 実行

ワーキングディレクトリ上のファイルをすべて削除されるので Dockerfile や yml とは別階層のワーキングディレクトリを作成する。

```
docker-compose run --rm tstestreact npm create vite@latest .
```

### コンテナ上で npm install, npm run build, npm run dev を実行

```
docker exec -it tstestreact npm install
docker exec -it tstestreact npm run build
docker exec -it tstestreact npm run dev
```

### 開発サーバ立ち上げ

```
docker exec -it tstestreact npm run dev
```

#### tips

| No                                                       | title                                          |
| -------------------------------------------------------- | ---------------------------------------------- |
| [#1](https://github.com/cossack910/tsTestReact/issues/1) | コンテナ内で起動したサーバーにアクセス出来ない |
