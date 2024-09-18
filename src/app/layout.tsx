import '@/app/globals.css';
import type { Metadata } from 'next';
import theme from '@/app/components/ui/theme';
import { ThemeProvider } from '@mui/material';
import NextTopLoader from 'nextjs-toploader';
import { Josefin_Sans } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '@/app/components/ui/common/Navigation/Index';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Athayog',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" href="./favicon.ico" />
            </head>
            <body className={`${josefin.className}`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <NextTopLoader />
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
