import { Typography, styled, Box } from "@mui/material";

const BalanceText = styled(Typography)`
  font-size: 25px;
  margin-bottom: 20px;
`;

export default function Balance({ transactions }) {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
  return (
    <Box>
      <BalanceText>Balance: ₹{total}</BalanceText>
    </Box>
  );
}
