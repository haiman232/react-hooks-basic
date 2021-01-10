import React, {useState}from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');
    
    function handleValueChange(e) {
        // console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!onSubmit) return; 

        // Nên khai báo một object để sau này có thể bổ sung nếu đầu vào có nhiều hơn 1 field
        const formValues = {
            title: value,
        };
        onSubmit(formValues);

        //Reset value sau khi submit
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value} 
                onChange={handleValueChange}
            />
        </form>
    );
}

export default TodoForm;