export const getTimezoneOffset = () => {
  const now = new Date()
  const timezoneOffset = -now.getTimezoneOffset()
  const sign = timezoneOffset >= 0 ? '+' : '-'
  const offsetHours = Math.abs(Math.floor(timezoneOffset / 60))

  return `GMT${sign}${offsetHours}`
}
