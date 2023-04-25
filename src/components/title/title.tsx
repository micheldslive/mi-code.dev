export type TitleProps = {
  subTitle: string;
};

export function Title({ subTitle }: TitleProps) {
  return (
    <div aria-label='title'>
      <h3>{`Title`}</h3>
      <h1>{subTitle}</h1>
    </div>
  );
}
