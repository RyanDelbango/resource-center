package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	handler := http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		var path = req.URL.Path
		location := ""
		if path == "/" {
			location = "Home"
		} else {
			location = path[1:]
		}
		resp := []byte(`{"location": "` + location + `" }`)
		rw.Header().Set("Access-Control-Allow-Origin", "*")
		rw.Header().Set("Access-Control-Allow-Headers", "*")
		rw.Header().Set("Content-Type", "application/json")
		rw.Header().Set("Content-Length", fmt.Sprint(len(resp)))
		rw.Write(resp)
	})

	mux := http.NewServeMux()
	mux.Handle("/", handler)
	mux.Handle("/test", handler)

	log.Println("Server is available at http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", mux))
}
