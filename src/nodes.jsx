import React from 'react';
export const defaultNodes = [
  { id: '1',type:"input", position: { x: 250, y: 0 }, data: { label: 'Giriş' },
style: { backgroundColor: '#6ede87', color: 'white' }, },
  { id: '2',type:"textUpdater", position: { x: 0, y: 100 }, data: { label: 'Orta',value:123 }, style: { backgroundColor: '#ff0072', color: 'white' }, },
    {
    id: '3',
    type: 'output',
    data: { label: <h2>Çıkış</h2> },
    position: { x: 250, y: 250 }, style: { backgroundColor: '#6865A5', color: 'white' },
  },
   { id: 'c', position: { x: 0, y: 200 }, data: { label: 'Node C' } },
  { id: 'd', position: { x: 200, y: 400 }, data: { label: 'Node D' } },
];