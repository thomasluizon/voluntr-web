import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium uppercase border-2 border-b-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-black border-opacity-20 hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground border-black border-opacity-20 hover:bg-destructive/90',
        outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'border-none hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 border-none hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 text-[0.625rem] rounded-md px-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 text-sm tracking-wide rounded-lg px-8',
        icon: 'h-10 w-10',
        block: 'h-10 w-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
