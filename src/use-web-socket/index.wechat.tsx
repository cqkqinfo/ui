import useWebSocket from './useWebSocket';
import { Options } from 'ahooks/lib/useWebSocket';
import { connectSocket } from 'remax/wechat';

enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

class WebSocket {
  private socket: WechatMiniprogram.SocketTask;
  constructor(private url: string, private protocols?: string[]) {
    this.socket = connectSocket({
      url,
      protocols,
    });
  }
  public readyState = ReadyState.Closed;
  get close() {
    return this.socket.close;
  }
  get send() {
    return (data: any) => this.socket.send({ data });
  }
  set onerror(fn: any) {
    this.socket.onClose(e => {
      this.readyState = ReadyState.Closed;
      fn(e);
    });
  }
  set onclose(fn: any) {
    this.readyState = ReadyState.Closed;
    this.socket.onClose(e => {
      fn(e);
    });
  }
  set onmessage(fn: any) {
    this.socket.onMessage(e => {
      fn(e);
    });
  }
  set onopen(fn: any) {
    this.socket.onOpen(e => {
      this.readyState = ReadyState.Open;
      fn(e);
    });
  }
}

(wx as any)['WebSocket'] = WebSocket;

export default (socketUrl: string, options?: Options) => {
  return useWebSocket(socketUrl, options);
};
