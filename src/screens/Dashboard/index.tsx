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
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container >
    )
}