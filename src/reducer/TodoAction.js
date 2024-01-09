import {ACTIONS} from "./actions"

const TodoAction = (dispatch) => {
    return {
        onSubmit: function(title) {
            dispatch({
                type: ACTIONS.ADD_TODO,
                payload: {title:title}
            })
        },
        onDelete: function(id) {
            dispatch({
                type: ACTIONS.DELETE_TODO,
                payload: {id:id}
            })
        },
        onEdit: function(editedText,id) {
            dispatch({
                type: ACTIONS.EDIT_TODO,
                payload: {title:editedText,id:id}
            })
        }
    }
}
export default TodoAction