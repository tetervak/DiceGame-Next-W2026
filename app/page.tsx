'use client'
import { useState } from 'react'
import { type RollData, getRollData } from './data/dice-data';
import { DiceDisplay } from './components/DiceDisplay';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  type SelectChangeEvent
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function Home() {
  const [rollData, setRollData] = useState<RollData | undefined>(undefined);
  const [numberOfDice, setNumberOfDice] = useState<number>(3);

  const onRollDice = () => {
    setRollData(getRollData(numberOfDice));
  };

  const onReset = () => {
    setNumberOfDice(3);
    setRollData(undefined);
  };

  const onNumberOfDiceChange = (event: SelectChangeEvent<number>): void => {
    setNumberOfDice(event.target.value)
  }

  return (
      <Container maxWidth="sm" className="mt-6 flex flex-col justify-center items-center gap-6">
        <h1 className="text-4xl text-green-700">Dice Game</h1>
          <FormControl size="small">
            <FormLabel id="number-of-dice-label" className="text-indigo-600">Number of Dice</FormLabel>
            <Select value={numberOfDice} onChange={onNumberOfDiceChange}
                    labelId="number-of-dice-label">
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
            </Select>
          </FormControl>
          {
            (rollData != undefined) ?
                <DiceDisplay values={rollData?.values} /> :
                <h3 className="text-xl text-orange-700">No dice rolled yet</h3>
          }
        <p className="text-2xl text-bold text-indigo-600">
          <label>Total</label>: {rollData?.total ?? 0}
        </p>
        <p>
          <Button variant="contained" color="primary" onClick={onRollDice}>Roll <CheckIcon/></Button>
        </p>
        <p>
          <Button variant="outlined" color="secondary" onClick={onReset}>Reset <ClearIcon/></Button>
        </p>
      </Container>
  );
}
