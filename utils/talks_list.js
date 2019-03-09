export default function talksList(agenda) {
  if(!agenda) {
    return []
  }

  return agenda.reduce((list, day) => {
    const { date, talks } = day
    talks.forEach(talk => {
      const { start, end, title, speaker } = talk
      const startTime = new Date(`${date} ${start}:00`)
      const endTime = new Date(`${date} ${end}:00`)

      list.push({
        date, start, end, title, speaker, startTime, endTime
      })
    })
    return list
  }, [])
}
