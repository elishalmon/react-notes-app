import TextField from '@material-ui/core/TextField';
 

export default function Title({ handleChange, label, readOnly, style, defaultValue }) {
    return(
        <TextField
            className = { style }
            id = "outlined-basic" 
            label = {label}
            variant = "outlined"
            name = "title"
            defaultValue = { defaultValue }
            onChange = { handleChange }
            InputProps = {{
                readOnly: readOnly,
                maxLength: 20
            }}
        />
    )
}