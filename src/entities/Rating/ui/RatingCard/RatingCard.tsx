import React, { useState } from 'react';
import { StarRating } from '@/shared/ui/StarRating';
import cls from './RatingCard.module.scss';
import Card from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface RatingCardProps {
  title: string;
  hasFeedback?: boolean;
  feedbackTitle?: string;
  className?: string;
  rate?: number;
  onSubmit?: (starCount: number, feedback?: string) => void;
  onCancel?: (starCount: number) => void;
}

const RatingCard = (props: RatingCardProps) => {
  const { title, hasFeedback = false, feedbackTitle, rate = 0, className, onSubmit, onCancel } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starCount, setStarCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const { t } = useTranslation();

  const handleRate = (starCount: number) => {
    setStarCount(starCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onSubmit?.(starCount);
    }
  };

  const handleFeedback = (feedback: string) => {
    setFeedback(feedback);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    onSubmit?.(starCount, feedback);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onCancel?.(starCount);
  };

  return (
    <Card className={className}>
      <VStack gap="12">
        <Text title={title} />
        <StarRating defaultRaiting={starCount} onSelect={handleRate} />
      </VStack>
      <Modal isOpen={isModalOpen}>
        <VStack gap="32">
          <VStack gap="16" alignItems="flex-start">
            <Text title={feedbackTitle} />
            <Input placeholder="Введите отзыв" className={cls.input} onChange={handleFeedback} value={feedback} />
          </VStack>
          <HStack gap="16" justifyContent="flex-end">
            <Button theme="outline_red" onClick={handleCancel}>
              {t('Отменить')}
            </Button>
            <Button theme="backgroundInverted" onClick={handleSubmit}>
              {t('Отправить')}
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </Card>
  );
};

export default RatingCard;
