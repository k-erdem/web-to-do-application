const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
const port = 5000

// middleware
app.use(cors())
app.use(express.json())

// Routes

// create an item

app.post("/todos", async(req,res) => {
    try{
        const {description} = req.body
        const newItem = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        )
        res.json(newItem.rows[0])
    } catch (error) {
        console.error(error)
    }

})

// get all items

app.get("/todos", async(req,res) => {
    try{
        const allItems = await pool.query("SELECT * FROM todo ")
        res.json(allItems.rows)
    } catch (error){
        console.error(error)
    }
})

// get an item

app.get("/todos/:id", async(req,res) => {
    try{
        const {id} = req.params
        const item = await pool.query("SELECT description FROM todo WHERE item_id = $1", [id])
        res.json(item.rows[0])
    } catch (error){
        console.error(error)
    }
})

// update an item

app.put("/todos/:id", async(req,res) => {
    try{
        const {id} = req.params
        const {description} = req.body
        const item = await pool.query("UPDATE todo SET description = $1 WHERE item_id = $2", [description, id])
        res.json("Todo item is updated.")
    } catch (error){
        console.error(error)
    }
})

// delete an item

app.delete("/todos/:id", async(req,res) => {
    try{
        const {id} = req.params
        const item = await pool.query("DELETE FROM todo WHERE item_id = $1", [id])
        res.json("Item was deleted")
    } catch (error){
        console.error(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

