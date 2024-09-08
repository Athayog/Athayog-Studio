// src/types/navItems.ts

// Define the type for a navigation item
export interface NavItem {
    label: string;
    path?: string;
    type: 'nav' | 'menu';
    children?: NavItem[];
}

// Example of navItems with the defined type
export const navItems: NavItem[] = [
    { label: 'Home', path: '/', type: 'nav' },
    { label: 'Who We Are', path: '/who-we-are', type: 'nav' },
    {
        label: 'What We Offer',
        type: 'menu',
        children: [
            { label: 'Group Class', path: '/group-class', type: 'nav' },
            {
                label: 'Personal Training',
                path: '/personal-training',
                type: 'nav',
            },
            { label: 'Workshop', path: '/workshop', type: 'nav' },
            {
                label: 'Yoga Academy',
                type: 'menu',
                children: [
                    { label: 'Residential', path: '/residential', type: 'nav' },
                    {
                        label: 'Non Residential',
                        path: '/non-residential',
                        type: 'nav',
                    },
                    { label: 'TTC Online', path: '/ttc-online', type: 'nav' },
                ],
            },
        ],
    },
    { label: 'Others', path: '/others', type: 'nav' },
    { label: 'Contact Us', path: '/contact', type: 'nav' },
];
