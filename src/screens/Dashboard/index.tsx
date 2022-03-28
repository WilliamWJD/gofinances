import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    Username,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$ 5.250,00",
            category: {
                name: "Vendas",
                icon: "dollar-sign",
            },
            date: "13/07/2022"
        },
        {
            id: '2',
            type: 'negative',
            title: "Parcela da faculdade",
            amount: "R$250,00",
            category: {
                name: "Estudos",
                icon: "dollar-sign",
            },
            date: "13/07/2022"
        },
        {
            id: '3',
            type: 'positive',
            title: "Salário",
            amount: "R$ 1.400,00",
            category: {
                name: "Salário",
                icon: "dollar-sign",
            },
            date: "13/07/2022"
        }
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/31516475?v=4' }} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <Username>William</Username>
                        </User>
                    </UserInfo>

                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    type="up"
                    title="Entrada"
                    amount="R$ 17.500,00"
                    lastTransaction="Última entrada dia 28 de março"
                />
                <HighlightCard
                    type="down"
                    title="Saída"
                    amount="R$ 950,00"
                    lastTransaction="Última saída dia 28 de março"
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.550,00"
                    lastTransaction="Última saída dia 28 de março"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container >
    )
}