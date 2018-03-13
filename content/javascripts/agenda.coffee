if typeof Object.getPrototypeOf != 'function'
    if typeof 'test'.__proto__ == 'object'
        Object.getPrototypeOf = (object) -> object.__proto__
    else
        Object.getPrototypeOf = (object) -> object.constructor.getPrototypeOf

moment.fn.normalize = -> this.year(1970).month(0).date(1)
moment.fn.isNormalized = -> this.year == 1970

######################################

class TimeParser
    regex = /^(\d{1,2}):([0-5]\d)$/

    constructor: (@original) ->
        matches = regex.exec(@original)
        @valid = !!matches
        if matches?
            @h = parseInt(matches[1])
            @m = parseInt(matches[2])

    hours:        -> @h + @m/60
    minutes:      -> @h*60 + @m
    seconds:      -> @minutes() * 60
    milliseconds: -> @minutes() * 60000

    isValid:     -> @valid
    toString:     ->
        (if @h < 10 then '0' else '') + @h + ':' + (if @m < 10 then '0' else '') + @m

class InputParser
    startString = '1970-01-01T'

    constructor: (@input) ->
        # We have several cases here

        # First, we can get a moment.js object directly
        if moment.isMoment(@input)
            @m = @input.clone()

        # Second, we can supply simply a string with time, like "03:30"
        else if (time = new TimeParser(@input)).isValid()
            @m = moment(startString + time.toString())

        # Finally, we can pass anything that moment.js handles
        else
            @m = moment(@input)

    moment: -> @m

class @Agenda
    constructor: (el, @opts) ->
        @el = $(el).addClass('agenda')

        @from = new InputParser(@opts['from'] || '08:00').moment()
        @to   = new InputParser(@opts['to'] || '18:00').moment()
        @step = @opts['step'] || 30

        # @days = @opts.days || moment.weekdays
        @days = @calculateDays()
        @buildHTML()

    # If one of the dates is 1970, we assume the date range is not specified
    isRangeSpecified: ->
        !@from.isNormalized() && !@to.isNormalized()

    calculateDays: ->
        # When days are given, there's no problem
        return @opts['days'] if @opts['days']?
        return moment.weekdays unless @isRangeSpecified()

        # Otherwise, we calculate the weekdays
        fromDay = @from.day()
        toDay = @to.day()
        toDay += 7 if toDay < fromDay

        return (moment.weekdays[day % 7] for day in [fromDay..toDay])

    buildHTML: ->
        # Calculate the vertical grid
        step_ms = @step * 60000

        normalized_from = @from.clone().normalize()
        normalized_to = @to.clone().normalize()

        duration = normalized_to.diff(normalized_from)
        row_count = duration / step_ms

        # Create the rows
        row_list = $('<ul class="times" />')

        iterator = normalized_from.clone()
        for i in [1..row_count]
            $('<li/>').text( iterator.format('HH:mm') ).appendTo(row_list)
            iterator.add('ms', step_ms)

        @el.append(row_list)

        # Create weekdays
        day_list_container = $('<div class="days-container" />')
        day_list = $('<ul class="days" />')
        @day_elements = for day in @days
            $('<ul/>').appendTo(
                $('<li/>').append(
                    $('<span class="day"/>').text(day)
                ).appendTo(day_list)
            )

        day_list_container.append(day_list)
        @el.append(day_list_container)

        # Calculate the height of a single row
        row_height = row_list.children().first().outerHeight()
        @px_ms_ratio = row_height / step_ms

        return this

    addDataToIndex: (day, data) ->
        # Create moment objects
        from = new InputParser(data.from).moment().normalize()
        to = new InputParser(data.to).moment().normalize()
        global_from = @from.clone().normalize()

        # Calculate dimensions
        diff = to.diff(from)
        offset = from.diff(global_from)

        top = offset * @px_ms_ratio
        height = diff * @px_ms_ratio

        # Create the element
        element_text = "<strong>#{from.format('HH:mm')}</strong> <span class='title'>#{data.title}</span>"
        element_text += " - <span class='speaker'>#{data.speaker}</span>" if data.speaker?

        element = $('<li/>')
            .html(element_text)
            .css(
                top: top
                height: height
            )

        # Append the element to the right day
        @day_elements[day].append(element)

        return this

    getIndexFromDate: (date) ->
        throw 'Date range is not specified' unless @isRangeSpecified()

        if date.isNormalized()
            throw 'You need to pass the day separately if you don\'t specify it in the string'

        if date.diff(@from) < 0 || date.diff(@to) > 0
            throw 'The specified date is out of range'

        date.diff(@from, 'days')


    add: ->
        return this if arguments.length == 0

        if arguments.length == 1
            # 1 argument - the day has to be calculated
            data = arguments[0]
            # TODO multiday events
            from = new InputParser(data.from).moment()
            day = @getIndexFromDate(from)

        else
            # 2 arguments - the first one is the day, the second is the data
            day = arguments[0]
            data = arguments[1]

            # Day should be an integer, but we accept a string
            if typeof day == 'string'
                day = @days.indexOf(day)

        @addDataToIndex day, data