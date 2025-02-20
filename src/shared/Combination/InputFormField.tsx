// FormField.tsx
import React from "react";
import LabelWithCaptionWrapper from "@/shared/Input/LabelwithCaptionWrapper";
import Input from "@/shared/Input/Input";

interface InputFormFieldProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder: string;
  caption?: string;
  captionPosition?: "before" | "after";
  error?: boolean;
  scale?: "s" | "m" | "l";
  disabled?: boolean;
}

const InputFormField: React.FC<InputFormFieldProps> = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
  caption,
  captionPosition,
  error = false,
  scale = "l",
  disabled = false,
}) => {
  return label ? (
    <LabelWithCaptionWrapper label={label} required={required} caption={caption} captionPosition={captionPosition} error={error}>
      <Input
        placeholder={placeholder}
        scale={scale}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </LabelWithCaptionWrapper>
  ) : (
    <Input
      placeholder={placeholder}
      scale={scale}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );
};

export default InputFormField;
