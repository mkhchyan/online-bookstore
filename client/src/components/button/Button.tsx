import { buttonCVA } from './Button.cva'
import type { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
  const { variant, shadow, colorScheme, size, className, ...rest } = props

  return (
    <button
      className={buttonCVA({
        variant,
        colorScheme,
        size,
        shadow,
        class: className,
      })}
      {...rest}
    />
  )
}

export default Button