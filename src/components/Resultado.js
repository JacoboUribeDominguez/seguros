import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/css';
import styled from '@emotion/styled';

import { Row, Col } from 'react-bootstrap';

import { calcularYear, calcularIncrementoMarca, calcularIncrementoPlan } from '../helpers/helper';

const Container = styled.div`
    width:100%;
    margin-top:2rem;
    max-height: 42vh;
`;

const Resultado = ({ form }) => {

    const { marca, year, plan } = form;

    const [costo, setCosto] = useState(0)

    useEffect(() => {
        let resultado = 2000;
        const diferenciaYear = calcularYear(year);
        resultado -= ((resultado * 0.03) * diferenciaYear);
        resultado *= calcularIncrementoMarca(marca);
        resultado = parseFloat( calcularIncrementoPlan(plan) * resultado).toFixed(2);
        setCosto(resultado);
    }, [marca, year, plan]);

    return ( 
        <Container>
            <div className={css`
                background-color:white;
                border-radius:5px;
            `}>
                <Row className={css`
                    padding: 1rem;
                `} >
                    <Col className="d-flex justify-content-center">
                        Marca:
                    </Col>
                    <Col className="d-flex justify-content-center">
                        {marca}
                    </Col>
                </Row>
                <Row className={css`
                    padding: 1rem;
                `} >
                    <Col className="d-flex justify-content-center">
                        Año:
                    </Col>
                    <Col className="d-flex justify-content-center">
                        {year}
                    </Col>
                </Row>
                <Row className={css`
                    padding: 1rem;
                `} >
                    <Col className="d-flex justify-content-center">
                        Plan:
                    </Col>
                    <Col className="d-flex justify-content-center">
                        {plan}
                    </Col>
                </Row>
                <Row className={css`
                    padding: 1rem;
                `} >
                    <Col className="d-flex justify-content-center" style={{color:'#C64A4A', fontWeight: 'bolder'}}>
                        Costo:
                    </Col>
                    <Col className="d-flex justify-content-center" style={{color:'#C64A4A', fontWeight: 'bolder'}}>
                        ${costo}
                    </Col>
                </Row>
            </div>
        </Container>
     );
}

Resultado.propTypes = {
    form : PropTypes.object.isRequired
}

export default Resultado;