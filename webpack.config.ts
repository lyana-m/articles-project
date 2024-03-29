import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildPaths, type BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
  };
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  const api = env.baseURL || 'http://localhost:8000';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    api,
    project: 'frontent',
  });

  return config;
};
