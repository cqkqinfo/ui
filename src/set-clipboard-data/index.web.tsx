import ClipboardJS from 'clipboard';
import { Options } from './index';

export default ({ data }: Options) =>
  new Promise(resolve => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.style.display = 'none';
    btn.setAttribute('data-clipboard-text', data);
    document.body.appendChild(btn);
    const clipboard = new ClipboardJS('.btn');
    btn.click();

    clipboard.on('success', function(e) {
      e.clearSelection();
      resolve({});
    });
    clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  });
