(ns kanej.me.start
  (:require [io.pedestal.app.protocols :as p]
            [io.pedestal.app :as app]
            [io.pedestal.app.render.push :as push-render]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.messages :as msg]
            [kanej.me.behavior :as behavior]
            [kanej.me.rendering :as rendering]))

;; In this namespace, the application is built and started.

(defn create-app [render-config]
  (let [app (app/build behavior/example-app)
        render-fn (push-render/renderer "content" render-config render/log-fn)
        app-model (render/consume-app-model app render-fn)]
    ;; If services existed, configure the application to send all
    ;; effects there.
    ;; (app/consume-effects app services-fn)
    ;;
    ;; Start the application
    (app/begin app)
    ;; Send a message to the application so that it does something.
    (p/put-message (:input app) {msg/type :add-icon msg/topic [:icons :github] :value {:name "github" :link "http://github.com/kanej"}})
    (p/put-message (:input app) {msg/type :add-icon msg/topic [:icons :twitter] :value {:name "twitter" :link "http://twitter.com/john_kane"}})
    (p/put-message (:input app) {msg/type :add-icon msg/topic [:icons :linkedin] :value {:name "linkedin" :link "http://linkedin.com/in/johnkane84"}})
    ;; Returning the app and app-model from the main function allows
    ;; the tooling to add support for useful features like logging
    ;; and recording.
    {:app app :app-model app-model}))

(defn ^:export main []
  ;; config/config.clj refers to this namespace as a main namespace
  ;; for several aspects. A main namespace must have a no argument
  ;; main function. To tie into tooling, this function should return
  ;; the newly created app.
  (create-app (rendering/render-config)))
