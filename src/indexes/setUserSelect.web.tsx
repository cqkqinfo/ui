export default (select: boolean) => {
  document.body.style.userSelect = select ? '' : 'none';
};
