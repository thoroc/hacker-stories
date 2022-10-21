import * as React from 'react';
import './App.css';

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'Material-UI',
      url: 'https://mui.com/material-ui/',
      author: 'Olivier Tassinari',
      num_comments: 5,
      points: 11,
      objectID: 2,
    },
    {
      title: 'Jest',
      url: 'https://jestjs.io/',
      author: 'Simen Bekkhus',
      num_comments: 2,
      points: 1,
      objectID: 3,
    },
    {
      title: 'Babel',
      url: 'https://babeljs.io/',
      author: 'Sebastian ?',
      num_comments: 1,
      points: 1,
      objectID: 4,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} data={searchTerm} />
      {/* <p>Searching for: {searchTerm}</p> */}

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
      <p>Searching for: {props.data}</p>
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    {/* Comment section */}
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default App;
