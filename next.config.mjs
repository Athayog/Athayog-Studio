/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.youtube.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
