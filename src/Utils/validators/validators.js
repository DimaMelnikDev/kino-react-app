// https://redux-form.com/8.3.0/examples/syncvalidation/

export const renderTextarea = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="red">{error}</span>) ||
          (warning && <span className="warn">{warning}</span>))}
    </div>
  </div>
);

export const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="red">{error}</span>) ||
          (warning && <span className="warn">{warning}</span>))}
      <label>{label}</label>
    </div>
  </div>
);

export const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength250 = maxLength(250);
export const maxLength120 = maxLength(120);
export const maxLength80 = maxLength(80);

const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength3 = minLength(3);
export const minLength6 = minLength(6);

export const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue13 = minValue(13);

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const tooYoung = (value) =>
  value && value < 13
    ? "You do not meet the minimum age requirement!"
    : undefined;

export const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;
