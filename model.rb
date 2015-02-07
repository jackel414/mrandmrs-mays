require 'rubygems'
require 'data_mapper'
require 'dm-sqlite-adapter'
DataMapper.setup(:default, "sqlite://#{Dir.pwd}/mrandmars_mays.sqlite")

class Song
  include DataMapper::Resource

  property :id, Serial
  property :song_name, Text, :required => true
  property :requestor, Text, :required => true
  property :created, DateTime
end

# Tell DataMapper the models are done being defined
DataMapper.finalize

# Update the database to match the properties of User.
DataMapper.auto_upgrade!