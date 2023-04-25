export type TestProps = {
  subTitle: string;
};

export function Test({ subTitle }: TestProps) {
  return (
    <div aria-label='test'>
      <h3>{`Test`}</h3>
      <h1>{subTitle}</h1>
    </div>
  );
}
