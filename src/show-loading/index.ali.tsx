import { showLoading } from 'remax/ali';

export default ({ title: content }: { title?: string }) => {
  return showLoading({
    content,
    delay: 99999,
  });
};
