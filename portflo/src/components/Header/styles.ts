import styled from 'styled-components';

export const Container = styled.header`
    position: sticky;
    top: 0;
    z-index: 1;
    height: 7rem;
    width: 100%;
    padding: 0 10rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme.color.primary};

    @media only screen and (max-width: 767px) {
        & {
            padding: 0 2rem;
            justify-content: space-between;
        }
    }
}
`;

export const Person = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1rem;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    margin-left: 3rem;
    flex-grow: 4;

    @media only screen and (max-width: 767px) {
        & {
            justify-content: space-evenly;
        }
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: .1;

    a + a {
        margin-left: .5rem;
    }

    @media only screen and (max-width: 767px) {
        display: None;
    }
`;