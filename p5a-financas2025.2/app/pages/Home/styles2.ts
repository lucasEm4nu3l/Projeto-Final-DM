import React from 'react';

const headerStyles = {
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
  
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
  } as React.CSSProperties,
  
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#0f172a',
    margin: 0,
  } as React.CSSProperties,
  
  container: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    paddingBottom: '40px',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: '#1e293b',
  } as React.CSSProperties,
  
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '32px',
    gap: '12px',
  } as React.CSSProperties,
  
  main: {
    paddingLeft: '24px',
    paddingRight: '24px',
  } as React.CSSProperties,
  
  list: {
    marginTop: '8px',
  } as React.CSSProperties,
};

export default headerStyles;