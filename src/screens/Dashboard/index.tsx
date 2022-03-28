import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { Container, Header, UserWrapper, UserInfo, Photo, User, UserGreeting, Username, Icon, HighlightCards } from './styles';

export function Dashboard() {
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
        </Container >
    )
}