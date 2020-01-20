package main

import (
  "github.com/gin-gonic/gin"
  "github.com/satori/go.uuid"
  "fmt"
)

func main() {
  r := gin.Default()
  r.GET("/", func(c *gin.Context) {
    u1 := uuid.NewV1()
    u4 := uuid.NewV4()

    c.JSON(200, gin.H{
      "uuidv1": fmt.Sprintf("%s", u1),
      "uuidv4": fmt.Sprintf("%s", u4),
    })
  })
  r.Run()
}
