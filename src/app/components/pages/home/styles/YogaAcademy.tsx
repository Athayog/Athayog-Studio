import { Box, styled } from '@mui/material';

export const AthayogSwiper = styled(Box)(() => ({
    '.swiper-yoga': {
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
            left: '0px',
            textAlign: 'center',
        },

        '.swiper-button-next, .swiper-button-prev': {
            color: '#46892D',
            height: '68px',
            width: '68px',
        },
    },
}));
