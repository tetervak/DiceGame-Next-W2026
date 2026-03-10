import { OneDice } from "./OneDice";
import {Stack} from "@mui/material";

type DiceDisplayProps = {
    values: number[] | undefined;
}

export function DiceDisplay({values}: DiceDisplayProps){
    return (
        <Stack direction="row" spacing={1}>
            {values?.map((value, index)=><OneDice side={value} key={`${index}_${value}`}/>)}
        </Stack>
    )
}