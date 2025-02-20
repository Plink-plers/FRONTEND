import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    // emotion 지원 활성화
    emotion: true,
  },
  webpack:(config, {isServer})=>{
    if(!isServer){
      config.resolve.fallback={
        canvas:false, // 브라우저 환경에서 canvas 비활성화
      };
    }

    // svg에 css 적용하기 위한 설정
    config.module.rules.push({
      test:/\.svg$/,
      use:["@svg/webpack"],
    })

    // PDF worker 설정 추가
    config.module.rules.push({
      test:/pdf\.worker\.js$/,
      use:{
        loader:'file-loader',
        options:{
          name:'[name].ext',
          outputPath:'static/js/',
          publickPath:'/_next/static/js/',
        },
      },
    });
    
    return config;
  }
};

export default nextConfig;
