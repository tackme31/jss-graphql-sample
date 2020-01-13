import React from 'react';
import { Text, RichText, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const NewsContent = (props) => (
  <div>
    {/*
      フィールド表示用のコンポーネントを使用すると、エクスペリエンスエディタで編集可能になります。
      現在のページのフィールドにアクセスするには、sitecoreContext.route.fieldsを参照します。 
    */}
    <h1><Text field={props.sitecoreContext.route.fields.newsTitle} /></h1>
    <RichText field={props.sitecoreContext.route.fields.newsContent} />
  </div>
);

// コンポーネントにwithSitecoreContextを適用することで、props.sitecoreContextから
// 現在のページアイテムやレイアウトなどのコンテキスト情報を取得できるようになります。
export default withSitecoreContext()(NewsContent);
