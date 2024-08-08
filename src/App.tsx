import axios from 'axios'
import React, { FC, useState } from 'react'
import Users from './Users';
import { AppProps, User } from './App.types';


//First way to type Declaration

// interface User {
//   name: {
//     first: string;
//     last: string;
//   };
//   login: {
//     uuid: string;
//   };
//   email: string;
// }

// Second way to type Declaration

const App: FC<AppProps> = ({ title }) => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [inputFiled, setInputFiled] = useState('')

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       setIsLoading(true)
  //       const { data } = await axios('https://randomuser.me/api/?results=10');

  //       setUsers(data.results)
  //       setIsLoading(false)

  //       console.log("data", data);
  //     } catch (error) {
  //       setIsLoading(false)
  //       console.log("error", error)
  //     }
  //   }
  //   getUser()
  // }, [])

  const handleClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios('https://randomuser.me/api/?results=10');

      setUsers(data.results)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log("error", error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFiled(event.target.value)
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Show User</button>
      <input onChange={handleChange} type='text' />
      <div>{inputFiled}</div>
      {isLoading && <p>Loading</p>}
      <ul>
        {users.map(({ login, name, email }) => {
          return <Users login={login} name={name} email={email} />;
        })}
      </ul>
    </div>
  )
}

export default App