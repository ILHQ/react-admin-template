import classNames from 'classnames';

export default function IndexPage() {
  const a = 1;
  const b = ['airbnb', 'prettier', 'plugin:prettier/recommended'];

  const l = 123;
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
