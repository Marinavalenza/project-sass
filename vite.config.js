import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "src/scss/variables/_color.scss";
      @import "src/scss/variables/_margin.scss";
      @import "src/scss/variables/_marginCard.scss";
      @import "src/scss/variables/_padding.scss";
      @import "src/scss/helpers/mixins.scss";
      @import "src/scss/helpers/devices.scss";
      `,
      },
    },
  },
});
