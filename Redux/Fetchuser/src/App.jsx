import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  console.log(user);
  return (
    <div>
      <h1>Fetch user with Redux</h1>
      {user.data.map(u => (
        <UserList key={u.id} username={u.username} />
      ))}
    </div>
  );
}

const UserList = ({ username }) => {
  return (
    <div>
      <p>{username}</p>
    </div>
  );
};

export default App;
