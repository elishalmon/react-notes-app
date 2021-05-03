import TextField from '@material-ui/core/TextField';


export default function Body( { handleChange=null, label, readOnly, style, defaultValue } ) {

    return(
        <TextField
            className={style}
            id="outlined-multiline-static"
            label={label}
            multiline
            required
            margin='dense'
            rows={6}
            defaultValue={defaultValue}
            inputProps = {{
                readOnly: readOnly,
                maxlength: 255
            }}
            variant="outlined"
            name="body"
            onChange = { handleChange }
        />
    )
}