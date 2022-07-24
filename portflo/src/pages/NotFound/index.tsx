import React from 'react';
import { useNavigate } from 'react-router-dom';


import { Content, ErrorCode, ErrorMessage, RedirectMessage } from './styles';


const NotFound: React.FC = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 10000);

    return (
        <Content>
            <ErrorCode> 404 </ErrorCode>
            <ErrorMessage> The page you were looking for does not exist </ErrorMessage>
            <RedirectMessage>Autoredirecting you in a few moments...</RedirectMessage>
        </Content>
    )
}

export default NotFound;