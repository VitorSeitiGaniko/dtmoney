import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Transaction 2",
          amount: -100,
          type: "withdraw",
          category: "Salary",
          createdAt: new Date(),
        },
        {
          id: 3,
          title: "Transaction 3",
          amount: 300,
          type: "deposit",
          category: "Food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
