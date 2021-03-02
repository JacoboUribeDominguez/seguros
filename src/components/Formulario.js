import React, { useState, useEffect } from 'react';

import { Form, Row, Col, Button } from 'react-bootstrap';

import styled from '@emotion/styled';
import { css } from '@emotion/css'

import Resultado from './Resultado'

const Container = styled.div`
    background:#2C2C2C;   
    padding:50px;
    border-radius:10px;
`

const FormContainer = styled.div`
    padding: 0 15rem;
`;

const labelForm = css`color:white`;

const Formulario = () => {

    const [years, setYears] = useState([]);
    const [form, setForm] = useState({
        marca : 'Americano',
        year : '2014',
        plan : 'basico'
    });

    const [activo, setActivo] = useState(false);

    useEffect(() => {
        opcionesYear()
    }, [])

    const opcionesYear = () => {
        let opciones = [];
        for(let i = 2014; i < 2023; i++){
            opciones.push(i);
        }
        setYears(opciones)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        setActivo(false)
    }

    const { marca, year, plan } = form

    const toggleSubmit = e => {
        e.preventDefault();
        setActivo(true);
    } 

    return ( 
        <div className="container pt-5">
            <Container>
                <h2 
                    className={css`
                        text-align:center;
                        color: white;
                        margin-bottom:1.5rem;
                    `}
                >
                    Seguros
                </h2>
                <FormContainer>
                    <Form onSubmit={toggleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className={labelForm}>Marca</Form.Label>
                            <Form.Control 
                                as="select"
                                name="marca"
                                value={marca}
                                onChange={handleChange}>
                                <option>Americano</option>
                                <option>Europeo</option>
                                <option>Asiatico</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGridState">
                            <Form.Label className={labelForm}>Año</Form.Label>
                            <Form.Control 
                                as="select"
                                name="year"
                                value={year}
                                onChange={handleChange}>
                                {
                                    years.map((year, index) => (
                                        <option key={index}>{year}</option>
                                    ))
                                }
                            </Form.Control>
                        </Form.Group>
                        <fieldset
                            name="plan"
                            value={plan}
                            onChange={handleChange}>
                            <Form.Group as={Row}>
                                <Form.Label 
                                    as="legend" 
                                    column sm={2}
                                    className={labelForm}
                                >
                                    Plan
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    className={labelForm}
                                    label="Básico"
                                    name="plan"
                                    value="basico"
                                    defaultChecked={plan === "basico"}
                                    id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    className={labelForm}
                                    label="Completo"
                                    name="plan"
                                    value="completo"
                                    defaultChecked={plan === "completo"}
                                    id="formHorizontalRadios2"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Button 
                            type="submit" 
                            variant="outline-success"
                            className={css`
                                    width:100%
                            `}
                        >
                                Calcular
                        </Button>
                    </Form>
                    {activo ? <Resultado form={form}/> : null}
                </FormContainer>
            </Container>
        </div>
     );
}
 
export default Formulario;