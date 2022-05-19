export const transaction = (transObj: any) => {
  return async () => {
    const resp = await fetch('http://localhost:3005/transaction', {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(transObj)
    })
  }
}
