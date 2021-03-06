import React, { useCallback, useMemo } from 'react';
import { IApiComponentProps } from 'dumi/theme';
import { useApiData } from 'dumi/theme';

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '(必选)',
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: '(required)',
  },
};

export default ({ identifier, export: expt }: IApiComponentProps) => {
  const data = useApiData(identifier);
  const texts = LOCALE_TEXTS['zh-CN'];
  const filterData = useMemo(
    () =>
      data[expt]
        ?.filter(({ identifier }) => !identifier.includes('aria-'))
        .filter(
          ({ identifier }) =>
            ![
              'hoverClassName',
              'hoverStartTime',
              'hoverStayTime',
              'role',
              'dataset',
              'onTap',
              'onTouchStart',
              'onTouchMove',
              'onTouchEnd',
              'onTouchCancel',
              'onLongTap',
              'slot',
              'id',
            ].includes(identifier),
        ) || [],
    [data],
  );

  const renderTable = useCallback(
    (data: typeof filterData) =>
      !!data.length && (
        <table style={{ marginTop: 24 }}>
          <thead>
            <tr>
              <th>{texts.name}</th>
              <th>{texts.description}</th>
              <th>{texts.type}</th>
              <th>{texts.default}</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.identifier}>
                <td>{row.identifier}</td>
                <td>{row.description || '-'}</td>
                <td>
                  <code>{row.type}</code>
                </td>
                <td>
                  <code>
                    {row.default || (row.required && texts.required) || '-'}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    [],
  );
  const clsData = useMemo(
    () => filterData.filter(({ identifier }) => identifier.includes('Cls')),
    [filterData],
  );
  return (
    <>
      {data && (
        <>
          {renderTable(
            filterData.filter(({ identifier }) => !identifier.includes('Cls')),
          )}
          {!!clsData.length && <h3>自定义类名</h3>}
          {renderTable(clsData)}
        </>
      )}
    </>
  );
};
