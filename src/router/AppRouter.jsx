import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/components/hooks/pages/pages/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';



export const AppRouter = () => {
  return (
    <>
<Routes>

<Route path="login/*" 
element={
                <PublicRoute>
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute> 
                }
                />

                <Route path="/*" element={
                  <PrivateRoute>
                    <HeroesRoutes />
                  </PrivateRoute>
                } />
    
</Routes>
    </>
    
  )
}
