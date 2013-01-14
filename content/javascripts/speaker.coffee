class window.Speaker
  constructor: (params={}) ->
    @id = params.id
    @bio = params.bio ? ""


  slots: =>
    @_slots ?= DataSource.getSlotsForUser(@id)


