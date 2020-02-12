# JSS+GraphQL Sample
JSSとGraphQLによる検索機能の実装サンプルです。

## 環境要件
このプロジェクトは以下の環境で検証されています。

- Sitecore Experience Platform 9.3.0
- Sitecore JavaScript Service 13.0

## セットアップ手順
以下の手順でセットアップできます。コマンドは管理者権限のPowerShellで実行してください。

1. [SitecoreにJSSのパッケージをインストールします。](https://jss.sitecore.com/docs/getting-started/jss-server-install#server-components-installation)

1. [SitecoreでAPIキーを作成します。](https://jss.sitecore.com/docs/techniques/graphql/graphql-overview#setting-up-sitecore-graphql)

1. リポジトリをクローンし、NPMパッケージを復元します。

```powershell
> git clone https://github.com/xirtardauq/jss-graphql-sample.git
> cd ./jss-graphql-sample
> npm install
```

4. IISでサイトのバインディングに`jss-graphql-sample.dev.local`を追加します。(hostsにも追加する必要があります)

1. 先ほど設定したAPIキーとホスト名で[プロジェクトをセットアップします。](https://jss.sitecore.com/docs/getting-started/app-deployment#step-1-setup-connection-information)  

```powershell
> npm install -g @sitecore-jss/sitecore-jss-cli # JSS CLIをインストール
> jss setup
```

6. アプリケーションをデプロイし、Connectedモードで実行します。

```powershell
> jss deploy config; jss deploy app -c -d
> jss start:connected
```

## 追加・変更箇所
以下のコマンドで、Reactサンプルプロジェクトからの変更点をご確認いただけます。

```powershell
> git diff --name-only $(git rev-list --max-parents=0 HEAD)
```

## 参考リンク
- [Home | Sitecore JSS Documentation](https://jss.sitecore.com/)
- [Sitecore JavaScript Services クイックスタート - YouTube](https://www.youtube.com/playlist?list=PL35wZQvLcxOisI2D_0VFpmjzd255StIwg)
- [Sitecore JSSで簡単なページを作ってみる - DEV Community 👩‍💻👨‍💻](https://dev.to/xirtardauq/sitecore-jss-546g)
- [Simple search form in REACT using hooks 🔎. - DEV Community 👩‍💻👨‍💻](https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg)

## 作者
- [山田 拓実 (xirtardauq)](https://twitter.com/xirtardauq)
