import TextField from '@material-ui/core/TextField';


export default function Body( { handleChange=null, label, readOnly, style, defaultValue } ) {

    return(
        <TextField
            className={style}
            id="outlined-multiline-static"
            label={label}
            multiline
            required
            rows={6}
            defaultValue={defaultValue}
            InputProps={{
                readOnly: readOnly,
                }}
            variant="outlined"
            name="body"
            onChange = { handleChange }
        />
    )
}