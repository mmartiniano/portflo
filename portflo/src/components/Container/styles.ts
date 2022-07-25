import styled from 'styled-components';

export const StyledContainer = styled.div`
    min-width: 100%;
    padding: 0 10rem;
    background-color: ${props => props.theme.color.primary};

    @media only screen and (max-width: 767px) {
        & {
            padding: 0 2.5rem;
        }
    }
}
`;