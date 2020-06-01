import { MouseEvent } from 'react';

export * from './types';

export const cloneDeep = <T extends {} | []>(structure: T): T =>
  JSON.parse(JSON.stringify(structure));

export const preventClickDefault = (e: MouseEvent) => e.preventDefault();
