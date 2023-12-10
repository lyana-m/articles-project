import React from 'react';
import cn from 'classnames';
import cls from './ArcticleViewSwitcher.module.scss';
import ListViewIcon from '@/shared/assets/icons/list-view.svg';
import TileViewIcon from '@/shared/assets/icons/tile-view.svg';
import { Button } from '@/shared/ui/Button';
import { ArticleListView } from '../../model/types/article';

interface ArcticleViewSwitcherProps {
  currentView: ArticleListView;
  onViewChange: (view: ArticleListView) => void;
  className?: string;
}

const views: Array<{ view: ArticleListView; Icon: any }> = [
  { view: 'list', Icon: ListViewIcon },
  { view: 'tile', Icon: TileViewIcon },
];

const ArcticleViewSwitcher = (props: ArcticleViewSwitcherProps) => {
  const { currentView, className, onViewChange } = props;

  const handleViewChange = (view: ArticleListView) => {
    return () => onViewChange(view);
  };

  return (
    <div className={className}>
      {views.map(({ view, Icon }) => {
        const buttonClasses = cn(cls.button, { [cls.active]: currentView === view });
        return (
          <Button key={view} className={buttonClasses} onClick={handleViewChange(view)}>
            <Icon />
          </Button>
        );
      })}
    </div>
  );
};

export default ArcticleViewSwitcher;
