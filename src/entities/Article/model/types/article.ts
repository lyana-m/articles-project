export type ArticleItemType = 'IT' | 'SCIENCE' | 'ECONOMICS';
export type ArticleItemBlockType = 'TEXT' | 'CODE' | 'IMAGE';

export interface ArticleItemBlockBase {
  id: string;
  type: ArticleItemBlockType;
}

export interface ArticleItemTextBlock extends ArticleItemBlockBase {
  type: 'TEXT';
  title?: string;
  paragraphs: string[];
}

export interface ArticleItemCodeBlock extends ArticleItemBlockBase {
  type: 'CODE';
  code: string;
}

export interface ArticleItemImageBlock extends ArticleItemBlockBase {
  type: 'IMAGE';
  src: string;
  title?: string;
}

export type ArticleItemBlock = ArticleItemImageBlock | ArticleItemTextBlock | ArticleItemCodeBlock;

export interface ArticleItem {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleItemType[];
  blocks: ArticleItemBlock[];
}