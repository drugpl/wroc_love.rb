module Nanoc::DataSources
  class Static < Nanoc::DataSource
    identifier :static

    def items
      prefix    = config[:prefix] || 'static'
      filenames = Dir[prefix + '/**/*'].select { |f| File.file?(f) }
      filenames.map do |filename|
        attributes = {
          :extension => File.extname(filename)[1..-1],
          :filename  => filename,
        }
        identifier = filename[(prefix.length+1)..-1] + '/'
        mtime      = File.mtime(filename)
        checksum   = checksum_for(filename)

        Nanoc::Item.new(
          filename,
          attributes,
          identifier,
          :binary => true, :mtime => mtime, :checksum => checksum
        )
      end
    end

    private

    def checksum_for(*filenames)
      filenames.flatten.map do |filename|
        digest = Digest::SHA1.new
        File.open(filename, 'r') do |io|
          until io.eof
            data = io.readpartial(2**10)
            digest.update(data)
          end
        end
        digest.hexdigest
      end.join('-')
    end
  end
end
