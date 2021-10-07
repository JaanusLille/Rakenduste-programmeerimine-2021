const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  res.status(200).send(items)
  // SIIN ASUB GET ENDPOINT !!!
}
  // console.log("items:" ,items);

exports.createItem = async (req, res) => {
  const newItem = {
    name: "Table",
    quality: 99,
    unused: true,
    color: "blue"
  }

  const createdItem = new Item(newItem)

  const savedItem = await createdItem.save()
  res.status(200).send(`yay ${savedItem._id}`)
  // SIIN ASUB POST ENDPOINT !!!
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  var flag = 1;
  const item = await Item.findOneAndUpdate({ _id: id },{$inc: {quality: flag}}, req.body);

  if (!item) res.status(404).send("No item with that id found");

  const item2 = await Item.find({ _id: id })
  // Ilma selleta objekt reaalselt suureneb küll, 
  // aga päringu tehes seda ei kuvata

  res.status(200).send(`Successfully updated the following item: \n ${item2}`)

   // SIIN ASUB UPDATE ENDPOINT !!!
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully deleted the following item: \n ${item}`)
  // SIIN ASUB DELETE ENDPOINT !!!
}