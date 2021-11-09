export const getGreeting = async () => {
  const response = await fetch(`api/v1/greeting.json`)
  return response.json()
}