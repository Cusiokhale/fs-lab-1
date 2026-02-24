import { useState } from "react";

export function useFormInput(initialValue = "") {
  const [value, setValue] = useState<string>(initialValue);
  const [messages, setMessages] = useState<string[]>([]);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setValue(e.target.value);
    setMessages([]);
  }

  return { value, setValue, messages, setMessages, onChange };
}