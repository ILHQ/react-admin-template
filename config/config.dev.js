import { defineConfig } from 'umi';

const BASE_URL = '/';

export default defineConfig({
  base: BASE_URL,
  publicPath: BASE_URL,
  define: {
    'process.env.UMI_ENV': process.env.UMI_ENV,
    'process.env.BASE_URL': BASE_URL,
  },
});
