import React from 'react';
import './FormInput.scss';

type Props = {
    label: string
};

export default function FormInput(props: Props) {
    return (
        <div className="rcm-form-input">
            <span className="rcm-form-input__label">{ props.label }</span>
            <input className="rcm-form-input__input" type="text" />
        </div>
    )
}
