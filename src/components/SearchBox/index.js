import { Link } from 'react-router-dom';
import { loader } from 'graphql.macro';
import { useState } from 'react';
import { useQuery } from 'react-apollo';

// 別ファイルに定義したクエリをロードしています。
// 簡単なクエリであれば、graphql.macroのgqlタグを使用して
// const Query = gql`query {...}` のように定義も可能です。
const SearchNewsQuery = loader('./query.graphql');

const SearchBox = (props) => {
  // コンポーネント内で状態を持ちたい場合はuseStateを使用します。
  // 状態保持用の変数と、状態更新用の関数を取得できます。
  const [searchTerm, setSearchTerm] = useState("");

  // クエリを実行するにはuseQueryを使用します。
  // refetchを使用することで、変数を変えてクエリを再実行できます。
  const { loading, error, data, refetch } = useQuery(SearchNewsQuery, { variables: { term: null } });

  if (error) {
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <div>
      {/* 検索ボックスの値が変更されるたびに、searchTermの値を変更しています。 */}
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

      {/* 検索ボタンをクリックすると、refetchを呼び検索処理を再実行しています。 */}
      <input type="button" value="Search" onClick={() => refetch({ term: searchTerm })} />

      <ul>
        {/*
          クエリの取得結果を表示しています。
          各リストアイテムには一意なキーを設定する必要があるため、key属性にアイテムIDを渡しています。
        */}
        {data.search.results.items.map(({ item }) => (
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