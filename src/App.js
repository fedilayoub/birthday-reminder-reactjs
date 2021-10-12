import React , { useState } from 'react';
import List from './List';
import data from './data';
function App() {
  const [friends,setFriends] = useState(data);
  return (
<main>
  <section className="container">
  <h3>You have {friends.length} birthday today</h3>
    <List friends={friends}/>
    <button onClick={()=>setFriends([])}>Reset</button>
  </section>

</main>
  );
}

export default App;
