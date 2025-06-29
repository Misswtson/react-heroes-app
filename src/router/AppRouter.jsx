import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/components/hooks/pages/pages/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Hero } from '../heroes/pages/Hero';



export const AppRouter = () => {
  return (
    <>
<Routes>

<Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute> 
                }
                />

                <Route path="/*" element={
                  <PrivateRoute>
                    <Hero />
                  </PrivateRoute>
                } />
    
</Routes>
    </>
    
  )
}
