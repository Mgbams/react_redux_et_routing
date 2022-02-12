import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Add, Remove } from "@mui/icons-material";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const resetCounter = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <Card sx={{ maxWidth: 345, margin: "auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h4" style={{ textAlign: "center" }}>
            {count}
          </Typography>
          <div style={{ textAlign: "center" }}>
            <Button size="small" onClick={increment}>
              <Add />
            </Button>
            <Button size="small" onClick={decrement}>
              <Remove />
            </Button>
            <Button size="small" onClick={resetCounter}>
              reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counter;
