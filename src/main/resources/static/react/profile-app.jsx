import React from 'react';
import ReactDOM from 'react-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function ProfileApp({user}){


    return (
        <>
            <Row>
                <Col>
                    <div>Profile</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Nname: {name}</div>
                </Col>
                <Col>
                    <div>email: {email}</div>
                </Col>
                <Col>
                    <div>registrationDate: {registrationDate}</div>
                </Col>
            </Row>

        </>
    )
}



export function startProfileApp(rootElement, portletModel) {

    ReactDOM.render(
        <ProfileApp  {...portletModel} />
        ,
        rootElement)
}

global.startProfileApp = startProfileApp;

