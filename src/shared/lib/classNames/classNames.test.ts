import { classNames } from './classNames';

describe('classNames', () => {
  it('should work with the only one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  it('should work with additional params', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });

  it('should work with mods', () => {
    expect(classNames('someClass', { hovered: true, red: true })).toBe('someClass hovered red');
  });

  it('should work with mods', () => {
    expect(classNames('someClass', { hovered: true, red: false })).toBe('someClass hovered');
  });

  it('should work with mods', () => {
    expect(classNames('someClass', { hovered: true, red: undefined })).toBe('someClass hovered');
  });
});
