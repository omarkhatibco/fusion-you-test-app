import { defineConfig } from '@pandacss/dev';
import {
  sharedFusionConfig,
  FUSION_BUILD_INFO,
} from '@tourlane/fusion-you/theme';

export default defineConfig({
  include: [
    FUSION_BUILD_INFO,
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],

  exclude: [],

  ...sharedFusionConfig,

  theme: {
    extend: {},
  },
});