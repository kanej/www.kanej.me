(ns ^:shared kanej.me.behavior
    (:require [clojure.string :as string]
              [io.pedestal.app :as app]
              [io.pedestal.app.messages :as msg]))
;; While creating new behavior, write tests to confirm that it is
;; correct. For examples of various kinds of tests, see
;; test/kanej/me/test/behavior.clj.

(defn add-icon-transform [old-value message]
  (:value message))

(defn init-main [_]
  [:transform-enable [:main :icons] :add-icon [{msg/topic [:icons]}]])

(def kanej-app
  {:version 2
   :transform [[:add-icon [:icons :*] add-icon-transform]]
   :emit [{:init init-main}
          [#{[:icons :*]} (app/default-emitter [:main])]]})

;; Once this behavior works, run the Data UI and record
;; rendering data which can be used while working on a custom
;; renderer. Rendering involves making a template:
;;
;; app/templates/kanej.me.html
;;
;; slicing the template into pieces you can use:
;;
;; app/src/kanej/me/html_templates.cljs
;;
;; and then writing the rendering code:
;;
;; app/src/kanej/me/rendering.cljs

(comment
  ;; The examples below show the signature of each type of function
  ;; that is used to build a behavior dataflow.

  ;; transform

  (defn example-transform [old-state message]
    ;; returns new state
    )

  ;; derive

  (defn example-derive [old-state inputs]
    ;; returns new state
    )

  ;; emit

  (defn example-emit [inputs]
    ;; returns rendering deltas
    )

  ;; effect

  (defn example-effect [inputs]
    ;; returns a vector of messages which effect the outside world
    )

  ;; continue

  (defn example-continue [iniputs]
    ;; returns a vector of messages which will be processed as part of
    ;; the same dataflow transaction
    )

  ;; dataflow description reference

  {:transform [[:op [:path] example-transform]]
   :derive    #{[#{[:in]} [:path] example-derive]}
   :effect    #{[#{[:in]} example-effect]}
   :continue  #{[#{[:in]} example-continue]}
   :emit      [[#{[:in]} example-emit]]}
  )
