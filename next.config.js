// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    reactStrictMode : true,
//    swcMinify : true,
//    output : 'export',
//    images : {
//     optimize:true
//    }
// }

// module.exports = nextConfig

module.exports = {
  
    basePath: '', // This should be an empty string for Firebase deployment.
    assetPrefix: '', // Leave this as an empty string for Firebase.
  
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    images: {
      unoptimized: true, // Enable image optimization
    },
    env: {
      API_ENDPOINT_NOTES: process.env.API_ENDPOINT_NOTES,
      API_ENDPOINT_SCHOOLNOTES: process.env.API_ENDPOINT_SCHOOLNOTES,
      API_ENDPOINT_SMARTSTUDENT: process.env.API_ENDPOINT_SMARTSTUDENT,
    },
  };
  
