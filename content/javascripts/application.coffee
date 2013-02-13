#= require jquery
#= require handlebars_view
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

callback = (data) ->
  hideLoadingSpinner()
  new HandlebarsView('speakers').render($('.speakers'), data)
  new HandlebarsView('supporters').render($('.supporters'), data)
  new HandlebarsView('partners').render($('.partners'), data)
  new HandlebarsView('organizers').render($('.organizers'), data)

  setupAnimations()

  new MapView().render($('.map'), data)

  new AgendaView().render('#agenda_area', data)

errback = ->
  hideLoadingSpinner()
  new HandlebarsView('error').render($('.speakers'))

$ ->
  DataSource.fetchAll callback, errback