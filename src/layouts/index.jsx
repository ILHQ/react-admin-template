import { DownOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { Dropdown, Menu, Space } from 'antd';
import { history } from 'umi';
import { useState } from 'react';
import styles from './index.less';

const defaultProps = {
  route: {
    path: '/',
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        component: './Welcome',
      },
      {
        path: '/admin',
        name: '管理页',
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: '二级页面',
            component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            component: './Welcome',
          },
        ],
      },
      {
        name: '列表页',
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '一级列表页面',
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                component: './Welcome',
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            component: './Welcome',
          },
        ],
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design 官网外链',
      },
    ],
  },
  location: {
    pathname: '/',
  },
};

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
            1st menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
            退出登录
          </a>
        ),
      },
    ]}
  />
);

export default function Layouts(props) {
  const [settings] = useState({
    fixSiderbar: true,
    layout: 'top',
    navTheme: 'dark',
    fixedHeader: true,
  });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div id='test-pro-layout' className={styles.app}>
      <ProLayout
        {...defaultProps}
        contentStyle={styles.content}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <span
            onClick={() => {
              console.log(item);
              setPathname(item.path || '/');
              history.push(item.path || '/');
            }}>
            {dom}
          </span>
        )}
        rightContentRender={() => (
          <Dropdown overlay={menu}>
            <span className={styles.rightContent} onClick={(e) => e.preventDefault()}>
              <Space>
                产品部，lcc
                <DownOutlined />
              </Space>
            </span>
          </Dropdown>
        )}
        {...settings}>
        {props.children}
      </ProLayout>
    </div>
  );
}
