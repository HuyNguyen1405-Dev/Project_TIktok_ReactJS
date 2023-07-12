import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(
	(
		{
			src,
			alt,
			className,
			fallback: customFallback = images.no_image,
			...props
		},
		ref,
	) => {
		const [fallback, setFallback] = useState('');

		const handleError = () => {
			setFallback(customFallback);
		};
		return (
			<img
				className={classNames(styles.wrapper, className)}
				src={fallback || src}
				alt={alt}
				ref={ref}
				{...props}
				onError={handleError}
			/>
		);
	},
);

export default Image;
