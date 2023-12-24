import React, { useState } from 'react';
import cn from 'classnames';
import StarIcon from '@/shared/assets/icons/star.svg';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  defaultRaiting?: number;
  size?: number;
  onSelect?: (starCount: number) => void;
  className?: string;
}

const stars = [1, 2, 3, 4, 5];

const StarRating = (props: StarRatingProps) => {
  const { size = 24, defaultRaiting = 0, className, onSelect } = props;

  const [currentCount, setCurrentCount] = useState(defaultRaiting);
  const [isSelected, setIsSelected] = useState(Boolean(defaultRaiting));

  const handleMouseEnter = (starCount: number) => {
    if (!isSelected) {
      setCurrentCount(starCount);
    }
  };

  const handleMouseLeave = () => {
    if (!isSelected) {
      setCurrentCount(0);
    }
  };

  const handleSelect = (starCount: number) => {
    if (!isSelected) {
      onSelect?.(starCount);
      setCurrentCount(starCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={cn(cls.starRating, className)}>
      {stars.map((star) => (
        <StarIcon
          key={star}
          className={cn(cls.star, { [cls.active]: star <= currentCount, [cls.selected]: isSelected })}
          width={size}
          height={size}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleSelect(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
