#= require jquery
#= require handlebars
#= require handlebars_view
#= require data_source

callback = (data) ->
  new HandlebarsView('speakers').render($('.speakers'), data)
  new HandlebarsView('supporters').render($('.supporters'), data)

errback = ->
  "do something meaningful here"

$ ->
  DataSource.fetchAll callback, errback

