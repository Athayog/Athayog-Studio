import * as Yup from 'yup';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import theme from '@/app/components/ui/theme';
import useFormStore from '@/store/useFormStore';
import MapIcon from '@/app/images/contact-us/map.svg';
import Hero from '@/app/components/pages/contact-us/Hero';
import PhoneIcon from '@/app/images/contact-us/phone.svg';
import MailIcon from '@/app/images/contact-us/contact.svg';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { Box, Button, TextareaAutosize, TextField, Typography, Snackbar, Alert } from '@mui/material';

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    message: Yup.string().required('Message is required'),
});

// Styled components
const ContactContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#E7FDDA',
    minHeight: '100vh',
}));

const ContactContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '80px 120px',
    gap: '100px',
    [theme.breakpoints.down('lg')]: {
        padding: '40px 30px',
        gap: '80px',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '40px',
    },
}));

const ContactDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '40px',
    flexDirection: 'column',
    marginTop: '50px',
    svg: {
        height: '30px',
        width: '30px',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '13px',
        marginTop: '30px',
        svg: {
            height: '20px',
            width: '20px',
        },
    },
}));

const ContactFormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#F8FFF4',
    padding: '30px 22px',
    width: '510px',
    border: '1px solid rgba(189, 189, 189, 0.30)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
        backgroundColor: 'transparent',
        border: 'none',
        padding: '0px',
        width: '100%',
    },
}));

const ContactTextField = styled(TextField)(({}) => ({
    '& .MuiInputBase-root': {
        borderRadius: '10px',
        background: '#F9F9F9',
    },
    '& .MuiInputBase-root:focus': {
        borderRadius: '10px',
        background: '#fff',
    },
    '& .MuiInputBase-input': {
        fontSize: '16px',
    },
    '& label': {
        fontSize: '16px',
    },
}));

const ContactTextarea = styled(TextareaAutosize)(({}) => ({
    border: '1px solid #CDCDCD',
    width: '100%',
    borderRadius: '10px',
    padding: '10px',
    fontSize: '16px',
    fontFamily: 'inherit',
    background: '#F9F9F9',
    '&:focus': {
        background: '#fff',
    },
}));

const SubmitButton = styled(Button)(({}) => ({
    backgroundColor: '#417A07',
    color: '#fff',
    border: '1px solid #417A07',
    width: '100%',
    fontSize: '18px',
    borderRadius: '16px',
    height: '54px',
    '&:disabled': {
        backgroundColor: '#cfcfcf',
    },
}));

const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: 16px;
`;

type FormData = {
    phone: string;
    name: string;
    email: string;
    message: string;
};

const ContactUs = () => {
    const [snackbar, setSnackbar] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const { submitForm, loading, error } = useFormStore();

    const handleSubmit = async (values: FormData, { resetForm }: FormikHelpers<FormData>) => {
        try {
            await submitForm(values, 'contactMessages', 'https://third-party-api.com/submit');
            setSnackbar({ type: 'success', message: 'Your message has been sent successfully!' });
            resetForm();
        } catch {
            // Handle case where submitForm was unsuccessful (e.g., error with Firebase)
            setSnackbar({ type: 'error', message: error || 'An unexpected error occurred. Please try again later.' });
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar(null);
    };

    return (
        <ContactContainer>
            <Hero />
            <ContactContent>
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                fontSize: '28px',
                            },
                        }}
                    >
                        Let&apos;s talk with us
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: '22px',
                            maxWidth: '500px',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '16px',
                            },
                        }}
                    >
                        Join AthaYog&apos;s exclusive contact sessions tailored, one-on-one guidance to deepen your
                        practice and achieve personalised yoga goals. Connect with our experts today!
                    </Typography>
                    <ContactDetails>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '16px',
                                },
                            }}
                        >
                            <MapIcon
                                style={{
                                    marginRight: '10px',
                                }}
                            />
                            No.3293, 1st floor, 12th main, HAL 2nd stage, Indiranagar, Bengaluru, Karnataka - 560038
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '16px',
                                },
                            }}
                        >
                            <PhoneIcon style={{ marginRight: '10px' }} />
                            +91 8690333111
                        </Typography>
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                color: 'black',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '16px',
                                },
                            }}
                        >
                            <a
                                href="tel:+91 8690333111"
                                style={{ color: 'black', display: 'flex', alignItems: 'center' }}
                            >
                                <MailIcon style={{ marginRight: '10px' }} />
                                info@athayogliving.com
                            </a>
                        </Typography>
                    </ContactDetails>
                </Box>
                <Snackbar
                    open={!!snackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbar?.type} sx={{ width: '100%' }}>
                        {snackbar?.message}
                    </Alert>
                </Snackbar>
                <Box>
                    <Formik
                        initialValues={{ name: '', email: '', phone: '', message: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <ContactFormContainer>
                                    {/* Name Field */}
                                    <Field as={ContactTextField} name="name" label="Name" fullWidth />
                                    <StyledErrorMessage name="name" component="div" />

                                    {/* Email Field */}
                                    <Field as={ContactTextField} name="email" label="Email" fullWidth />
                                    <StyledErrorMessage name="email" component="div" />

                                    {/* Phone Field */}
                                    <Field as={ContactTextField} name="phone" label="Phone number" fullWidth />
                                    <StyledErrorMessage name="phone" component="div" />

                                    {/* Message Field */}
                                    <Field as={ContactTextarea} name="message" placeholder="Your message" minRows={3} />
                                    <StyledErrorMessage name="message" component="div" />

                                    {/* Submit Button */}
                                    <SubmitButton type="submit" disabled={isSubmitting}>
                                        {loading ? 'Submitting' : 'Submit'}
                                    </SubmitButton>
                                </ContactFormContainer>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </ContactContent>
        </ContactContainer>
    );
};

export default ContactUs;
