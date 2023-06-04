import { buttonCVA } from './Button.cva'
import type { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
  const { variant, shadow, colorScheme, className, ...rest } = props

  return (
    <button
      className={buttonCVA({
        variant,
        colorScheme,
        shadow,
        class: className,
      })}
      {...rest}
    />
  )
}

export default Button