import CryptoContext from './../../context/crypto-context'
import { useContext } from 'react';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import AppSider from './AppSider';
import { Layout, Spin } from 'antd';

export default function AppLayout () {
        const { loading } = useContext(CryptoContext)
        
        if (loading) {
            return <Spin fullscreen />;
        }
        
        return (
        <Layout>
            <AppSider />
            <Layout>
            <AppHeader />
            <AppContent />
            </Layout>
        </Layout>
    )
}