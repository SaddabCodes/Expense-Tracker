import "./App.css";
import { useState } from "react";
import { Typography, styled, Box } from "@mui/material";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import NewTransaction from "./components/NewTransaction";
import Transactions from "./components/Transactions";

const Header = styled(Typography)({
  margin: "10px 0",
  fontSize: "36px",
  color: "blue",
  textTransform: "uppercase",
});

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Momos", amount: -29 },
    { id: 2, text: "Salary", amount: 30000 },
    { id: 3, text: "Book", amount: -200 },
    { id: 4, text: "Bonus", amount: 5000 },
  ]);
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Box>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction setTransactions = {setTransactions}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
