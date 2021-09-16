import { showLoading } from 'remax/ali';

export default ({
  title,
  ...props
}: { title: string } & my.IShowLoadingOptions) => {
  showLoading({
    content: title,
    ...props,
  });
};
