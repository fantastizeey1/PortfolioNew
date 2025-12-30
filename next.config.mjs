import {withSentryConfig} from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three-globe', 'three'],
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'three/webgpu': 'three/build/three.webgpu.js',
            'three/examples/jsm/nodes/Nodes.js': 'three/examples/jsm/nodes/Nodes.js',
        };
        
        config.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx'],
        };

        return config;
    },
};

export default withSentryConfig(nextConfig, {
    org: "fantastizeey",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});