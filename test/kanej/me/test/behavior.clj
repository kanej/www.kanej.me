(ns kanej.me.test.behavior
  (:require [io.pedestal.app :as app]
            [io.pedestal.app.protocols :as p]
            [io.pedestal.app.tree :as tree]
            [io.pedestal.app.messages :as msg]
            [io.pedestal.app.render :as render]
            [io.pedestal.app.util.test :as test])
  (:use clojure.test
        kanej.me.behavior
        [io.pedestal.app.query :only [q]]))

(def set-github-icon-msg
  {msg/type :add-icon msg/topic [:icons] :value {:name "github" :link "http://github.com/kanej"}})

(deftest test-set-value-transform
  (is (= (:name  (add-icon-transform {} set-github-icon-msg)) "github"))
  (is (= (:link  (add-icon-transform {} set-github-icon-msg)) "http://github.com/kanej")))
