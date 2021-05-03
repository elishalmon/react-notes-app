import {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';



export default function StarsRating({readOnly, startValue, handleChange=null, size='large'}) {
  
  const [value, setValue] = useState(startValue);
  const classes = ratingStyle()

  return (
        <Rating
          name="simple-controlled"
          value={value}
          readOnly={readOnly}
          size={size}
          classes = {{root: classes.stars}}
          onChange={(event, newValue) => {
            setValue(newValue);
            handleChange(null, ['priority', newValue]);
          }}
        />
  );
}

const ratingStyle = makeStyles(() => ({
    stars: {
      alignSelf: 'center'
    }
}))
