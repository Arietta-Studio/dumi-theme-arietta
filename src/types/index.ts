import { type HTMLAttributes } from 'react';

export * from './config';
export * from './hero';

/**
 * @title AnchorItem
 */
export interface AnchorItem {
  /**
   * @title
   * @description
   */
  children?: AnchorItem[];
  /**
   * @title 
   */
  id: string;
  /**
   * @title
   */
  title: string;
}

export type DivProps = HTMLAttributes<HTMLDivElement>;

export type SvgProps = HTMLAttributes<SVGSVGElement>;

export type ImgProps = HTMLAttributes<HTMLImageElement>;

export type InputProps = HTMLAttributes<HTMLInputElement>;

export type TextAreaProps = HTMLAttributes<HTMLTextAreaElement>;
