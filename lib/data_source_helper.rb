require 'json'

module DataSourceHelper
  def data
    @data ||= JSON.parse(File.read(File.expand_path('./content/api/all.json')))
  end

  def partners
    data["partners"]
  end

  def supporters
    data["supporters"]
  end

  def organizers
    data["organizers"]
  end

  def speakers
    data["speakers"]
  end
end