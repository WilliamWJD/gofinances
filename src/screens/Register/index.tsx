import React, { useState } from 'react';

import { Container, Header, Title, Form, Fields, TransactionsTypes } from './styles';

import { Input } from '../../components/forms/Input';
import { Button } from '../../components/forms/Button';
import { TransactionTypeButton } from '../../components/forms/TransactionTypeButton';
import { CategorySelect } from '../../components/forms/CategorySelect';

export function Register() {
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
    }

    return (
        <Container>

            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />

                    <TransactionsTypes>
                        <TransactionTypeButton
                            title="Income"
                            type="up"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            title="Outcome"
                            type="down"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionsTypes>

                    <CategorySelect
                        title="Categoria"
                    />
                </Fields>

                <Button title="Enviar" />
            </Form>
        </Container>
    )
}