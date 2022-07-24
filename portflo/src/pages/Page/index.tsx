import React, { useState, ChangeEvent, useContext } from 'react';
import { Context, ActionType } from '../../context';
import { Content } from './styles';
import Input from '../../components/Input';


const Page: React.FC = () => {
    const context = useContext(Context);

    const [msg, setMsg] = useState<string>();
    const [link, setLink] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
    }

    const displayLoader = (visible: boolean) => {
        context?.dispatch({
            type: ActionType.SET_LOADING,
            payload: {
                ...context.state,
                loading: visible
            }
        })
    }

    return (
        <Content>

        </Content>
    )
}

export default Page;