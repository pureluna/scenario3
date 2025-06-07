import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  username: string;
  role: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      user: null,
      login: (token: string, user: User) => {
        localStorage.setItem('token', token);
        set({ isAuthenticated: true, token, user });
      },
      logout: () => {
        localStorage.removeItem('token');
        set({ isAuthenticated: false, token: null, user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
); 