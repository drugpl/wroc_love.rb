require 'sprockets'
require 'coffee_script'

class SprocketsFilter < Nanoc::Filter
  identifier :sprockets
  type       :text

  def run(content, params = {})
    env = Sprockets::Environment.new
    env.append_path assets_path
    env.find_asset(item_filename).to_s
  end

  private
  def item_path
    assigns[:item_rep].raw_path.gsub 'output', 'content'
  end

  def item_filename
    File.basename(item_path)
  end

  def assets_path
    File.dirname(item_path)
  end
end

