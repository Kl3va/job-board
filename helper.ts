export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'short', day: '2-digit' } as const
  return date.toLocaleDateString('en-US', options)
}
