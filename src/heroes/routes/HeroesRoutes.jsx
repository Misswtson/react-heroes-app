import { Route, Routes, Navigate } from 'react-router-dom';
import { Marvel } from '../pages/Marvel';
import { Dc } from '../pages/Dc';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>

    <Route path="marvel" element={<Marvel/>}/>
    <Route path="dc" element={<Dc/>}/>
    <Route path="/" element={<Navigate to='/Marvel'/>}/>
</Routes>
    </>
  )
}
