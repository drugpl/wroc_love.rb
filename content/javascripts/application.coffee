#= require jquery
#= require handlebars
#= require handlebars_view
#= require data_source

hideLoading = ->
  $('.loading').hide()

callback = (data) ->
  hideLoading()
  new HandlebarsView('speakers').render($('.speakers'), data)
  new HandlebarsView('supporters').render($('.supporters'), data)
  new HandlebarsView('partners').render($('.partners'), data)

  # Save the content height
  infoHeight = $('.speaker .info').outerHeight()
  $('.speaker .description').each ->
    $this = $(this)
    height = $this.outerHeight() - infoHeight
    $this.data('size', height).css('bottom', -height).addClass('animated')

errback = ->
  hideLoading()
  new HandlebarsView('error').render($('.speakers'))

$ ->
  DataSource.fetchAll callback, errback

  $('.speakers').on
    mouseenter: (e) ->
      $(this).find('.description').css('bottom', 0)
    mouseleave: (e) ->
      desc = $(this).find('.description')
      desc.css('bottom', -desc.data('size'))
  , '.speaker'