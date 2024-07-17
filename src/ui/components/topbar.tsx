
export type Props = {
  children: JSX.Element
}

export default function Component(props: Props) {
  return (
    <div className="relative z-20 bg-gray-900 rounded-lg w-full text-white p-3">
      { props.children }
    </div>
  )
}