import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import theme from '@/app/styles/theme';
import NextTopLoader from 'nextjs-toploader';
import { repositoryName } from '@/prismicio';
import { ThemeProvider } from '@mui/material';
import { Josefin_Sans } from 'next/font/google';
import { PrismicPreview } from '@prismicio/next';
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
                        <div id="scroll-target" />
                        <Navbar />
                        {children}
                        <PrismicPreview repositoryName={repositoryName} />
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
