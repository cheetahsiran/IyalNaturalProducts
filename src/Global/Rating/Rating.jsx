import Styles from './Rating.module.scss';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
const RatingComponent=()=> {
    const [value, setValue] = useState(1);
    return <div> <Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  /></div>
}
export default RatingComponent;