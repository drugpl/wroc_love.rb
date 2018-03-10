#= require jquery
#= require map_view
#= require agenda_view
#= require data_source

setupAnimations = ->
  infoHeight = $('.speaker .info').outerHeight()
  $('.speaker .description').each ->
    height = $(@).outerHeight() - infoHeight
    $(@).data('size', height).css('bottom', -height).addClass('animated')

  $('.speakers').on
    mouseenter: (e) ->
      $(@).find('.description').css('bottom', 0)
    mouseleave: (e) ->
      desc = $(@).find('.description')
      desc.css('bottom', -desc.data('size'))
  , '.speaker'

hideLoadingSpinner = ->
  $('.loading').hide()

$ ->
  hideLoadingSpinner()
  setupAnimations()

  new MapView().render($('.map'), window.venues)
  new AgendaView().render('#agenda_area', window.agenda)