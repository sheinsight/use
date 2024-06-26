import { Card, KeyValue } from '@/components'
import { useCounter, useLayoutEffectOnce } from '@shined/react-use'

export function App() {
  const [count, actions] = useCounter(0)

  useLayoutEffectOnce(() => {
    const timer = setInterval(actions.inc, 1000)
    return () => clearInterval(timer)
  })

  return (
    <Card>
      <KeyValue label="Count" value={count} />
    </Card>
  )
}
