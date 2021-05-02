import { CirclePicker } from 'react-color';

const colors=["#3f50b5", "#FF6347", "#FFD700", "#708090", "#32CD32", "#FF00FF"]

export default function ColorPicker({handleChange}) {

    return(
        <CirclePicker 
            onChange={ (color) => handleChange(color) }
            circleSize={27}
            circleSpacing={15}
            name="color"
            colors={colors}
        />
    )
}