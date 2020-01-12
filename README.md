# SUGJP JSS Sample
第1回Sitecore User Group Meetupのサンプルコードです。

## システム要件
このプロジェクトは以下の環境で検証されています。

- Sitecore Experience Platform 9.3.0
- Sitecore JavaScript Service 13.0

## セットアップ手順
以下の手順でセットアップできます。コマンドは管理者権限のPowerShellで実行してください。

1. [SitecoreにJSSのパッケージをインストールします。](https://jss.sitecore.com/docs/getting-started/jss-server-install#server-components-installation)

1. [SitecoreでAPIキーを作成します。](https://jss.sitecore.com/docs/techniques/graphql/graphql-overview#setting-up-sitecore-graphql)

1. リポジトリをクローンし、NPMパッケージを復元します。

```powershell
> git clone https://github.com/xirtardauq/sugjp-jss-sample.git
> cd ./sugjp-jss-sample
> npm install
```

4. IISでサイトのバインディングに`sugjp-jss-sample.dev.local`を追加します。(hostsにも追加する必要があります)

1. [プロジェクトをセットアップします。](https://jss.sitecore.com/docs/getting-started/app-deployment#step-1-setup-connection-information)

```powershell
> npm install -g @sitecore-jss/sitecore-jss-cli # JSS CLIをインストール
> jss setup
```

6. アプリケーションをデプロイし、Connectedモードで実行します。

```powershell
> jss deploy config; jss deploy app -c -d
> jss start:connected
```

## 追加・変更したファイル
以下のコマンドで確認してください。

```powershell
> git diff --name-only $(git rev-list --max-parents=0 HEAD)
```

## 作者
- Takumi Yamada (xirtardauq@gmail.com)