import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function StyledInput({
  label,
  type,
  name,
  value,
  onChange,
  isRequired,
  placeholder,
  isDisabled,
}) {
  return (
    <FormControl mb="25px">
      <FormLabel>{label}:</FormLabel>
      <Input
        isRequired={isRequired}
        isDisabled={isDisabled}
        type={type}
        name={name}
        placeholder={placeholder}
        focusBorderColor="primary.400"
        borderColor="textColor.800"
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
}

export default StyledInput;
