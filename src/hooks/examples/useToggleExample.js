import useToggle from "hooks/useToggle";

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle value</button>
    </div>
  );
}
