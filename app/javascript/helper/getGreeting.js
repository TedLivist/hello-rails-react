export const getGreeting = () => {
  const response = fetch(`api/v1/greeting.json`)
  return response.json()
}