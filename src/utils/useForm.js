import { useState } from 'react';

const useForm = (initialState = {}) => {
    const [state, setState] = useState(initialState);

    const handleChange = e => {
        e.persist();

        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const clearForm = () => {
        setState({});
    }

    return [state, handleChange, clearForm];
}

export default useForm;