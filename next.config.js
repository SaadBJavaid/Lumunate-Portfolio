/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'www.countryflags.com',
                pathname: '/wp-content/uploads/**',
            }
        ]
    }
};

module.exports = nextConfig;
