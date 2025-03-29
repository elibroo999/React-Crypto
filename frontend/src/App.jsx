import AppLayout from './Components/layout/AppLayout';
import { CryptoContextProvider } from './context/crypto-context';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 60,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
  padding: '1rem',
};


export default function App() {
  return (
    < CryptoContextProvider>
    <AppLayout />
  </CryptoContextProvider>
  )
}
