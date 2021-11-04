package ee.jaanuslille.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Category {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private CategoryType category;
    public String getName() {
        return name;
    }
}

enum CategoryType {
    PREMIUM, DELUXE, BASIC
    // Siit võtta kategooriad AddCategoryForm.js-i
}