import Login from './components/login'
import Main from './components/main'
import react,{ useState } from 'react'
import {useAuth} from './context/auth-context'
function App() {
  const {user}= useAuth()
  return (
    <div>
      {
     
        user?<Main/>:<Login/>
      }
    </div>
  );
}

export default App;
