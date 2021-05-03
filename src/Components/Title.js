import TextField from '@material-ui/core/TextField';
 

export default function Title({ handleChange=null, label, readOnly, style, defaultValue }) {
    return(
        <TextField
            className = { style }
            id = "outlined-basic" 
            label = {label}
            variant = "outlined"
            name = "title"
            required
            margin='dense'
            defaultValue = { defaultValue }
            onChange = { handleChange }
            inputProps = {{
                readOnly: readOnly,
                maxlength: 18
            }}
        />
    )
}