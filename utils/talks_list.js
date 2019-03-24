const zeroPad = value => String(value).length === 4 ? `0${value}` : String(value)
const createDate = (date, time) => new Date(`${date}T${zeroPad(time)}:00+01:00`)
export default function talksList(agenda) {
  if(!agenda) {
    return []
  }

  return agenda.reduce((list, day) => {
    const { date, talks } = day
    talks.forEach(talk => {
      const { start, end, title, speaker } = talk
      const startTime = createDate(date, start)
      const endTime = createDate(date, end)

      list.push({
        date, start, end, title, speaker, startTime, endTime
      })
    })
    return list
  }, [])
}
