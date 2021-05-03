import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';

const icons = [
    'fas fa-camera fa-2x',
    'fas fa-shopping-cart fa-2x',
    'fas fa-first-aid fa-2x',
    'fas fa-pizza-slice fa-2x',
    'fas fa-glass-cheers fa-2x',
    'fas fa-running fa-2x',
  ];

export default function IconPicker({ startValue, handleChange=null}) {

    const [icon, setIcon] = useState(startValue);

    const onChange = (event) => {
        setIcon(event.target.value);
        handleChange(null, ['icon', event.target.value])
    };

    return(
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={icon}
          onChange={onChange}
        >
          <MenuItem value={icons[0]}><i className={icons[0]} style={{marginLeft: "10px"}}></i></MenuItem>
          <MenuItem value={icons[1]}><i className={icons[1]} style={{marginLeft: "10px"}}></i></MenuItem>
          <MenuItem value={icons[2]}><i className={icons[2]} style={{marginLeft: "10px"}}></i></MenuItem>
          <MenuItem value={icons[3]}><i className={icons[3]} style={{marginLeft: "10px"}}></i></MenuItem>
          <MenuItem value={icons[4]}><i className={icons[4]} style={{marginLeft: "10px"}}></i></MenuItem>
          <MenuItem value={icons[5]}><i className={icons[5]} style={{marginLeft: "10px"}}></i></MenuItem>
        </Select>
    )
}