(ns kanej.me.rendering
  (:require [domina :as dom]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.render.push.handlers.automatic :as d])
  (:require-macros [kanej.me.html-templates :as html-templates]))

(def templates (html-templates/kanej.me-templates))

(defn render-page [renderer [_ path] transmitter]
  (let [ parent (render/get-parent-id renderer path)
        id (render/new-id! renderer path "intro-panel")
        html (templates/add-template renderer path (:kanej.me-page templates))]
    (dom/append! (dom/by-id parent) (html {:id id :message ""}))))

(defn render-icon-group [renderer [_ path _ new-value] transmitter]
  (let [parent (render/get-parent-id renderer path)
        id (render/new-id! renderer path "icon-group")]
    (dom/append! (dom/by-id parent) (str "<div class=\"row\" id=\"" id "\"></div>"))))

(defn render-icon-panel [renderer [_ path _ new-value] transmitter]
  (let [key (-> path last name)
        parent (render/get-parent-id renderer path)
        id (render/new-id! renderer path (str key "-icon"))]
    (dom/append! (dom/by-id parent) (str "<div class=\"big-icon span2 offset1\" id=\"" id "\"></div>"))))

(defn render-icon [renderer [_ path _ new-value] transmitter]
  (when new-value
    (.create js/icons 
             (str (:name new-value) "-icon")
             (aget js/icons.paths (:name new-value))
             (:link new-value))))

(defn render-config []
  [[:node-create    [:main] render-page]
   [:node-destroy   [:main] d/default-exit]
   [:node-create    [:main :icons] render-icon-group] 
   [:node-destroy   [:main :icons] d/default-exit] 
   [:node-create    [:main :icons :*] render-icon-panel]
   [:node-destroy   [:main :icons :*] d/default-exit] 
   [:value [:main :icons :*] render-icon]])
