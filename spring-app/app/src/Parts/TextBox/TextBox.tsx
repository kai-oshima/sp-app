interface Props {
  label: string,
  value: string,
  onChange: (value: string) => void,
}

export const TextBox = (props : Props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
    </div>
  )
}