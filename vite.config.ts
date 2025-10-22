import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin para remover next/image e substituir por img
function replaceNextImagePlugin(): Plugin {
  return {
    name: 'replace-next-image',
    enforce: 'pre' as const, // <-- TIPAGEM CORRETA
    transform(code: string, id: string) {
      if (!id.endsWith('.tsx') && !id.endsWith('.jsx')) return;

      // Remove importação de next/image
      let transformed = code.replace(/import\s+Image\s+from\s+['"]next\/image['"];?/g, '');

      // Substitui <Image ... /> por <img ... />
      transformed = transformed.replace(/<Image\s/g, '<img ').replace(/<\/Image>/g, '</img>');

      return {
        code: transformed,
        map: null,
      };
    }
  };
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
    replaceNextImagePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-estatica",
  },
}));
