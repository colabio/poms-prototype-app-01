(ns app.poms-01-login-20230828
  (:require contrib.str
            [clojure.string :as str]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
    ;datomic require'ı asagıdaki
            #?(:clj [datomic.client.api :as d])
            [hyperfiddle.electric-ui4 :as ui]
            ))

;; bu kısımda zorunlu
(e/def conn)
(e/def db)
;; bu kısımda zorunlu



#?(:clj (defn login-test [username password db] (ffirst (d/q
                                                          '[:find ?id
                                                            :in $ ?name ?password
                                                            :where
                                                            [?e :user/name ?name]
                                                            [?e :user/password ?password]
                                                            [?e :user/id ?id]
                                                            ]
                                                          db username password)
                                                        )
          )
   )


(defn validation-message [username]
  (let [username (str/trim username)]
    (cond
      (empty? username) "Username is required"
      (not (<= 5 (count username) 12)) "Username must be between 5 and 12 characters.")))


(e/defn login-page []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :username        ""
                                    :password        ""
                                    :button1         ""
                                    :button2         ""
                                    :login-outh      ""
                                    :btn1-is-clicked false
                                    :login-info      "Welcome! Colabio makes life easier..."
                                    })
                      username (get (e/watch !state) :username)
                      password (get (e/watch !state) :password)
                      btn-state (get (e/watch !state) :btn1-is-clicked)
                      login-info (get (e/watch !state) :login-info)
                      ]
                  (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: black; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  legend {font-size: 25px; font-style: italic;} p {margin-bottom: 0}
                  }
                  .error { color: red;display: none;}
                  input:invalid+.error, input:invalid:out-of-range+.error {display: block;}
                  input:valid+.error {display: none;}
                  input:valid {border: 2px solid green;}
                  input:focus:invalid {border: 2px solid red;}
                  "))
                  (dom/ul (dom/props {:class "ul"})
                          (dom/li
                            (dom/a (dom/props {:class "home" :href "http://localhost:8080/"})
                                   (dom/text "Home")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-00-signup-20230831!signup-page)"})
                                   (dom/text "Sign Up")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-01-login-20230828!login-page)"})
                                   (dom/text "Log In")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-02-cp-20230830!create-project)"})
                                   (dom/text "Create Project")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-03-crfp-20230906!create-rfp)"})
                                   (dom/text "Create Rfp")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-04-sif-20230907!sif-page)"})
                                   (dom/text "Supplier Information Screen")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-05-addcompany-20230907!add-company)"})
                                   (dom/text "Add New Company")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-06-ph-20230915!ph-page)"})
                                   (dom/text "Project Highlights")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-07-app-20230915!app-page)"})
                                   (dom/text "Add New Proposal")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-08-ap-20230918!approve-proposal)"})
                                   (dom/text "Approve Proposal")))
                          (dom/li
                            (dom/a (dom/props {:href "http://localhost:8080/(app.poms-09-ot-20230920!operation-track-page)"})
                                   (dom/text "Operation Track")))
                          )

                  (dom/div
                    (dom/form
                      (dom/props {:il       "FORM"
                                  :onSubmit "false"
                                  })
                      (dom/fieldset
                        (dom/props {:name "FORM"
                                    })
                        (dom/legend
                          (dom/text "POMS LOGIN")
                          (dom/props {:style {:text-align "center"}}))

                        (dom/p (dom/text "Username:")
                               (ui/input username
                                         (e/fn [v] (swap! !state assoc :username v))
                                         (dom/props {:type "text" :name "customString" :pattern "[A-Za-z]{3}" :title "Enter a 3-letter string"})
                                         ))
                        (dom/p (dom/text "Password:")
                               (ui/input password
                                         (e/fn [v] (swap! !state assoc :password v))
                                         (dom/props {:style {:name "PASSWORD" :type "password" :value= "FakePSW"}})
                                         ))

                        (dom/button
                          (dom/on "click" (fn [] (swap! !state assoc :btn1-is-clicked true)))
                          (dom/text "Login")
                          (dom/props {:type  "button"
                                      :class "button1"
                                      :name  "login-button"
                                      :style {:text-align "center"}
                                      })
                          )

                        (if btn-state
                          (case (clojure.string/blank? (e/server (login-test username password db)))
                            false ((.setTimeout js/window #(set! js/window.location.href "http://localhost:8080/(app.poms-02-cp-20230830!create-project)") 2000)
                                   (swap! !state assoc :login-info "Login succesfull, redirecting...")
                                   (swap! !state assoc :btn1-is-clicked false))
                            true ((swap! !state assoc :login-info "Wrong information!")
                                  (swap! !state assoc :btn1-is-clicked false))
                            )
                          )

                        (dom/p (dom/text login-info
                                         (dom/props {:class      "login-info"
                                                     :name       "login-text"
                                                     :text-align "center"
                                                     })))

                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )

