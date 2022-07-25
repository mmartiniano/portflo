import React, { ImgHTMLAttributes } from 'react';
import useImage from '../../utils/useImage';

import { Wrapper, Loading, StyledImage } from './styles';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    round?: boolean;
    width?: string;
    height?: string;
    loader?: boolean;
    hover?: boolean;
}

const Image: React.FC<Props> = ({ src, loader = true, ...rest }) => {
    const [image, loading,] = useImage(src || '');

    return (
        <Wrapper>
            {loading && loader && (
                <Loading {...rest} />
            )}
            {!loading && (
                <StyledImage src={image} {...rest} />
            )}
        </Wrapper>
    )
};

export default Image;