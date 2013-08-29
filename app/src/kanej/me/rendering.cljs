(ns kanej.me.rendering
  (:require [domina :as dom]
            [io.pedestal.app.render.push :as render]
            [io.pedestal.app.render.push.templates :as templates]
            [io.pedestal.app.render.push.handlers.automatic :as d])
  (:require-macros [kanej.me.html-templates :as html-templates]))

(def templates (html-templates/kanej.me-templates))

(defn render-page [renderer [_ path] transmitter]
  (let [parent (render/get-parent-id renderer path)

        navbar-id (render/new-id! renderer path "navbar")
        navbar (templates/add-template renderer path (:kanej.me-navbar templates))

        intro-id (render/new-id! renderer path "intro-panel")
        intro-panel (templates/add-template renderer path (:kanej.me-intro templates))

        projects-id (render/new-id! renderer path "projects-panel")
        projects-panel (templates/add-template renderer path (:kanej.me-projects templates))

        about-id (render/new-id! renderer path "about-panel")
        about-panel (templates/add-template renderer path (:kanej.me-about templates))

        footer-id (render/new-id! renderer path "footer")
        footer (templates/add-template renderer path (:kanej.me-footer templates))

        ]
    (dom/append! (dom/by-id parent) (navbar {:id navbar-id}))
    (dom/append! (dom/by-id parent) (intro-panel {:id intro-id}))
    (dom/append! (dom/by-id parent) (projects-panel {:id projects-id}))
    (dom/append! (dom/by-id parent) (about-panel {:id about-id}))
    (dom/append! (dom/by-id parent) (footer {:id footer-id}))
    ))


(defn render-icon-group [renderer [_ path _ new-value] transmitter]
  (let [parent (render/get-parent-id renderer path)
        id (render/new-id! renderer path "icon-group")]
    (dom/append! (dom/by-id "intro-panel") (str "<div class=\"row\" id=\"" id "\"></div>"))))

(defn render-icon-panel [renderer [_ path _ new-value] transmitter]
  (let [key (-> path last name)
        parent (render/get-parent-id renderer path)
        id (render/new-id! renderer path (str key "-icon"))]
    (dom/append! (dom/by-id parent) (str "<div class=\"big-icon col-md-2 col-md-offset-1\" id=\"" id "\"></div>"))))

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
