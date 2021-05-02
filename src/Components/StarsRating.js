import {useState} from 'react';
import Rating from '@material-ui/lab/Rating';


export default function StarsRating({readOnly, startValue, handleChange=null, size='large'}) {
  const [value, setValue] = useState(startValue);

  return (
        <Rating
          name="simple-controlled"
          value={value}
          readOnly={readOnly}
          size={size}
          onChange={(event, newValue) => {
            setValue(newValue);
            handleChange(newValue);
          }}
        />
  );
}