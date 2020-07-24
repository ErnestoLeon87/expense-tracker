import React from 'react';
import './App.css';
import AddTransactionForm from './Components/AddTransactionForm';
import History from './Components/History';
import TransactionProvider from './Components/TransactionProvider';
import Balance from './Components/Balance';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <div>
          <h3>Expense Tracker</h3>
          <Balance />
          <History />
          <AddTransactionForm />
        </div>
      </TransactionProvider>
    </div>
  );
}

export default App;
