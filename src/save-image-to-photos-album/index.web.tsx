import { saveAs } from 'file-saver';
import { Options } from './index';

export default async ({ filePath, fileName }: Options) =>
  saveAs(filePath, fileName);
