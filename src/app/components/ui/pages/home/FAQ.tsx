import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import RegisterButton from '../../common/elements/button/RegisterButton';
import theme from '@/app/components/ui/theme';

// Sample FAQ data
const FAQS = [
    {
        question: 'Which class should I start with?',
        answer: 'If you have never practiced Yoga before, we have beginners’ classes throughout the week. It is advisable to start with those and move on to the all-levels classes after a few weeks of practice. If you have already been introduced to Yoga, you can continue with the all-levels class.',
    },
    {
        question: 'How many times a week would you recommend?',
        answer: 'Ideally 5 or 7 times a week (that is how we have designed our packages). The most important aspect is to be regular and consistent in your practice.',
    },
    {
        question: 'Do you teach pranayama in the class?',
        answer: 'All teachers insist on the importance of breath and include pranayama in their classes. Our Deep Space class focuses on pranayama and meditation to emphasize on breathwork.',
    },
    {
        question: 'I am not flexible, can I practice Yoga?',
        answer: 'Everybody can. With a consistent practice, you will become more flexible. Patience is key. Remember not to compete with others on the mat. Yoga is not a competition. Enjoy and relax! You will see the progress.',
    },
    {
        question: 'Will I lose weight with Yoga? ',
        answer: 'Yoga is definitely going to help you as it will tone your muscles, help you reduce fat, lengthen the spine, change how your body looks, detoxify your digestive system and rebalance your hormones. Those results will be seen within a few weeks of regular practice. If your main goal is to lose weight, you should add a cardio workout in your weekly program and check your diet to make sure you have a healthy lifestyle.',
    },
    {
        question: 'What should I wear while practicing Yoga?',
        answer: 'You have to wear modest clothing, no shorts or sleeveless allowed. Please wear clothes which are stretchable, comfortable and breathable.',
    },
    {
        question: 'Are there any side-effects of doing Yoga?',
        answer: 'When done under proper supervision of a trained Yoga teacher, there are no side effects. If at all, the effects are only positive.',
    },
    {
        question: 'What is the minimum age to start Yoga?',
        answer: 'For our general courses the minimum age is 14 years. However, we do have a special class for the young ones called Little Star, open for age groups between 6 – 13 years.',
    },
    {
        question: 'Should I carry my Yoga Mat?',
        answer: 'Yes, for hygiene purposes we suggest that everyone must use their own personal mats. You will be eligible to get a new mat as part of the registration for certain courses.',
    },
    {
        question: 'Is Yoga good for health?',
        answer: 'Yes, Yoga helps improve many health-related ailments. We also offer Personal sessions for special requirements.',
    },
    {
        question: 'Do you offer Yoga for pregnancy and post pregnancy?',
        answer: 'Yes, we have specialized classes for pregnant and post-natal needs. Yoga helps alleviate the effect of common symptoms such as morning sickness, painful leg cramps, swollen ankles, and constipation. Yoga asanas also help pregnant women recover faster post-delivery, helping you enjoy your motherhood.',
    },
    {
        question: 'When can I eat - before or after my practice?',
        answer: 'Make sure your stomach is empty for practice. Your last meal should be 2 hours before practice. Regarding diet, please consult our team. We will guide you depending on your Doshas and individual body constitution.',
    },
];

const FAQ: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const handleExpandClick = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <SectionPadding>
            <SectionContent>
                <Box
                    sx={{
                        maxWidth: '942px',
                        margin: '100px auto 0 auto',
                        [theme.breakpoints.down('md')]: {
                            margin: '10px auto 0 auto',
                        },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            marginBottom: '70px',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '25px',
                                marginBottom: '10px',
                            },
                        }}
                    >
                        FAQ
                    </Typography>
                    {FAQS.map((faq, index) => (
                        <Box
                            key={index}
                            sx={{
                                marginBottom: '20px',
                                borderRadius: expanded === index ? '30px' : '186.388px',
                                background: 'linear-gradient(90deg, #E4F6CF 0%, #CCE4AF 84%)',
                                padding: '25px 34px',
                                transition: 'min-height 0.3s',
                                minHeight: expanded === index ? '200px' : '100px', // Ensure a consistent height when collapsed/expanded
                                position: 'relative',
                                width: '942px', // Fixed width to prevent layout shift
                                [theme.breakpoints.down('md')]: {
                                    width: '100%', // Fixed width to prevent layout shift
                                    padding: '10px 30px',
                                    minHeight: expanded === index ? '100px' : '50px', // Ensure a consistent height when collapsed/expanded
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleExpandClick(index)}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#202020',
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '15px',
                                        },
                                    }}
                                >
                                    {faq.question}
                                </Typography>
                                <IconButton
                                    sx={{
                                        width: '58px',
                                        height: '58px',
                                        backgroundColor: '#fff',
                                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'transform 0.3s',
                                        transform: expanded === index ? 'rotate(0deg)' : 'rotate(-90deg)',
                                        [theme.breakpoints.down('md')]: {
                                            width: '34px',
                                            height: '34px',
                                        },
                                    }}
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Box>
                            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                                <Typography
                                    sx={{
                                        marginTop: '20px',
                                        color: '#202020',
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '15px',
                                        },
                                    }}
                                >
                                    {faq.answer}
                                </Typography>
                            </Collapse>
                        </Box>
                    ))}

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '100px',
                            [theme.breakpoints.down('md')]: {
                                marginTop: '13px',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: '#0A142F',
                                fontSize: '30px',
                                fontWeight: '600',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '18px',
                                },
                            }}
                        >
                            Stay Inspired: Yoga Tips, Wellness Insights and Special Offers Delivered to Your Inbox.
                        </Typography>
                        <RegisterButton
                            sx={{
                                marginTop: '30px',
                                width: 'max-content',
                                [theme.breakpoints.down('md')]: {
                                    margin: '17px auto 0 auto',
                                    fontSize: '18px',
                                    height: '50px',
                                    width: '300px',
                                },
                            }}
                        >
                            Begin Your Mindful Journey
                        </RegisterButton>
                    </Box>
                </Box>
            </SectionContent>
        </SectionPadding>
    );
};

export default FAQ;
