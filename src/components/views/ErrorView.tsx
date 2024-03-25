interface Props {
  message: string;
}

export const ErrorView = (props: Props) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{props.message}</p>
    </div>
  );
};
