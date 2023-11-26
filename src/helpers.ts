export const clsx = (...args: string[]) => `${args.join(' ')}`

export const greeting = (name: string) => {
  const time = new Date().getHours()

  const greetingText =
    time > 12 && time < 17
      ? 'Good Afternoon'
      : time < 12
      ? 'Good Morning'
      : 'Good Evening'

  return `${greetingText}, ${name}`
}
