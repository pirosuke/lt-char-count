(ns lt.plugins.lt-char-count
  (:require [lt.objs.statusbar :as statusbar]
            [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound map-bound]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defui count-ui [count-num]
  [:span.editor-count count-num])

(defn ->char-count-html [{:keys [cur-ed] :as o}]
  (when cur-ed
    (count-ui (count (editor/->val cur-ed)))))

(object/object* ::container
                :init (fn [this]
                        [:li
                         [:span
                          (bound this ->char-count-html)]]))

(def container (object/create ::container))

(statusbar/add-statusbar-item container)

(behavior ::attach
          :triggers #{:active}
          :reaction (fn [this]
                      (object/merge! container {:cur-ed this})))


