import { useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const APIcomponent = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Loading API DATA</h1>
      {loading && <div>Loading...</div>}
      {!loading &&
        user.map(u => (
          <UserComponent key={u.id} name={u.name} email={u.email} />
        ))}
      {error && <div>{error}</div>}
    </div>
  );
};

const UserComponent = ({ name, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
