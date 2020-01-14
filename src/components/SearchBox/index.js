import React, { useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import { loader } from 'graphql.macro';


// 別ファイルに定義したクエリをロードしています。
// 簡単なクエリであれば、graphql.macroのgqlタグを使用して
// const Query = gql`query {...}` のように定義も可能です。
const SearchNewsQuery = loader('./query.graphql');

const SearchBox = (props) => {
  // コンポーネント内で状態を持ちたい場合はuseStateを使用します。
  // 状態保持用の変数と、状態更新用の関数を取得できます。
  const [searchTerm, setSearchTerm] = useState("");

  // クエリを実行するにはuseQueryまたはuseLazyQueryを使用します。
  // useQueryは即座にクエリが実行され、useLazyQueryは任意のタイミングでクエリを実行できます。
  const [fetchNews, { data }] = useLazyQuery(SearchNewsQuery);

  return (
    <div>
      {/* 検索ボックスの値が変更されるたびに、searchTermの値を変更しています。 */}
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

      {/* 検索ボタンをクリックすると、refetchを呼び検索処理を再実行しています。 */}
      <input type="button" value="Search" onClick={() => fetchNews({ variables: { term: searchTerm }})} />

      <ul>
        {/*
          クエリの取得結果を表示しています。
          各リストアイテムには一意なキーを設定する必要があるため、key属性にアイテムIDを渡しています。
        */}
        {data && data.search.results.items.map(({ item }) => (
          <li key={item.id}>
            {/* Linkコンポーネントでリンクを生成しています。 */}
            <Link to={item.url}>{item.newsTitle.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default SearchBox;