import { Routes, Route, Navigate} from 'react-router-dom';
import { Navbar } from '../ui';
import { LoginPage } from '../auth/components/hooks/pages/LoginPage';
import { Marvel } from '../heroes/pages/Marvel';
import { Dc } from '../heroes/pages/Dc';


export const AppRouter = () => {
  return (
    <>

<Navbar/>
<Routes>

    <Route path="marvel" element={<Marvel/>}/>
    <Route path="dc" element={<Dc/>}/>
    <Route path="login" element={<LoginPage/>}/>
    <Route path="/" element={<Navigate to='/Marvel'/>}/>
</Routes>
    </>
    
  )
}
