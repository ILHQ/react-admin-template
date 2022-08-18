import styles from './index.less';

import classNames from 'classnames';

export default function IndexPage() {
  const a = 1;

  return (
    <div>
      <h1 className={classNames('mt-20', 'ml-20')}>
        {process.env.UMI_ENV}
        {process.env.BASE_URL}
        {process.env.BASE_IMG_URL}
      </h1>
    </div>
  );
}
