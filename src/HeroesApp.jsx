
import { AuthProvider } from './auth/components/hooks/pages/context/AuthProvider';
import { AppRouter } from './router/AppRouter';


export const HeroesApp = () => {
  return (
    <AuthProvider>
        
        <AppRouter />
        
    </AuthProvider>
  )
}
