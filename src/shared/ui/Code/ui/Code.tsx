import React, { useCallback } from 'react';
import cn from 'classnames';
import cls from './Code.module.scss';
import { Button } from 'shared/ui/Button';
import CopyIcon from '../../../assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}

const Code = (props: CodeProps) => {
  const { text, className } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(cls.code, className)}>
      <Button className={cls.copyBtn} onClick={onCopy}>
        <CopyIcon />
      </Button>
      <code>{text}</code>
    </pre>
  );
};

export default Code;
