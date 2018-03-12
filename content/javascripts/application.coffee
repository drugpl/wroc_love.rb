#= require jquery
#= require map_view
#= require agenda_view

$ ->
  new MapView().render($('.map'), window.venues)
  new AgendaView().render('#agenda_area', window.agenda)