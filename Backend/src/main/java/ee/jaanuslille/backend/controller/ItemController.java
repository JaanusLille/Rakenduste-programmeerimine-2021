package ee.jaanuslille.backend.controller;


import com.fasterxml.jackson.annotation.JsonView;
import ee.jaanuslille.backend.model.Item;
import ee.jaanuslille.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Teeb beaniks, et oleks võimalik kasutada seda klassi
@RestController
// Võimaldab pääseda localhost:3000 aadressil meie API otsatele ligi
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    // Tagastab esemete listi päringu lõpuks
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    // tagastab mittemidagi
    public void postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        // return "Ese edukalt lisatud" + item.getName();
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @PostMapping("edit-item")
    public void editItem(@RequestBody Item item){
        itemService.editItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception{
        return itemService.getOneItem(id);
    }
    // TEHKE ÜHE ESEME KÄTTESAAMISEKS API OTS

    // view-item
    // getOneItem




    // tehke serverile restart
    // localhost:8080/items

    // delete päringu
    // edit päringu
    // "view one item" päringu
    // frontendis kustuta päringu valmis


    // delete
    // edit

    // andmebaas PostgreSQL -- relatsiooniline

    // kategooria osas

}
