require 'sprockets'
require 'coffee_script'
require 'securerandom'

class SprocketsFilter < Nanoc::Filter
  identifier :sprockets
  type       :text

  def run(content, params = {})
    assets_path = params.fetch :assets_path

    with_tempfile do |temp_file|
      temp_dir  = File.dirname(temp_file.path)
      temp_base = File.basename(temp_file.path)
      temp_file.write content
      temp_file.flush

      sprockets.append_path temp_dir
      sprockets.append_path assets_path

      sprockets.find_asset(temp_base).to_s
    end
  end

  private
  def sprockets
    @env ||= Sprockets::Environment.new
  end

  def with_tempfile
    FileUtils.mkdir_p TMP_BINARY_ITEMS_DIR

    File.open temp_path, "w+" do |file|
      yield file
    end
  ensure
    File.unlink temp_path
  end

  def temp_filename
    @temporary_filename ||= "#{SecureRandom.urlsafe_base64}.#{item_extension}"
  end

  def temp_path
    File.join TMP_BINARY_ITEMS_DIR, temp_filename
  end

  def item_extension
    assigns[:item][:extension]
  end

end