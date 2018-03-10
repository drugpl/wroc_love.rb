#= require moment
#= require agenda

class @AgendaView
  render: (selector, json) ->
    agenda = new Agenda selector,
      days: json.dayLabels
      from: json.from
      to: json.to
      step: 15

    $.each json.data, (dayIndex, day) ->
      for thing in day
        agenda.add(dayIndex, thing)