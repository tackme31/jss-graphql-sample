import {
  CommonFieldTypes,
  SitecoreIcon,
} from "@sitecore-jss/sitecore-jss-manifest";

/**
  manifest.addRouteTypeでページテンプレートを定義しています。
  引数のfieldsプロパティでテンプレートのフィールド一覧を定義できます。
  Sitecoreへデプロイするには `jss deploy template` を実行します。
*/
export default function (manifest) {
  manifest.addRouteType({
    name: "NewsPage",
    displayName: "News Page",
    icon: SitecoreIcon.DocumentText,
    fields: [
      {
        name: "newsTitle",
        displayName: "News Title",
        type: CommonFieldTypes.SingleLineText,
        standardValue: "$name",
      },
      {
        name: "newsContent",
        displayName: "News Content",
        type: CommonFieldTypes.RichText,
      }
    ]
  });
}