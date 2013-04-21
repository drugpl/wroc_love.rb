#= require jquery
#= require handlebars_view
#= require data_source

setupAnimations = ->
  $('.speaker .info').on 'click', (event) ->
    $speaker = $(this).closest('.speaker')
    player = $speaker.find('.player').data('player')

    if $speaker.hasClass('playing')
      $speaker.removeClass('playing')
      player.pauseVideo()

hideLoadingSpinner = ->
  $('.loading').hide()

callback = (data) ->
  hideLoadingSpinner()
  new HandlebarsView('speakers').render($('.speakers'), data)
  new HandlebarsView('videos').render($('.videos'), data)
  new HandlebarsView('supporters').render($('.supporters'), data)

  setupAnimations()

errback = ->
  hideLoadingSpinner()
  new HandlebarsView('error').render($('.speakers'))

@onYouTubeIframeAPIReady = ->
  $('.speaker .player').each ->
    $element = $(this)
    $speaker = $element.closest('.speaker')

    $element.data('player', new YT.Player this,
      events:
        onStateChange: (event) ->
          switch event.data
            when YT.PlayerState.PLAYING   then $speaker.addClass('playing')
            when YT.PlayerState.BUFFERING then $speaker.addClass('playing')
    )

$ ->
  DataSource.fetchAll callback, errback
