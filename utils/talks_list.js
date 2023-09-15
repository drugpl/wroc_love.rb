const zeroPad = (value) =>
  String(value).length === 4 ? `0${value}` : String(value)
const createDate = (date, time) => new Date(`${date}T${zeroPad(time)}:00+02:00`)

export function talksList(agenda) {
  if (!agenda) {
    return []
  }

  return agenda.reduce((list, day) => {
    const { date, talks } = day
    talks.forEach((talk) => {
      const { start, end, title, speaker } = talk
      const startTime = createDate(date, start)
      const endTime = createDate(date, end)

      list.push({
        date,
        start,
        end,
        title,
        speaker,
        startTime,
        endTime,
      })
    })
    return list
  }, [])
}
export function getFirstDayStart(agenda) {
  if (!agenda) {
    return null
  }

  return createDate(agenda[0].date, "00:00")
}

export function getLastDayEnd(agenda) {
  if (!agenda) {
    return null
  }

  const lastDay = agenda[agenda.length - 1]
  return createDate(lastDay.date, "23:59")
}
