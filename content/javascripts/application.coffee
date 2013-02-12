#= require jquery
#= require moment
#= require handlebars_view
#= require map_view
#= require data_source
#= require agenda

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

  setupAnimations()

  new MapView().render($('.map'), data)

errback = ->
  hideLoadingSpinner()
  new HandlebarsView('error').render($('.speakers'))

$ ->
  DataSource.fetchAll callback, errback

  # displays fake data in the agenda
  data = [
    [
      {from: '08:00', to: '10:00', title: 'Some talk'},
      {from: '10:00', to: '12:00', title: 'Some talk'},
      {from: '12:00', to: '14:00', title: 'Some talk'}
    ],
    [
      {from: '10:00', to: '12:00', title: 'Some talk'},
      {from: '14:00', to: '16:00', title: 'Some talk'},
      {from: '16:00', to: '18:00', title: 'Some talk'}
    ],
    [
      {from: '12:00', to: '14:00', title: 'Some talk'},
      {from: '14:00', to: '16:00', title: 'Some talk'},
      {from: '16:00', to: '18:00', title: 'Some talk'}
    ]
  ]

  a = new Agenda '#agenda_area',
    days: ['Friday', 'Saturday', 'Sunday']
    from: '08:00'
    to: '18:00'

  $.each data, (dayIndex, day) ->
    for thing in day
      a.add(dayIndex, thing)
