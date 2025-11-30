import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'Minhas movimentações' }) => {
  const navigation = useNavigation<any>();

  const styles = {
    header: {
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      backgroundColor: '#f8fafc',
      borderBottom: '1px solid #e2e8f0',
    } as React.CSSProperties,
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    } as React.CSSProperties,
    menuButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#475569',
      fontSize: '24px',
    } as React.CSSProperties,
    titleStyle: {
      fontSize: '20px',
      fontWeight: 500,
      color: '#0f172a',
      margin: 0,
    } as React.CSSProperties,
  };

  return (
    <header style={styles.header}>
      <div style={styles.headerLeft}>
        <button 
          style={styles.menuButton}
          onClick={() => navigation.openDrawer?.()}
          aria-label="Menu"
        >
          ☰
        </button>
        <h1 style={styles.titleStyle}>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
