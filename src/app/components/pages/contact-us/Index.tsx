import React from 'react';
import Hero from './Hero';
import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material';
import MailIcon from '@/app/images/contact-us/contact.svg';
import MapIcon from '@/app/images/contact-us/map.svg';
import PhoneIcon from '@/app/images/contact-us/phone.svg';

function ContactUs() {
    return (
        <Box sx={{ backgroundColor: '#E7FDDA', minHeight: '100vh' }}>
            <Hero />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '80px 120px', gap: '100px' }}>
                <Box>
                    <Box>
                        <Typography variant="h2">Let&apos;s talk with us</Typography>
                        <Typography sx={{ marginTop: '22px', maxWidth: '500px' }}>
                            Join AthaYog&apos;s exclusive contact sessions tailored, one-on-one guidance to deepen your
                            practice and achieve personalised yoga goals. Connect with our experts today!
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '40px', flexDirection: 'column', marginTop: '50px' }}>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            <MapIcon style={{ marginRight: '10px' }} />
                            No.3293, 1st floor, 12th main, HAL 2nd stage, Indiranagar, Bengaluru, Karnataka - 560038
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon style={{ marginRight: '10px' }} />
                            +91 8690333111
                        </Typography>
                        <Typography sx={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                            <a
                                href="tel:+91 8690333111"
                                style={{ color: 'black', display: 'flex', alignItems: 'center' }}
                            >
                                <MailIcon style={{ marginRight: '10px' }} />
                                info@athayogliving.com
                            </a>
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box
                        sx={{
                            backgroundColor: '#F8FFF4',
                            padding: '30px 22px',
                            width: '510px',
                            border: ' 1px solid rgba(189, 189, 189, 0.30)',
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <TextField
                            name="name"
                            sx={{
                                width: '100%',
                                borderRadius: '10px',
                                input: {
                                    fontSize: '16px',
                                },
                                '& .MuiInputBase-root': {
                                    borderRadius: '10px',
                                },
                            }}
                        />
                        <TextField
                            name="email"
                            sx={{
                                width: '100%',
                                '& .MuiInputBase-root': {
                                    borderRadius: '10px',
                                },
                            }}
                        />
                        <TextField
                            name="phone"
                            sx={{
                                width: '100%',

                                input: {
                                    fontSize: '16px',
                                },
                                '& .MuiInputBase-root': {
                                    borderRadius: '10px',
                                },
                            }}
                        />
                        <TextareaAutosize
                            name="message"
                            style={{
                                border: '1px solid #CDCDCD',
                                width: '100%',

                                borderRadius: '10px',
                            }}
                            minRows={3}
                        />
                        <Button
                            sx={{
                                backgroundColor: '#417A07',
                                color: '#fff',
                                border: '1px solid #417A07',
                                width: '100%',
                                fontSize: '18px',
                                borderRadius: '16px',
                                height: '54px',
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactUs;
