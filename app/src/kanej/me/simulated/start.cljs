(ns kanej.me.simulated.start
  (:require [io.pedestal.app.render.push.handlers.automatic :as d]
            [kanej.me.start :as start]
            ;; This needs to be included somewhere in order for the
            ;; tools to work.
            [io.pedestal.app-tools.tooling :as tooling]))

;; This is to make the data ui work
(set! (.-icons js/window) (js-obj "paths" (js-obj)))

(defn ^:export main []
  (start/create-app d/data-renderer-config))
