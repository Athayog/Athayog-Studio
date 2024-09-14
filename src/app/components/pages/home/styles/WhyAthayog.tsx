import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Swiper component
export const AthayogSwiper = styled(Box)(({ theme }) => ({
    '.swiper-why': {
        '.swiper-pagination-bullet': {
            background: 'transparent',
            width: '16px',
            height: '16px',
            border: '1.546px solid #42740E',
            opacity: '1',
        },
        '.swiper-pagination-bullet-active': {
            height: '85px',
            borderRadius: '51px',
            border: '1.546px solid #42740E',

            background: '#42740E',
        },
        '.swiper-pagination': {
            bottom: '10px',
            textAlign: 'center',
        },

        '.swiper-button-next, .swiper-button-prev': {
            color: '#46892D',
            height: '68px',
            width: '68px',
        },
    },
}));
