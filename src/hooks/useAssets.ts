import { StaticImageData } from 'next/image';
import batteries from '../assets/batteries.png';
import egg from '../assets/egg.png';
import snowflake from '../assets/snowflake.png';

interface Assets {
    imageSrc: StaticImageData;
    alt: string;
}

const useAssets = (): Assets[] => {
    return [
        {
            imageSrc: egg,
            alt: 'Icon made by berkahicon from www.flaticon.com',
        },
        {
            imageSrc: batteries,
            alt: 'Icon made by Freepik from www.flaticon.com',
        },
        {
            imageSrc: snowflake,
            alt: 'Icon made by Freepik from www.flaticon.com',
        }
    ];
};

export default useAssets