import styled from 'styled-components';

export const Container = styled.footer`
    position: sticky;
    top: 0;
    z-index: 1;
    height: 14rem;
    width: 100%;
    padding: 0 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.color.primary};

    @media only screen and (max-width: 767px) {
        & {
            padding: 0 2.5rem;
        }
    }
}
`;

export const Name = styled.p`
    font-size: .9rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    font-size: .7rem;
    font-weight: bold;
`;

export const SocialMedias = styled.div`
    display: flex;
    flex-grow: .1;
    margin-top: 1rem;
    justify-content: space-evenly;
`;