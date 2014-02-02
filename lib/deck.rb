require 'yaml'

class Deck 
  attr_reader :cards

  def initialize(path)
    @cards = []
    data = YAML::load(File.open(path))
    data.each do |card_data|
      @cards << Card.new(card_data)
    end
  end
  
end

# Deck.new("js_jeopardy.yml")

# in yaml
# every tick mark is a card
# every card should have the same attributes
# value, question, answer

# get "/games/students/:type/:deck_file" do
#   deck = Deck.new("data/#{params[:deck_file]}.yml")
#   @cards = deck.cards
#   haml :"#{params[:type]}2"
# end

1. create a view
2. create a deckfile in the datafolder in yaml
3. make your javascript file just like the jeopardy file
4. make css file 

all the cards are in the view 
pic a game with suit and number
war is the easiest



