import { defineConfig } from 'umi';
import routes from './routes/index';
const alias = require('../alias.config');
import theme from '../src/styles/var';
import pxtorem from 'postcss-px2rem';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  alias: alias.resolve.alias,
  routes,
  fastRefresh: {},
  theme,
  extraPostCSSPlugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // pxtorem({
    //   remUnit: process.env.BASE_SIZE, // 根据设计稿设置
    //   propBlackList: [
    //     'border',
    //     'border-top',
    //     'border-left',
    //     'border-right',
    //     'border-bottom',
    //     'border-radius',
    //   ], //这些属性不需要转换
    //   selectorBlackList: ['t_npx'], //以包含t_npx的class不需要转换
    // }),
  ],
  define: {
    'process.env.BASE_SIZE': process.env.BASE_SIZE,
    'process.env.BASE_IMG_URL': process.env.BASE_IMG_URL,
    'process.env.AMAP_KEY': process.env.AMAP_KEY,
  },
});
