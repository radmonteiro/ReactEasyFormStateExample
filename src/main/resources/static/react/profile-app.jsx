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
                    <div>Nname: {user.name}</div>
                </Col>
                <Col>
                    <div>email: {user.email}</div>
                </Col>
                <Col>
                    <div>registrationDate: {user.registrationDate}</div>
                </Col>
            </Row>


            <Row>
                <Col>
                    <button onClick={() => window.location.href='/register'} >
                        Register
                    </button>
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

