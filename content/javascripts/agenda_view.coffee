#= require moment
#= require agenda

class @AgendaView
  render: (selector, json) ->
    agenda = new Agenda selector,
      days: json.agenda.dayLabels
      from: json.agenda.from
      to: json.agenda.to

    $.each json.agenda.data, (dayIndex, day) ->
      for thing in day
        agenda.add(dayIndex, thing)