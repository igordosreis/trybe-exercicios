import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {/* Posso usar a primeira ou a segunda sintaxe abaixo para adicionar uma key na chamada */}
        {/* de UserProfile. Ou posso usar a terceira sintaxe e adicionar a key na div pai retornada */}
        {/* por UserProfile; a que contem todos os outros elementos HTML. */}
        {/* {users.map((user) => <div key={user.id}><UserProfile user={user} /></div>)} */}
        {users.map((user) => <UserProfile key={user.id} user={user} />)}
        {/* {users.map((user) => <UserProfile user={user} />)} */}
      </div>
    );
  }
}

export default App;