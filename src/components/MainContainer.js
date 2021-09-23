import React from 'react';

export const MainContainer =({ children, ...props });=> {
    return (
        <Container container='main' maxWidth='xs'>
            {children}
        </Container>
    )
}