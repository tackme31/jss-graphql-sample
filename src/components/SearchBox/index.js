import React from 'react';
import { Link } from 'react-router-dom'
import { loader } from 'graphql.macro';
import { withApollo } from 'react-apollo';

// 別ファイルに定義したクエリをロードしています。
// 簡単なクエリであれば、graphql.macroのgqlタグを使用して
// const Query = gql`query {...}` のように定義も可能です。
const SearchNewsQuery = loader('./query.graphql');

const SearchBox = (props) => {
  // コンポーネント内で状態を持ちたい場合はReact.useStateを使用します。
  // 状態保持用の変数と、状態更新用の関数を取得できます。
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  // 検索ボタンクリック時の処理を定義しています
  // ApolloクライアントでSearchNewsQueryを実行し、結果をsearchResultsに挿入しています。
  // またasync, awaitを使用して、非同期に結果を取得しています。
  const handleClick = async () => {
    const { data } = await props.client.query({
      query: SearchNewsQuery,
      variables: { term: searchTerm }
    });

    setSearchResults(data.search.results.items);
  }

  return (
    <div>
      {/* 検索ボックスの値が変更されるたびに、searchTermの値を変更しています。 */}
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

      {/* 検索ボタンをクリックすると、handleClickを呼び検索処理を実行しています。 */}
      <input type="button" value="Search" onClick={handleClick} />

      <ul>
        {/*
          検索結果の一覧を表示しています。searchResultsの値が変更されるたびに更新されます。
          各リストアイテムには一意なキーを設定する必要があるため、key属性にアイテムIDを渡しています。
        */}
        {searchResults.map(({item}) => (
          <li key={item.id}>
            {/* Linkコンポーネントでリンクを生成しています。 */}
            <Link to={item.url}>{item.newsTitle.value}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

// コンポーネントにwithApolloを適用すると
// props.clientでApolloクライアントを取得できるようになります。
// https://www.apollographql.com/docs/react/api/react-apollo/#withapollocomponent
export default withApollo(SearchBox);
