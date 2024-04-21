export const airlines = [
  { label: 'Alaska', value: 'AS' },
  { label: 'American', value: 'AA' },
  { label: 'Avelo', value: 'XP' },
  { label: 'Breeze', value: 'MX' },
  { label: 'Delta', value: 'DL' },
  { label: 'Frontier', value: 'F9' },
  { label: 'Hawaiian', value: 'HA' },
  { label: 'JetBlue', value: 'B6' },
  { label: 'Southwest', value: 'WN' },
  { label: 'Spirit', value: 'NK' },
  { label: 'United', value: 'UA' },
  { label: 'Virgin America', value: 'VX' }
]

export const getAirlineNameByCode = (airlineCode: string) => {
  return airlines.find((airline) => airline.value === airlineCode)?.label || airlineCode
}
