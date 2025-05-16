export default function formatDate(date: Date) {
  const dateFormatter = Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
  return dateFormatter.format(date)
}