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

errback = ->
  hideLoading()
  new HandlebarsView('error').render($('.speakers'))

$ ->
  DataSource.fetchAll callback, errback

