import React from 'react';
import ReactDOM from 'react-dom';

import {FormStateProvider} from 'react-easy-form-state';
import {DatePickerInput} from 'react-easy-form-state';
import {SelectInput} from 'react-easy-form-state';
import {TextInput} from 'react-easy-form-state';
import {SelectRadioInput} from 'react-easy-form-state';
import {ButtonSubmit} from 'react-easy-form-state';

import {messages} from '../messages/messages';


import '../css/bootstrap.min.css';

const validateLength = (value) => {
    return value.length > 3;
};

export function RegisterApp({urlSubmit}) {


    const validations =
        [
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                errorMessage: 'Error empty'
            },
            {
                field: 'name',
                method: validateLength,
                validWhen: true,
                errorMessage: 'Error length'
            }
        ];


    const handleSubmit = (state, errors) => {
        alert('handleSubmit \n ' + JSON.stringify(state)+ '\n ' + JSON.stringify(errors));
    }


    const [isAdmin, setIsAdmin] = React.useState(false);

    const onChangeType = value => {
        setIsAdmin(value === 'admin');
    }

    const catalogs = {
        type: [
            {id: 'admin', text: 'Administrator'},
            {id: 'normal', text: 'Normal user'}
        ],
        gender: [
            {id: 'M', text: 'Male'},
            {id: 'F', text: 'Female'}
        ]
    }

    return (

        <>
            <h5>Example </h5>

            <FormStateProvider urlSubmit={urlSubmit}
                               handleNewState={handleSubmit}
                               validations={validations}
                               catalogs={catalogs}
                               messages={messages}
                               locale={'en'}
                               dateFormat={'dd/MM/yyyy'}
            >

                <TextInput label={'input.name'}
                           name={'name'}
                           tooltip={'tooltip.name'}
                />

                <TextInput labelText={'Email'}
                           name={'email'}
                />

                <SelectInput labelText={'Type'}
                             name={'type'}
                             onChange={onChangeType}
                />

                <TextInput labelText={'Password'}
                           name={'password'}
                           visible={isAdmin}
                />


                <SelectRadioInput labelText={'Gender'}
                                  name={'gender'}

                />


                <DatePickerInput labelText={'Birthday'}
                                 name={'birthday'}

                />


                <ButtonSubmit labelText={'Submit'} />



            </FormStateProvider>
        </>
    )


}



export function startRegisterApp(rootElement, portletModel) {

    ReactDOM.render(
        <RegisterApp {...portletModel} />
        ,
        rootElement)
}

global.startRegisterApp = startRegisterApp;

