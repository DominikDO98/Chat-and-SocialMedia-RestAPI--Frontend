import { useField } from "formik";

interface Props {
  type: "email" | "text" | "password";
  name: "email_address" | "username" | "password";
  label: string;
}

export const TextInput = (props: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {props.label}
        <p>
          <input {...field} {...props} className="input" />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </p>
      </label>
    </>
  );
};
