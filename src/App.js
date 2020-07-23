import React from 'react';
import './App.css';
import AddTransactionForm from './Components/AddTransactionForm';
import History from './Components/History';
import TransactionProvider from './Components/TransactionProvider';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <div>
          <History />
          <AddTransactionForm />
        </div>
      </TransactionProvider>
    </div>
  );
}

export default App;
