import { styled } from '@mui/material/styles';
import { Swiper } from 'swiper/react';

// Styled Swiper component
export const AthayogSwiper = styled(Swiper)(({ theme }) => ({
    '.swiper-pagination-bullet': {
        background: 'transparent',
        width: '16px', // Dot size
        height: '16px', // Dot size
        border: '1.546px solid #42740E',
        opacity: '1',
    },
    '.swiper-pagination-bullet-active': {
        height: '85px', // Dot size
        borderRadius: '51px',
        border: '1.546px solid #42740E',

        background: '#42740E',
    },
    '.swiper-pagination': {
        bottom: '10px', // Position from the bottom
        textAlign: 'center', // Center the pagination
    },

    '.swiper-button-next, .swiper-button-prev': {
        color: '#46892D', // Custom button color
        height: '68px',
        width: '68px',
    },
}));
