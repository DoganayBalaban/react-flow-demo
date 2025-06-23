import React from 'react';
export const defaultNodes = [
  { id: '1',type:"input", position: { x: 250, y: 0 }, data: { label: 'Giriş' },
style: { backgroundColor: '#6ede87', color: 'white' }, },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'Orta' }, style: { backgroundColor: '#ff0072', color: 'white' }, },
    {
    id: '3',
    type: 'output',
    data: { label: <h2>Çıkış</h2> },
    position: { x: 250, y: 250 }, style: { backgroundColor: '#6865A5', color: 'white' },
  },
];