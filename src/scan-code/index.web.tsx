import isWx from '../is-wx';
import QrScanner from 'qr-scanner';
import { ActionSheet } from 'antd-mobile';
import selectFiles from '../select-files';

export default () =>
  new Promise(resolve => {
    if (isWx) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: function(res: any) {
          resolve({ result: res.resultStr });
        },
      });
    } else {
      ActionSheet.showActionSheetWithOptions(
        {
          options: ['拍摄', '从相册选取', '取消'],
          cancelButtonIndex: 2,
          // title: 'title',
          maskClosable: true,
        },
        index => {
          if (index === 0) {
            const el = document.createElement('video');
            el.style.width = '100vw';
            el.style.height = '100vh';
            el.style.top = '0';
            el.style.left = '0';
            el.style.position = 'fixed';
            el.style.background = '#000';
            document.body.appendChild(el);
            el.onclick = () => {
              document.body.removeChild(el);
              qrScanner.stop();
            };
            const qrScanner = new QrScanner(el, result => {
              resolve({ result });
              document.body.removeChild(el);
              qrScanner.stop();
            });
            qrScanner.start();
          } else if (index === 1) {
            selectFiles().then(([file]) => {
              QrScanner.scanImage(file).then(result => {
                resolve({ result });
              });
            });
          }
        },
      );
    }
  });
