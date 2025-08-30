export default function WrapperForClient({ Component, componentProps }) {
  return <Component {...componentProps} />
}
