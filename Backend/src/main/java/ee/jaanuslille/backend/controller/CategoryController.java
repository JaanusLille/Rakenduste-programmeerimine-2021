package ee.jaanuslille.backend.controller;


import ee.jaanuslille.backend.model.Category;
import ee.jaanuslille.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Ese edukalt lisatud" + category.getName();
    }
    // tehke serverile restart
    // localhost:8080/categories

    // localhost:3000 paistab olevat õigem

    // delete päringu
    // edit päringu
    // "view one category" päringu

    // andmebaas

    // kategooria osas
}
