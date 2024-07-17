export type Props = {
  state: string
}

export default function Component(props: Props) {
  let stroke = '#333'
  if (props.state === 'off') {
    stroke = '#fff'
  }

  return (<svg xmlns="http://www.w3.org/2000/svg" width="0.96em" height="1em" viewBox="0 0 24 25" ><path fill={stroke} d="m11.41.06l3.716 6.174l7.02 1.626l-4.724 5.44l.623 7.18l-6.635-2.812l-6.634 2.811l.623-7.178L.676 7.86l7.02-1.626zm0 3.88L8.972 7.99L4.365 9.058l3.1 3.572l-.41 4.711l4.355-1.845l4.355 1.845l-.409-4.711l3.1-3.572l-4.607-1.067zm9.453 10.071l2.475 2.475l-1.414 1.414l-2.475-2.474zm-8.296 6.116l2.474 2.475l-1.414 1.414l-2.475-2.475zm6.578 0l2.474 2.475l-1.414 1.414l-2.475-2.475z"></path></svg>)
}



