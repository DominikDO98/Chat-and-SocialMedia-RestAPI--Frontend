import "../../styles/error.css";
interface Props {
  message: string;
}

export const ErrorView = (props: Props) => {
  return (
    <div id="errorBox">
      <h1 id="errorTitle">Error</h1>
      <p id="errorMessage">{props.message}</p>
    </div>
  );
};
