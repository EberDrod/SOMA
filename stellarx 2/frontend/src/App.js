import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState(`# Escribe tu contrato SOMA aquí\ncontract Example:\n\n    def init():\n        pass`);
  const [name, setName] = useState("MyContract");

  const deploy = async () => {
    try {
      const res = await axios.post("http://localhost:4000/deploy", {
        name,
        code
      });
      alert(`✅ Desplegado: ${res.data.name}`);
    } catch (err) {
      alert("❌ Error al desplegar");
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '1rem', background: '#111', color: '#fff' }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del contrato" />
        <button onClick={deploy}>🚀 Deploy</button>
      </div>
      <Editor
        height="100%"
        defaultLanguage="plaintext"
        value={code}
        onChange={value => setCode(value)}
        theme="vs-dark"
      />
    </div>
  );
}

export default App;
