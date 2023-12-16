import { nanoid } from 'nanoid';
import { ComponentProps } from 'react';

type Props = {
  label: string;
} & ComponentProps<'input'>;

export const Input = ({ label, ...rest }: Props) => {
  const id = nanoid();
  return (
    <div>
      <label htmlFor={id} className="mr-4">
        {label}
      </label>
      <input
        id={id}
        type="email"
        className="border rounded-sm border-slate-900"
        {...rest}
      />
    </div>
  );
};
