import { Route, Routes, Navigate } from 'react-router-dom';
import { Marvel } from '../pages/Marvel';
import { Dc } from '../pages/Dc';
import { Navbar } from '../../ui';
import { SearchPage } from '../pages/SearchPage';
import { Hero } from '../pages/Hero';

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container"> 
    <Routes>
    <Route path="marvel" element={<Marvel/>}/>
    <Route path="dc" element={<Dc/>}/>
    <Route path="search" element={<SearchPage/>}/>
    <Route path="hero" element={<Hero/>}/>
    <Route path="/" element={<Navigate to='/Marvel'/>}/>
</Routes>
    </div>
   
    </>
  )
}
