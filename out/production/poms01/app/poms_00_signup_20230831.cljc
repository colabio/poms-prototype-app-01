(ns app.poms-00-signup-20230831
  (:require [clojure.string :as str]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]))

(defn validation-message [username]
  (let [username (str/trim username)]
    (cond
      (empty? username) "Username is required"
      (not (<= 3 (count username) 12)) "Username must be between 3 and 12 characters.")))



(e/defn signup-page []
        (e/client
          (dom/h1 (dom/text "JavaScript Input Validation Example"))
          (dom/label (dom/props {:for "username"})
                     (dom/text "username"))
          (let [!username (atom "")                         ; Store username
                username (e/watch !username)]               ; reactive username value


            (dom/input
              (dom/props {:type "text"})
              (dom/on! "change" (fn [^js event] (reset! !username (.. event -target -value)))))

            ;; Error Message Element for Username
            (let [!validate? (atom false)]                  ; Store validation state, stays false until we click the Validate button, then stays true
              (when (e/watch !validate?)
                (if-let [message (validation-message username)] ; if there is a validation message (username is invalid)
                  (dom/span
                    (dom/props {:style {:color "red"}})
                    (dom/text message))
                  ;; Else: if validation is on and username is valid, display alert
                  ;; message then disable validation, hiding the validation message.
                  ;; User will have to click on the Validate button again. Note
                  ;; displaying a blocking popup from reactive code must be
                  ;; implemented carefully so to only display once. I don’t recommend
                  ;; it for real world use cases.
                  (do (.alert js/window (str "Validation passed! Username is: " username))
                      (reset! !validate? false)
                      )))


              (dom/button (dom/text "Validate")
                          (dom/on! "click" #(reset! !validate? true)))))

          ))