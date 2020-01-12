import React from 'react';
import { Route } from 'react-router-dom'
import { loader } from 'graphql.macro';
import { withApollo } from 'react-apollo';

const SearchNewsQuery = loader('./query.graphql');

const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleClick = async () => {
    const { data } = await props.client.query({
      query: SearchNewsQuery,
      variables: { term: searchTerm }
    });

    setSearchResults(data.search.results);
  }

  return (
    <div>
      <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <input type="button" value="Search" onClick={handleClick} />
      <ul>
        {searchResults.map(item => (
          <li key={item.id}>
            <Route path={item.url}>{item.name}</Route>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default withApollo(SearchBox);
