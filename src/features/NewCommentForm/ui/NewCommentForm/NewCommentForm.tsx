import React, { useCallback } from 'react';
import cn from 'classnames';
import cls from './NewCommentForm.module.scss';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { newCommentFormActions, newCommentFormReducer } from '../../model/slice/newCommentFormSlice';
import { getNewCommentFormText } from '../../model/selectors/newCommentFormSelectors';

export interface NewCommentFormProps {
  className?: string;
  onSendNewComment: (text: string) => void;
}

const reducers: AsyncReduser[] = [{ reducerKey: 'newCommentForm', reducer: newCommentFormReducer }];

const NewCommentForm = (props: NewCommentFormProps) => {
  const { className, onSendNewComment } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const text = useAppSelector(getNewCommentFormText);

  const handleTextChange = useCallback(
    (text: string) => {
      dispatch(newCommentFormActions.setComment(text));
    },
    [dispatch]
  );

  const handleNewCommentSend = useCallback(() => {
    onSendNewComment(text);
    handleTextChange('');
  }, [onSendNewComment, handleTextChange, text]);

  useAsyncReducers(reducers);

  return (
    <div className={cn(cls.newCommentForm, className)}>
      <Input value={text} onChange={handleTextChange} className={cls.input} label="Введите комментарий" />
      <Button className={cls.sendButton} theme="outline" onClick={handleNewCommentSend}>
        {t('Отправить')}
      </Button>
    </div>
  );
};

export default NewCommentForm;
