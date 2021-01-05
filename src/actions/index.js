export const addToHandle = (item) => ({
  type: 'ADD_TO_HANDLE',
  item: item.target,
})

export const addToAddress = (item) => ({
  type: 'ADD_TO_ADDRESS',
  item: item.target,
})

export const addToDate = (item) => ({
  type: 'ADD_TO_DATE',
  item: item.target,
})
