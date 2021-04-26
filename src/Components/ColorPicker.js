import { CirclePicker } from 'react-color';



export default function ColorPicker({handleChange}) {

    return(
        <CirclePicker 
            onChange={ (color) => handleChange(color) }
            circleSize={26}
            circleSpacing={15}
            name="color"
        />
    )
}