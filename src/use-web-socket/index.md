---
toc: content
nav:
  title: 工具
  path: /utils
group:
  title: hooks
  path: /hooks
---

## useWebSocket 跨端 webSocket

跨端 webSocket，详细用法查看[ahooks](https://ahooks.js.org/zh-CN/hooks/use-web-socket)

```tsx
import React, { useRef, useMemo } from 'react';
import { useWebSocket, Button, Space } from '@kqinfo/ui';

enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export default () => {
  const messageHistory = useRef<any[]>([]);

  const {
    readyState,
    sendMessage,
    latestMessage,
    disconnect,
    connect,
  } = useWebSocket('ws://82.157.123.54:9010/ajaxchattest');

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(latestMessage),
    [latestMessage],
  );

  return (
    <Space vertical size={'10px'}>
      {/* send message */}
      <Button
        onTap={() => sendMessage && sendMessage(`${Date.now()}|`)}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ✉️ send
      </Button>
      {/* disconnect */}
      <Button
        onTap={() => disconnect && disconnect()}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ❌ disconnect
      </Button>
      {/* connect */}
      <Button
        onTap={() => connect && connect()}
        disabled={readyState === ReadyState.Open}
      >
        {readyState === ReadyState.Connecting ? 'connecting' : '📞 connect'}
      </Button>
      <Space style={{ marginTop: 8 }}>readyState: {readyState}</Space>
      <Space style={{ marginTop: 8 }} vertical size={'10px'}>
        <Space>received message: </Space>
        {messageHistory.current.map((message, index) => (
          <Space key={index}>{message?.data?.split('|')[0]}</Space>
        ))}
      </Space>
    </Space>
  );
};
```

<API></API>
