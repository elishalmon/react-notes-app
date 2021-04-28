import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchNotes from './redux/actions/notesAction';


export default function AllNotes() {

    const notes = useSelector((state) => state.notes)
    const dispatch = useDispatch();

    useEffect(() => {
        if( !notes ) {
            dispatch(fetchNotes())
        }
    }, [notes])

    return(
            <ul>
			{
				notes.map(function(note) {
					return (
						<li key={note.id}>
							{
								note.title
							}
						</li>
					)	
				})
			}
		    </ul>
    )
}