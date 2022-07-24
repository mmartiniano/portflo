import React, { ImgHTMLAttributes } from 'react';
import getContent from '../../utils/getContent';
import useImage from '../../utils/useImage';

import { Loading, StyledImage } from './styles';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    round?: boolean;
    width?: string;
    height?: string;
    loader?: boolean;
}

const Image: React.FC<Props> = ({ src, loader = true, ...rest }) => {
    const [image, loading,] = useImage(src || '');

    return (
        <>
            {loading && loader && (
                <Loading {...rest} />
            )}
            {!loading && (
                <StyledImage src={image} {...rest} />
            )}
        </>
    )
};

export default Image;