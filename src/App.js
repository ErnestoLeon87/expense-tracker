import React from 'react';
import './Main.css';
import AddTransactionForm from './Components/AddTransactionForm';
import History from './Components/History';
import TransactionProvider from './Components/TransactionProvider';
import Balance from './Components/Balance';
import { Header } from './Components/Header';
import { IncomeExpenses } from './Components/IncomeExpenses';

function App() {
  return (
    <div>
      <TransactionProvider>
        <div>
          <Header />
          <Balance />
          <IncomeExpenses />
          <History />
          <AddTransactionForm />
        </div>
      </TransactionProvider>
    </div>
  );
}

export default App;
