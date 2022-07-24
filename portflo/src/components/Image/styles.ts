import styled, { css } from 'styled-components';

interface Props {
    round?: boolean;
    width?: string;
    height?: string;
}

export const StyledImage = styled.img`
    width: ${(props: Props) => props.width || 'auto'};
    height: ${(props: Props) => props.height || 'auto'};
    

    ${(props: Props) => props.round && css`
        border-radius: 50%;
    `}
`;

export const Loading = styled.div`
	background: linear-gradient(-45deg, #EBEBEB, #CCCCCC, #EBEBEB, #CCCCCC);
	background-size: 200% 200%;
	animation: gradient .5s linear infinite;
	width: ${(props: Props) => props.width};
    height: ${(props: Props) => props.height};

    ${(props: Props) => props.round && css`
        border-radius: 50%;
    `}

    @keyframes gradient {
        0% {
            background-position: 100% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }

`;