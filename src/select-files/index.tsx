import { selectFiles } from 'parsec-hooks';
import { SelectFilesOption } from 'parsec-hooks/lib/utils/selectFiles';

export default (option: SelectFilesOption = {}) => selectFiles(option);
