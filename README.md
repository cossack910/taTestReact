# tsTestReact

## 環境構築

### create vite 実行

ワーキングディレクトリ上のファイルをすべて削除されるので Dockerfile や yml とは別階層のワーキングディレクトリを作成する。
この project は app

```
docker-compose run --rm tstestreact npm create vite@latest .
```

### コンテナ上で npm install, npm run build, npm run dev を実行
git cloneした後も
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
| [#2](https://github.com/cossack910/tsTestReact/issues/2) | main.tsx について                              |
| [#3](https://github.com/cossack910/tsTestReact/issues/3) | props                                          |
| [#4](https://github.com/cossack910/tsTestReact/issues/4) | state                                          |
| [#5](https://github.com/cossack910/tsTestReact/issues/5) | useRef                                         |
| [#6](https://github.com/cossack910/tsTestReact/issues/6) | useState                                       |
