{:config {:name :intro, :description "Render the intro page", :order 0}
 :data
 [
  [:node-create [] :map]
  [:node-create [:main] :map]
  [:node-create [:main :icons] :map]
  [:node-create [:main :icons :github] :map]
  [:value [:main :icons :github] nil {:link "http://github.com/kanej", :name "github"}]
  [:node-create [:main :icons :twitter] :map]
  [:value [:main :icons :twitter] nil {:link "http://twitter.com/john_kane", :name "twitter"}]
  [:node-create [:main :icons :linkedin] :map]
  [:value [:main :icons :linkedin] nil {:link "http://linkedin.com/in/johnkane84", :name "linkedin"}]
 ]}
