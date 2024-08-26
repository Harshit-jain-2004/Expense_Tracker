import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styled/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';

function Income() {
    const {addIncome} = useGlobalContext()
    return (
        <IncomeStyled>
            <InnerLayout>
                <h2>Incomes</h2>
                <div className='income-content'>
                    <div className='form-container'></div>
                    <div className='incomes'>
                        <div className='form-container'>
                            <Form />
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
`;

export default Income
