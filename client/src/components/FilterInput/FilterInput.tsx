import React from 'react';

function FilterInput(props: any) {
    return (
            <label>
                    <input type={props.type} onChange={props.onChange} value={props.value}/>
                    {props.label}
            </label>
    );
}

export default FilterInput;