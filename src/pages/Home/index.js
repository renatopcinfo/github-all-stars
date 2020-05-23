import React, { useState, useEffect } from 'react';
import '../Home/styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import { getUsers } from '../../service';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="home" >
      {users.map(user => (
        <Card style={{ width: '18rem' }} key={user.id}>
          <Card.Img variant='top' src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Link to={`/user/${user.login}`}>
              <Button variant='secondary'>Perfil</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}