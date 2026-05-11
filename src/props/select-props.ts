export type SelectProps<T = string> = {
  selected?: T;
  onSelect: (selected: T) => void;
};
