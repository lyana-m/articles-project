import { Project } from 'ts-morph';

const isAbsolutePath = (path: string): boolean => {
  const absSrc = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];

  return absSrc.some((src) => path.startsWith(src));
};

const project = new Project();

project.addSourceFilesAtPaths(['src/**/*.tsx', 'src/**/*.ts']);

const files = project.getSourceFiles();

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();

  importDeclarations.forEach((importDec) => {
    const src = importDec.getModuleSpecifierValue();
    if (isAbsolutePath(src)) {
      importDec.setModuleSpecifier(`@/${src}`);
    }
  });
});

project.save();
