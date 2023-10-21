export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  api: string;
  project: 'frontent' | 'storybook' | 'jest';
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  baseURL: string;
}
